<template>
  <div class="home">
    <img src="../assets/goodCode.jpg" alt="" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 0 auto;
}
</style>
