<template>
  <div>
    <SortBy></SortBy>
    <FilmsList></FilmsList>
    <HomePagination></HomePagination>
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
