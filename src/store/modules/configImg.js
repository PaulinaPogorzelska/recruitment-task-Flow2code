import axios from "axios";
export default {
  state: {
    configImg: []
  },
  getters: {
    getConfigImg: state => state.configImg
  },
  mutations: {
    SET_IMG_CONFIG(state, configImg) {
      state.configImg = configImg;
    }
  },
  actions: {
    async fetchImgConfig({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/configuration",
        {
          params: {
            api_key: process.env.VUE_APP_API_KEY
          }
        }
      );
      commit("SET_IMG_CONFIG", response.data);
    }
  }
};
