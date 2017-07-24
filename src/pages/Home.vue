<template>
  <div class="home">
    <xcMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import xcMenu from '@/components/xc-menu'
export default {
  components: {
    xcMenu
  }
}
</script>

