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
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="acount"
            label="数量"
            width="180"
            sortable>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            width="180"
            sortable>
          </el-table-column>
          <el-table-column
            prop="lastdt"
            label="最后修改"
            width="180"
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

export default{
  name: "SafetyInventory",
  data(){
    return {
      activeName:'first',
      tableData: [
        { code: '1001', name: '1001', acount: '9000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1002', name: '1002', acount: '8000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1003', name: '1003', acount: '7000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1004', name: '1004', acount: '6000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1005', name: '1005', acount: '5000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1006', name: '1006', acount: '4000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1007', name: '1007', acount: '3000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1008', name: '1008', acount: '2000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1009', name: '1009', acount: '1000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1010', name: '1010', acount: '900', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1011', name: '1011', acount: '800', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
        { code: '1012', name: '1012', acount: '700', remark: '初始化1', lastdt: '2019-12-14 13:03:01' }
      ],
      activeName:'first'
      }
    },
    components: {
      safeadd,
      safemodify
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
