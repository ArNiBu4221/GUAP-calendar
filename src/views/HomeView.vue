<template>
  <div class="home">
    <!--    <img src="../assets/goodCode.jpg" alt="" />-->
    <p class="title is-primary is-vcentered pt-6 is-size-1">
      Приветствую вас ГУАПчичи!
    </p>
    <div class="columns">
      <div
        id="test"
        v-for="i in 10"
        :key="i"
        class="column has-background-grey"
      >
        1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 0 auto;
}
#test {
  margin: 0 0.5%;
}
</style>
