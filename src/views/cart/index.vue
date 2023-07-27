<template>
  <div class="cart">
    <div class="content">
      购物车
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
.cart{
  display: flex;
  flex-direction: column;
  height: 100%;
  .content{
    flex: 1;
    overflow: auto;
    padding-bottom: 10px;
  }
}
</style>
