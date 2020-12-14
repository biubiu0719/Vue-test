<template>
  <div id="app">
    <!-- 利用v-if和route.meta实现导航栏和侧边栏的可见 -->
    <el-container v-if="$route.meta.keepAlive">
      <el-aside width="230px">
        <!-- 侧边栏 -->
        <keep-alive>
          <NavMenuLeft></NavMenuLeft>
        </keep-alive>
      </el-aside>

      <el-container>
        <el-main>
          <!-- Body -->
          <router-view v-if="isRouterAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 登录/注册页 -->
    <router-view class="loginpage" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import header from './components/menus/Head.vue'
import left from './components/menus/Left.vue'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  components: {
    NavMenuLeft: left,
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload (){
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255,255,255,0.7);
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.el-header {
  margin-top: 40px;
}
.menu_title {
  text-align: left;
  font-size: 25px;
  font-weight: 100;
  margin-top: -20px;
  margin-bottom: 15px;
}
/* .el-aside {
  display: block;
  position: relative;
  overflow-y: scroll;
} */
</style>
