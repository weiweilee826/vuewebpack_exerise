// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//把第三方套件往上面放
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
//自己撰寫
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
//加上withCredentials就能自動存入Cookie
axios.defaults.withCredentials = true;

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

  const api = `${process.env.APIPATH}api/user/check`;
  axios.post(api).then(response => {
    if (response.data.success) {
      next();
    }else{
      next({
        path:'/login',
      })
    }
  });

});