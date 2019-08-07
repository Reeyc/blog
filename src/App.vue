<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <router-view />
    </div>
    <Footer class="footer"></Footer>
    <back-top :visibility-height="100" :back-position="0" transition-name="fade" />
  </div>
</template>

<script>
import Header from "comm/Header/Header";
import Footer from "comm/Footer/Footer";
import BackTop from "comm/BackTop/BackTop";
export default {
  name: "App",
  components: { Header, Footer, BackTop }
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
    padding-top: 60px
    margin: 0 auto
  .footer
    background-color: #fff
// http进度条样式
#nprogress .bar
  background: $theme-color !important
// 文章代码块样式
.ql-syntax
  padding: 20px
  margin: 10px 0
  border-radius: 5px
  overflow: auto
code, pre
  color: #e4e7ed
  background-color: #263238
  font-family: Consolas, Monaco, Menlo, Bitstream Vera Sans Mono, DejaVu Sans Mono, monospace
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
@media (min-width: 992px)
  .main
    width: 66.66667%
</style>
