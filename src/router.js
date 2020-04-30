import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SearchPage from "./views/SearchPage.vue";
import FilmDetails from "./views/FilmDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: SearchPage
    },
    {
      path: "/film/:filmId",
      name: "film",
      component: FilmDetails
    }
  ]
});
