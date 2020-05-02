<template>
  <div class="card-deck card-columns">
    <div
      @click="$router.push('/film/' + film.id)"
      class="card bg-dark text-white card-custom"
    >
      <img :src="setPoster()" class="card-img-top" />
      <h3 class="bg-dark">{{ film.title }}</h3>
      <p v-if="originalTitle()" class="bg-dark">
        {{ "(" + this.film.original_title + ")" }}
      </p>
      <p class="bg-dark">Popularity: {{ film.popularity }}</p>
      <p class="bg-dark">Votes: {{ film.vote_count }}</p>
    </div>
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
        return "https://image.tmdb.org/t/p/w500" + this.film.poster_path;
      } else {
        return require("../assets/placeholder.png");
      }
    },
    originalTitle() {
      return this.film.title != this.film.original_title;
    }
  }
};
</script>

<style scoped>
h3 {
  font-size: 17px;
  text-align: center;
  font-weight: 600;
  margin: 0;
}

p {
  line-height: 20px;
  text-align: center;
  margin: 0;
  padding: 2px;
}

.card-custom:hover {
  box-shadow: 0 0 20px 1px #ffff4d;
  border-color: #ffff80;
  cursor: pointer;
}
</style>
