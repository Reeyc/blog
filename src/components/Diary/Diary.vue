<!-- page of diary -->
<template>
  <div class="diary">
    <div class="control">
      <div class="crumbs">{{$route.name}}</div>
      <el-select
        v-model="seleVal"
        size="medium"
        @change="selectChange"
        placeholder="选择类别..."
        class="select"
      >
        <el-option label="全部" value="all"></el-option>
        <el-option-group v-for="group of sele" :key="group.title" :label="group.title">
          <el-option
            v-for="(item,index) of group.content"
            :key="index"
            :label="item.label"
            :value="item.value"
          >{{ item.label }}</el-option>
        </el-option-group>
      </el-select>
    </div>

    <el-row type="flex" justify="space-between" class="content">
      <el-col
        v-for="item of initData"
        :key="item.id"
        :sm="12"
        :lg="8"
        @click.native="toArticle(item.id)"
        class="item"
      >
        <el-card>
          <div class="title">{{item.title}}</div>
          <div class="bottom">
            <div class="date">{{item.create}}</div>
            <div class="category">{{ cate(item.category) }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="12" :lg="8"></el-col>
      <el-col :sm="12" :lg="8"></el-col>
    </el-row>
    <div v-if="handledData.length<1" class="not-found">暂无该类型的文章，请浏览其他文章...</div>
    <pagination :total="total" :pageSize="18" @curChange="curChange"></pagination>
  </div>
</template>

<script>
import Pagination from "comm/Pagination/Pagination";
import { cateFormat, selectCate } from "js/cate";
export default {
  props: {
    article: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      seleVal: "all", //选择器变量
      sele: [], //选择器数据
      cate: cateFormat, //格式化分类
      curPage: 1, //当前页码 (默认加载第一页)
      total: 0, //总页码数（watch当数据变化实时改变）
      handledData: [] //处理后的数据（用于展示）
    };
  },
  computed: {
    initData() {
      //从第1页到上一页的表单数据
      const oldData = (this.curPage - 1) * 18;
      //从第1页到当前页的表单数据
      const newData = this.curPage * 18;
      //截取上一页到当前页的表单数据
      return this.handledData.slice(oldData, newData);
    }
  },
  methods: {
    //路由跳转
    toArticle(id) {
      this.$router.push({
        name: "article",
        params: { id }
      });
    },
    //根据当前页码改变数据
    curChange(page) {
      this.curPage = page;
    },
    //选择器选中
    selectChange(seleVal) {
      this.curPage = 1;
      //选中全部
      if (seleVal === "all") {
        this.handledData = this.article;
        return;
      }
      //选中类别
      this.handledData = this.article.filter(item => {
        return Number(item.category) === seleVal;
      });
    }
  },
  watch: {
    //每当展示的数据变化，同步页码总条数
    handledData(val) {
      this.total = val.length;
    }
  },
  created() {
    //初始化选择器数据
    this.sele = selectCate();
    //初始化展示数据
    this.handledData = this.article;
  },
  mounted() {
    const category = Number(this.$route.query.category);
    if (category) {
      this.seleVal = category; //只改变变量不会触发数据筛选
      this.selectChange(category);
    }
  },
  components: { Pagination }
};
</script>

<style lang="stylus" scoped>
@import '~css/variable.styl'
@import '~css/mixins.styl'
.diary
  padding: 10px 20px
  .control
    display: flex
    align-items: center
    justify-content: space-between
    .crumbs
      text-transform: capitalize
      font-size: 20px
      line-height: 30px
      padding-left: 8px
      margin: 20px 10px 20px 0
      border-left: 8px solid $theme-color
    .select
      & >>> .el-input__inner
        input-color(4px, 14px)
  .content
    flex-wrap: wrap
    min-height: 300px
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
  .not-found
    text-align: center
    font-size: 18px
    margin: 20px 0
@media (max-width: 500px)
  .not-found
    font-size: 16px !important
</style>

