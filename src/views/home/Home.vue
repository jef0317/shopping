<template>
  <div id="home" >
    <nav-bar class="home-head"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" 
    ref="scroll" 
    :probeType="3"
     @scroll="BackScroll"
     :pullUpLoad="true"
     @pullingUp="loadMore">
      <home-swiper-vue :banners="banners"></home-swiper-vue>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tabcontrol" :tabItem="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </scroll>
    <back-top @click.native="backclick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import HomeSwiperVue from './childcomps/HomeSwiper.vue'
import RecommendView from './childcomps/RecommendView.vue'
import FeatureView from './childcomps/FeatureView'



import {getHomeMultidata,getHomeGoods} from 'network/home.js'


export default {
  name: 'home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiperVue,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods: {
        'pop': {page:0,list:[{x:1,y:1},{x:3,y:1}]},
        'new': {page:0,list:[{x:2,y:3}]},
        'sell': {page:0,list:[{x:2,y:3}]}
      },
      currentType:'pop',
      isShowBack:false,

    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    },

  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    loadMore(){
      console.log("加载"+ this.currentType);
      this.$refs.scroll.finishPull()
      
      // getHomeGoods(this.currentType)

      this.$refs.scroll.scroll.refresh()
    },
    BackScroll(position){
      this.isShowBack = (-position.y) > 300
    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list     
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        // this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPull()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh; 
    position: relative;
  }
  .home-head {
    background-color: var(--color-tint);
    color: aliceblue;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100
  }
  .tabcontrol{
    position: sticky;
    top:44px
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%
  }
</style>