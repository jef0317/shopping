<template>
  <div class="recommendview">
    <div class="recommenditem" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendview',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
 .recommendview {
   display: flex;
   width:100%;
   text-align: center; 
   font-size: 12px;
   padding: 10px 0 10px 0;
   border-bottom: 8px solid rgba(100, 100, 100, 0.15)
 }
 .recommenditem {
   flex:1;
   width: 20%;
 }
 .recommenditem img {
   height:70px;
   margin-bottom: 8px
 }
</style>