<template>
  <!-- 移库表单 -->
  <el-form :model="moveForm" ref="moveForm"  label-position="right" label-width="50px">
    <el-form-item prop="allocationFrom" size="mini" label="移出">
      <el-input v-model="moveForm.allocationFrom"></el-input>
    </el-form-item>
    <el-form-item prop="allocationTo" size="mini"  label="移入">
      <el-input v-model="moveForm.allocationTo"></el-input>
    </el-form-item>
    <el-form-item prop="code" size="mini" label="编号">
      <el-input v-model="moveForm.code" disabled></el-input>
    </el-form-item>
    <el-form-item prop="name" size="mini"  label="名称">
      <el-input v-model="moveForm.name"></el-input>
    </el-form-item>
    <el-form-item prop="acount" size="mini" label="数量">
      <el-input v-model="moveForm.acount"></el-input>
    </el-form-item>
    <el-form-item prop="remark" size="mini" label="备注">
        <el-input v-model="moveForm.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini"  @click="submitForm('moveForm')">提交</el-button>
      <el-button size="mini"  @click="resetForm('moveForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default{
  name: 'InventoryChange',
  data(){
    return {
      moveForm:{
        allocationFrom:'',
        allocationTo:'',
        code:'',
        name:'',
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
