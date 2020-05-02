<template>
  <div class="card card-custom p-2">
    <h2 class="text-center">Sort Results By</h2>
    <select
      v-model="selected"
      @change="setSortBy"
      class="custom-select bg-secondary"
    >
      <option value="" selected disabled>Please select sorting</option>
      <option
        v-for="(option, key) in sortBy"
        :value="option.value"
        :key="key"
        >{{ option.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: [
        { name: "Popularity Descending", value: "popularity.desc" },
        { name: "Popularity Ascending", value: "popularity.asc" },
        { name: "Orginal title (A-Z)", value: "original_title.desc" },
        { name: "Orginal title (Z-A)", value: "original_title.asc" }
      ],
      selected: ""
    };
  },
  methods: {
    setSortBy() {
      this.$store.commit("SET_SORT_BY", this.selected);
      this.$store.commit("RESET_ONLY_PAGINATION");
      this.$store.dispatch("fetchFilms");
    }
  }
};
</script>

<style scoped>
.card-custom {
  width: 250px;
  height: 150px;
  background-color: #333;
  margin: 0 auto;
}
</style>
