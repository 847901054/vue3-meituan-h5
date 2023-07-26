<template>
  <div class="tabbar">
    <div class="item">
      <router-link to='/home'>
        <div class="tab">
          <van-icon name="wap-home-o" size="20" />
          首页
        </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/cart'>
      <div class="tab">
        <van-icon name="cart-o" size="20" />
        购物车
      </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/order'>
        <div class="tab">
          <van-icon name="orders-o" size="20" />
          订单
        </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/mine'>
        <div class="tab">
          <van-icon name="user-o" size="20" />
          我的
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabbar{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 22px;
  .item{
    font-size: 6px;
  }
  .tab{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 6px;
    letter-spacing: 1px;
  }
}
</style>