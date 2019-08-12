<template>
  <div id="app">
    <Header id="header"></Header>
    <div id="main">
      <!-- 确保数据请求到了再加载页面 -->
      <router-view v-if="article" :article="article" id="page" />
    </div>
    <comment v-if="$route.name==='article'"></comment>
    <Footer :article="article" id="footer"></Footer>
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
    //大多数页面都需要all_article数据，在这里获取再传值，避免多个页面重复请求，缺点是路由切换不会实时获取数据，但刷新可以
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
@import '~css/common.styl'
html, body
  background-color: #f3f3f3
  width: 100%
  #header
    position: fixed
    top: 0
    left: 0
    z-index: 10
    width: 100%
    max-width: 100%
    background-color: #fff
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1)
  #main
    min-height: 500px
    padding-top: 60px
    margin: 0 auto
    #page
      animation: fade-in
      animation-duration: 0.5s
  #footer
    background-color: #fff
@media (min-width: 992px)
  #main
    width: 66.66667%
</style>
