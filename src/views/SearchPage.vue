<template>
  <div>
    <searchResults></searchResults>
    <searchPagination></searchPagination>
  </div>
</template>

<script>
import searchResults from "@/components/searchPage/searchResults.vue";
import searchPagination from "@/components/searchPage/searchPagination.vue";
export default {
  components: {
    searchResults,
    searchPagination
  }
};
</script>
