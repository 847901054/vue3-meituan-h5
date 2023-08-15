<template>
  <div class="header">
    <div class="left item" @click="onReturn">
      <van-icon name="arrow-left" size="26" />
    </div>
    <div class="title item">{{ navTitle }}</div>
    <div class="item">
      <slot name="right"></slot>
    </div>
  </div>
  <div class="block"></div>
</template>

<script>

import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  props: ['title'],
  setup (props) {
    const router = useRouter()
    const route = useRoute()
    let navTitle = ref('')
    if (props.title) {
      navTitle = props.title
    } else {
      navTitle = route.meta.title
    }
    const onReturn = () => {
      router.back()
    }
    return {
      navTitle,
      onReturn
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  width: 100vw;
  height: 1.2rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 0 .3125rem;
  .title{
    color: #000;
    font-size: 0.45rem;
    font-weight: 600;
  }
  .item{
    &:nth-child(1){
      width: 20%;
    }
    &:nth-child(2){
      text-align: center;
      width: 50%;
    }
    &:nth-child(3){
      width: 30%;
    }
  }
}
.block{
  width: 100vw;
  height: 1.2rem;
}
</style>
