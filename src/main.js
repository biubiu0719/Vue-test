import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../router/index.js'
import store from './store'
import VueCookie from 'vue-cookie'
import XLSX from 'xlsx'
import { Notification, Message } from 'element-ui'
import globalVariable from './api/globle.js'
import NewMessage from './components/common/index.js'
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

Vue.prototype.GLOBAL = globalVariable
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.use(XLSX)
Vue.use(NewMessage)



// 使用Vue全局前置守卫进行权限管理
router.beforeEach((to, from, next) => {
  let self = this;
  if (to.path != '/login' && to.path != '/register'&& to.path != '/test') {
    if (from.path == '/login' && to.path != '/register'&& to.path != '/test') {
      // 登录成功时的信息获取
      Axios.post(
        `${sessionStorage.getItem("url")}/user/info1`,
        {
          "username": sessionStorage.getItem("username"),
          "company": sessionStorage.getItem("company")
        },
        {
          headers: {
            "token": sessionStorage.getItem("TOKEN")
          }
        })
        .then(data => {
          sessionStorage.setItem("userId", data.data.userId);
          sessionStorage.setItem("nickName", data.data.nickName);
          sessionStorage.setItem("userType", data.data.userType);
          sessionStorage.setItem("email", data.data.email);
          setTimeout(next(), 2000);
          Message.success('登录成功！')
        })
    }
    else if (sessionStorage.getItem("TOKEN") == null) {
      // 未登录
      next('/login')
      Message.warning('当前未登录或身份验证已过期！');
      document.title = '登录';
    }
    else {
      next();
      document.title = to.meta.title;
    }
  }
  else {
    if (sessionStorage.getItem("TOKEN") != null) {
      // 已登录
      next('/homepage')
      Message.warning('已为登录状态，自动返回首页！');
      document.title = to.meta.title;
    }
    else {
      next();
      document.title = to.meta.title;
    }
  }
});

// 对TOKEN过期的处理
Axios.interceptors.response.use(response => {
  if (response) {
    switch (response.data.code) {
      case 403: //与后台约定登录失效的返回码,根据实际情况处理
        sessionStorage.removeItem("company")
        sessionStorage.removeItem("TOKEN")
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("nickName")
        sessionStorage.removeItem("userType")
        sessionStorage.removeItem("email")
        router.replace({ path: "/login" });
        Message.warning('身份验证过期，自动退出！');
    }
  }
  return response;
}, error => {
  return Promise.reject(error.response.data) //返回接口返回的错误信息
})

new Vue({
  el: '#app',
  router,
  store,
  data() {
    return {
      // global var
         url: "http://127.0.0.1:8000/biubiu", /* 后端调试 */
      //url: "http://120.76.208.180:8080/warehouse" /* 服务器2 */
      // url: "http://47.96.132.244:8088/warehouse", /* 服务器 */
      // url: "http://120.76.208.180:8086/warehouse", /* 服务器2 */
      // url: "", /* 调试 */
    };
  },
  render: h => h(App),
}).$mount('#app')
