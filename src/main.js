import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/router";
import NowUiKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
