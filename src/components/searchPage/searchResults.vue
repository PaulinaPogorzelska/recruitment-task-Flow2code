<template>
  <div>
    <h1>Search view</h1>
    <div v-for="(film, key) in getFilms" :key="key">
      {{ film.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFilms"])
  }
};
</script>
