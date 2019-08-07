<!-- common of article -->
<template>
  <div class="article">
    <div class="article-header">
      <p class="article-title">{{article.title}}</p>
      <p
        class="article-info"
      >发表于：2019-06-15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布在：Notes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评论：0 条评论</p>
    </div>
    <div class="article-content">
      <div v-html="article.content"></div>
    </div>
    <ul class="comment-list">
      <li v-for="item of 3" :key="item" class="item">
        <img src="http://www.hellomk.cn/admin/img/avatar.jpg" class="avatar" />
        <div class="info">
          <p class="name">二乎乎</p>
          <p class="comment">写的不错，点赞...</p>
          <p class="time">2019-8-7 22:26</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import hljs from "highlight.js";
export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    this.$http.article.detail_Article(this.$route.params.id).then(res => {
      if (!res || res.code !== 1) return;
      res.article.content = decodeURIComponent(res.article.content); //解码
      hljs.highlightAuto(res.article.content); //highlight高亮内容代码块
      this.article = res.article;
    });
  },
  //文章页的body呈白色
  beforeRouteEnter(to, from, next) {
    document.body.style.backgroundColor = "#fff";
    next();
  },
  beforeRouteLeave(to, from, next) {
    document.body.style.backgroundColor = "#f3f3f3";
    next();
  },
  components: {}
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
  .article-content
    padding-bottom: 25px
    border-bottom: 1px solid #e0e0e0
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif
  .comment-list
    padding-top: 15px
    .item
      position: relative
      display: flex
      align-items: center
      padding: 8px
      margin: 8px 0
      background-color: #f5f5f5
      .avatar
        width: 50px
        height: 50px
        border-radius: 50%
        margin-right: 10px
        cursor: pointer
      .info
        .name
          font-weight: bold
        .comment
          font-size: 13px
        .time
          font-size: 12px
          position: absolute
          top: 8px
          right: 8px
@media (max-width: 500px)
  .article
    padding: 20px 25px
</style>
