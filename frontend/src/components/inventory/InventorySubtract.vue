<template>
  <!-- 出库表单 -->
  <el-form :model="subForm" ref="subForm" label-position="right" label-width="50px">
    <el-form-item prop="code" size="mini" label="编号">
      <el-input v-model="subForm.code"></el-input>
    </el-form-item>
    <el-form-item prop="name" size="mini" label="名称">
      <el-input v-model="subForm.name"></el-input>
    </el-form-item>
    <el-form-item prop="allocation" size="mini"  label="货位">
      <el-input v-model="subForm.allocation"></el-input>
    </el-form-item>
    <el-form-item prop="acount" size="mini" label="数量">
      <el-input v-model="subForm.acount"></el-input>
    </el-form-item>
    <el-form-item prop="remark" size="mini" label="备注">
      <el-input v-model="subForm.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini"  @click="submitForm('subForm')">提交</el-button>
      <el-button size="mini"  @click="resetForm('subForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InventorySubtract',
  data(){
    return {
      subForm:{
        code:'',
        name:'',
        allocation:'',
        acount: '',
        remark:''
      }
    }
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid)=>{
        if (valid){
          alert('提交成功')
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
