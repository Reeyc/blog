<template>
  <div v-if="article" class="footer">
    <ul class="nav-menu border-bottom">
      <li v-for="item of routerPath" :key="item.value" class="border-right">
        <router-link :to="item.path">{{item.value}}</router-link>
      </li>
    </ul>
    <el-row type="flex" justify="center" class="copyright">
      <el-col :span="7" :xs="20" :md="5" class="item">
        <dl>
          <dt>HelloYec</dt>
          <dd>琼ICP备19000822号-1</dd>
          <dd>© 2019 - Hansuku</dd>
        </dl>
      </el-col>
      <el-col :span="7" :xs="0" :md="5" class="item">
        <dl>
          <dt>最新文章</dt>
          <dd
            v-for="item of article.slice(0,5)"
            :key="item.id"
            @click="toArticle(item.id)"
          >{{item.title}}</dd>
        </dl>
      </el-col>
      <el-col :span="7" :xs="0" :md="5" class="item">
        <dl v-if="comment && comment.length">
          <dt>最新评论</dt>
          <dd
            v-for="item of comment"
            :key="item.create"
            @click="toArticle(item.article_id)"
          >{{item.content}}</dd>
        </dl>
        <dl v-else>
          <dt>最新评论</dt>
          <dd>暂无评论...</dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    //最新文章
    article: {
      type: Array,
      default: []
    },
    //最新评论
    comment: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      routerPath: [
        { path: "/home", value: "Home" },
        { path: "/diary", value: "Diary" },
        { path: "/archives", value: "Archives" },
        { path: "/about", value: "About" }
      ]
    };
  },
  methods: {
    //跳转文章页
    toArticle(id) {
      if (!id) return;
      this.$router.push({
        name: "article",
        params: { id }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
@import '~css/variable.styl'
.nav-menu
  display: flex
  justify-content: center
  align-items: center
  padding: 25px 0
  li
    padding: 0 25px
    cursor: pointer
    &:last-child::before
      border-right: 0
    a
      color: #333
      &:hover
        color: $theme-color
.copyright
  .item
    padding: 30px 10px 50px
    text-align: center
    dt
      line-height: 24px
      ellipsis()
    dd
      font-size: 13px
      margin: 10px 0
      cursor: pointer
      ellipsis()
      &:hover
        color: $theme-color
@media (max-width: 767px)
  .nav-menu
    display: none
  .item
    dl
      text-align: right
      dt
        font-size: 20px
</style>
