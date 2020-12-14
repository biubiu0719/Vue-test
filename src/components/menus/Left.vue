<template>
  <el-container>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      style="width: 230px"
    >
      <el-menu-item index="/homepage">
        <i class="el-icon-location"></i>
        首页
      </el-menu-item>
      <el-submenu index="1" v-if="userType === '采购' || userType === '仓管'">
        <template slot="title">
          <i class="el-icon-plus"></i>
          新机入库
        </template>
        <el-menu-item-group>
          <el-menu-item index="/new_machine/fill_in" v-if="userType === '采购'">
            <i class="el-icon-edit"></i>
            填写采购单
          </el-menu-item>
          <el-menu-item index="/new_machine/check" v-if="userType === '采购'">
            <i class="el-icon-s-order"></i>
            我的采购单
          </el-menu-item>
          <el-menu-item index="/new_machine/handle_purchase_order" v-if="userType === '仓管'">
            <i class="el-icon-edit-outline"></i>
            处理采购单
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" v-if="userType === '采购' || userType === '仓管'">
        <template slot="title">
          <i class="el-icon-plus"></i>
          销售
        </template>
        <el-menu-item-group>
          <el-menu-item index="/new_machine/fill_in" v-if="userType === '采购'">
            <i class="el-icon-edit"></i>
            填写销售单
          </el-menu-item>
          <el-menu-item index="/new_machine/check" v-if="userType === '采购'">
            <i class="el-icon-s-order"></i>
            我的销售单
          </el-menu-item>
          <el-menu-item index="/new_machine/handle_purchase_order" v-if="userType === '仓管'">
            <i class="el-icon-edit-outline"></i>
            处理销售单
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/information">
        <i class="el-icon-user"></i>
        个人信息
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      userType: null, // 判断仓管账号/其他
      // userType: '仓管', // 判断仓管账号/其他
    }
  },
  created() {
    this.userType = sessionStorage.getItem("userType");
  },
};
</script>

<style type="text/css">
/*
	找到html标签、body标签，和挂载的标签
	都给他们统一设置样式
*/
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.el-menu {
  border-right-width: 0;
  text-align: left;
}
</style>