<template>
  <div id="root" class="red">
    App组1111123
    <p style="color:blue">{{ msg }}</p>
    <Home></Home>
    <div class="test-viewport">测试转换</div>
    <router-view />
  </div>
</template>
<script>
import Home from "@/home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      msg: "vue zero config12",
    };
  },
  methods: {
    test() {},
  },
  created() {
    // 测试ie 兼容性
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("next");
      }, 1000);
    }).then((value) => {
      console.log(value);
    });
    // 测试eslint
    console.log(22);
  },
};
</script>
<style scoped>
.red {
  color: red;
}
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
</style>
