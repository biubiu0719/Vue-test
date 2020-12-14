<template>
<body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <div class="login_title">账号注册</div>
    

    

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
import Axios from "axios";

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
       
        let self = this;
        this.buttonDisabled = true;
        Axios
          .post(`${this.$root.url}/hhh/add`, {
            
          })
          .then((data) => {
            if (data.data.status==2000) {
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