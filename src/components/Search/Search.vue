<!-- page of search -->
<template>
  <div class="container">
    <div class="search">
      <el-input v-model="val" maxlength="30" placeholder="Search..." class="input"></el-input>
      <i class="el-icon-search icon"></i>
    </div>
    <p class="tips">
      <i class="iconfont">&#xe627;</i>根据关键词查找也是可以的哦
    </p>
    <div class="alternative">
      <div v-for="(item,index) of data" :key="index" class="item"># {{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      data: [
        "Vue",
        "React",
        "jQuery",
        "CSS",
        "webpack",
        "babel",
        "NodeJS",
        "ES6+",
        "Moblie Web",
        "PHP",
        "MySql",
        "element-ui",
        "小程序",
        "服务器",
        "Vue",
        "React",
        "jQuery",
        "CSS",
        "webpack",
        "babel",
        "NodeJS",
        "ES6+",
        "Moblie Web",
        "PHP",
        "MySql",
        "element-ui",
        "小程序",
        "服务器"
      ]
    };
  }
};
</script>   

<style lang="stylus" scoped>
@import '~css/variable.styl'
@import '~css/mixins.styl'
.container
  padding: 40px 0
  .search
    width: 60%
    margin: 0 auto
    position: relative
    .input
      text-align: center
      font-family: Arial, 'Microsoft YaHei'
      & >>> .el-input__inner
        input-color(25px, 14px)
    .icon
      position: absolute
      top: 50%
      right: 20px
      transform: translate(0, -50%)
      font-size: 20px
      cursor: pointer
      &:hover
        color: $theme-color
  .tips
    margin-top: 50px
    text-align: center
    i
      padding: 0 8px
      color: $theme-color
  .alternative
    width: 60%
    margin: 20px auto
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    .item
      font-size: 13px
      padding: 10px
      margin: 5px
      border-radius: 10px
      background-color: #fff
      cursor: pointer
      &:hover
        color: $theme-color
@media (max-width: 767px)
  .search
    width: 80% !important
  .alternative
    width: 90% !important
</style>
