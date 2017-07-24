<template>
  <section class="home-section animated bounceInRight">
    <xc-bread  :breadList="breadList"></xc-bread>
    <div class="home-section__warrpaer">
      <cate-form v-on:cate-add="addCate"></cate-form>
    </div>
  </section>
</template>
<script>
import xcBread from '@/components/xc-bread'
import cateForm from '@/components/cate/cate-form'
import api from '@/api'
import {backToIndex} from '@/utils'
export default {
  data () {
    return {
      breadList: [
        {path: '/cate', title: '分类'},
        {path: '/cate/add', title: '新增分类'}
      ],
      page: 'add'
    }
  },
  methods: {
    addCate (form) {
      api.addCate(form).then(data => {
        if (data.code === 200) {
          this.$message({
            type: 'success',
            message: data.message
          })
          this.$router.replace('/cate')
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
  components: {
    xcBread,
    cateForm
  }
}
</script>
