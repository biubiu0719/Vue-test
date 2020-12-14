<template>
<body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <div class="login_title">账号注册</div>
    <el-form-item>
      <el-input
        type="text"
        v-model="loginForm.username"
        placeholder="请输入账号"
        style="width: 320px"
        suffix-icon="el-icon-user"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="请输入密码"
        style="width: 320px"
        suffix-icon="el-icon-lock"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-input
        type="text"
        v-model="loginForm.nickname"
        placeholder="请输入昵称"
        style="width: 320px"
        suffix-icon="el-icon-user-solid"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-select v-model="loginForm.company" placeholder="请选择公司" clearable style="width: 320px">
        <el-option label="数据" value="sj"></el-option>
        <el-option label="天棣" value="td"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-input
        type="text"
        v-model="loginForm.sign"
        placeholder="请输入邀请码"
        style="width: 320px"
        suffix-icon="el-icon-key"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-input
        type="text"
        v-model="loginForm.email"
        placeholder="请输入邮箱"
        style="width: 320px"
        suffix-icon="el-icon-message"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-select v-model="loginForm.type" placeholder="请选择账号分组" clearable style="width: 320px">
        <el-option label="采购" value="采购"></el-option>
        <el-option label="销售" value="销售"></el-option>
        <el-option label="仓管" value="仓管"></el-option>
        <el-option label="项目组" value="项目组"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 320px;background: #505458;border: none"
        v-on:click="register"
        :disabled="buttonDisabled"
      >确认注册</el-button>
    </el-form-item>

    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 320px;background: #505458;border: none"
        v-on:click="login"
      >返回登录页面</el-button>
    </el-form-item>
  </el-form>
</body>
</template>
 
 
<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        nickname: "",
        company: "",
        sign: "",
        email: "",
        type: "",
      },
      responseResult: [],
      buttonDisabled: false
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    register() {
      console.log(this.loginForm);
      if (this.loginForm.username == "") {
        this.$message({
          message: "请输入账号",
          type: "warning",
        });
        return;
      } else if (this.loginForm.password == "") {
        this.$message({
          message: "请输入密码",
          type: "warning",
        });
        return;
      } else if (this.loginForm.nickname == "") {
        this.$message({
          message: "请输入昵称",
          type: "warning",
        });
        return;
      } else if (this.loginForm.company == "") {
        this.$message({
          message: "请选择公司",
          type: "warning",
        });
        return;
      } else if (this.loginForm.sign == "") {
        this.$message({
          message: "请输入邀请码",
          type: "warning",
        });
        return;
      } else if (this.loginForm.email == "") {
        this.$message({
          message: "请输入邮箱",
          type: "warning",
        });
        return;
      } else if (this.loginForm.type == "") {
        this.$message({
          message: "请选择账号分组",
          type: "warning",
        });
        return;
      } else {
        let self = this;
        this.buttonDisabled = true;
        axios
          .post(`${this.$root.url}/user/addUser`, {
            username: this.loginForm.username,
            password: this.loginForm.password,
            nickname: this.loginForm.nickname,
            company: this.loginForm.company,
            sign: this.loginForm.sign,
            email: this.loginForm.email,
            type: this.loginForm.type,
          })
          .then((data) => {
            if (data.data.result) {
              self.$message({
                message: "注册成功",
                type: "success",
              });
              self.$router.replace({ path: "/login" });
            } else {
              self.$message.error("注册失败");
            }
            self.buttonDisabled = false;
          })
          .catch((err) => {
            self.$message.error(err);
            console.log(err);
            self.buttonDisabled = false;
          });
      }
    },
  },
};
</script>
 
<style>
#poster {
  /* background:url("../assets/eva.jpg") no-repeat; */
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
  padding: 0;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 550px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  margin-left: auto !important;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
  font-size: 35px;
  font-weight: 200;
}
</style>