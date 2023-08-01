<template>
  <div class="item-box">
    <div class="item-left">
      <img :src="data.pic" alt="">
    </div>

    <div class="item-right">
      <div class="title">{{ data.title }}</div>
      <div class="sales">{{ data.sales }}</div>
      <div class="price">￥ {{ data.price }}</div>
      <div class="label">
        <div v-for="(item,index) in data.label" :key="index">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    props: ['value'],
    setup (props) {
      const data = props.value
      return {
        data
      }
    }
  }
</script>

<style lang="less" scoped>
.item-box{
  display: flex;
  align-items: center;
  .item-left{
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 5px;
    overflow: hidden;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .item-right{
    .title{
      font-size: 16px;
      font-weight: 600;
      color: #000;
      margin-bottom: 10px;
    }
    .sales{
      font-size: 12px;
      color: #999;
      margin-bottom: 10px;
    }
    .price{
      font-size: 12px;
      font-weight: 600;
      color: red;
      margin-bottom: 10px;
    }
    .label{
      display: flex;
      align-items: center;
      div{
        font-size: 12px;
        padding: 2px 5px;
        background-color: #fec22c;
        color: #000;
        border-radius: 4px;
        margin-right: 10px;
      }
    }
  }
}
</style>