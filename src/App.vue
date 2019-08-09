<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <!-- 2. v-if确保数据请求到了再加载页面 -->
      <router-view v-if="article" :article="article" class="page" />
    </div>
    <comment v-if="$route.name==='article'"></comment>
    <Footer :article="article" class="footer"></Footer>
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import Header from "comm/Header/Header";
import Footer from "comm/Footer/Footer";
import Comment from "comm/Comment/Comment";
import BackTop from "comm/BackTop/BackTop";
export default {
  name: "App",
  data() {
    return { article: null };
  },
  created() {
    // 1. 大多数页面都需要all_article数据，直接在app.vue里面获取再传值，避免多个页面重复请求
    // 缺点在于路由切换不会实时获取数据，刷新是可以的
    this.$http.article.all_Article().then(res => {
      if (!res || res.code !== 1) return;
      this.article = res.article;
    });
  },
  components: { Header, Footer, Comment, BackTop }
};
</script>

<style lang="stylus">
@import '~css/variable.styl'
html, body
  background-color: #f3f3f3
  width: 100%
  .header
    position: fixed
    top: 0
    left: 0
    z-index: 10
    width: 100%
    max-width: 100%
    background-color: #fff
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1)
  .main
    min-height: 500px
    padding-top: 60px
    margin: 0 auto
    .page
      animation: fade-in
      animation-duration: 0.5s
  .footer
    background-color: #fff
// http进度条样式
#nprogress .bar
  background: $theme-color !important
// 文章代码块样式
.ql-syntax
  padding: 20px !important
  margin: 10px 0
  border-radius: 5px
  overflow: auto
  background-color: #263238 !important
code, pre
  color: #e4e7ed
  font-family: Consolas, Monaco, Menlo, Bitstream Vera Sans Mono, DejaVu Sans Mono, monospace !important
// 浏览器文本选中颜色&背景色
::selection
  background: $theme-color
  color: #f5f5f5
::-moz-selection
  background: $theme-color
  color: #f5f5f5
::-webkit-selection
  background: $theme-color
  color: #f5f5f5
@keyframes fade-in
  0%
    transform: translateY(20px)
    opacity: 0
  100%
    transform: translateY(0)
    opacity: 1
// 警告框样式
@media (max-width: 500px)
  .myConfirm
    min-width: 300px !important
    max-width: 300px !important
@media (min-width: 992px)
  .main
    width: 66.66667%
</style>
