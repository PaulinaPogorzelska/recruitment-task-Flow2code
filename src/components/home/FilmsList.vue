<template>
  <div>
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
  created() {
    this.$store.dispatch("fetchFilms");
  }
};
</script>
