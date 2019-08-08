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
.container
  padding: 40px 0
  animation: fade-in
  animation-duration: 0.5s
  .search
    width: 60%
    margin: 0 auto
    position: relative
    .input
      text-align: center
      font-size: 14px
      font-family: Arial, 'Microsoft YaHei'
      & >>> .el-input__inner
        border: 1px solid rgba(184, 197, 214, 0.2)
        border-radius: 25px
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04)
        &::-webkit-input-placeholder // 修改placeholder占位文本颜色
          color: #5f5f5f
        &:-moz-placeholder
          color: #5f5f5f
        &::-moz-placeholder
          color: #5f5f5f
        &:-ms-input-placeholder
          color: #5f5f5f
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
@keyframes fade-in
  0%
    transform: translateY(20px)
    opacity: 0
  100%
    transform: translateY(0)
    opacity: 1
@media (max-width: 767px)
  .search
    width: 80% !important
  .alternative
    width: 90% !important
</style>
