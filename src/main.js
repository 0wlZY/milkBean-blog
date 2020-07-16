import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import '@/core/use'
import "@/assets/style/ant-variables.less";
// Antd-ui 全局
// import "ant-design-vue/dist/antd.less";
import Antd from "ant-design-vue";

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
