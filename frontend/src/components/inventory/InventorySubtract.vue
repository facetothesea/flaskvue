<template>
  <!-- 出库表单 -->
  <el-form :model="goOut" label-width="15%" class="demo-dynamic">
    <el-form-item prop="code" size="mini" label="物料编号">
      <el-input v-model="code"></el-input>
    </el-form-item>
    <el-form-item prop="name" size="mini"  label="物料名称">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item prop="allocation" size="mini"  label="货位名称">
      <el-input v-model="allocation"></el-input>
    </el-form-item>
    <el-form-item prop="acount" size="mini"  label="出库数量">
      <el-input v-model="acount"></el-input>
    </el-form-item>
    <el-form-item prop="remark" size="mini"  label="备注信息">
      <el-input v-model="remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini"  @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button size="mini"  @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
