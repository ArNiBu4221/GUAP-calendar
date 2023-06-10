<template>
  <div class="home">
    <!--    <img src="../assets/goodCode.jpg" alt="" />-->
    <p class="title is-primary is-vcentered pt-6 is-size-1">
      Приветствую вас ГУАПчичи!
    </p>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Card header</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon has-text-black">
            <svg-icon type="mdi" :path="plusIcon"></svg-icon>
          </span>
        </button>
      </header>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPlusBoxOutline } from "@mdi/js";

const plusIcon = mdiPlusBoxOutline;
</script>
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
