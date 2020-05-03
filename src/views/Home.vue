<template>
  <div class="homeContent">
    <SortBy class="sort"></SortBy>
    <div>
      <FilmsList></FilmsList>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import FilmsList from "@/components/home/FilmsList.vue";
import Pagination from "@/components/Pagination.vue";
import SortBy from "@/components/home/SortBy.vue";
export default {
  components: {
    FilmsList,
    Pagination,
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
    margin: 10px;
  }
}
</style>
