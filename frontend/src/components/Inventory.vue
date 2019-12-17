<template>
  <div>
    <el-row>
      <p></p>
    </el-row>
    <el-row>
      <el-col :span="15" :offset="1" class="leftpan">
        <el-row v-for="(o, i) in storeData" :key="i">
          <el-col :span="2" v-for="(r,j) in o" :key="j">
            <el-tooltip placement="top" effect="dark" open-delay=300 hide-after=2000 >
              <div slot="content">{{ acountData[i][j] }}</div>
              <el-button @click="showDrawer(r,i,j)" type="primary" class="btnshow" :key="i+j" :style="{'background-color': colorList[Math.floor(acountData[i][j]/(acountMax/9))]}">{{(i+j).slice(0,4)}} </el-button>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-drawer
          title="详细信息"
          :visible.sync="drawer"
          :with-header="false"
          direction="rtl"
          class="drawer"
        >
          <span>货位[{{ now }}]存货共[{{acountData[i][j]}}]</span>
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
      acountMax:0,
      colorList:[ //颜色从浅到深，共10个颜色
        // '#ffffff',
        '#fff5ee',
        '#fdf5e6',
        '#ffefd5',
        '#ffe4c4',
        '#ffdead',
        '#f5deb3',
        '#d2b48c',
        '#f4a460',
        '#ff7f50',
        '#ff4500'
      ],
      acountData:{
        'A': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'B': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'C': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'D': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'E': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'F': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'G': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'H': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'I': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0},
        'J': {'01A': 0, '02A':0, '03A': 0, '04A': 0, '05A': 0,'06A': 0, '07A': 0, '08A': 0, '09A': 0, '10A': 0}
      },
      storeData: {
        'A': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'B': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'C': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'D':{
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'E': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'F': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'G': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'H': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'I': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        },
        'J': {
          '01A': [ ], '02A': [ ], '03A': [ ], '04A': [ ], '05A': [ ],
          '06A': [ ], '07A': [ ], '08A': [ ], '09A': [ ], '10A': [ ]
        }
      },
      now: '',
      i: 'A',
      j: '01A',
      drawer: false,
      drawerData: '',
      activeName: 'first'
    }
  },
  mounted(){
    this.updateData()
  },
  methods: {
    showDrawer (data, i,j) {
      this.drawerData = data
      this.drawer = true
      this.now = i+j
      this.i=i
      this.j=j
    },
    updateData() {
    axios.get('/api/inventory/getList')
      .then(response => {
        // this.storeData = response.data
        // 获取后赋值
        for(var key in this.storeData){
          // console.log(key)
          for(var val in this.storeData[key]){
            // console.log(val)
            if ((key in response.data) && (val in response.data[key])){
              this.storeData[key][val]=response.data[key][val]
              if(response.data[key][val].length>0){
                var temp=0
                for(var i=0;i< response.data[key][val].length;i++){
                  temp=temp+response.data[key][val][i]["acount"]
                }
                // console.log(temp)
                this.acountData[key][val]=temp
                if(temp>this.acountMax){
                  this.acountMax=temp
                }
              }
            }else{
              response.data[key][val]=[]
            }
          }
        }
        // console.log(this.acountData)
        // console.log(this.acountMax)
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
  text-align: center;
  color: #333;
  background-color: rgba(72, 134, 153, 0.685);
  border: 0.5px dashed ;
  font-weight: 400;
  /* float:left; */
  font-family: Consolas, "Courier New", Courier, FreeMono, monospace;
}
.btnshow:hover{
  border: 0.5px solid whitesmoke;
  background-color:black !important;
  color: white;
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
