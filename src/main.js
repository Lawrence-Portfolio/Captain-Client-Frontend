import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import element_ui from './plugins/element_ui'
import vulidate from './plugins/vuelidate'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  element_ui,
  vulidate,
  render: h => h(App)
}).$mount("#app");
