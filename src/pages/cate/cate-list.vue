<template>
  <section class="home-section animated bounceInRight">
    <xc-bread :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <cate-table :cateList="cateList" v-on:cate-view="viewCate" v-on:cate-edit="editCate" v-on:cate-delete="deleteCate" />
      <div class="home-section__pagination">
        <el-button type="primary" @click="addCate">添加分类</el-button>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[5, 10, 15]" :page-size="limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import xcBread from '@/components/xc-bread'
import cateTable from '@/components/cate/cate-table'
import { backToIndex } from '@/utils'
import api from '@/api'
export default {
  data () {
    return {
      breadList: [
        { path: '', title: '分类列表' }
      ],
      page: 1,
      limit: 5,
      total: 0,
      cateList: []
    }
  },
  methods: {
    handleSizeChange (limit) {
      this.limit = limit
      this.fetchList({ limit, page: this.page })
    },
    handleCurrentChange (page) {
      this.page = page
      this.fetchList({ page, limit: this.limit })
    },
    addCate () {
      this.$router.push('/cate/add')
    },
    viewCate ($row) {
      this.$router.push({ name: 'viewCate', params: { row: $row } })
    },
    editCate ($row) {
      this.$router.push({ name: 'editCate', params: { row: $row } })
    },
    deleteCate ($row) {
      this.$confirm('确认删除吗?').then(() => {
        api.deleteCateById($row.id).then(data => {
          if (data.code === 200) {
            this.$message({
              type: 'success',
              message: data.message
            })
            this.fetchList({
              limit: this.limit,
              page: this.page
            })
          } else if (data.code === -500) {
            console.log('aa')
            backToIndex(this, data.message)
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          this.$message.error(err)
        })
      }).catch(err => {
        console.log(err)
      })
    },
    fetchList ({ limit, page, sort }) {
      api.getCateList({ limit, page, sort }).then(data => {
        if (data.code === 200) {
          this.cateList = data.data
          this.total = data.total
        } else if (data.code === -200) {
          this.$message.error(data.message)
        }
      }).catch(err => {
        this.$message.error(err)
      })
    }
  },
  created () {
    const { limit, page } = this
    this.fetchList({ limit, page })
  },
  components: {
    xcBread,
    cateTable
  }
}
</script>

