<template>
  <div>
    <el-form :model="matModForm" :rules='rules' ref="matModForm"  label-position="right" label-width="50px">
      <el-form-item prop="code" size="mini"  label="编号">
        <el-input v-model="matModForm.code" disabled></el-input>
      </el-form-item>
      <el-form-item prop="name" size="mini"  label="名称">
        <el-select v-model="matModForm.name" filterable placeholder="选择或搜索" @change="handleChange">
          <el-option
          v-for="item in nameOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="name2" size="mini"  label="新名">
        <el-input v-model="matModForm.name2" placeholder="为空时不更改"></el-input>
      </el-form-item>
      <el-form-item prop="pcs" size="mini"  label="包装">
        <el-select v-model="matModForm.pcs" filterable placeholder="请选择">
          <el-option
          v-for="item in pcsOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="state" size="mini"  label="状态">
        <el-select v-model="matModForm.state" filterable placeholder="请选择">
          <el-option
          v-for="item2 in stateOption"
          :key="item2.value"
          :label="item2.label"
          :value="item2.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" rows=5 v-model="matModForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini"  @click="submitForm('matModForm')">提交</el-button>
        <el-button size="mini"  @click="resetForm('matModForm')">重置</el-button>
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
      nameOption: [ { } ],
      pcsOption: [ {} ],
      stateOption: [ {} ],
      matModForm: {
        code: '',
        name: '',
        name2: '',
        state: '',
        pcs: '',
        remark: ''
      },
      rules: {
        name: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        code: [
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
    axios.get('/api/getMaterials')
      .then(response => {
        this.nameOption = response.data
      }).catch(error => {
        console.log(error)
      })
    axios.get('/api/getstates')
      .then(response => {
        this.stateOption = response.data
      }).catch(error => {
        console.log(error)
      })
    axios.get('/api/getpcss')
      .then(response => {
        this.pcsOption = response.data
      }).catch(error => {
        console.log(error)
      })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/material/mod', this.matModForm)
            .then(response => {
              const a = JSON.stringify(response)
              const respData = JSON.parse(a).data
              if (response.statusText === 'OK') {
                console.log(respData.msg)
                this.$notify({
                  title: '物料修改成功',
                  message: '信息:' + this.matModForm.code + '/' + this.matModForm.name + '/' + this.matModForm.state + '/' + this.matModForm.remark,
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
      this.matModForm.code = value
    }
  }
}
</script>
