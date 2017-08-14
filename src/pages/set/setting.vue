<template>
  <section class="home-section animated bounceInRight">
    <xc-bread :bread-list="breadList"></xc-bread>
    <div class="home-section__warrpaer"></div>
  </section>
</template>
<script>
  import xcBread from '@/components/xc-bread'
  export default {
    data () {
      return {
        breadList: [
          {path: '/setting', title: '个人设置'}
        ]
      }
    },
    components: {
      xcBread
    }
  }
</script>
