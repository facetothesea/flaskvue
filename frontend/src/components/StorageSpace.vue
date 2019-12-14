<template>
  <div>
    <el-row>
      <p></p>
    </el-row>
    <el-row>
      <el-col :span='15' :offset="1" class="leftpan">
        <div>已有物料列表</div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'allocation', order: 'descending'}"
          >
          <el-table-column
            prop="allocation"
            label="编号"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="100"
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
            <addstorage></addstorage>
          </el-tab-pane>
          <el-tab-pane label="修改" name="second" align="left">
            <modifystorage></modifystorage>
          </el-tab-pane>
        </el-tabs>
      </el-col>


    </el-row>
  </div>
</template>

<script>

import addstorage from "./storage/StorageAdd.vue"
import modifystorage from "./storage/StorageModify.vue"

export default{
  name: "Material",
  data(){
    return {
      activeName:'first',
      tableData: [
        { allocation: 'A01A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01'},
        { allocation: 'A02A', state: '0', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01'},
        { allocation: 'A91A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01'},
        { allocation: 'A71A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01'}
      ],
      }
    },
  components: {
    addstorage,
    modifystorage
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
