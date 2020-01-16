// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.prototype.$axios = axios;

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      allDate: "我是全局data"
    }
  }
})


axios.defaults.baseURL = 'http://localhost:3000'; // 配置axios请求的地址n
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode=="404") {
        console.log("response.data.resultCode是404")
        // 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //      cookie.del("ticket")
        //      window.location.href='http://login.com'
        return
    }else{
        return response;
    }
  },
error => {
  return Promise.reject(error.response)   // 返回接口返回的错误信息
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
