<template>
  <p>aboba</p>
  <ul>
    <li v-for="day in daysCol" :key="day.id">
      <span>{{ day.dayOfWeek }}</span>
    </li>
  </ul>
</template>

<script>
//import { daysRef } from "@/main";
import { useCollection } from "vuefire";
import { db } from "@/main";
import { collection } from "firebase/firestore";

export default {
  name: "HelloWorld",
  data() {
    return {
      daysCol: [],
    };
  },
  firestore() {
    return {
      daysCol: useCollection(
        collection(db, "Users/User1/Calendars/Calendar1/January")
      ),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
