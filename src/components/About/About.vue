<template>
  <div class="about">
    <h2 class="title">About</h2>
    <time itemprop="datePublished">Published on 2019-8-10</time>
    <p>基于Vue / Element-UI / PHP 开发的一个完整的的博客小项目</p>
    <p>欢迎交流：QQ2442240797</p>
    <p>邮箱：hellyec@163.com</p>
    <p>emmm... 暂时不知道写啥了，想起来再写吧</p>
  </div>
</template>

<style lang="stylus">
.about
  padding: 80px
  .title
    font-size: 21px
  time
    font-size: 12px
    line-height: 1.5
    color: #5f5f5f
  p
    position: relative
    margin: 15px 0
    &::before
      font-weight: 600
      position: absolute
      top: 0
      left: -15px
      content: '#'
      color: #eb5055
@media (max-width: 500px)
  .about
    padding: 40px
</style>
