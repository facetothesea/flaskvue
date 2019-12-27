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
      storageOptions: [ {} ],
      stateOption: [ {} ],
      allocationModifyForm: {
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
    axios.get('/api/getAllocations')
      .then(response => {
        this.storageOptions = response.data
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
          axios.post('/api/allocation/mod', this.allocationModifyForm)
            .then(response => {
              const a = JSON.stringify(response)
              const respData = JSON.parse(a).data
              if (response.statusText === 'OK') {
                console.log(respData.msg)
                this.$notify({
                  title: '货位修改成功',
                  message: '信息:' + this.allocationModifyForm.allocation + '/' + this.allocationModifyForm.state + '/' + this.allocationModifyForm.remark,
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
