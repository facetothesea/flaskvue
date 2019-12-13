<template>
  <!-- 入库操作表单 -->
  <div>
    <el-form :model="addForm" :rules='rules' ref="addForm"  label-position="right" label-width="50px">
      <el-form-item prop="code" size="mini"  label="编号">
        <el-input v-model="addForm.code" disabled></el-input>
      </el-form-item>
      <el-form-item prop="invname" size="mini"  label="名称">
        <el-select v-model="addForm.invname" filterable placeholder="输入名称搜索">
          <el-option
          v-for="item in nameOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="allocation" size="mini"  label="货位">
        <el-select v-model="addForm.allocation" filterable placeholder="输入名称搜索">
          <el-option
          v-for="item2 in storageOptions"
          :key="item2.value"
          :label="item2.value"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="acount" size="mini"  label="数量">
        <el-input v-model="addForm.acount"></el-input>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="addForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('addForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InventoryAdd',
  data () {
    return {
      nameOptions:[
        {
          value: '101',
          label: '电池12'
        }, {
          value: '102',
          label: '电池20'
        }
      ],
      storageOptions:[
        {
          value: 'A01A'
        }, {
          value: 'C03A'
        }
      ],
      addForm:{
        code: '',
        invname: '',
        allocation: '',
        acount: '',
        remark: ''
      },
      rules:{
        invname:[
          { required: true, message:"不能为空",trigger:'blur'}
        ],
        code:[
          {required:true,message:"不能为空",trigger:'blur'}
        ],
        acount:[
          {required:true,type:'number',message:'必须为数字'}
        ],
        allocation:[
          {required:true,message:"不能为空",trigger:'blur'}
        ]
      }
    }
  },
  watch:{
    invname(val,oldVal){
      console.log(val,oldVal)
    },
    acount(val){
      console.log(val)
    }
  },
  methods: {
  submitForm(formName){
    this.$refs[formName].validate((valid)=>{
      if (valid){
        alert('提交成功')
        // 1.提交至操作记录表；
        // 2.更新当前库存表；
        // 3.更新页面显示数据；
      }else{
        console.log('inventoryChange submitted....')
        alert('提交失败')
        return false
      }
    })
  },
  resetForm(formName){
    this.$refs[formName].resetFields()
  }
  }
}
</script>
