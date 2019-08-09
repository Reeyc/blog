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
          <div class="slant revese-slant"></div>
          <div class="slant"></div>
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
import { cate } from "js/format";
export default {
  props: {
    article: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      cateFormat: cate,
      cardBodyStyle: {
        padding: "0",
        overflow: "hidden",
        position: "relative"
      }
    };
  },
  methods: {
    toArticle(id) {
      this.$router.push({
        name: "article",
        params: { id }
      });
    }
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
          transition: all 0.5
          background-color: rgba(0, 0, 0, 0.5)
        .shade // 遮罩
          position: absolute
          top: 0
          width: 100%
          height: 100%
          .info // 文字
            padding: 30px 28px
            line-height: 1.8
            color: #fff
            opacity: 0
        .slant
          position: absolute
          z-index: 0
          right: 0
          bottom: 25px
          left: 0
          width: 110%
          min-height: 100px
          transform: rotate(7deg) translate(-10px, 0)
          background-color: #fff
          &.revese-slant
            transform: rotate(-10deg) translate(10px, -10px)
            opacity: 0.7
            box-shadow: none
            background-color: rgba(0, 0, 0, 0.5)
        &:hover
          .bimg
            transform: scale(1.1) // 放大
            filter: blur(3px) // 模糊
          .shade
            background-color: rgba(0, 0, 0, 0.6)
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
@keyframes fade-in
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0)
</style>
