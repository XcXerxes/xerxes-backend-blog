<template>
  <el-table :data="articleList" highlight-current-row >
    <el-table-column prop="title" label="标题" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="caption" label="描述" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column label="分类" align="center" show-overflow-tooltip>
      <template scope="scope">
        <span></span>
      </template>
    </el-table-column>
    <el-table-column prop="visit" label="浏览次数" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="like" label="喜欢次数" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="comment_count" label="评论次数" align="center" show-overflow-tooltip></el-table-column>
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
  props: ['articleList'],
  methods: {
    formatDate (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    handleView (index, row) {
      this.$emit('article-view', row)
    },
    handleEdit (index, row) {
      this.$emit('article-edit', row)
    },
    handleDelete (index, row) {
      this.$emit('article-delete', row)
    }
  }
}
</script>


