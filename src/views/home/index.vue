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
        <div class="search-box">
          <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action>
            <template #action>
              <div @click="onSearch" class="serach-btn">搜索</div>
            </template>
          </van-search>
        </div>

        <div class="big-nav">
          <div v-for="(item, index) in big_sort" :key="index" class="nav-box">
            <div class="nav-icon">
              <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
              </svg>
            </div>
            <div class="nav-name">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="big-nav small-nav">
          <div v-for="(item, index) in small_sort" :key="index" class="nav-box">
            <div class="nav-icon">
              <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
              </svg>
            </div>
            <div class="nav-name">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div>
          <van-tabs v-model="currentTab" title-active-color="#fec22c" color="#fec22c" swipeable sticky>
            <van-tab :title="item.tab" v-for="(item, index) in centent_nav_list" :key="index">
              <tab-list :value="item" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

  import { ref, reactive, toRefs } from 'vue'
  import { big_sort, small_sort, centent_nav_list } from '@/common/data'
  import tabList from './modules/tab-list.vue'
  import Footer from '@/components/Footer/index'

  export default {
    components: {
      tabList,
      Footer
    },

    setup () {
      let searchValue = ref('')
      
      function onSearch () {
        console.log('搜索内容为: ', searchValue.value)
      }

      let currentTab = ref(0)

      const dataList = reactive({
        big_sort,
        small_sort,
        centent_nav_list
      })

      return {
        searchValue,
        onSearch,
        currentTab,
        ...toRefs(dataList)
      }
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
.serach-btn{
  background-color: #fec22c;
  color: #333;
  width: 60px;
  text-align: center;
  border-radius: 20px;
}
.big-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .nav-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 5);
    .nav-icon{
      .icon{
        width: 40px;
        height: 40px;
      }
    }
    .nav-name{
      font-size: 15px;
      color: #000;
    }
  }
}
.small-nav{
  flex-wrap: wrap;
  margin: 0;
  .nav-box{
    margin-bottom: 20px;
    .nav-icon{
      .icon{
        width: 30px;
        height: 30px;
      }
    }
    .nav-name{
      font-size: 13px;
      color: #000;
    }
  }
}
</style>
