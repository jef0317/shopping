<template>
  <div class="tabbaritem" @click="tabbarclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activetStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'deeppink'
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activetStyle() {
      return this.isActive ? {color: this.activecolor} : {}
    },
  },
  methods: {
    tabbarclick() {
       this.$router.push(this.path)
    }
},
}
  
</script>

<style>
  .tabbaritem {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbaritem img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>