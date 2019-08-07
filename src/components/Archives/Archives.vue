<template>
  <div class="container">
    <el-timeline>
      <!-- 创建每个时间点档案 -->
      <el-timeline-item
        v-for="(item,index) of date"
        :key="index"
        :timestamp="item.time"
        placement="top"
        icon="el-icon-s-promotion"
        size="large"
        type="danger"
      >
        <div class="content">
          <!-- 创建每个时间点内发生的事件 -->
          <el-card v-for="(e,i) of item.content" :key="i" class="item">
            <div class="content">{{e.main}}</div>
            <span class="category">
              {{e.category}}
              <i class="el-icon-edit"></i>
            </span>
          </el-card>
        </div>
      </el-timeline-item>
      <el-timeline-item
        timestamp="2019-8-1"
        placement="top"
        icon="el-icon-s-promotion"
        size="large"
        type="danger"
      >2019-8-1，HelloYec 诞生 ...</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //假数据
      date: [
        {
          time: "2019-06-15 Saturday",
          content: [
            {
              main: "操作模拟测试和单元测试",
              category: "NodeJS"
            },
            {
              main: "小记一则强制更新 Service-Worker 的方法",
              category: "前端技术"
            },
            {
              main: "小程序中类抖音的交互实现方案",
              category: "NodeJS"
            }
          ]
        },
        {
          time: "2019-06-14 Friday",
          content: [
            {
              main: "Vue-Cli3.x 更新填坑",
              category: "NodeJS"
            },
            {
              main: "封装小程序wx.request 添加token",
              category: "小程序"
            },
            {
              main: "JavaScript设计模式（下篇）",
              category: "JavaScript"
            },
            {
              main: "Babel-plugin-import使用示例：vant按需引入",
              category: "babel"
            },
            {
              main: "微信浏览器安卓键盘收回后表单不失焦的处理",
              category: "Moblie Web"
            }
          ]
        },
        {
          time: "2019-06-13 Thursday",
          content: [
            {
              main: "JavaScript设计模式（上篇）",
              category: "JavaScript"
            },
            {
              main: "前后端分离鉴权：token和axios请求响应拦截器",
              category: "Vue"
            },
            {
              main: "prerender-spa-plugin:Vue-seo爬坑",
              category: "Vue"
            },
            {
              main: "Linux上npm install报错权限不足的解决",
              category: "服务器"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
@import '~css/variable.styl'
.container
  padding: 30px
  animation: fade-in
  animation-duration: 0.5s
  .content
    display: flex
    flex-wrap: wrap
    .item
      width: 25%
      margin: 15px
      cursor: pointer
      &:hover
        transform: scale(1.05)
    .content
      ellipsis()
    .category
      font-size: 12px
      margin: 20px 0 15px
      float: right
      color: #5f5f5f
      &:hover
        color: $theme-color
@keyframes fade-in
  0%
    transform: translateY(20px)
    opacity: 0
  100%
    transform: translateY(0)
    opacity: 1
@media (max-width: 1400px)
  .main
    .item
      width: 44% !important
@media (max-width: 700px)
  .main
    .item
      width: 100% !important
</style>
