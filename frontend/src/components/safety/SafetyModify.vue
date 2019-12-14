<template>
  <div>
    <el-form :model="safeModifyForm" :rules='rules' ref="safeModifyForm"  label-position="right" label-width="50px">
      <el-form-item prop="code" size="mini"  label="编号" disabled>
        <el-input v-model="safeModifyForm.code" disabled></el-input>
      </el-form-item>
      <el-form-item prop="name" size="mini"  label="名称">
        <el-select v-model="safeModifyForm.name" filterable placeholder="选择或搜索" @change="handleChange">
          <el-option
          v-for="item in nameOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="acount" size="mini"  label="数量">
        <el-input v-model="safeModifyForm.acount"></el-input>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="safeModifyForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('safeModifyForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('safeModifyForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SafetyModify',
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
      safeModifyForm:{
        code: '',
        name: '',
        acount: '',
        remark: ''
      },
      rules:{
        name:[
          { required: true, message:"不能为空",trigger:'blur'}
        ],
        code:[
          {required:true,message:"不能为空",trigger:'blur'}
        ],
        acount:[
          {required:true,pattern:/^\d{1,9}$/,message:'整数,最多9位'}
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
          title: '创建'+this.safeModifyForm.name+'成功',
          message: '信息:'+this.safeModifyForm.code+"/"+this.safeModifyForm.name+"/"+this.safeModifyForm.acount+"/"+this.safeModifyForm.remark,
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
  },
  handleChange(value){
    this.safeModifyForm.code=value
  }
  }
}
</script>
