<template>
  <div>
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <new-message></new-message>
        </el-col>
      </el-row>
    </div>
    
    <el-form style="width: 400px">
      <el-form-item label="用户昵称"> {{ nickname }}</el-form-item>
      <el-form-item label="用户类型"> {{ userType }}</el-form-item>
      <el-form-item label="所属公司"> {{ myCompany() }}</el-form-item>
      <el-form-item label="用户邮箱"> {{ email }}</el-form-item>
    </el-form>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      company: "undefined",
      nickname: "undefined",
      userType: "undefined",
      email: "undefined",
    };
  },
  beforeMount() {
    this.company = sessionStorage.getItem("company");
    this.nickname = sessionStorage.getItem("nickName");
    this.userType = sessionStorage.getItem("userType");
    this.email = sessionStorage.getItem("email");
  },
  methods: {
    myCompany() {
      if (this.company == 'sj') {
        return '数据'
      }
      else {
        return '天棣'
      }
    }
  }
}
</script>

<style>
.el-icon-arrow-down {
  font-size: 12px;
}
.head {
  margin-bottom: 30px;
}
.el-form {
  margin-left: 30px;
}
</style>