<template>
  <div>
    <el-row>
      <p></p>
    </el-row>
    <el-row>
      <el-col :span="15" :offset="1" class="leftpan">
        <el-row v-for="(o, i) in storeData" :key="i">
          <el-col :span="2" v-for="(r,j) in o" :key="j">
            <el-button @click="showDrawer(r,i+j)" type="primary" class="btnshow" :key="i+j">{{i+j}}</el-button>
          </el-col>
        </el-row>
        <el-drawer
          title="详细信息"
          :visible.sync="drawer"
          :with-header="false"
          direction="rtl"
          class="drawer"
        >
          <span>货位[{{ now }}]存货信息</span>
          <el-table :data="drawerData">
            <el-table-column property="code" label="编号" width="150"></el-table-column>
            <el-table-column property="name" label="名称" width="200"></el-table-column>
            <el-table-column property="acount" label="数量"></el-table-column>
          </el-table>
        </el-drawer>
      </el-col>

      <el-col :span="5" class="rightpan">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="入库" name="first" align="left">
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

import additem from './inventory/InventoryAdd.vue'
import subitem from './inventory/InventorySubtract.vue'
import chgitem from './inventory/InventoryChange.vue'
import axios from 'axios'
export default{
  name: 'Inventory',
  data () {
    return {
      storeData: {
        'A': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'B': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'C': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'D':{
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'E': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'F': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'G': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'H': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'I': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        },
        'J': {
          '01A': [ ],
          '02A': [ ],
          '03A': [ ],
          '04A': [ ],
          '05A': [ ],
          '06A': [ ],
          '07A': [ ],
          '08A': [ ],
          '09A': [ ],
          '10A': [ ]
        }
      },
      now: '',
      drawer: false,
      drawerData: '',
      activeName: 'first'
    }
  },
  mounted(){
    this.updateData()
  },
  methods: {
    showDrawer (data, now) {
      this.drawerData = data
      this.drawer = true
      this.now = now
    },
    updateData() {
    axios.get('/api/inventory/getList')
      .then(response => {
        this.storeData = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
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
.btnshow {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 6px;
  color: #fff;
  background-color: rgba(72, 134, 153, 0.685);
  /* background-color:#409eff; */
  opacity: 1;
  border: none;
  font-weight: 400;
  font-family: Consolas, "Courier New", Courier, FreeMono, monospace;
}
.text {
  font-size: 8px;
  text-align: "center";
}
.item {
  padding: 0;
}

.drawer {
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 20px;
  color: black;
  font-weight: 900;
}
.el-table {
  font-size: 10px;
  font-weight: 100;
}
</style>
