<template>
  <div>
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新机入库</el-breadcrumb-item>
            <el-breadcrumb-item>填写采购单</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <new-message></new-message>
        </el-col>
      </el-row>
    </div>

    <el-form ref="form" :model="form" label-width="90px" style="width:500px">
      <el-form-item label="公司名称">
        <el-select v-model="form.company" :disabled="true" placeholder="请选择公司" style="width: 400px">
          <el-option label="数据" value="sj"></el-option>
          <el-option label="天棣" value="td"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作类型">
        <el-select v-model="form.type" placeholder="请选择公司" style="width: 400px">
          <el-option label="采购" value="采购"></el-option>
          <el-option label="其他入库" value="其他入库"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单号类型">
        <el-select v-model="form.orderType" placeholder="请选择公司" style="width: 400px">
          <el-option label="订单号" value="订单号"></el-option>
          <el-option label="其他入库" value="其他入库"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单号号码">
        <el-input v-model="form.orderNumber" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item label="入库数量">
        <el-input v-model="form.num" style="width: 400px" disabled></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="form.supplier" style="width: 400px"></el-input>
      </el-form-item>

      <el-form-item label="型号与规格">
        <el-button size="small" @click="manualVisible" style="width: 400px">点击添加</el-button>
        <el-dialog title="手动添加" :visible.sync="dialogFormVisible" :modal-append-to-body='false' style="width: 1000px">
          <el-form :model="dataTemp">
            <el-form-item label="型号" label-width="100px">
              <el-select v-model="dataTemp.model" filterable @change="getSpec" placeholder="请选择型号" style="width: 255px" size="small">
                <el-option
                  v-for="item in modelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" v-if="dataTemp.model == '其他'" label-width="100px">
              <el-input v-model="dataTemp.modelCustom" style="width: 255px" placeholder="请输入自定义型号" size="small"></el-input>
            </el-form-item>
            <el-form-item label="规格" label-width="100px">
              <el-select v-model="dataTemp.spec" filterable placeholder="请选择规格" style="width: 255px" size="small">
                <el-option
                  v-for="item in specOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" v-if="dataTemp.spec == '其他'" label-width="100px">
              <el-input v-model="dataTemp.specCustom" style="width: 255px" placeholder="请输入自定义规格" size="small"></el-input>
            </el-form-item>
            <el-form-item label="入库数量" label-width="100px">
              <el-input v-model="dataTemp.nums" style="width: 255px" size="small"></el-input>
            </el-form-item>
            <el-form-item label="仓库I级" label-width="100px">
              <el-select v-model="dataTemp.warehouse" placeholder="请选择仓库I级" style="width: 255px" size="small">
                <el-option label="广州仓" value="广州仓"></el-option>
                <el-option label="上海仓" value="上海仓"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="仓库II级" label-width="100px">
              <el-select v-model="dataTemp.state" placeholder="请选择仓库II级" style="width: 255px" size="small">
                <el-option label="新机" value="新机"></el-option>
                <el-option label="二手" value="二手"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleAdd">添 加</el-button>
          </div>
        </el-dialog>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remark" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="btnLoading">确认提交</el-button>
        <el-button @click="clear">清空输入</el-button>
      </el-form-item>
    </el-form>

    <div class="table">
      <el-table :data="form.DemandList" style="width: 70%">
        <el-table-column prop="model" label="型号" width="110"></el-table-column>
        <el-table-column prop="spec" label="规格" width="100"></el-table-column>
        <el-table-column prop="nums" label="数量" width="100"></el-table-column>
        <el-table-column prop="warehouse" label="仓库I级" width="100"></el-table-column>
        <el-table-column prop="state" label="仓库II级" width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click="handleDelete(scope.$index)"
              type="primary"
              size="small"
              icon="el-icon-chat-line-round"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      form: {
        company: "",
        orderNumber: "",
        orderType: "订单号",
        type: "采购",
        DemandList: [],
        num: 0,
        remark: "",
        supplier: ""
      },
      dataTemp: {
        nums: "",
        model: "",
        modelCustom: "",
        spec: "",
        specCustom: "",
        warehouse: "",
        state: "",
        hand: 0,
      },
      dialogFormVisible: false,
      optionNums: 0,
      modelOptions: [],
      specOptions: [],
      modelList: [],
      btnLoading: false,
    };
  },
  beforeMount() {
    this.company = sessionStorage.getItem("company");
    this.nickname = sessionStorage.getItem("nickname");
    this.userType = sessionStorage.getItem("userType");
    this.userId = sessionStorage.getItem("userId");
    this.form.company = sessionStorage.getItem("company");
    let self = this;
    Axios.post(
      `${this.$root.url}/tool/modelList`,
      {},
      {
        headers: {
          token: sessionStorage.getItem("TOKEN")
        }
      }
    )
      .then(data => {
        self.optionNums = data.data.nums;
        self.modelList = data.data.modelList;
        for (let i = 0; i < data.data.nums; i++) {
          self.modelOptions.push({
            value: data.data.modelList[i].model,
            label: data.data.modelList[i].model
          })
        }
        self.modelOptions.push({
          value: '其他',
          label: '其他'
        })
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
    getSpec() {
      // console.log("getSpec")
      if (this.form.model == "其他" || this.form.model == "") {
        this.specOptions = [{
          value: '其他',
          label: '其他'
        }]
      }
      else {
        for (let i = 0; i < this.optionNums; i++) {
          if (this.modelList[i].model == this.dataTemp.model) {
            this.specOptions = [];
            for (let j = 0; j < this.modelList[i].spec.length; j++) {
              this.specOptions.push({
                value: this.modelList[i].spec[j],
                label: this.modelList[i].spec[j]
              })
            }
            this.specOptions.push({
              value: '其他',
              label: '其他'
            })
            return;
          }
        }
        this.specOptions = [{
          value: '其他',
          label: '其他'
        }]
      }
    },
    manualVisible() {
      this.dialogFormVisible = true;
      this.dataTemp = {
        nums: null,
        model: "",
        modelCustom: "",
        spec: "",
        specCustom: "",
        warehouse: "",
        state: "",
        hand: 0,
      }
    },
    handleAdd() {
      this.dialogFormVisible = false;
      this.$message({
        message: '添加成功！',
        type: 'success'
      });
      let _demandList = {hand: 0};
      if (this.dataTemp.model == '其他') {
        _demandList.hand = 1;
        _demandList.model = this.dataTemp.modelCustom;
      }
      else {
        _demandList.model = this.dataTemp.model;
      }
      if (this.dataTemp.spec == '其他') {
        _demandList.hand = 1;
        _demandList.spec = this.dataTemp.specCustom;
      }
      else {
        _demandList.spec = this.dataTemp.spec;
      }
      _demandList.warehouse = this.dataTemp.warehouse;
      _demandList.state = this.dataTemp.state;
      _demandList.nums = this.dataTemp.nums;
      this.form.DemandList.push(_demandList);
      this.form.num += parseInt(_demandList.nums);
    },
    handleDelete(index) {
      this.form.num -= parseInt(this.form.DemandList[index].nums);
      this.form.DemandList.splice(index, 1);
    },
    onSubmit() {
      let self = this;
      self.btnLoading=true;
      if (this.form.DemandList.length == 0) {
        self.$message({
          message: "型号与规格栏不能为空！",
          type: "warning"
        });
        self.btnLoading=false;
        return;
      }
      Axios.post(
        `${this.$root.url}/storage/registration`,
        {
          company: self.company,
          userId: self.userId,
          type: self.form.type,
          num: self.form.num,
          orderType: self.form.orderType,
          orderNumber: self.form.orderNumber,
          remark: self.form.remark,
          supplier: self.form.supplier,
          DemandList: self.form.DemandList
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
              message: "采购单提交成功！",
              type: "success"
            });
            self.clear();
          }
          else {
            self.$message({
              message: "采购单提交失败！",
              type: "warning"
            });
          }
          self.btnLoading=false;
        })
        .catch(err => {
          self.btnLoading=false;
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
    clear() {
      this.reload();
      // this.form.orderNumber = "",
      // this.form.num = "",
      // this.form.model = "",
      // this.form.warehouse = "",
      // this.form.remark = ""
    },
  }
};
</script>

<style>
.el-icon-arrow-down {
  font-size: 12px;
}
.head {
  margin-bottom: 30px;
}
</style>