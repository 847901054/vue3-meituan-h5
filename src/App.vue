<template>
  <div class="app">
    <div class="content"></div>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/Footer/index'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
.app{
  display: flex;
  flex-direction: column;
}
</style>
