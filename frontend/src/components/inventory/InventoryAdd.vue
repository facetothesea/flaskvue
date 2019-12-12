<template>
  <!-- 入库操作表单 -->
  <div>
    <el-form :model="addForm" ref="addForm" label-width="auto" class="demo-dynamic">
      <el-form-item prop="code" size="mini"  label="编号">
        <el-input v-model="addForm.code"></el-input>
      </el-form-item>
      <el-form-item prop="name" size="mini"  label="名称">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="allocation" size="mini"  label="货位">
        <el-input v-model="addForm.allocation"></el-input>
      </el-form-item>
      <el-form-item prop="acount" size="mini"  label="数量">
        <el-input v-model="addForm.acount"></el-input>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input v-model="addForm.remark"></el-input>
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
      addForm:{
        code: '',
        name: '',
        allocation: '',
        acount: '',
        remark: ''
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
