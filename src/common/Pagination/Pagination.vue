<template>
  <el-pagination
    layout="total, prev, pager, next, jumper"
    :total="total"
    :page-size="pageSize"
    :pager-count="pageCount"
    :current-page="currentPage"
    @current-change="handleCurrentChange"
    background
    class="pagination"
  ></el-pagination>
</template>

<script>
export default {
  props: {
    //总条数
    total: {
      type: Number,
      default: 99
    },
    //每页展示的条数
    pageSize: {
      type: Number,
      default: 10
    },
    //每页展示的页码数（大于7会折叠）
    pageCount: {
      type: Number,
      default: 5
    },
    //当前页码
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      showData: []
    };
  },
  methods: {
    //当前页码发生变化，通知父组件
    handleCurrentChange(val) {
      this.$emit("curChange", val);
    }
  }
};
</script>

<style lang="stylus">
@import '~css/variable.styl'
.pagination
  margin: 30px 0
  text-align: center
  overflow-x: auto
  &.is-background
    .el-pager
      li:not(.disabled)
        &.active
          background-color: $theme-color
          color: #fff !important
        &:hover
          color: $theme-color
@media (max-width: 500px)
  .el-pagination
    // 共xxx条
    .el-pagination__total
      display: none !important
    // 页码
    .el-pager
      li
        &.more
          display: none
        // :not(xxx)选择器，选中不含xxx状态的标签，这里选中并隐藏最后一个标签，但如果它正在高亮（active），则不隐藏
        &:last-child:not(.active)
          display: none
        &:first-child:not(.active)
          display: none
    // 前往第[]页
    .el-pagination__jump
      margin-left: 10px
</style>
