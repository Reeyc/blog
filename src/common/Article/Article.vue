<!-- common of article -->
<template>
  <div>
    <!-- 文章已请求完毕、且文章存在 -->
    <div v-if="!notFound && article" class="article">
      <div class="article-header">
        <p class="article-title">{{article.title}}</p>
        <div class="article-info">
          <div class="create">发表于：{{article.create}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div class="category">发布在：{{cate(article.category)}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div class="comme">评论：{{comment.length}} 条评论</div>
        </div>
      </div>
      <div class="article-content">
        <div v-html="article.content" v-highlight></div>
        <br />
        <div v-if="article.update" class="update">文章最后更新于：{{article.update}}</div>
      </div>
      <!-- 评论区 -->
      <ul class="comment-list">
        <li v-for="item of comment" :key="item.create" class="item">
          <div class="info">
            <p class="name">{{item.name}}：</p>
            <p class="comment">{{item.content}}</p>
            <p class="time">{{item.create}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 文章已请求完毕、但文章不存在 -->
    <div v-else-if="notFound" class="not-article">
      <h2 class="tips">抱歉，您查看的文章已丢失，请浏览其他文章...</h2>
      <el-button type="text" @click="back">点此返回>></el-button>
      <img src="../../assets/img/404.jpg" class="tips-img" />
    </div>
  </div>
</template>

<script>
import category from "@/mixins/category";
export default {
  data() {
    return {
      article: null,
      comment: [],
      notFound: false
    };
  },
  mixins: [category],
  methods: {
    //文章不存在、返回
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$http.article.detail_Article(this.$route.params.id).then(res => {
      if (!res || res.code !== 1) {
        this.notFound = true;
        return;
      }
      res.article.content = decodeURIComponent(res.article.content); //解码
      this.article = res.article; //获取文章
      res.comment && (this.comment = res.comment); //获取评论
      this.notFound = false;
    });
  },
  mounted() {
    //有新评论（评论组件在外部，可通过组件传值来通信）
    this.$bus.$on(
      "addComment",
      data => data.id === this.$route.params.id && this.comment.unshift(data)
    );
  },
  //文章页的body呈白色
  beforeRouteEnter(to, from, next) {
    document.body.style.backgroundColor = "#fff";
    next();
  },
  beforeRouteLeave(to, from, next) {
    document.body.style.backgroundColor = "#f3f3f3";
    next();
  }
};
</script>

<style lang="stylus" scoped>
.article
  padding: 60px 130px 30px
  line-height: 1.8
  .article-header
    padding-bottom: 20px
    margin-bottom: 20px
    border-bottom: 1px solid #e0e0e0
    .article-title
      font-size: 21px
    .article-info
      font-size: 12px
      color: #5f5f5f
      margin-top: 5px
      overflow: hidden
      &>*
        float: left
  .article-content
    letter-spacing: 0.03em
    min-height: 300px
    padding-bottom: 25px
    border-bottom: 1px solid #e0e0e0
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif
  .comment-list
    padding-top: 15px
    .item
      position: relative
      display: flex
      align-items: center
      padding: 8px 15px
      margin: 8px 0
      border-radius: 5px
      background-color: #f5f5f5
      .info
        .name
          font-weight: bold
        .comment
          font-size: 13px
          word-wrap: break-word
          word-break: break-all
        .time
          font-size: 12px
          position: absolute
          top: 8px
          right: 15px
.not-article
  text-align: center
  .tips
    width: 100%
    font-size: 22px
    margin: 50px 0 10px
  .tips-img
    width: 100%
@media (max-width: 700px)
  .article
    padding: 20px 25px
    .article-info
      &>*
        float: none
  .not-article
    .tips
      font-size: 14px
</style>
<style lang="stylus">
.article-content
  h1, h2, h3, h4, h5, h6
    line-height: 2.8 !important
  li
    list-style: outside !important
  img
    max-width: 100% !important
    width: 100% !important
  .hljs-keyword, .hljs-selector-tag, .hljs-subst
    font-weight: normal !important
  .hljs-comment
    font-style: normal !important
</style>


