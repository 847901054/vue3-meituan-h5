<template>
  <div class="mine">
    <div class="content">
      我的
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/Footer/index'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
.mine{
  display: flex;
  flex-direction: column;
  height: 100%;
  .content{
    flex: 1;
    overflow: auto;
    padding-bottom: 5px;
  }
}
</style>
