<template>
  <div>
    <SearchFilmList></SearchFilmList>
    <SearchPagination></SearchPagination>
  </div>
</template>

<script>
import SearchFilmList from "@/components/searchPage/SearchFilmList.vue";
import SearchPagination from "@/components/searchPage/SearchPagination.vue";
export default {
  components: {
    SearchFilmList,
    SearchPagination
  }
};
</script>
