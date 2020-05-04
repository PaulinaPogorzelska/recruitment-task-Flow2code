<template>
  <div>
    <button
      @click="prevPage"
      class="btn btn-secondary btn-outline-dark ml-2"
      v-if="getFilms.length != 0"
    >
      Previous
    </button>
    <button
      @click="nextPage"
      class="btn btn-secondary btn-outline-dark ml-2"
      v-if="getFilms.length != 0"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMaxPageNumber", "getCurrentPageNumber", "getFilms"])
  },
  methods: {
    prevPage() {
      if (this.getCurrentPageNumber > 1) {
        this.$store.commit("DECREMENT_PAGE");
        if (this.$router.currentRoute.name === "home") {
          this.$store.dispatch("fetchFilms");
        } else {
          this.$store.dispatch("fetchSearchedFilms");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    nextPage() {
      if (this.getCurrentPageNumber < this.getMaxPageNumber) {
        this.$store.commit("INCREMENT_PAGE");
        if (this.$router.currentRoute.name === "home") {
          this.$store.dispatch("fetchFilms");
        } else {
          this.$store.dispatch("fetchSearchedFilms");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }
};
</script>
