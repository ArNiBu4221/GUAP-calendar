<template>
  <h1 class="title has-text-centered">Тут мог бы быть ваш парсер</h1>
  <div class="column has-text-centered">
    <div @click="getRasp()" class="button is-centered is-primary">
      Получить расписание
    </div>
  </div>
</template>

<script>
/*
    parser imports
*/

/*
    Vue exports
*/
export default {
  name: "ParserView",
};
</script>

<script setup>
const axios = require("axios");
import { raspProcess } from "@/parser_test";

const getRasp = () => {
  axios
    .get("http://localhost:8080/rasp/?g=275")
    .then((response) => {
      console.log("****SUCCSESS***");
      raspProcess(response);
    })
    .catch((e) => {
      console.log("***ERROR****");
      console.log(e);
    });
};
</script>

<style scoped>
@import "../../node_modules/bulma/css/bulma.min.css";
</style>
