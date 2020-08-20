// import bar from "./bar";
// bar();
import Vue from "vue";
import router from "./router";
import App from "./App.vue";

console.log(router, "router");
import number from "./testhmr";
// vant ui框架
// https://youzan.github.io/vant/#/zh-CN/button
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
number();
// 测试热更新
console.log(module.hot, "module.hot");
new Vue({
  el: "#root",
  router,
  render: (h) => h(App),
});
