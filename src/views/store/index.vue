<template>
  <div class="store">
    <div>
      <Header />
    </div>
    <div class="content" @click="changeAge">
      改变年龄
    </div>
    <div>
      token: {{ token }}
    </div>
  </div>
</template>

<script>

import { useStore, mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { computed, ref, watch } from 'vue'
import Header from '@/components/Header/index.vue'

export default {
  components: {
    Header
  },
  setup () {
    const store = useStore()
    console.log(store.state.user.name)

    const token = computed(() => store.state.user.token)

    let age = ref(0)

    function changeAge () {
      console.log(age.value)
      age.value+=1
    }

    watch(age, (newVal) => {
      if (newVal) {
        console.log('age改变了')
      }
    })

    return {
      age,
      token,
      changeAge
    }
  }
}
</script>

<style lang="less" scoped>
.store{
  
}
</style>
