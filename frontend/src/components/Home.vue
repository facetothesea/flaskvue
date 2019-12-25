<template>
  <div>
    <p>首页--本页无内容，请通过链接进入相关模块</p>
    <ul>
      <el-link href="/materialmgmt" type="primary">物料管理</el-link>
      <el-link href="/storagespacemgmt" type="primary">货位管理</el-link>
      <el-link href="/safetyinventory" type="primary">安全库存</el-link>
    </ul>
    <ul>
      <el-link href="/inventorymgmt" type="primary">库存管理</el-link>
    </ul>
    <ul>
      <el-link href="/dataexport" type="primary">数据导出</el-link>
    </ul>
    <ul>
      <el-link href="/about" type="primary">关于</el-link>
    </ul>
    <ul>
      <el-link href="/others" type="primary">其他</el-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      flag: "a"
    }
  }
}
</script>
