<template>
  <div class="container card bg-dark container-custom">
    <p v-if="getFilmDetails.title">Title:{{ getFilmDetails.title }}</p>
    <p v-if="setGenres()">Genre: {{ setGenres() }}</p>
    <p v-if="getFilmDetails.overview">{{ getFilmDetails.overview }}</p>
    <p v-if="setCountries()">Country of production: {{ setCountries() }}</p>
    <a :href="'https://www.imdb.com/title/' + getFilmDetails.imdb_id">
      See film on IMDb
    </a>
    <p v-if="getFilmDetails.data">{{ getFilmDetails.data.status_message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFilmDetails"])
  },
  methods: {
    setGenres() {
      const filmGenres = [];
      if (this.getFilmDetails.genres) {
        //protection against error resulting from asynchronicity
        this.getFilmDetails.genres.forEach(el => filmGenres.push(el.name));
      }
      return filmGenres.join(", ");
    },
    setCountries() {
      const filmCountries = [];
      if (this.getFilmDetails.production_countries) {
        this.getFilmDetails.production_countries.forEach(el =>
          filmCountries.push(el.name)
        );
      }
      return filmCountries.join(", ");
    }
  },
  created() {
    this.$store.dispatch("fetchFilmDetails", this.$route.params.filmId);
  }
};
</script>

<style scoped>
.container-custom {
  margin-top: 3vh;
  padding: 20px;
}

p {
  line-height: 30px;
}

a {
  color: gray;
}
a:hover {
  color: yellow;
}
</style>
