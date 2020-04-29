import axios from "axios";
export default {
  state: {
    filmDetails: []
  },
  getters: {
    getFilmDetails: state => state.filmDetails
  },
  mutations: {
    SET_FILM_DETAILS(state, filmDetails) {
      state.filmDetails = filmDetails;
    }
  },
  actions: {
    async fetchFilmDetails({ commit }, id) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/" + id,
        {
          params: {
            api_key: process.env.VUE_APP_API_KEY
          }
        }
      );
      commit("SET_FILM_DETAILS", response.data);
    }
  }
};
