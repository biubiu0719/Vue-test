<template>
  <div>
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新机入库</el-breadcrumb-item>
            <el-breadcrumb-item>处理采购单</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <new-message></new-message>
        </el-col>
      </el-row>
    </div>
    
    <div class="steps" style="text-align: left">
      <el-steps :active="stepNum" finish-status="success">
        <el-step title="处理采购单，锁定数据"></el-step>
        <el-step title="确认采购完成"></el-step>
        <el-step title="处理结果"></el-step>
      </el-steps>
    </div>

    <div class="table" v-if="isStep1">
      <el-table :data="table" style="width: 100%" :row-class-name="tableRowClassName" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center'}">
        <el-table-column prop="state" label="订单状态" width="110"></el-table-column>
        <el-table-column prop="storageId" label="入库单号" width="140"></el-table-column>
        <el-table-column prop="userId" label="采购账号用户ID" width="130" v-if="false"></el-table-column>
        <el-table-column prop="userName" label="采购账号用户名" width="130"></el-table-column>
        <el-table-column prop="recordId" label="recordId" width="180" v-if="false"></el-table-column>
        <el-table-column prop="opType" label="操作类型" width="100"></el-table-column>
        <el-table-column prop="orderType" label="单号类型" width="100"></el-table-column>
        <el-table-column prop="orderNumber" label="单号号码" width="100"></el-table-column>
        <!-- <el-table-column prop="model" label="型号" width="100"></el-table-column>
        <el-table-column prop="spec" label="规格" width="100"></el-table-column> -->
        <el-table-column prop="num" label="设备数量" width="80"></el-table-column>
        <el-table-column prop="supplier" label="供应商" width="80"></el-table-column>
        <!-- <el-table-column prop="warehouse" label="入库仓库I级" width="100"></el-table-column>
        <el-table-column prop="warehouseType" label="入库仓库II级" width="100"></el-table-column> -->
        <el-table-column prop="time" label="订单日期" width="200"></el-table-column>
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
          <!-- <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="bottom">
              <el-button>查看</el-button>
            </el-tooltip>
          </template> -->
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope" v-if="isLock(scope.row)">
            <el-button
              @click="handleLock(scope.row)"
              type="text"
              size="medium"
              icon="el-icon-chat-line-round"
            >处理订单</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="totalRow"
        :current-page="page"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>

    <div class="form" v-if="isStep2" style="width: 320px">
      <el-form label-position="left" label-width="100px" :model="form">
        <el-form-item label="公司名称：" style="width: 354px">
          <el-select v-model="form.company" placeholder="请选择公司" disabled style="width: 254px">
            <el-option label="数据" value="sj"></el-option>
            <el-option label="天棣" value="td"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采购数量：" style="width: 354px">
          <el-input v-model="form.nums" disabled></el-input>
        </el-form-item>
        <el-form-item label="订单信息：" style="width: 354px">
          <el-popover
            placement="right"
            width="510"
            trigger="hover">
            <el-table :data="form.DemandList">
              <el-table-column width="100" property="model" label="型号"></el-table-column>
              <el-table-column width="100" property="spec" label="规格"></el-table-column>
              <el-table-column width="100" property="warehouse" label="仓库I级"></el-table-column>
              <el-table-column width="100" property="state" label="仓库II级"></el-table-column>
              <el-table-column width="100" property="nums" label="数量"></el-table-column>
            </el-table>
            <el-button slot="reference" style="width: 254px">查看订单设备信息</el-button>
          </el-popover>
        </el-form-item>
        <!-- <el-form-item label="仓库名称：" style="width: 354px">
          <el-input v-model="form.warehouse" disabled></el-input>
        </el-form-item> -->
        <el-form-item label="模板下载：" style="width: 354px">
          <el-link type="primary" href="http://120.76.208.180:8080/warehouse/file/cai_gou_ru_ku.xlsx"  style="width: 254px">点击下载Excel模板</el-link>
        </el-form-item>
        <el-form-item label="设备信息：" style="width: 320px">
          <el-row>
            <el-col :span="17">
              <!--limit:最大上传数，on-exceed：超过最大上传数量时的操作  -->
              <el-upload
                class="upload-demo"
                action=""
                :on-change="handleChange"
                :on-remove="handleRemove"
                :on-exceed="handleExceed"
                :limit="limitUpload"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                :auto-upload="false">
                <el-button size="small" type="primary">点击上传（.xls或.xlsx）</el-button>
              </el-upload>
            </el-col>

            <el-col :span="2">
              <el-divider direction="vertical"></el-divider>
            </el-col>

            <el-col :span="5">
              <el-button type="primary" size="small" @click="manualVisible">手动添加</el-button>
              <el-dialog title="手动添加" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
                <el-form :model="dataTemp">
                  <el-form-item label="设备序列号" label-width="130px">
                    <el-input v-model="dataTemp.sn" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="设备型号" label-width="130px">
                    <el-select v-model="dataTemp.model" filterable @change="getSpec" placeholder="请选择型号" style="width: 350px" size="small">
                      <el-option
                        v-for="item in modelOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="规格" label-width="130px">
                    <el-select v-model="dataTemp.spec" filterable placeholder="请选择规格" style="width: 350px" size="small">
                      <el-option
                        v-for="item in specOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="订单号" label-width="130px">
                    <el-input v-model="dataTemp.order" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="箱号" label-width="130px">
                    <el-input v-model="dataTemp.caseId" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="MAC地址" label-width="130px">
                    <el-input v-model="dataTemp.mac" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="模组生产商" label-width="130px">
                    <el-input v-model="dataTemp.producer" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="传感器" label-width="130px">
                    <el-input v-model="dataTemp.sensor" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="固件版本1" label-width="130px">
                    <el-input v-model="dataTemp.version1" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="固件版本2" label-width="130px">
                    <el-input v-model="dataTemp.version2" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="固件版本3" label-width="130px">
                    <el-input v-model="dataTemp.version3" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="装配商" label-width="130px">
                    <el-input v-model="dataTemp.manufacturer" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="（原厂）维保时间" label-width="130px">
                    <!-- <el-input v-model="dataTemp.guarantee" placeholder="输入格式：2000-01-01" style="width: 350px" size="small"></el-input> -->
                    <el-date-picker
                      v-model="dataTemp.guarantee"
                      type="date"
                      placeholder=""
                      style="width: 350px"
                      value-format="yyyy-MM-dd"
                      size="small">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="分辨率" label-width="130px">
                    <el-input v-model="dataTemp.resolution" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="收件人" label-width="130px">
                    <el-input v-model="dataTemp.addressee" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="收件地址" label-width="130px">
                    <el-input v-model="dataTemp.address" placeholder="" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                  <el-form-item label="备注" label-width="130px">
                    <el-input v-model="dataTemp.remarks" placeholder="" type="textarea" style="width: 350px" size="small"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="handleAdd">添 加</el-button>
                </div>
              </el-dialog>
            </el-col>

          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="11">
              <el-button type="primary" @click="onSubmit" size="small" :loading="btnLoading">确认提交</el-button>
            </el-col>
            <el-col :span="4">
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="9">
              <el-button type="primary" @click="back0" size="small">返回订单列表</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="预览表：">
          <el-input v-model="form.cnt" disabled style="width: 254px">
            <template slot="prepend">已添加设备数量</template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="table2" v-if="isStep2">
      <el-table :data="form.deviceJson" style="width: 100%" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center'}">
        <el-table-column prop="sn" label="设备序列号" width="100"></el-table-column>
        <el-table-column prop="model" label="设备型号" width="100"></el-table-column>
        <el-table-column prop="spec" label="规格" width="100"></el-table-column>
        <el-table-column prop="order" label="订单号" width="100"></el-table-column>
        <el-table-column prop="caseId" label="箱号" width="180"></el-table-column>
        <el-table-column prop="mac" label="MAC地址" width="110"></el-table-column>
        <el-table-column prop="producer" label="模组生产商" width="100"></el-table-column>
        <el-table-column prop="sensor" label="传感器" width="100"></el-table-column>
        <el-table-column prop="version1" label="固件版本1" width="100"></el-table-column>
        <el-table-column prop="version2" label="固件版本2" width="100"></el-table-column>
        <el-table-column prop="version3" label="固件版本3" width="100"></el-table-column>
        <el-table-column prop="manufacturer" label="装配商" width="110"></el-table-column>
        <el-table-column prop="guarantee" label="（原厂）维保时间" width="100"></el-table-column>
        <el-table-column prop="resolution" label="分辨率" width="100"></el-table-column>
        <el-table-column prop="addressee" label="收件人" width="100"></el-table-column>
        <el-table-column prop="address" label="收件地址" width="100"></el-table-column>
        <el-table-column prop="remarks" label="备注" width="180"></el-table-column>
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

    <div class="complete" v-if="isStep3">
      <div v-if="complete">
        <h2>成功！</h2>
      </div>
      <div v-if="!complete">
        <h2>失败</h2>
        <span>错误信息：{{ errorMsg }} </span>
      </div>
      <el-divider></el-divider>
      <span>
        <el-button type="primary" @click="back">返回订单列表</el-button>
      </span>
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
      limitUpload: 1,
      form: {
        company: '',
        recordId: '',
        nums: '',
        warehouse: '',
        userId: '',
        DemandList: [],
        deviceJson: [],
        cnt: 0,
      },
      file: null,
      fileTemp: null,
      dialogFormVisible: false,
      dataTemp: {
        sn: null,
        model: "",
        spec: "",
        order: "",
        caseId: "",
        mac: "",
        producer: "",
        sensor: "",
        version1: "",
        version2: "",
        version3: "",
        manufacturer: "",
        guarantee: "",
        resolution: "",
        addressee: "",
        address: "",
        remarks: null
      },
      stepNum: 0,
      isStep1: true,
      isStep2: false,
      isStep3: false,
      complete: false,
      errorMsg: "",
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
    let self = this;
    Axios.all([self.initTable(), self.initModelList()])
      .then(
        Axios.spread((data, data0) => {
          self.totalRow = data.data.total;
          self.table = data.data.list;
          self.optionNums = data0.data.nums;
          self.modelList = data0.data.modelList;
          for (let i = 0; i < data0.data.nums; i++) {
            self.modelOptions.push({
              value: data0.data.modelList[i].model,
              label: data0.data.modelList[i].model
            })
          }
          self.modelOptions.push({
            value: '其他',
            label: '其他'
          })
          setTimeout(() => {
            for (let i = 0; i < self.table.length; i++) {
              Axios.post(
                `${sessionStorage.getItem("url")}/user/info`,
                {
                  "username": self.table[i].userId,
                  "company": sessionStorage.getItem("company")
                },
                {
                  headers: {
                    "token": sessionStorage.getItem("TOKEN")
                  }
                })
                .then(data2 => {
                  self.$nextTick(() => {
                    self.table[i].nickname = data2.data.nickName;
                  })
                })
            }
          }, 100);
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
    getSpec() {
      // console.log("getSpec")
      if (this.dataTemp.model == "其他" || this.dataTemp.model == "") {
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
    initModelList() {
      return Axios.post(
        `${this.$root.url}/tool/modelList`,
        {},
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      );
    },
    tableRowClassName({row, rowIndex}) {
      // console.log(rowIndex)
      if (row.state == "订单异常") {
        return 'warning-row';
      } else if (row.state == "处理成功") {
        return 'success-row';
      }
      return '';
    },
    isLock(msg) {
      if (msg.state == "等待处理" || msg.state == "正在处理") {
        return true;
      }
      return false;
    },
    lockSubmit(msg) {
      let self = this;
      Axios.post(`${this.$root.url}/storage/lock`, 
        {
          company: self.company,		
          num: msg.num,
          recordId: msg.recordId,
          warehouse: msg.warehouse
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      )
      .then(data => {
        if (data.data.status == 2000) {
          self.form.company = self.company;
          self.form.recordId = msg.recordId;
          self.form.nums = msg.num;
          self.form.DemandList = msg.DemandList;
          self.form.userId = msg.userId;
          // 跳转到第二步
          self.$message({
            message: "操作成功",
            type: "success"
          });
          self.stepNum = 1;
          self.isStep1 = false;
          self.isStep2 = true;
        }
        else {
          self.$message({
            message: "操作失败",
            type: "warning"
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
    handleLock(row) {
      this.$confirm("确认处理？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.lockSubmit(row)
          // console.log(row)
        })
        .catch(() => {});
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
      .then(data => {
        self.totalRow = data.data.total;
        self.table = data.data.list;
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
    onSubmit() {
      this.btnLoading = true;
      let self = this;
      if (!this.form.deviceJson.length) {
        // 信息不能为空
        this.$message({
          message: '请填写设备信息',
          type: 'warning'
        });
        this.btnLoading = false;
        return;
      }
      if (this.form.deviceJson.length != this.form.nums) {
        // 设备数量不一致
        this.$message({
          message: '对应型号规格的设备数量与订单不符！',
          type: 'warning'
        });
        this.btnLoading = false;
        return;
      }
      Axios.post(
        `${this.$root.url}/storage/confirm`,
        {
          company: self.form.company,
          recordId: self.form.recordId,
          nums: self.form.nums,
          // warehouse: self.form.warehouse,
          userId: self.form.userId,
          managerId: sessionStorage.getItem("userId"),
          deviceJson: self.form.deviceJson
        },
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      )
      .then(data => {
        if (data.data.status == 2000) {
          // 跳到第三步
          self.$message({
            message: "操作成功",
            type: "success"
          });
          self.stepNum = 2;
          self.isStep2 = false;
          self.isStep3 = true;
          self.complete = true;
          this.btnLoading = false;
        }
        else {
          // 跳到第三步
          self.$message({
            message: "操作失败",
            type: "warning"
          });
          self.stepNum = 2;
          self.isStep2 = false;
          self.isStep3 = true;
          self.complete = false;
          if (data.data.status == 5004) {
            let msg = data.data.wrongSn.replace(/,/g, '、');
            msg = msg.substring(0, msg.length-1) + "。"
            self.errorMsg = `[${data.data.status}] 录入的Sn号在数据库已存在，仓管操作错误，订单状态不修改，错误的SN号：${msg}`
          }
          else if (data.data.status == 5003) {
            let msg = data.data.wrongSn.replace(/,/g, '、');
            msg = msg.substring(0, msg.length-1) + "。"
            self.errorMsg = `[${data.data.status}] 设备序列号与型号不匹配，错误的SN号：${msg}`
          }
          else if (data.data.status == 5002) {
            let msg = data.data.wrongList.replace(/;/g, '；');
            msg = msg.substring(0, msg.length-1) + "。"
            self.errorMsg = `[${data.data.status}] ${data.data.result}，错误的设备信息：${msg}`
          }
          else if (data.data.status == 5001) {
            self.errorMsg = data.data.result
          }
          else {
            self.errorMsg = "系统错误"
          }
          this.btnLoading = false;
        }
        // 清空数据
        self.form = {
          company: '',
          recordId: '',
          nums: '',
          DemandList: [],
          userId: '',
          deviceJson: [],
        }
      })
      .catch(err => {
        this.btnLoading = false;
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
    //上传文件时处理方法  
    handleChange(file, fileList){
      this.fileTemp = file.raw;
      // console.log(fileList)
      if(this.fileTemp){
        if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') 
          || (this.fileTemp.type == 'application/vnd.ms-excel')){
          this.importfxx(this.fileTemp);
        } else {
          this.$message({
            type:'warning',
            message:'附件格式错误，请删除后重新上传！'
          })
        }
      } else {
        this.$message({
          type:'warning',
          message:'请上传附件！'
        })
      }
    },
    //超出最大上传文件数量时的处理方法
    handleExceed(){
      this.$message({
        type:'warning',
        message:'超出最大上传文件数量的限制！'
      })
      return;
    },
    //移除文件的操作方法
    handleRemove(file,fileList){
      this.fileTemp = null
      // console.log(file,fileList)
      this.form.deviceJson = [] // 清空数据
      this.form.cnt = 0;
    },
    // 读取excel文件
    importfxx(obj) {
      // console.log(obj)
      let _this = this;
      // let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.file = event.currentTarget.files[0];
      var rABS = false; //是否将文件读取为二进制字符串
      var f = this.file;
      var reader = new FileReader();
      //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = "";
        var rABS = false; //是否将文件读取为二进制字符串
        // var pt = this;
        var wb; //读取完成的数据
        var outdata;
        var reader = new FileReader();
        reader.onload = function(e) {
          // console.log(e)
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
          }
          //此处引入，用于解析excel
          var XLSX = require("xlsx");
          if (rABS) {
              wb = XLSX.read(btoa(binary), {
              //手动转化
              type: "base64"
              });
          } else {
              wb = XLSX.read(binary, {
              type: "binary"
              });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
          //outdata就是读取的数据（不包含标题行即表头，表头会作为对象的下标）
          //此处可对数据进行处理
          let arr = [], errCnt = 0;
          outdata.map(v => {
            let obj = {}
            obj.sn = v['设备序列号']
            obj.model = v['设备型号']
            obj.spec = v['规格']
            obj.order = v['订单号']
            obj.caseId = v['箱号']
            obj.mac = v['MAC地址']
            obj.producer = v['模组生产商']
            obj.sensor = v['传感器']
            obj.version1 = v['固件版本1']
            obj.version2 = v['固件版本2']
            obj.version3 = v['固件版本3']
            obj.manufacturer = v['装配商']
            obj.guarantee = _this.formatDate(v['（原厂）维保时间'])
            obj.resolution = v['分辨率']
            obj.addressee = v['收件人']
            obj.address = v['收件地址']
            obj.remarks = v['备注']
            /* 验证SN号是否重复 */
            let flag = false
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].sn == obj.sn) {
                flag = true;
                break;
              }
            }
            if (flag) {
              errCnt++;
            }
            /* 正则验证12位纯数字SN号 */
            else if (/^\d{12}$/.test(obj.sn)) {
              arr.push(obj)
            }
            else {
              errCnt++;
            }
          });
          if (errCnt) {
            _this.$message({
              message: `导入excel表中信息有误（共${errCnt}项），已自动过滤！`,
              type: "warning"
            })
          }
          _this.form.cnt = arr.length;
          _this.form.deviceJson = arr;
          // _this.da=arr;
          // _this.dalen=arr.length;
          // console.log(arr)
          return arr;
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },
    manualVisible() {
      this.dialogFormVisible = true;
      this.dataTemp = {
        sn: null,
        model: "",
        spec: "",
        order: "",
        caseId: "",
        mac: "",
        producer: "",
        sensor: "",
        version1: "",
        version2: "",
        version3: "",
        manufacturer: "",
        guarantee: "",
        resolution: "",
        addressee: "",
        address: "",
        remarks: null
      }
    },
    handleAdd() {
      this.dialogFormVisible = false;
      this.form.deviceJson.push(this.dataTemp);
      this.form.cnt++;
    },
    handleDelete(index) {
      this.form.deviceJson.splice(index, 1);
      this.form.cnt--;
    },
    back0() {
      this.stepNum = 0;
      this.isStep2 = false;
      this.isStep1 = true;
      this.complete = false;
      this.reload();
    },
    back() {
      this.stepNum = 0;
      this.isStep3 = false;
      this.isStep1 = true;
      this.complete = false;
      this.reload();
    },
    //timeValue是指excel中的时间整数值
    formatDate(timeValue) {
      let time = new Date((timeValue- 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      let year = time.getFullYear() + ''
      let month = time.getMonth() + 1 + ''
      let date = time.getDate() + ''
      return year + "-" + month + "-" + date
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
.steps {
  margin-bottom: 30px;
}
.table2 {
  margin-left: 20px;
  margin-right: 20px;
}
</style>