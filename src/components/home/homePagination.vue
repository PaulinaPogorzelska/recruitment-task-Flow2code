<template>
  <div>
    <button @click="prevPage">Prev</button>
    <button @click="nextPage">Next</button>
    <p>{{ getCurrentPageNumber }}</p>
    <p>{{ getMaxPageNumber }}</p>
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
    },
    nextPage() {
      if (this.getCurrentPageNumber < this.getMaxPageNumber) {
        this.$store.commit("INCREMENT_PAGE");
        this.$store.dispatch("fetchFilms");
      }
    }
  }
};
</script>
