<template>
  <el-table :data="cateList" highlight-current-row >
    <el-table-column prop="cate_name" label="分类名称" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="cate_sort" label="分类排序" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column label="创建日期" align="center" show-overflow-tooltip>
      <template scope="scope">
        <span>{{formatDate(scope.row.createdAt)}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import moment from 'moment'
export default {
  props: ['cateList'],
  methods: {
    formatDate (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    handleView (index, row) {
      this.$emit('cate-view', row)
    },
    handleEdit (index, row) {
      this.$emit('cate-edit', row)
    },
    handleDelete (index, row) {
      this.$emit('cate-delete', row)
    }
  }
}
</script>


