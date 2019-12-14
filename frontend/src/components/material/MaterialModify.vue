<template>
  <div>
    <el-form :model="matAddForm" :rules='rules' ref="matAddForm"  label-position="right" label-width="50px">
      <el-form-item prop="code" size="mini"  label="编号">
        <el-input v-model="matAddForm.code" disabled></el-input>
      </el-form-item>
      <el-form-item prop="name" size="mini"  label="名称">
        <el-select v-model="matAddForm.name" filterable placeholder="选择或搜索" @change="handleChange">
          <el-option
          v-for="item in nameOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pcs" size="mini"  label="包装">
        <el-select v-model="matAddForm.pcs" filterable placeholder="请选择">
          <el-option
          v-for="item in pcsOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="state" size="mini"  label="状态">
        <el-select v-model="matAddForm.state" filterable placeholder="请选择">
          <el-option
          v-for="item2 in stateOption"
          :key="item2.value"
          :label="item2.label"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="matAddForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('matAddForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('matAddForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MaterialModify',
  data () {
    return {
      nameOption:[
        {
          value: '101',
          label: '电池12'
        }, {
          value: '102',
          label: '电池20'
        }
      ],
      pcsOption:[
        { value:'0', label:'件' },
        { value:'1', label:'托' },
        { value:'2', label:'箱' },
        { value:'3', label:'支' },
        { value:'4', label:'组' },
        { value:'5', label:'卷' }
      ],
      stateOption:[
        { value:'1', label:'启用'},
        { value:'0', label:'停用'}
      ],
      matAddForm:{
        code: '',
        name: '',
        state: '',
        pcs: '',
        remark: ''
      },
      rules:{
        name:[
          { required: true, message:"不能为空",trigger:'blur'}
        ],
        code:[
          {required:true,message:"不能为空",trigger:'blur'}
        ],
        pcs:[
          {required:true,message:"不能为空",trigger:'blur'}
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
          title: '创建'+this.matAddForm.name+'成功',
          message: '信息:'+this.matAddForm.code+"/"+this.matAddForm.name+"/"+this.matAddForm.pcs+"/"+this.matAddForm.state+"/"+this.matAddForm.remark,
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
    this.matAddForm.code=value
  }
  }
}
</script>
