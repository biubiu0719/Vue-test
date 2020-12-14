import Vue from 'vue'
import Router from 'vue-router'
/* 基础页面 */
import Login from '../src/components/pages/Login.vue'
import Register from '../src/components/pages/Register.vue'
import Test from '../src/components/pages/test.vue'
import Information from '../src/components/pages/Information.vue'
import Homepage from '../src/components/pages/Homepage.vue'
/* 新机入库 */
import NewMachineFillIn from '../src/components/pages/new_machine/FillIn.vue'
import NewMachineCheck from '../src/components/pages/new_machine/Check.vue'
import HandlePurchaseOrder from '../src/components/pages/new_machine/HandlePurchaseOrder.vue'


Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        keepAlive: false,
        title: 'test'
      }
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
      meta: {
        keepAlive: false,
        title: '登录'
      }
    },
    {
      path: '/register',
      name: '注册',
      component: Register,
      meta: {
        keepAlive: false,
        title: '注册'
      }
    },
    {
      path: '/information',
      name: '个人信息',
      component: Information,
      meta: {
        keepAlive: true,
        title: '主页'
      }
    },
    {
      path: '/homepage',
      name: '主页',
      component: Homepage,
      meta: {
        keepAlive: true,
        title: '主页'
      }
    },
    {
      path: '/new_machine/fill_in',
      name: '新机入库-填写采购单',
      component: NewMachineFillIn,
      meta: {
        keepAlive: true,
        title: '新机入库-填写采购单'
      }
    },
    {
      path: '/new_machine/check',
      name: '新机入库-我的采购单',
      component: NewMachineCheck,
      meta: {
        keepAlive: true,
        title: '新机入库-我的采购单'
      }
    },
    {
      path: '/new_machine/handle_purchase_order',
      name: '新机入库-处理采购单',
      component: HandlePurchaseOrder,
      meta: {
        keepAlive: true,
        title: '新机入库-处理采购单'
      }
    },
    
    
    
    
    {
      path: '*',
      redirect: '/homepage'
    }
  ]
})