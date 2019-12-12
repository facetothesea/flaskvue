<template>
  <!-- 入库操作表单 -->
  <div>
  <el-form :model="goIn" label-width="15%" class="demo-dynamic">
    <el-form-item prop="code" size="mini"  label="物料编号">
      <el-input v-model="code"></el-input>
    </el-form-item>
    <el-form-item prop="name" size="mini"  label="物料名称">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item prop="allocation" size="mini"  label="货位名称">
      <el-input v-model="allocation"></el-input>
    </el-form-item>
    <el-form-item prop="acount" size="mini"  label="入库数量">
      <el-input v-model="acount"></el-input>
    </el-form-item>
    <el-form-item prop="remark" size="mini"  label="备注信息">
      <el-input v-model="remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini"  @click="showLog">提交</el-button>
      <el-button size="mini"  @click="showLog">重置</el-button>
    </el-form-item>
  </el-form>
    <el-button type="primary" size="mini" @click="showLog">测试Mock是否成功，查看console.log()</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    showLog () {
      // const path = `/api/user`
      axios.get('/api/user')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
