import Vue from "vue";
import Vuex from "vuex";
import films from "./modules/films.js";
import filmDetails from "./modules/filmDetails.js";
import configImg from "./modules/configImg.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    films,
    filmDetails,
    configImg
  }
});
