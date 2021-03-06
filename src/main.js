import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import VueClipboard from 'vue-clipboard2';
import commonJs from './assets/js/common.js'
Vue.use(VueClipboard);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})