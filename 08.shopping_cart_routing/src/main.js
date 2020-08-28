import Vue from "vue";
import App from "./app/App.vue";
import store from "./app/store";
import router from "./app/router";
// import App from "./app-complete/App.vue";
// import router from "./app-complete/router";
// import store from "./app-complete/store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
