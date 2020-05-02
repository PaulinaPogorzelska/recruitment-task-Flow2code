<template>
  <div class="container">
    <div class="row justify-content-around">
      <FilmItem
        v-for="(film, key) in getFilms"
        :key="key"
        :film="film"
        class="col-6 col-lg-4 col-xl-3"
      ></FilmItem>
    </div>
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
  },
  methods: {
    checkDetails(id) {
      this.$store.dispatch("fetchFilmDetails", id);
    }
  }
};
</script>
