<template>
  <div>
    <h2>啊哦~您要访问的页面不存在</h2>
    <img src="../../assets/img/404.jpg" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
div
  height: 100%
  padding-top: 40px
  background-color: #fff
h2
  text-align: center
  font-size: 26px
img
  width: 100%
@media (max-width: 500px)
  h2
    font-size: 20px
</style>
