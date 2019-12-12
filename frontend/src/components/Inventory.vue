<template>
  <el-row>
    <!-- 第一列库存显示项 -->
    <el-col :span='17' class="leftpan">
      <temple>
        this is a test
      </temple>
    </el-col>
    <!-- 第二列操作项 -->
    <el-col :span='7' class="rightpan">
      <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="card"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-tab-pane label="入库管理" name="first"  align="left">
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
</template>

<script>
import additem from "./inventory/InventoryAdd"
import subitem from "./inventory/InventorySubtract"
import chgitem from "./inventory/InventoryChange"

export default{
  name: "Inventory",
  data(){
    return {
      activeName:'third'
    }
  },
  methods: {
    handleClick(tab,event){
      console.log(tab,event)
    }
  },
  components:{additem,subitem,chgitem}
}
</script>

<style scoped>
.leftpan{
  background-color: rgb(192, 190, 196);
}
</style>
