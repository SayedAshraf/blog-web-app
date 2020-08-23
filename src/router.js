import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";
import SingleBlog from "./views/SingleBlog.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog/:id",
      name: "SingleBlog",
      component: SingleBlog,
    },
  ],
});

export default router;
