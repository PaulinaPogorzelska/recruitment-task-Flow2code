<template>
  <div>
    <sortBy></sortBy>
    <homeResults></homeResults>
    <homePagination></homePagination>
  </div>
</template>

<script>
import homeResults from "@/components/home/homeResults.vue";
import homePagination from "@/components/home/homePagination.vue";
import sortBy from "@/components/home/sortBy.vue";
export default {
  components: {
    homeResults,
    homePagination,
    sortBy
  }
};
</script>
