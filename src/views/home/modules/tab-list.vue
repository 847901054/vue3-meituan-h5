<template>
  <div class="item-box">
    <tab-item v-for="(item, index) in data" :key="index" :value="item" />
  </div>
</template>

<script>
  import tabItem from './tab-item.vue'
  export default {
    components: {
      tabItem
    },
    props: ['value'],
    setup (props) {
      const data = props.value.data
      return {
        data
      }
    }
  }
</script>

<style lang="less" scoped>
.item-box{
  margin-bottom: 20px;
  padding: 10px;
}
</style>