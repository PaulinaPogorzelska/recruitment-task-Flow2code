<template>
  <div id="app">
    <generalNav></generalNav>
    <router-view></router-view>
  </div>
</template>

<script>
import generalNav from "@/components/generalNav.vue";
export default {
  name: "App",
  components: {
    generalNav
  }
};
</script>
