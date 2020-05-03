<template>
  <div class="card card-custom">
    <h2 class="text-center card-header">Sort Results By</h2>
    <select
      v-model="selected"
      @change="setSortBy"
      class="custom-select bg-secondary m-auto select-custom"
    >
      <option selected disabled>Please select sorting</option>
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
  height: 140px;
  background-color: #333;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  padding: 8px 10px;
}

.select-custom {
  width: 94%;
}

@media (max-width: 768px) {
  .card-custom {
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
