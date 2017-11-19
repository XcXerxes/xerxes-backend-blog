<template>
  <section class="home-section animated bounceInRight">
    <xc-bread :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <userTable :userList="userList" />
      <div class="home-section__pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 15]"
          :page-size="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import xcBread from '@/components/xc-bread'
import userTable from '@/components/user/user-table'
export default {
  data () {
    return {
      breadList: [
        {path: '', title: '用户列表'}
      ],
      page: 1,
      limit: 5,
      total: 1,
      userList: [
        {username: 'xcxerxes', email: 'xcxerxes@aliyun.com', createdAt: 1500865817}
      ]
    }
  },
  methods: {
    handleSizeChange (limit) {

    },
    handleCurrentChange (page) {

    }
  },
  components: {
    xcBread,
    userTable
  }
}
</script>

