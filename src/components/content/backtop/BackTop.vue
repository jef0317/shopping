<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop'
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    bottom:49px;
    height: 45px;
    right:2px
  }

  .backtop img{
    height: 43px;
    width: 43px
  }
</style>