// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "@/home.vue";
// Vue.use(VueRouter);
// const routes = [
//   {
//     path: "/vant",
//     name: "vant",
//     // redirect: "/",
//     // component: (resolve) => require(["@/home.vue"], resolve),
//     component: Home,
//   },
// ];
// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });
// export default router;
import Vue from "vue";
import Router from "vue-router";
// import test from '../views/test.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/test",
      name: "test",
      component: (resolve) => require(["@/views/vant/vant.vue"], resolve),
      // component: test
    },
  ],
});
