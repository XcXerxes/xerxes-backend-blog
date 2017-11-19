<template>
  <el-menu :default-active="selectedRoute" class="home-menu" router>
    <el-menu-item index="/user"><i class="el-icon-menu"></i>用户管理</el-menu-item>
    <el-menu-item index="/cate"><i class="el-icon-menu"></i>分类管理</el-menu-item>
    <el-menu-item index="/article"><i class="el-icon-message"></i>文章管理</el-menu-item>
    <el-menu-item index="/setting"><i class="el-icon-setting"></i>个人设置</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data () {
      return {
        selectedRoute: '/user'
      }
    },
    created () {
      this.selectedRoute = this.$route.path
    }
  }
</script>
