<template>
  <div>
    <el-form :model="allocationAddForm" :rules='rules' ref="allocationAddForm"  label-position="right" label-width="50px">
      <el-form-item prop="allocation" size="mini"  label="货位">
        <el-input v-model="allocationAddForm.allocation"></el-input>
      </el-form-item>
      <el-form-item prop="state" size="mini"  label="状态">
        <el-select v-model="allocationAddForm.state" filterable placeholder="请选择">
          <el-option
          v-for="item2 in stateOption"
          :key="item2.value"
          :label="item2.label"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="allocationAddForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('allocationAddForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('allocationAddForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StorageAdd',
  data () {
    return {
      stateOption:[
        { value:'1', label:'启用'},
        { value:'0', label:'停用'}
      ],
      allocationAddForm:{
        allocation: '',
        state: '',
        remark: ''
      },
      rules:{
        allocation:[
          { required: true, message:"不能为空",trigger:'blur'}
        ],
        state:[
          {required:true,message:"不能为空",trigger:'blur'}
        ]
      }
    }
  },
  methods: {
  submitForm(formName){
    this.$refs[formName].validate((valid)=>{
      if (valid){
        // 1.提交至操作记录表；
        // 2.更新当前库存表；
        // 3.更新页面显示数据；
        this.$notify({
          title: '创建'+this.allocationAddForm.allocation+'成功',
          message: '信息:'+this.allocationAddForm.allocation+this.allocationAddForm.state+"/"+this.allocationAddForm.remark,
          type: 'success'
        });
      }else{
        // this.$alert('提交失败,请联系管理员',"未提交")
        console.log('未提交')
      }
    })
  },
  resetForm(formName){
    this.$refs[formName].resetFields()
  }
  }
}
</script>
