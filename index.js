import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from "./app.vue";
import routes from './routes/routes';
import store from './store/app';

Vue.use(VueRouter);
Vue.use(Vuex);

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
