import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParserView from "@/views/ParserView";
import AboutView from "@/views/AboutView";
import TrelloView from "@/views/TrelloView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/todo",
    name: "todo",
    component: AboutView,
  },
  {
    path: "/parser",
    name: "parser",
    component: ParserView,
  },
  {
    path: "/asTrello",
    name: "trello",
    component: TrelloView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
