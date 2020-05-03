<template>
  <div id="app">
    <GeneralNav></GeneralNav>
    <router-view></router-view>
  </div>
</template>

<script>
import GeneralNav from "@/components/GeneralNav.vue";
export default {
  name: "App",
  components: {
    GeneralNav
  },
  created() {
    this.$store.dispatch("fetchImgConfig");
  }
};
</script>
