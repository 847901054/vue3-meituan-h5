<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
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
#app{
  display: flex;
  flex-direction: column;
  .content{
    height: calc(100% - 22px);
    overflow: auto;
    padding-bottom: 5px;
  }
}
</style>
