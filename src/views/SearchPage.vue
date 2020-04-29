<template>
  <div>
    <SearchFilmList></SearchFilmList>
    <searchPagination></searchPagination>
  </div>
</template>

<script>
import SearchFilmList from "@/components/searchPage/SearchFilmList.vue";
import searchPagination from "@/components/searchPage/searchPagination.vue";
export default {
  components: {
    SearchFilmList,
    searchPagination
  }
};
</script>
