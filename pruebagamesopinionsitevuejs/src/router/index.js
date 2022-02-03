import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Admin from "@/views/Admin";
import Opinions from "@/views/Opinions";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    alias: ["/home", "/inicio", "/portada"],
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    alias: ["/ad"],
    component: Admin,
  },
  {
    path: "/opinions",
    name: "Opinions",
    alias: ["/comments"],
    component: Opinions,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
