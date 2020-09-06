import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/shop",
      component: Shop,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

export default router;
