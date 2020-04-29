<template>
  <div>
    <select v-model="selected" @change="setSortBy">
      <option value="" selected disabled>Please select sorting</option>
      <option v-for="(option, key) in sortBy" :value="option.value" :key="key">
        {{ option.name }}
      </option>
    </select>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: [
        { name: "Popularity Descending", value: "popularity.desc" },
        { name: "Popularity Ascending", value: "popularity.asc" },
        { name: "Orginal title (A-Z)", value: "orginal_title.desc" },
        { name: "Orginal title (Z-A)", value: "original_title.asc" }
      ],
      selected: ""
    };
  },
  methods: {
    setSortBy() {
      this.$store.commit("SET_SORT_BY", this.selected);
      this.$store.dispatch("fetchFilms");
    }
  }
};
</script>
