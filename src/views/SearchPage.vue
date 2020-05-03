<template>
  <div class="container container-custom">
    <SearchFilmList></SearchFilmList>
    <Pagination></Pagination>
  </div>
</template>

<script>
import SearchFilmList from "@/components/searchPage/SearchFilmList.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    SearchFilmList,
    Pagination
  }
};
</script>

<style scoped>
.container-custom {
  margin: 30px auto;
}
</style>
