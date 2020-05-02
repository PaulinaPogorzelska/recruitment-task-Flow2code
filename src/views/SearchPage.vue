<template>
  <div class="container container-custom">
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

<style scoped>
.container-custom {
  margin: 30px auto;
}
</style>
