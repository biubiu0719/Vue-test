<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <div class="login_title">系统登录</div>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" placeholder="请输入账号" style="width: 320px" suffix-icon="el-icon-user"></el-input>
      </el-form-item>
 
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder="请输入密码" style="width: 320px" suffix-icon="el-icon-lock" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-select v-model="loginForm.company" placeholder="请选择公司" clearable style="width: 320px">
          <el-option label="数据" value="sj"></el-option>
          <el-option label="天棣" value="td"></el-option>
        </el-select>
      </el-form-item>
 
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 320px;background: #505458;border: none" v-on:click="login" :loading="btnLoading">确认登录</el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 320px;background: #505458;border: none" v-on:click="register">转到注册页面</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>
 
 
<script>
import Axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
          username: '',
          password: '',
          company: ''
      },
      btnLoading: false,
    }
  },
  methods: {
    login() {
      this.btnLoading = true;
      if(this.loginForm.username == '') {
        this.$message({
          message: '请输入账号',
          type: 'warning'
        });
        this.btnLoading = false;
        return;
      }
      else if(this.loginForm.password == '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        this.btnLoading = false;
        return;
      }
      else if(this.loginForm.company == '') {
        this.$message({
          message: '请选择公司',
          type: 'warning'
        });
        this.btnLoading = false;
        return;
      }
      else {
        let self = this;
        Axios
          .post(`${this.$root.url}/auth/login`, {
            "username": this.loginForm.username,
            "password": this.loginForm.password,
            "company": this.loginForm.company
          })
          .then(function (data) {
          if(data.data.accessToken == null) {
            self.$message.error('账号或密码错误');
            self.btnLoading = false;
          }
          else {
            self.btnLoading = false;
            self.$message({
              message: '身份验证成功',
              type: 'success'
            })
            sessionStorage.setItem("TOKEN", data.data.accessToken);
            sessionStorage.setItem("username", self.loginForm.username);
            sessionStorage.setItem("company", self.loginForm.company);
            sessionStorage.setItem("url", self.$root.url);
            if (self.loginForm.company == "sj") sessionStorage.setItem("companyUrl", "Sj");
            else sessionStorage.setItem("companyUrl", "Td");
            sessionStorage.setItem("TOKEN", data.data.accessToken);
            self.$router.replace({path: '/homepage'});
          }
          })
          .catch(err => {
            self.btnLoading = false;
            self.$message.error(err)
            console.log(err);
          })
      }
    },
    // login(){
    //   Axios.post(`${this.$root.url}/hhh/add`, {
            
    //       },
    //       {
    //       headers: {
    //         token: sessionStorage.getItem("TOKEN")
    //       }
    //     }
    //       )
    //       .then(data => {
    //       if(data.data.status == 2000) {
    //         self.$message.error('连接成功');
    //         self.btnLoading = false;
    //       }
    //       else {
    //         self.btnLoading = false;
    //         self.$message({
    //           message: '身份验证成功',
    //           type: 'success'
    //         })
    //         sessionStorage.setItem("TOKEN", data.data.accessToken);
    //         sessionStorage.setItem("username", self.loginForm.username);
    //         sessionStorage.setItem("company", self.loginForm.company);
    //         sessionStorage.setItem("url", self.$root.url);
    //         if (self.loginForm.company == "sj") sessionStorage.setItem("companyUrl", "Sj");
    //         else sessionStorage.setItem("companyUrl", "Td");
    //         sessionStorage.setItem("TOKEN", data.data.accessToken);
    //         self.$router.replace({path: '/homepage'});
    //       }
    //       })
    //       .catch(err => {
    //         self.btnLoading = false;
    //         self.$message.error(err)
    //         console.log(err);
    //       })
      
    // },

    register() {
      this.$router.push({path: '/test'});
    }

  }
}
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
  body{
    margin: 0px;
    padding: 0;
  }
 
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    margin-left:auto !important;
  }
 
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-size: 35px;
    font-weight: 200;
  }
 
 
</style>