<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "../src/assets/css/_reset.scss";
  @import "../src/assets/css/public.scss";
  #app {
    height: 100vh;
  }
</style>
