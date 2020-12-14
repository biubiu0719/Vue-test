<template>
  <div>
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新机入库</el-breadcrumb-item>
            <el-breadcrumb-item>我的采购单</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <new-message></new-message>
        </el-col>
      </el-row>
    </div>

    <div class="table">
      <el-table :data="table" style="width: 100%" :row-class-name="tableRowClassName" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center'}">
        <el-table-column prop="userId" label="采购账号用户ID" width="180" v-if="false"></el-table-column>
        <el-table-column prop="recordId" label="recordId" width="180" v-if="false"></el-table-column>
        <el-table-column prop="state" label="订单状态" width="100"></el-table-column>
        <el-table-column prop="storageId" label="入库单号" width="140"></el-table-column>
        <el-table-column prop="userName" label="采购账号用户名" width="130"></el-table-column>
        <el-table-column prop="opType" label="操作类型" width="100"></el-table-column>
        <el-table-column prop="orderType" label="单号类型" width="100"></el-table-column>
        <el-table-column prop="orderNumber" label="单号号码" width="100"></el-table-column>
        <!-- <el-table-column prop="model" label="型号" width="100"></el-table-column>
        <el-table-column prop="spec" label="规格" width="100"></el-table-column> -->
        <el-table-column prop="num" label="设备数量" width="80"></el-table-column>
        <el-table-column prop="supplier" label="供应商" width="80"></el-table-column>
        <!-- <el-table-column prop="warehouse" label="入库仓库I级" width="100"></el-table-column>
        <el-table-column prop="warehouseType" label="入库仓库II级" width="100"></el-table-column> -->
        <el-table-column prop="time" label="订单日期" width="180"></el-table-column>
        <el-table-column prop="DemandList" label="设备信息" width="110">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              width="510"
              trigger="hover">
              <el-table :data="scope.row.DemandList">
                <el-table-column width="100" property="model" label="型号"></el-table-column>
                <el-table-column width="100" property="spec" label="规格"></el-table-column>
                <el-table-column width="100" property="warehouse" label="仓库I级"></el-table-column>
                <el-table-column width="100" property="state" label="仓库II级"></el-table-column>
                <el-table-column width="100" property="nums" label="数量"></el-table-column>
              </el-table>
              <el-button slot="reference">查看</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="110">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="bottom">
              <el-button>查看</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope" v-if="visible(scope.row)">
            <el-button
              @click="manualVisible(scope.row)"
              type="text"
              size="medium"
              icon="el-icon-edit"
            >修改订单</el-button>
            <el-dialog title="修改订单" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
              <el-form :model="dataTemp">
                <el-form-item label="操作类型" label-width="130px">
                  <el-select v-model="dataTemp.type" placeholder="请选择操作类型" style="width: 350px" size="small">
                    <el-option label="采购" value="采购"></el-option>
                    <el-option label="其他入库" value="其他入库"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="单号类型" label-width="130px">
                  <el-select v-model="dataTemp.orderType" placeholder="请选择单号类型" style="width: 350px" size="small">
                    <el-option label="订单号" value="订单号"></el-option>
                    <el-option label="其他入库" value="其他入库"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="单号号码" label-width="130px">
                  <el-input v-model="dataTemp.orderNumber" placeholder="" style="width: 350px" size="small"></el-input>
                </el-form-item>
                <el-form-item label="备注" label-width="130px">
                  <el-input v-model="dataTemp.remark" placeholder="" type="textarea" style="width: 350px" size="small"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取  消</el-button>
                <el-button type="primary" @click="handleModify">确认修改</el-button>
              </div>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="totalRow"
        :current-page="page"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import "element-ui/lib/theme-chalk/display.css";
export default {
  inject: ['reload'],
  data() {
    return {
      company: "undefined",
      nickname: "undefined",
      userType: "undefined",
      userId: "undefined",
      totalRow: 0,
      page: 1,
      table: [],
      dialogFormVisible: false,
      dataTemp: {}
    };
  },
  beforeMount() {
    this.company = sessionStorage.getItem("company");
    this.nickname = sessionStorage.getItem("nickname");
    this.userType = sessionStorage.getItem("userType");
    this.userId = sessionStorage.getItem("userId");
    let self = this;
    Axios.all([self.initTable()])
      .then(
        Axios.spread(data => {
          self.totalRow = data.data.total;
          self.table = data.data.list;
        })
      )
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
    initTable() {
      return Axios.post(
        `${this.$root.url}/storage/list${sessionStorage.getItem("companyUrl")}`,
        {
          rowsPerPage: 10,
          page: this.page,
          userId: sessionStorage.getItem("userId"),
          type: sessionStorage.getItem("userType")
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      );
    },
    visible(row) {
      if (row.state == "等待处理") {
        return true;
      } else {
        return false;
      }
    },
    manualVisible(row) {
      this.dialogFormVisible = true;
      this.dataTemp = {
        recordId: row.recordId,
        userId: row.userId,
        type: row.opType,
        num: row.num,
        orderType: row.orderType,
        orderNumber: row.orderNumber,
        hand: row.hand,
        remark: row.remark,
        DemandList: row.DemandList
      }
    },
    handleModify() {
      let self = this;
      Axios.post(
        `${this.$root.url}/storage/resubmit`,
        {
          company: sessionStorage.getItem("company"),
          recordId: this.dataTemp.recordId,
          userId: this.dataTemp.userId,
          type: this.dataTemp.type,
          num: this.dataTemp.num,
          orderType: this.dataTemp.orderType,
          orderNumber: this.dataTemp.orderNumber,
          hand: this.dataTemp.hand,
          remark: this.dataTemp.remark,
          DemandList: this.dataTemp.DemandList,
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      )
      .then(data => {
        if (data.data.status == 2000) {
          self.$message({
            message: '订单修改成功！',
            type: "success"
          });
          self.reload();
        }
        else {
          self.$message({
            message: '订单修改失败！',
            type: "error"
          });
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
    tableRowClassName({row, rowIndex}) {
      if (row.state == "订单异常") {
        return 'warning-row';
      } else if (row.state == "处理成功") {
        return 'success-row';
      }
      return '';
    },
    handlePageChange(e) {
      let self = this;
      this.page = e;
      Axios.post(
        `${this.$root.url}/storage/list${sessionStorage.getItem("companyUrl")}`,
        {
          rowsPerPage: 10,
          page: e,
          userId: sessionStorage.getItem("userId"),
          type: sessionStorage.getItem("userType")
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      )
      .then(data2 => {
        self.totalRow = data2.data.total;
        self.table = data2.data.list;
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
  }
}
</script>

<style>
.el-table .warning-row {
  background: #FDF5E6 !important; 
}
.el-table .success-row {
  background: #F0F9EB !important;
}
.head {
  margin-bottom: 30px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>