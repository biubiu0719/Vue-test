<template>
  <div>
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>查看库存信息</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8">
          <new-message></new-message>
        </el-col>
      </el-row>
    </div>
    
    

      <div id="main" style="width: 100%;height: 400px;"></div>
      <!-- <el-progress type="circle" :percentage="percentStore" :format="formatStore" :color="colorStore"></el-progress>
      <el-progress type="circle" :percentage="percentPOC" :format="formatPOC" :color="colorPOC"></el-progress> -->
      <!-- <el-progress type="circle" :percentage="percentSell" :format="formatSell" :color="colorSell"></el-progress>
      <el-progress type="circle" :percentage="percentPresent" :format="formatPresent" :color="colorPresent"></el-progress>
      <el-progress type="circle" :percentage="percentScrap" :format="formatScrap" :color="colorScrap"></el-progress> -->
      <!-- <el-progress type="circle" :percentage="percentRepair" :format="formatRepair" :color="colorRepair"></el-progress>
      <el-progress type="circle" :percentage="percentSecStore" :format="formatSecStore" :color="colorScrap"></el-progress> -->


    <div class="table">
      <el-table :data="getData(search)" style="width: 100%" :row-class-name="tableRowClassName" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center'}">
        <el-table-column prop="model" label="型号" width="100"></el-table-column>
        <el-table-column prop="spec" label="规格" width="100"></el-table-column>
        <el-table-column prop="nums" label="数量" width="100"></el-table-column>
        <el-table-column prop="warehouse" label="所属仓库" width="100"></el-table-column>
        <el-table-column prop="state" label="状态" width="100"></el-table-column>
        <!-- <el-table-column prop="company" label="所属公司" width="90" :formatter="companyFormat"></el-table-column> -->
        <el-table-column
          >
          <!-- eslint-disable-next-line -->
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              placeholder="输入关键字搜索"/>
          </template>
        </el-table-column>
        <el-table-column width="200">
          <template slot="header" >
          <el-button icon="el-icon-download" @click="exportExcel" >导出Excel文件</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column>
              <div id="main" style="width: 200px;height: 400px;"></div>
        </el-table-column> -->
      </el-table>
      
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="rowsPerPage"
        :total="totalRow"
        :current-page="page"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
    <!-- <div style="right:0px">
      <el-button icon="el-icon-download" @click="exportExcel" >导出Excel文件</el-button>
    </div> -->
  </div>
  
</template>

<script>
import Axios from 'axios';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/display.css';
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      charts: '',
      opinion:['在库','POC','维修','二手在库'],
      opinion_value:['','','',''],
      type: 'pie',
      opinionData:[
        {value:1000, name:'在库'},
        {value:600, name:'POC'},
        {value:300, name:'维修'},
        {value:600, name:'二手在库'},
      ],
      company: 'undefined',
      nickname: 'undefined',
      userType: 'undefined',
      email: 'undefined',
      userId: "undefined",
      totalRow: 0,
      totalRowBackup: 0,
      page: 1,
      table: [],
      errorMsg: "",
      search: "",
      rowsPerPage: 10,
      // progress
      cntTotal: 0,
      percentStore: 0,
      cntStore: 0,

      percentSecStore: 0,
      cntSecStore: 0,

      percentPOC: 0,
      cntPOC: 0,
      percentSell: 0,
      cntSell: 0,
      percentPresent: 0,
      cntPresent: 0,
      percentScrap: 0,
      cntScrap: 0,
      percentRepair: 0,
      cntRepair: 0,
      colorStore: '#00FF00',
      colorPOC: '#00CED1',
      colorSell: '#9400D3',
      colorPresent: '#0000FF',
      colorScrap: '#FF0000',
      colorRepair: '#FFFF00',
    }
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
          self.totalRowBackup = data.data.total;
          self.table = data.data.list;
          for (let i = 0; i < data.data.list.length; i++) {
            if (data.data.list[i].state == "在库") {
              self.cntStore += data.data.list[i].nums;
            } else if (data.data.list[i].state == "POC") {
              self.cntPOC += data.data.list[i].nums;
            } else if (data.data.list[i].state == "销售") {
              self.cntSell += data.data.list[i].nums;
            } else if (data.data.list[i].state == "赠送") {
              self.cntPresent += data.data.list[i].nums;
            } else if (data.data.list[i].state == "报废") {
              self.cntScrap += data.data.list[i].nums;
            } else if(data.data.list[i].state == "维修"){
              self.cntRepair += data.data.list[i].nums;
            } else if(data.data.list[i].state == "二手在库"){
              self.cntSecStore += data.data.list[i].nums;
            }
          }
          self.cntTotal = self.cntStore + self.cntPOC + self.cntSell + self.cntPresent + self.cntScrap + self.cntRepair;
          self.percentStore = parseInt(self.cntStore / self.cntTotal * 100);
          self.percentSecStore = parseInt(self.cntSecStore / self.cntTotal * 100);
          self.percentPOC = parseInt(self.cntPOC / self.cntTotal * 100);
          self.percentSell = parseInt(self.cntSell / self.cntTotal * 100);
          self.percentPresent = parseInt(self.cntPresent / self.cntTotal * 100);
          self.percentScrap = parseInt(self.cntScrap / self.cntTotal * 100);
          self.percentRepair = parseInt(self.cntRepair / self.cntTotal * 100);
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
  updated(){
            this.$nextTick(function() {
                this.drawPie('main')
            })
        },
  methods: {
    drawPie(id){
                this.opinionData[0].value=this.cntStore
                this.opinionData[1].value=this.cntPOC
                this.opinionData[2].value=this.cntRepair
                this.opinionData[3].value=this.cntSecStore
                // this.opinion_value[0]=this.cntStore
                // this.opinion_value[1]=this.cntPOC
                // this.opinion_value[2]=this.cntRepair
                // this.opinion_value[3]=this.cntSecStore
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color: ['#90EE90', '#6495ED','#ffcc99', '#ff6699'],/*饼状图的颜色*/
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b}({d}%)",/*饼状图触碰之后显示的注释文字*/
                    },
                    legend: {
                        left: '60%',/*标签文字排成一行*/
                        y: 'bottom',/*在垂直方向上的底部*/
                        data:this.opinion,
                        //formatter: this.opinion,
                    },
                    series: [
                        {
                            type: 'pie',   //饼状图
                            center: ['50%', '50%'],    //显示位置
                            name:'',
                            minAngle:15,
                            radius:['0%','65%'],/*空心圆的占比*/
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 20,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal: {
                                    borderWidth: 5,/*隔开的白色边界*/
                                    borderColor: '#fff',/*border*/
                                    // labelLine :{show:true}
                                },
                            },

                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                        show:true,
                                        position:'outside',
                                        textStyle: {
                                            fontWeight: 300,
                                            fontSize: 20   //文字的字体大小
                                        },
                                    formatter: '{b}:{c}台',/*饼状图内显示百分比*/
                                     data:['40%','60%'],
                                },

                                emphasis: {
                                    show: false,/*空心文字出现*/
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true
                                }
                            },
                            data:this.opinionData
                        }
                    ]
                })
            },
    initTable() {
      return Axios.post(
        `${this.$root.url}/query/inventory${sessionStorage.getItem("companyUrl")}`,
        {},
        {
          headers: {
            token: sessionStorage.getItem("TOKEN")
          }
        }
      );
    },
    getData(search) {
      this.totalRow = this.table.filter(data => !search || this.filterData(data, search)).length
      return this.table.filter(data => !search || this.filterData(data, search)).slice((this.page - 1) * this.rowsPerPage, this.page * this.rowsPerPage)
    },
    filterData(data, search) {
      if (data.model && data.model.toLowerCase().includes(search.toLowerCase())) return true;
      else if (data.spec && data.spec.toLowerCase().includes(search.toLowerCase())) return true;
      else if (data.status && data.status.toLowerCase().includes(search.toLowerCase())) return true;
      else if (data.nums && data.nums.toString().toLowerCase().includes(search.toLowerCase())) return true;
      else if (data.warehouse && data.warehouse.toLowerCase().includes(search.toLowerCase())) return true;
      else if (data.state && data.state.toLowerCase().includes(search.toLowerCase())) return true;
      else {
        return false;
      }
    },
    filterData2(data) {
      if (data.model && data.model.toLowerCase().includes(this.search.toLowerCase())) return true;
      else if (data.spec && data.spec.toLowerCase().includes(this.search.toLowerCase())) return true;
      else if (data.status && data.status.toLowerCase().includes(this.search.toLowerCase())) return true;
      else if (data.nums && data.nums.toString().toLowerCase().includes(this.search.toLowerCase())) return true;
      else if (data.warehouse && data.warehouse.toLowerCase().includes(this.search.toLowerCase())) return true;
      else if (data.state && data.state.toLowerCase().includes(this.search.toLowerCase())) return true;
      else {
        return false;
      }
    },
    exportExcel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("../../excel/Export2Excel");
        // 设置Excel的表格第一行的标题
        let tHeader = [], filterVal = []
        tHeader = ["型号","规格","数量","所属仓库","状态"];
        // 对应tableData里对象的属性
        filterVal = ["model","spec","nums","warehouse","state"];
        let form = [];
        let tableData = JSON.parse(JSON.stringify(this.table.filter(data => this.filterData2(data))))
        // for (let i = 0; i < tableData.length; i++) {
        //   //for (let j = 0; j < tableData[i].ActualList.length; j++) {
        //     let obj = JSON.parse(JSON.stringify(tableData[i]))
        //     //obj.model = tableData[i].ActualList[j].model
        //     //obj.spec = tableData[i].ActualList[j].spec
        //     //obj.nums = tableData[i].ActualList[j].nums
        //     // if (obj.customerCompany == "sj") {
        //     //   obj.customerCompany = "数据"
        //     // } else if (obj.customerCompany == "td") {
        //     //   obj.customerCompany = "天棣"
        //     // }
        //     form.push(obj);
        //   //}
        // }
        const list = JSON.parse(JSON.stringify(tableData));
        const data = this.formatJson(filterVal, list);
        let time = new Date()
        export_json_to_excel(tHeader, data, `库存查询结果_${time.toLocaleDateString()}`);
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    // companyFormat(row, column) {
    //   if (row.company == "sj") {
    //     return "数据"
    //   } else {
    //     return "天棣"
    //   }
    // },
    tableRowClassName({row, rowIndex}) {
      if (row.state == "在库") {
        return 'store-row';
      } else if (row.state == "POC") {
        return 'POC-row';
      } else if (row.state == "销售") {
        return 'sell-row';
      } else if (row.state == "赠送") {
        return 'present-row';
      } else if (row.state == "报废") {
        return 'scrap-row';
      } else if (row.state == "维修") {
        return 'repair-row';
      } else if (row.state == "二手在库") {
        return 'secstore-row';
      } else {
      return '';
      }
    },
    formatStore(e) {
      return `在库：${this.cntStore}台`;
    },
    formatPOC(e) {
      return `POC：${this.cntPOC}台`;
    },
    formatSell(e) {
      return `销售：${this.cntSell}台`;
    },
    formatPresent(e) {
      return `赠送：${this.cntPresent}台`;
    },
    formatScrap(e) {
      return `报废：${this.cntScrap}台`;
    },
    formatSecStore(e) {
      return `二手在库：${this.cntSecStore}台`;
    },
    formatRepair(e) {
      return `维修：${this.cntRepair}台`;
    },
    handlePageChange(e) {
      this.page = e;
    },
    handleSizeChange(v) {
      this.rowsPerPage = v;
    },
  }
}
</script>

<style>
.el-icon-arrow-down {
  font-size: 12px;
}
.el-table .store-row {
  background: #eafde6 !important; 
}
.el-table .POC-row {
  background: rgb(235, 245, 249) !important;
}
.el-table .sell-row {
  background: #f8ebf9 !important;
}
.el-table .present-row {
  background: #ecebf9 !important;
}
.el-table .scrap-row {
  background: #f9ebeb !important;
}
.el-table .repair-row {
  background: #f9f8eb !important;
}
.el-table .secstore-row {
  background: #ffe4f0 !important;
}
</style>