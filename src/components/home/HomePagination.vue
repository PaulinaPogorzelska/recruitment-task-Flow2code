<template>
  <div>
    <button @click="prevPage" class="btn btn-secondary btn-outline-dark ml-2">
      Previous
    </button>
    <button @click="nextPage" class="btn btn-secondary btn-outline-dark ml-2">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMaxPageNumber", "getCurrentPageNumber"])
  },
  methods: {
    prevPage() {
      if (this.getCurrentPageNumber > 1) {
        this.$store.commit("DECREMENT_PAGE");
        this.$store.dispatch("fetchFilms");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    nextPage() {
      if (this.getCurrentPageNumber < this.getMaxPageNumber) {
        this.$store.commit("INCREMENT_PAGE");
        this.$store.dispatch("fetchFilms");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>
