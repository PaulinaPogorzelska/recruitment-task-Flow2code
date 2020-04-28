import Vue from "vue";
import Vuex from "vuex";
import films from "./modules/films.js";
import searchFilms from "./modules/searchFilms.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    films,
    searchFilms
  }
});
