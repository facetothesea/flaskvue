<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      router=true
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">简易WMS</el-menu-item>
      <el-submenu index="2">
        <template slot="title">基本管理</template>
        <el-menu-item index="/materialmgmt">物料管理</el-menu-item>
        <el-menu-item index="/storagespacemgmt">货位管理</el-menu-item>
        <el-menu-item index="/safetyinventory">安全库存</el-menu-item>
      </el-submenu>
      <el-menu-item index="/inventorymgmt">库存管理</el-menu-item>
      <el-menu-item index="/dataexport">数据导出</el-menu-item>
      <el-menu-item index="/help">帮助</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/others">其他</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex2: '/'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.el-menu--horizontal>.el-menu-item{
  height: 40px;
  line-height: 40px;
  font-size: 8px;
}
.el-menu--horizontal>.el-submenu
.el-submenu__title{
  height: 40px;
  line-height: 40px;
  font-size: 7px;
  text-align: left;
}
</style>
