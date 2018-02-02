<template>
  <section class="home-section animated bounceInRight">
    <xc-bread  :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <article-form v-on:article-form="updateArticle" :cateList="cateList" :article-form="articleInfo"></article-form>
    </div>
  </section>
</template>
<script>
import xcBread from '@/components/xc-bread'
import articleForm from '@/components/article/article-form'
import api from '@/api'
import {backToIndex} from '@/utils'
export default {
  data () {
    return {
      breadList: [
        {path: '/article', title: '文章'},
        {path: '/article/edit', title: '编辑文章'}
      ],
      page: 'add',
      cateList: [],
      articleInfo: {}
    }
  },
  methods: {
    updateArticle (form) {
      api.updateArticle(form).then(data => {
        if (data.code === 200) {
          this.$message({
            type: 'success',
            message: data.message
          })
          this.$router.replace('/article')
        } else if (data.code === -500) {
          backToIndex(this, data.message)
        } else {
          this.$message.error(data.message)
        }
      }).catch(err => {
        this.$message.error(err)
      })
    },
    fetchCates () {
      api.getAllCates().then(data => {
        if (data.code === 200) {
          this.cateList = data.data
        } else if (data.code === -500) {
          backToIndex(this, data.message)
        } else {
          this.$message.error(data.message)
        }
      }).catch(err => {
        this.$message.error(err)
      })
    },
    fetchArticleItem (id) {
      api.getArticleItem(id).then(data => {
        if (data.code === 200) {
          this.articleInfo = Object.assign({}, data.data)
        } else if (data.code === -500) {
          backToIndex(this, data.message)
        } else {
          this.$message.error(data.message)
        }
      })
    }
  },
  created () {
    this.fetchCates()
    this.fetchArticleItem(this.$route.params.id)
  },
  components: {
    xcBread,
    articleForm
  }
}
</script>
