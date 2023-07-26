<template>
  <div class="order">
    <div class="content">
      订单
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
.order{
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
