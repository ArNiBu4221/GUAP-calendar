import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParserView from "@/views/ParserView";
import AboutView from "@/views/AboutView";
import CalendarMain from "@/views/CalendarMain";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/parser",
    name: "parser",
    component: ParserView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarMain,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
