<template>
  <div>
    <good-list-item v-for="(item,index) in goodslist" :key="index"  :goodsitem="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodsListItem'

export default {
  name: 'goodlist',
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodListItem
  }
}
</script>

<style>

</style>