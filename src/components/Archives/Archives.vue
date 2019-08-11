<!-- page of archives -->
<template>
  <div class="archives">
    <div class="crumbs">{{$route.name}}</div>
    <el-timeline>
      <!-- 创建每个时间点档案 -->
      <el-timeline-item
        v-for="item of data"
        :key="item.time"
        :timestamp="item.date"
        placement="top"
        icon="el-icon-s-promotion"
        size="large"
        type="danger"
      >
        <div class="content">
          <!-- 创建每个时间点内发生的事件 -->
          <el-card
            v-for="e of item.content"
            :key="e.id"
            @click.native="toArticle(e.id)"
            class="item"
          >
            <div class="title">{{e.title}}</div>
            <span @click.prevent.stop="toDiary(e.category)" class="category">
              {{ cate(e.category) }}
              <i class="el-icon-edit"></i>
            </span>
          </el-card>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import category from "@/mixins/category";
export default {
  props: {
    article: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      data: []
    };
  },
  mixins: [category],
  methods: {
    //数据处理
    handle(data) {
      if (!data || !Array.isArray(data)) return;
      const result = [];
      data.reduce((prve, cur) => {
        const date = cur.create.slice(0, 10);
        if (prve !== date) {
          //非同一天
          result.push({ date, content: [cur] });
        } else {
          //同一天
          result.forEach(item => {
            if (item.date.slice(0, 10) === date) item.content.push(cur);
          });
        }
        return cur.create.slice(0, 10);
      }, []);
      return result;
    },
    //路由跳转文章页
    toArticle(id) {
      this.$router.push({
        name: "article",
        params: { id }
      });
    },
    //路由跳转分类页
    toDiary(category) {
      this.$router.push({
        name: "diary",
        query: { category }
      });
    }
  },
  created() {
    this.data = this.handle(this.article);
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
@import '~css/variable.styl'
.archives
  padding: 30px
  .crumbs
    margin 0 10px 25px
    prefix(400)
  .content
    display: flex
    flex-wrap: wrap
    .item
      width: 25%
      margin: 15px
      cursor: pointer
      &:hover
        transform: scale(1.05)
    .title
      ellipsis()
    .category
      font-size: 12px
      margin: 20px 0 15px
      float: right
      color: #5f5f5f
      &:hover
        color: $theme-color
@media (max-width: 1400px)
  .main
    .item
      width: 44% !important
@media (max-width: 700px)
  .main
    .item
      width: 100% !important
</style>
