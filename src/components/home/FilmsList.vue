<template>
  <div>
    <FilmItem
      v-for="(film, key) in getFilms"
      :key="key"
      :film="film"
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
  },
  created() {
    this.$store.dispatch("fetchFilms");
  }
};
</script>
