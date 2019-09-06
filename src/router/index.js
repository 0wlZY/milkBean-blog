import Vue from "vue";
import Router from "vue-router";
import Home from "@/layouts/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          component: () => import("@/views/home/index")
        }
      ]
    }
  ]
});
