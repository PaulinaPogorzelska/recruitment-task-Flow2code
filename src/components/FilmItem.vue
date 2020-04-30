<template>
  <div @click="$router.push('/film/' + film.id)">
    <p>{{ film.title }}</p>
    <img :src="setPoster()" />
    <p>{{ film.popularity }}</p>
    <p>{{ film.vote_count }}</p>
  </div>
</template>

<script>
export default {
  props: ["film"],
  data() {
    return {
      posterPath: ""
    };
  },
  methods: {
    setPoster() {
      if (this.film.poster_path) {
        return "https://image.tmdb.org/t/p/w200" + this.film.poster_path;
      } else {
        return require("../assets/emptyPoster.png");
      }
    }
  }
};
</script>
