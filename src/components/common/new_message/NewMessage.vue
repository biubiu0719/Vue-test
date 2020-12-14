<template>
  <div>
    <el-button-group>
      <el-badge :value="num" class="new-message" :hidden="num == 0">
        <el-dropdown @command="handleCommand">
          <el-button icon="el-icon-bell">消息</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">查看新消息</el-dropdown-item>
            <el-dropdown-item command="2">查看历史消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dialog :title="title" :visible.sync="dialogTableVisible" :modal-append-to-body='false'>
          <el-table :data="table.slice((page - 1) * rowsPerPage, page * rowsPerPage)">
            <el-table-column property="message" label="消息内容" width="250"></el-table-column>
            <el-table-column property="sender" label="发件人" width="70"></el-table-column>
            <el-table-column property="sendTime" label="发件时间" width="230"></el-table-column>
            <el-table-column property="trackNum" label="快递单号"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :page-size="rowsPerPage"
              :total="totalRow"
              :current-page="page"
              @current-change="handlePageChange"
            ></el-pagination>
          </div>
        </el-dialog>
      </el-badge>

      <el-divider direction="vertical"></el-divider>

      <el-dropdown @command="handleCommand2" class="information">
        <el-button>
          {{ nickname }} （{{ companyName }}｜{{ userType }}）<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">个人信息</el-dropdown-item>
          <el-dropdown-item divided command="2">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-button-group>

  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "new-message",
  data() {
    return {
      num: 0,
      title: "",
      table: [],
      totalRow: 0,
      rowsPerPage: 5,
      page: 1,
      command: 1,
      dialogTableVisible: false,
      nickname: sessionStorage.getItem("nickName"),
      userType: sessionStorage.getItem("userType"),
      company: sessionStorage.getItem("company"),
      companyName: "",
    }
  },
  created() {
    let self = this;
    this.nickname = sessionStorage.getItem("nickName");
    this.userType = sessionStorage.getItem("userType");
    this.company = sessionStorage.getItem("company");
    if (this.company == 'sj') {
      this.companyName = "数据"
    }
    else {
      this.companyName = "天棣"
    }
    Axios.post(
      `${this.$root.url}/message/prompt`,
      {
        userId: sessionStorage.getItem("userId")
      },
      {
        headers: {
          token: sessionStorage.getItem("TOKEN")
        }
      }
    )
    .then(data => {
      self.num = data.data.nums;
    })
    .catch(err => {
      console.log(err);
      if (err.status == 403) {
        sessionStorage.removeItem("company")
        sessionStorage.removeItem("TOKEN")
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("nickName")
        sessionStorage.removeItem("userType")
        sessionStorage.removeItem("email")
        self.$router.replace({ path: "/login" });
        self.$message({
          message: '身份验证过期，自动退出！',
          type: "warning"
        });
      } else {
        self.$message.error(err);
      }
    });
  },
  methods: {
    handleCommand(e) {
      this.command = e;
      let self = this;
      Axios.post(
        `${this.$root.url}/message/${this.handleUrlChange()}`,
        {  
          rowsPerPage: 999,
          page: 1,
          userId: sessionStorage.getItem("userId")
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      )
      .then(data => {
        self.totalRow = data.data.total;
        self.table = data.data.list;
        self.dialogTableVisible = true;
        if (self.handleUrlChange() == "new") {
          self.num = 0;
        }
      })
      .catch(err => {
        console.log(err);
        if (err.status == 403) {
          sessionStorage.removeItem("company")
          sessionStorage.removeItem("TOKEN")
          sessionStorage.removeItem("username")
          sessionStorage.removeItem("userId")
          sessionStorage.removeItem("nickName")
          sessionStorage.removeItem("userType")
          sessionStorage.removeItem("email")
          self.$router.replace({ path: "/login" });
          self.$message({
            message: '身份验证过期，自动退出！',
            type: "warning"
          });
        } else {
          self.$message.error(err);
        }
      });
    },
    handleCommand2(command) {
      if (command == "1") {
        this.$router.push({ path: "/information" })
      }
      else {
        this.logout();
      }
    },
    logout(){
      this.$confirm('确认退出？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem("company")
        sessionStorage.removeItem("TOKEN")
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("nickName")
        sessionStorage.removeItem("userType")
        sessionStorage.removeItem("email")
        // this.$root.company = "";
        // this.$root.TOKEN = "";
        // this.$root.username = "";
        // this.$root.userId = "";
        // this.$root.nickName = "";
        // this.$root.userType = "";
        // this.$root.email = "";
        // this.$cookie.delete("TOKEN");
        // this.$cookie.delete("USERNAME");
        // this.$cookie.delete("COMPANY");
        // this.$cookie.delete("USERPKID");
        // this.$cookie.delete("USERTYPE");
        this.$router.replace({ path: "/login" });
        this.$message({
          type: 'success',
          message: '已退出!'
        });
      }).catch(() => {});
    },
    handleUrlChange() {
      if (this.command == 1) {
        return "new";
      }
      else {
        return "all";
      }
    },
    handlePageChange(e) {
      this.page = e;
    }
  }
}
</script>

<style>
/* .information {
  vertical-align: top;
} */
</style>