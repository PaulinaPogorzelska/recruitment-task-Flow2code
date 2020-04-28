<template>
  <div>
    <router-link to="/">
      <button @click="resetFilmList">Home</button>
    </router-link>
    <input type="text" v-model="searchedPhrase" />
    <router-link to="/search">
      <i class="fas fa-search" @click="setUpSearchedPhrase"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchedPhrase: ""
    };
  },
  methods: {
    setUpSearchedPhrase() {
      this.$store.commit("SET_FILMS_FILTER", this.searchedPhrase);
      if (this.searchedPhrase) {
        this.$store.dispatch("fetchSearchedFilms");
      }
      this.searchedPhrase = "";
      this.$store.commit("RESET_FILM_LIST", this.searchedPhrase);
    },
    resetFilmList() {
      this.$store.commit("RESET_FILM_LIST", this.searchedPhrase);
    }
  }
};
</script>
