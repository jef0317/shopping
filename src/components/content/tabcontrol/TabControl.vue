<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in tabItem" :key="index" class="tabitem" @click="itemClick(index)" :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  props:{
    tabItem:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabClick",index)
    }
  }
  
}
</script>

<style>
  .tabcontrol {
    display: flex;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
    height: 44px;
    line-height: 44px
  }
  .tabitem {
    flex:1
  }
  .active {
    color: var(--color-high-text);
    
  }
  .active span {
    border-bottom:3px solid var(--color-tint);
    padding-bottom: 3px
  }
</style>