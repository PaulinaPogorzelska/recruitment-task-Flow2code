import axios from "axios";
export default {
  state: {
    films: [],
    filmsFilter: "",
    maxPageNumber: "",
    currentPageNumber: 1
  },
  getters: {
    getFilms: state => state.films,
    getMaxPageNumber: state => state.maxPageNumber,
    getCurrentPageNumber: state => state.currentPageNumber
  },
  mutations: {
    SET_FILMS(state, films) {
      state.films = films;
    },
    SET_FILMS_FILTER(state, filter) {
      state.filmsFilter = filter;
    },
    SET_MAX_PAGE_NUMBER(state, maxPageNumber) {
      state.maxPageNumber = maxPageNumber;
    },
    INCREMENT_PAGE(state) {
      state.currentPageNumber++;
    },
    DECREMENT_PAGE(state) {
      state.currentPageNumber--;
    },
    RESET_FILM_LIST(state) {
      state.currentPageNumber = 1;
      state.films = [];
    }
  },
  actions: {
    async fetchFilms({ commit, state }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            page: state.currentPageNumber,
            api_key: process.env.VUE_APP_API_KEY,
            sort_by: "popularity.desc"
          }
        }
      );
      commit("SET_MAX_PAGE_NUMBER", response.data.total_pages);
      commit("SET_FILMS", response.data.results);
    },
    async fetchSearchedFilms({ commit, state }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            page: state.currentPageNumber,
            api_key: process.env.VUE_APP_API_KEY,
            query: state.filmsFilter
          }
        }
      );
      commit("SET_MAX_PAGE_NUMBER", response.data.total_pages);
      commit("SET_FILMS", response.data.results);
    }
  }
};
