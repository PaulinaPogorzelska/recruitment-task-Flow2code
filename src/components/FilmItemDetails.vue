<template>
  <div>
    <p>{{ getFilmDetails.title }}</p>
    <p>{{ setGenres() }}</p>
    <p>{{ getFilmDetails.overview }}</p>
    <p>{{ setCountries() }}</p>
    <a :href="'https://www.imdb.com/title/' + getFilmDetails.imdb_id">
      See film on IMDb
    </a>
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
