<template>
  <el-table :data="userList" highlight-current-row >
    <el-table-column prop="username" label="用户名" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="username" label="昵称" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="email" label="邮箱" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column label="创建日期" align="center" show-overflow-tooltip>
      <template slot-scope="scope">
        <span>{{formatDate(scope.row.createdAt)}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <!-- <template scope="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template> -->
    </el-table-column>
  </el-table>
</template>
<script>
import moment from 'moment'
export default {
  props: ['userList'],
  methods: {
    formatDate (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    handleView (index, row) {

    },
    handleEdit (index, row) {

    },
    handleDelete (index, row) {

    }
  }
}
</script>

