<template>
  <div>
    <el-form :model="allocationModifyForm" :rules='rules' ref="allocationModifyForm"  label-position="right" label-width="50px">
      <el-form-item prop="allocation" size="mini"  label="货位">
        <el-select v-model="allocationModifyForm.allocation" filterable placeholder="输入名称搜索">
          <el-option
          v-for="item2 in storageOptions"
          :key="item2.value"
          :label="item2.value"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="state" size="mini"  label="状态">
        <el-select v-model="allocationModifyForm.state" filterable placeholder="请选择">
          <el-option
          v-for="item2 in stateOption"
          :key="item2.value"
          :label="item2.label"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="allocationModifyForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('allocationModifyForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('allocationModifyForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StorageModify',
  data () {
    return {
      storageOptions:[
        {
          value: 'A01A'
        }, {
          value: 'C03A'
        }
      ],
      stateOption:[
        { value:'1', label:'启用'},
        { value:'0', label:'停用'}
      ],
      allocationModifyForm:{
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
          title: '修改'+this.allocationModifyForm.allocation+'成功',
          message: '信息:'+this.allocationModifyForm.allocation+"/"+this.allocationModifyForm.state+"/"+this.allocationModifyForm.remark,
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
