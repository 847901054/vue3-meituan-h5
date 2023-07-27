<template>
  <div class="home">
    <div class="content">
      <!-- header -->
      <div class="header">
        <div class="l-title">
          外卖
        </div>

        <div class="r-postion">
          <div class="postion">
            <van-icon name="location" size="20" />
            <div class="text">重新定位</div>
            <van-icon name="arrow" size="18" />
          </div>
        </div>
      </div>
      <!-- main -->
      <div class="main">
        <van-image
          width="100"
          height="100"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="100"
          height="100"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="100"
          height="100"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
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
.home{
  display: flex;
  flex-direction: column;
  height: 100%;
  .content{
    flex: 1;
    overflow: auto;
    padding-bottom: 5px;
  }
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 40px;
  background-image: linear-gradient(#fec22c,#fff);
  .l-title{
    font-size: 18px;
    font-weight: bolder;
  }
  .r-postion{
    .postion{
      display: flex;
      align-items: flex-end;
      .text{
        font-size: 14px;
        margin: 0 2px;
      }
    }
  }
}
.main{
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
  position: relative;
  top: -25px;
}
</style>
