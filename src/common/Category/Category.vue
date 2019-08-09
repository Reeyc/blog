<template>
  <div class="container">
    <div class="category">{{c}}</div>
    <el-row type="flex" justify="space-between" class="content">
      <el-col v-for="(item,index) of 7" :key="index" :sm="12" :md="8" class="item">
        <el-card>
          <div class="title">操作模拟测试和单元测试</div>
          <div class="bottom">
            <div class="date">2019-06-15 Saturday</div>
            <div class="icon">hello</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from "comm/Pagination/Pagination";
import { cate } from "js/format";
export default {
  props: {
    category: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      c: null,
      cateFormat: cate
    };
  },
  created() {
    this.c = this.cateFormat(this.category);
  },
  components: { Pagination }
};
</script>

<style lang="stylus" scoped>
@import '~css/variable.styl'
@import '~css/mixins.styl'
.container
  padding: 10px 20px
  .category
    font-size: 20px
    line-height: 30px
    padding-left: 8px
    margin: 20px 0
    border-left: 8px solid $theme-color
  .content
    flex-wrap: wrap
    .item
      padding: 10px
      cursor: pointer
      transition: all 0.2s
      &:hover
        transform: scale(1.05)
      .title
        margin: 15px 0 35px
        ellipsis()
      .bottom
        display: flex
        justify-content: space-between
        .date
          color: #5f5f5f
          font-size: 12px
          ellipsis()
</style>
