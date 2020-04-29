<template>
  <div>
    <sortBy></sortBy>
    <FilmsList></FilmsList>
    <homePagination></homePagination>
  </div>
</template>

<script>
import FilmsList from "@/components/home/FilmsList.vue";
import homePagination from "@/components/home/homePagination.vue";
import sortBy from "@/components/home/sortBy.vue";
export default {
  components: {
    FilmsList,
    homePagination,
    sortBy
  }
};
</script>
