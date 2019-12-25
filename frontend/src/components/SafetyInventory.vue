<template>
  <div>
    <el-row>
      <p></p>
    </el-row>
    <el-row>
      <el-col :span='13' :offset="3" class="leftpan">
        <div>安全库存列表</div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'code', order: 'descending'}"
          >
          <el-table-column
            prop="code"
            label="编号"
            sortable>
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            sortable>
          </el-table-column>
          <el-table-column
            prop="acount"
            label="数量"
            sortable>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            sortable>
          </el-table-column>
          <el-table-column
            prop="lastdt"
            label="最后修改"
            sortable>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span='5' class="rightpan">
        <el-tabs
        v-model="activeName"
        type="border-card">
          <el-tab-pane label="新增" name="first"  align="left" >
            <safeadd></safeadd>
          </el-tab-pane>
          <el-tab-pane label="修改" name="second" align="left">
            <safemodify></safemodify>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import safeadd from "./safety/SafetyAdd.vue"
import safemodify from "./safety/SafetyModify.vue"
import axios from "axios"
export default{
  name: "SafetyInventory",
  data(){
    return {
      activeName:'first',
      tableData: [{}],
      activeName:'first'
      }
    },
    components: {
      safeadd,
      safemodify
    },
  mounted(){
    this.updateData()
  },
  methods:{
    updateData() {
    axios.get('/api/safety/getList')
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.btnshow{
  margin-left: 10px;
  margin-right: 10px;
  margin-top:10px;
  margin-bottom:5px;
  font-size:6px;
  color: #fff;
  background-color: rgba(72, 134, 153, 0.685);
  /* background-color:#409eff; */
  opacity:1.0;
  border:none;
  font-weight:400;
  font-family:Consolas,"Courier New",Courier,FreeMono,monospace;
}
.text{
  font-size: 8px;
  text-align: 'center' ;
}
.item{
  padding: 0;
}

.drawer{
  margin-top:80px;
  margin-bottom:80px;
  font-size:20px;
  color:black;
  font-weight: 900;
}
.el-table{
  font-size:10px;
  font-weight: 100;
}
</style>
