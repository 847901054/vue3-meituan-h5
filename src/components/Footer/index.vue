<template>
  <div class="tabbar">
    <div class="item">
      <router-link to='/home' active-class="nav-color">
        <div class="tab">
          <van-icon name="wap-home-o" size="20" />
          首页
        </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/cart' active-class="nav-color">
      <div class="tab">
        <van-icon name="cart-o" size="20" />
        购物车
      </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/order' active-class="nav-color">
        <div class="tab">
          <van-icon name="orders-o" size="20" />
          订单
        </div>
      </router-link>
    </div>
    <div class="item">
      <router-link to='/mine' active-class="nav-color">
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
  height: 50px;
  border: 1px solid #eee;
  .item{
    .nav-color{
      color: #fec22c;
    }
  }
  .tab{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    letter-spacing: 1px;
  }
}
</style>