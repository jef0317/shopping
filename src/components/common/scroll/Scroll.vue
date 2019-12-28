<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type: Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll: null,
      position: ''
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad
    })

    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
      // this.scroll.finishPullUp()
      // console.log("加载")
    })
  },
  methods: {
    scrollTo(x,y,time=500) {
      this.scroll.scrollTo(x,y,time)
    },
    finishPull(){
      this.scroll.finishPullUp()
    }
  },
}
</script>

<style scoped>

</style>