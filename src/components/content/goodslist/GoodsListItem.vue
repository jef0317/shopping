<template>
  <div class="goodslistitem">
    <img src="#"/>
    <span>{{goodsitem.x}}</span>
    <span>1</span>
  </div>
</template>

<script>
export default {
  name:'goodslistitem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>

</style>