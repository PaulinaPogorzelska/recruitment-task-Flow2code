<template>
  <div>
    <homeResults></homeResults>
    <homePagination></homePagination>
  </div>
</template>

<script>
import homeResults from "@/components/home/homeResults.vue";
import homePagination from "@/components/home/homePagination.vue";
export default {
  components: {
    homeResults,
    homePagination
  }
};
</script>
