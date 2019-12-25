<template>
  <!-- 移库表单 -->
  <el-form :model="moveForm" :rules="rules" ref="moveForm"  label-position="right" label-width="50px">
    <el-form-item prop="allocationFrom" size="mini" label="移出">
      <el-select v-model="moveForm.allocationFrom" filterable placeholder="输入名称搜索">
        <el-option
        v-for="item2 in storageOptions"
        :key="item2.value"
        :label="item2.value"
        :value="item2.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="allocationTo" size="mini"  label="移入">
      <el-select v-model="moveForm.allocationTo" filterable placeholder="输入名称搜索">
        <el-option
        v-for="item3 in storageOptions"
        :key="item3.value"
        :label="item3.value"
        :value="item3.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="code" size="mini" label="编号">
      <el-input v-model="moveForm.code" disabled></el-input>
    </el-form-item>
    <el-form-item prop="name" size="mini"  label="名称">
      <el-select v-model="moveForm.name" filterable placeholder="选择或搜索" @change="handleChange">
          <el-option
          v-for="item in nameOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
          </el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="acount" size="mini" label="数量">
      <el-input v-model="moveForm.acount"></el-input>
    </el-form-item>
    <el-form-item prop="remark" size="mini" label="备注">
        <el-input type="textarea" cols="5" v-model="moveForm.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini"  @click="submitForm('moveForm')">提交</el-button>
      <el-button size="mini"  @click="resetForm('moveForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default{
  name: 'InventoryChange',
  data () {
    return {
      nameOptions: [ { } ],
      storageOptions: [ { } ],
      moveForm: {
        allocationFrom: '',
        allocationTo: '',
        code: '',
        name: '',
        acount: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        acount: [
          {required: true, pattern: /^\d{1,9}$/, message: '整数,最多9位'}
        ],
        allocationFrom: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        allocationTo: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    axios.get('/api/getMaterials')
      .then(response => {
        this.nameOptions = response.data
      }).catch(error => {
        console.log(error)
      })
    axios.get('/api/getAllocations')
      .then(response => {
        this.storageOptions = response.data
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
          axios.post('/api/inventory/chg', this.moveForm)
            .then(response => {
              const a = JSON.stringify(response)
              const respData = JSON.parse(a).data
              if (response.statusText === 'OK') {
                // console.log(respData.msg)
                this.$notify({
                  title: '移库成功',
                  message: '信息:' + this.moveForm.code + '/' + this.moveForm.name + '/' + this.moveForm.allocationFrom + '/' + this.moveForm.allocationTo + '/' + this.moveForm.acount + '/' + this.moveForm.remark,
                  type: 'success'
                })
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
      this.moveForm.code = value
    }
  }
}
</script>
