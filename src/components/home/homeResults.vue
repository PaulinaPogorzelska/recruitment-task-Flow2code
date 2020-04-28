<template>
  <div>
    <h1>Home view</h1>
    <div v-for="(film, key) in getFilms" :key="key">
      {{ film.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchFilms");
  },
  computed: {
    ...mapGetters(["getFilms"])
  }
};
</script>
