<template>
  <section class="home-section animated bounceInRight">
    <xc-bread  :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <article-form v-on:article-form="addArticle" :cateList="cateList" :article-form="articleForm"></article-form>
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
        {path: '/article/add', title: '发布文章'}
      ],
      page: 'add',
      cateList: [],
      articleForm: {
        title: '',
        caption: '',
        thumb: '',
        categoryId: '',
        html: ''
      }
    }
  },
  methods: {
    addArticle (form) {
      api.addArticle(form).then(data => {
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
    }
  },
  created () {
    this.fetchCates()
  },
  components: {
    xcBread,
    articleForm
  }
}
</script>
