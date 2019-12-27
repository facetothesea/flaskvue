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
      stateOption: [ {} ],
      allocationAddForm: {
        allocation: '',
        state: '',
        remark: ''
      },
      rules: {
        allocation: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        state: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
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
          axios.post('/api/allocation/add', this.allocationAddForm)
            .then(response => {
              const a = JSON.stringify(response)
              const respData = JSON.parse(a).data
              if (response.statusText === 'OK') {
                console.log(respData.msg)
                this.$notify({
                  title: '货位添加成功',
                  message: '信息:' + this.allocationAddForm.allocation + '/' + this.allocationAddForm.state + '/' + this.allocationAddForm.remark,
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
    }
  }
}
</script>
