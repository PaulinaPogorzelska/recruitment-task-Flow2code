<template>
  <nav class="navbar navbar-expand-sm sticky-top navbar-dark navbar-color">
    <router-link to="/"
      ><img
        src="@/assets/cinema.png"
        class="navbar-brand"
        @click="resetFilmList"
    /></router-link>
    <button
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-4" @click="resetFilmList">
          <router-link to="/" class="router-link">
            Home
          </router-link>
        </li>
        <li class="nav-item form-inline">
          <input
            class="form-control form-control-custom "
            type="search"
            placeholder="Let's find a movie"
            v-model="searchedPhrase"
            @keyup.enter="
              setUpSearchedPhrase();
              routerLink();
            "
          />
          <router-link to="/search">
            <i
              class="fas fa-search router-link ml-3 mr-3"
              @click="setUpSearchedPhrase"
            ></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
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
      this.$store.commit("RESET_FILM_LIST", this.searchedPhrase);
      this.$store.commit("SET_FILMS_FILTER", this.searchedPhrase);
      if (this.searchedPhrase) {
        this.$store.dispatch("fetchSearchedFilms");
      }
      this.searchedPhrase = "";
    },
    routerLink() {
      this.$router.push("search");
    },
    resetFilmList() {
      this.$store.commit("RESET_FILM_LIST");
      this.$store.dispatch("fetchFilms");
    }
  }
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
.navbar-color {
  background-color: #333;
}
.form-control-custom {
  background-color: #eee;
  width: 80%;
}
.router-link {
  color: white;
  text-decoration: none;
  line-height: 38px;
}
.router-link:hover {
  color: yellow;
}
</style>
