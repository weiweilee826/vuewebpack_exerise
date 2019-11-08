// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//把第三方套件往上面放
import axios from 'axios';
import VueAxios from 'vue-axios';
//需要連同css一起載入
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
//自己撰寫
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
//加上withCredentials就能自動存入Cookie
axios.defaults.withCredentials = true;

//啟用原件
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const api = `${process.env.APIPATH}/api/user/check`;
  axios.post(api).then(response => {
    if (response.data.success) {
      next();
    } else {
      next({
        path: '/login',
      })
    }
  });

});