<template>
  <div class="item-box">
    <tab-item v-for="(item, index) in data" :key="index" :value="item" @click="toStroe(item)" />
  </div>
</template>

<script>
  import { useRouter, useRoute } from 'vue-router'
  import tabItem from './tab-item.vue'
  export default {
    components: {
      tabItem
    },
    props: ['value'],
    setup (props) {
      const data = props.value.data
      const router = useRouter() // 路由跳转方法
      const route = useRoute() // 路由信息
      function toStroe (item) {
        router.push({
          path: '/store'
        })
      }
      return {
        data,
        toStroe
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