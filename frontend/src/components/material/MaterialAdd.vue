<template>
  <div>
    <el-form :model="matAddForm" :rules='rules' ref="matAddForm"  label-position="right" label-width="50px">
      <el-form-item prop="code" size="mini"  label="编号">
        <el-input v-model="matAddForm.code" disabled></el-input>
      </el-form-item>
      <el-form-item prop="name" size="mini"  label="名称">
        <el-input v-model="matAddForm.name"></el-input>
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
  name: 'MaterialAdd',
  data () {
    return {
      pcsOption: [ {} ],
      stateOption: [ {} ],
      matAddForm: {
        code: '',
        name: '',
        state: '',
        pcs: '',
        remark: ''
      },
      rules: {
        name: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        pcs: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        state: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    axios.get('/api/getpcss')
      .then(response => {
        this.pcsOption = response.data
      }).catch(error => {
        console.log(error)
      })
    axios.get('/api/getstates')
      .then(response => {
        this.stateOption = response.data
      }).catch(error => {
        console.log(error)
      })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        // 1.提交至操作记录表；
        // 2.更新当前库存表；
        // 3.更新页面显示数据；
          axios.post('/api/material/add', this.matAddForm)
            .then(response => {
              const a = JSON.stringify(response)
              const respData = JSON.parse(a).data
              if (response.statusText === 'OK') {
                this.$notify({
                  title: '物料创建成功',
                  message: '信息:' + this.matAddForm.code + '/' + this.matAddForm.name + '/' + this.matAddForm.state + '/' + this.matAddForm.remark,
                  type: 'success'
                })
                this.$emit('update_inventorys') // 更新你组件内容
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange (value) {
      this.addForm.code = value
    }
  }
}
</script>
