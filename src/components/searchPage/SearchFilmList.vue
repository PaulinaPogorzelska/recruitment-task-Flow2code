<template>
  <div class="row justify-content-around">
    <p
      v-if="getFilms.length === 0"
      class="card bg-dark border-danger text-danger p-4"
    >
      Let's find a movie - enter your title
    </p>
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
