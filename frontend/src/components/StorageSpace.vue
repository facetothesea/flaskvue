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
          :default-sort = "{prop: 'allocation', order: 'descending'}">
          <el-table-column
            prop="allocation"
            label="编号"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
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
            <addstorage v-on:update_inventorys='updateData'></addstorage>
          </el-tab-pane>
          <el-tab-pane label="修改" name="second" align="left">
            <modifystorage v-on:update_inventorys='updateData'></modifystorage>
          </el-tab-pane>
        </el-tabs>
      </el-col>


    </el-row>
  </div>
</template>

<script>

import addstorage from "./storage/StorageAdd.vue"
import modifystorage from "./storage/StorageModify.vue"
import axios from 'axios'
export default{
  name: "Material",
  data(){
    return {
      activeName:'first',
      tableData: [ {} ],
      }
    },
  components: {
    addstorage,
    modifystorage
    },
  mounted(){
    this.updateData()
  },
  methods:{
    updateData() {
    axios.get('/api/storage/getList')
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
