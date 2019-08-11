<!-- page of search -->
<template>
  <div class="search">
    <div class="query">
      <el-input v-model="val" maxlength="20" placeholder="Search..." class="input"></el-input>
      <i @click.prevent.stop="query" class="el-icon-search icon"></i>
    </div>
    <p class="tips">
      <i class="iconfont">&#xe627;</i>根据关键词查找也是可以的哦
    </p>
    <div class="alternative">
      <div v-for="(value,key) of alternative" :key="key" @click="toDiary(key)" class="item">
        <i style="color:#eb5055; margin-right:3px;">#</i>
        <span>{{cate(key)}} ({{value}})</span>
      </div>
    </div>
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
      val: "",
      alternative: {}
    };
  },
  mixins: [category],
  methods: {
    //路由跳转分类页
    toDiary(category) {
      this.$router.push({
        name: "diary",
        query: { category }
      });
    },
    //搜索查询
    query() {
      if (!this.val) return;
      let val = this.val.toLowerCase(); //用户输入的值
      let result = [];
      this.article.forEach(item => {
        //文章的标题
        let title = item.title.toLowerCase();
        //文章的类别
        let cate = this.cate(item.category).toLowerCase();
        //标题或者类别中含有用户输入的值
        if (title.indexOf(val) > -1 || cate.indexOf(val) > -1) {
          result.push(item);
        }
      });
      if (result.length > 0) {
        this.$router.push({
          name: "diary",
          params: { result, val: this.val }
        });
      } else {
        this.$message({
          message: `没有找到【${this.val}】相关的文章`,
          type: "error",
          customClass: "myMsg"
        });
      }
    },
    //初始化关键词数据
    initAlternative() {
      const result = this.article.reduce((prev, cur) => {
        //当前类别
        const category = cur.category;
        //上一轮的对象中，是否含有当前类别，有则+1，无则设置=1
        prev[category] ? prev[category]++ : (prev[category] = 1);
        //返回当前类别，作为下一轮的“上个类别”
        return prev;
      }, {});
      return result;
    }
  },
  created() {
    this.alternative = this.initAlternative(this.article);
  }
};
</script>   

<style lang="stylus" scoped>
@import '~css/variable.styl'
@import '~css/mixins.styl'
.search
  padding: 40px 0
  .query
    width: 60%
    margin: 0 auto
    position: relative
    .input
      text-align: center
      font-family: Arial, 'Microsoft YaHei'
      & >>> .el-input__inner
        padding: 0 40px 0 15px
        input-color(25px, 14px)
    .icon
      position: absolute
      top: 50%
      right: 15px
      transform: translate(0, -50%)
      font-size: 20px
      cursor: pointer
      &:hover
        color: $theme-color
  .tips
    margin-top: 50px
    text-align: center
    i
      padding: 0 8px
      color: $theme-color
  .alternative
    width: 60%
    margin: 20px auto
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    .item
      font-size: 13px
      padding: 10px
      margin: 8px
      border-radius: 10px
      background-color: #fff
      cursor: pointer
      &:hover
        color: $theme-color
@media (max-width: 767px)
  .query
    width: 80% !important
  .alternative
    width: 90% !important
</style>
