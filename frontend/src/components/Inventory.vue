<template>
  <div>
    <el-row>
      <p></p>
    </el-row>
    <el-row>
      <el-col :span='12' :offset="2" class="leftpan">
        <el-row v-for="(o, i) in storeData" :key=i>
          <el-col :span='2' v-for="(r,j) in o" :key=j>
            <el-button @click="showDrawer(r,i+j)" type="primary" class="btnshow" :key="i+j">
              {{i+j}}
            </el-button>
          </el-col>
        </el-row>
        <el-drawer
          title="详细信息"
          :visible.sync="drawer"
          :with-header="false"
          direction="ltr"
          class="drawer">
          <span>货位[{{ now }}]存货信息</span>
          <el-table :data="drawerData">
            <el-table-column property="code" label="编号" width="150"></el-table-column>
            <el-table-column property="name" label="名称" width="200"></el-table-column>
            <el-table-column property="acount" label="数量"></el-table-column>
          </el-table>
        </el-drawer>
      </el-col>

      <el-col :span='7' class="rightpan">
        <el-tabs
        v-model="activeName"
        type="border-card">
          <el-tab-pane label="入库" name="first"  align="left" >
            <additem></additem>
          </el-tab-pane>
          <el-tab-pane label="出库" name="second" align="left">
            <subitem></subitem>
          </el-tab-pane>
          <el-tab-pane label="调整" name="third" align="left">
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
      storeData:{
        'A': {
          '01A':[ ],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 },{ code:'003',  name:'电池120',  acount: 1000 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 },{ code:'010',  name:'电池110',  acount: 1100 },{ code:'011',  name:'电池2',  acount: 10 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'B': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'C': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'D': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'E': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'F': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'G': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'H': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'I': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        },
        'J': {
          '01A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '02A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '03A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '04A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '05A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '06A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '07A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '08A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '09A':[ { code:'001',  name:'电池12',  acount: 100 }],
          '10A':[ { code:'001',  name:'电池12',  acount: 100 }]
        }
      },
      now:'',
      drawer: false,
      drawerData:'',
      activeName:'first'
      }
    },
  methods:{
    showDrawer(data,now){
      this.drawerData=data
      this.drawer=true
      this.now=now
    }
  },
  components: {
    additem,
    subitem,
    chgitem
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
