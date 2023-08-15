<template>
  <div class="store">
    <div>
      <Header />
    </div>
    <div class="content">
      店铺首页
    </div>
  </div>
</template>

<script>

import { useStore, mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import Header from '@/components/Header/index.vue'

export default {
  components: {
    Header
  },
  setup () {
    const store = useStore()
    console.log(store.state.user.name)
  }
}
</script>

<style lang="less" scoped>
.store{
  
}
</style>
