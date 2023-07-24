<template>
  <div>
    <div>
      <van-button type="success" @click="toast">点击打印</van-button>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    function toast () {
      console.log('我是zbt')
    }
    return {
      toast
    }
  },
}
</script>