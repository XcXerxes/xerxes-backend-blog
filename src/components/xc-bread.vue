<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{path: '/'}" >首页</el-breadcrumb-item>
    <template v-for="(item, index) in breadList">
      <el-breadcrumb-item :key="index" :to="{path: item.path}" >{{item.title}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
export default {
  props: ['breadList']
}
</script>

