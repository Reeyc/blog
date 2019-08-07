<template>
  <div class="home">
    <el-row type="flex" justify="space-around" class="container">
      <el-col
        :span="21"
        :sm="11"
        :md="7"
        v-for="item of article"
        :key="item.id"
        @click.native="toArticle(item.id)"
        class="item"
      >
        <el-card :body-style="cardBodyStyle" class="card">
          <div :style="{ backgroundImage: `url(${item.img})` }" class="bimg"></div>
          <div class="shade">
            <p class="info">{{item.desc}}</p>
          </div>
          <div class="des">
            <p class="title">{{item.title}}</p>
            <p class="category">{{ cateFormat(item.category) }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <pagination :total="article.length" :page-size="10"></pagination>
  </div>
</template>

<script>
import Pagination from "comm/Pagination/Pagination";
export default {
  data() {
    return {
      article: [],
      cardBodyStyle: {
        padding: "0",
        overflow: "hidden"
      }
    };
  },
  methods: {
    cateFormat(cate) {
      if (!cate) return;
      switch (Number(cate)) {
        case 1:
          return "Layout";
        case 2:
          return "JavaScript";
        case 3:
          return "Utils";
        default:
          return "Unknown";
      }
    },
    toArticle(id) {
      this.$router.push({
        name: "article",
        params: { id }
      });
    }
  },
  created() {
    this.$http.article.all_Article().then(res => {
      if (!res || res.code !== 1) return;
      this.article = res.article;
    });
  },
  components: { Pagination }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
@import '~css/variable.styl'
.home
  margin-top: 15px
  .container
    flex-wrap: wrap
    .item
      position: relative
      margin: 10px 0
      cursor: pointer
      .card
        border: none
        .bimg
          min-height: 200px
          background-position: center
          background-size: cover
          transition: transform 0.5s ease, filter 0.5s ease
        .shade // 遮罩
          position: absolute
          top: 0
          width: 100%
          height: 100%
          .info // 文字
            padding: 50px 30px 10px
            line-height: 1.8
            color: #fff
            opacity: 0
        &:hover
          .bimg
            transform: scale(1.1) // 放大
            filter: blur(3px) // 模糊
          .shade
            background-color: rgba(0, 0, 0, 0.5)
            .info
              opacity: 1 // 显示
              animation: fade-in
              animation-duration: 0.5s
        .des
          position: relative
          padding: 15px 15px 0 15px
          background-color: #fff
          .title
            font-size: 18px
            margin: 10px 5px
            ellipsis()
          .category
            text-align: right
            padding-bottom: 10px
            line-height: 30px
            color: #999
            ellipsis()
            cursor: pointer
            &:after
              content: ''
              width: 0
              height: 0
              border-width: 0 0 10px 15px
              border-style: solid
              border-color: transparent transparent $theme-color
</style>
