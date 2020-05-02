<template>
  <div class="homeContent">
    <SortBy class="sort"></SortBy>
    <div>
      <FilmsList></FilmsList>
      <HomePagination></HomePagination>
    </div>
  </div>
</template>

<script>
import FilmsList from "@/components/home/FilmsList.vue";
import HomePagination from "@/components/home/HomePagination.vue";
import SortBy from "@/components/home/SortBy.vue";
export default {
  components: {
    FilmsList,
    HomePagination,
    SortBy
  }
};
</script>

<style scoped>
.homeContent {
  display: flex;
  margin: 30px;
}
.sort {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .homeContent {
    flex-direction: column;
  }
}
</style>
