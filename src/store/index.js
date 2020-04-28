import Vue from "vue";
import Vuex from "vuex";
import films from "./modules/films.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    films
  }
});
