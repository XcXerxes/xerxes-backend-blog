<template>
  <section class="home-section animated bounceInRight">
    <xc-bread :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <article-table :articleList="articleList" v-on:article-view="viewArticle" v-on:article-edit="editArticle" v-on:article-delete="deleteArticle" />
      <div class="home-section__pagination">
        <el-button type="primary" @click="addArticle">发布文章</el-button>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[5, 10, 15]" :page-size="limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import xcBread from '@/components/xc-bread'
import articleTable from '@/components/article/article-table'
import { backToIndex } from '@/utils'
import api from '@/api'
export default {
  data () {
    return {
      breadList: [
        { path: '', title: '文章列表' }
      ],
      page: 1,
      limit: 5,
      total: 0,
      articleList: []
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
    addArticle () {
      this.$router.push('/article/add')
    },
    viewArticle ($row) {
      this.$router.push({ name: 'viewArticle', params: { row: $row } })
    },
    editArticle ($row) {
      this.$router.push({ name: 'editArticle', params: { row: $row, id: $row.id } })
    },
    deleteArticle ($row) {
      this.$confirm('确认删除吗?').then(() => {
        api.deleteArticleById($row.id).then(data => {
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
      api.getArticleList({ limit, page, sort }).then(data => {
        if (data.code === 200) {
          this.articleList = data.data
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
    articleTable
  }
}
</script>

