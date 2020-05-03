<template>
  <div class="row justify-content-around">
    <h3 v-if="getFilms.length === 0">Let's find a movie - enter your title</h3>
    <FilmItem
      v-for="(film, key) in getFilms"
      :key="key"
      :film="film"
      class="col-6 col-lg-4 col-xl-3"
    ></FilmItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilmItem from "../FilmItem.vue";
export default {
  components: {
    FilmItem
  },
  computed: {
    ...mapGetters(["getFilms"])
  }
};
</script>
