<template>
  <div>
    <el-row>
      <!-- 第一列库存显示项 -->
      <el-col :span='16' class="leftpan">
        <p>This is a test</p>

      </el-col>
      <!-- 第二列操作项 -->
      <el-col :span='8' class="rightpan">
        <el-tabs
        v-model="activeName"
        type="card">
          <el-tab-pane label="入库管理" name="first"  align="left" >
            <additem></additem>
          </el-tab-pane>
          <el-tab-pane label="出库管理" name="second" align="left">
            <subitem></subitem>
          </el-tab-pane>
          <el-tab-pane label="货位调整" name="third" align="left">
            <chgitem></chgitem>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import additem from "./inventory/InventoryAdd.vue"
import subitem from "./inventory/InventorySubtract.vue"
import chgitem from "./inventory/InventoryChange.vue"


export default{
  name: "Inventory",
  data(){
    return {
      activeName:'third'
    }
  },
  components:{
    additem,
    subitem,
    chgitem
    }
}
</script>

<style scoped>
/* .leftpan{
  background-color: rgb(192, 190, 196);
} */
</style>
