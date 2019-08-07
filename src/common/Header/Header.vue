<template>
  <div class="header">
    <!-- logo -->
    <router-link to="/home">
      <div class="logo">HelloYec</div>
    </router-link>
    <!-- button -->
    <div class="btn-menu el-icon-s-operation" @click="menuToggle"></div>
    <!-- search -->
    <router-link to="/search">
      <div class="search el-icon-search"></div>
    </router-link>
    <!-- nav-menu -->
    <el-collapse-transition>
      <ul class="nav-menu" v-show="isShow">
        <li v-for="item of routerPath" :key="item.value">
          <router-link :to="item.path" class="link">{{item.value}}</router-link>
        </li>
      </ul>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      routerPath: [
        { path: "/home", value: "Home" },
        { path: "/layout", value: "Layout" },
        { path: "/javascript", value: "JavaScript" },
        { path: "/utils", value: "Utils" },
        { path: "/archives", value: "Archives" }
      ]
    };
  },
  methods: {
    menuToggle() {
      this.isShow = !this.isShow;
    }
  },
  watch: {
    $route() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/variable.styl'
.header
  padding: 0 150px
  line-height: 60px
  .logo
    float: left
    font-size: 26px
    cursor: pointer
    color: #333
    &:hover
      color: $theme-color
  .nav-menu // 默认为横向导航
    float: right
    margin-right: 30px
    li
      float: left
      margin: 0 20px
      line-height: 60px
      cursor: pointer
      .link
        display: inline-block
        width: 100%
        color: #333
        &:hover
          color: $theme-color
        &.router-link-active
          color: $theme-color // 路由对应菜单高亮（当前路由的a标签含有router-link-active类）
  .search, .btn-menu
    float: right
    line-height: 60px
    margin: 0 8px
    font-size: 24px
    color: #333
    cursor: pointer
  .btn-menu
    display: none
  .search:hover
    color: $theme-color
@media (max-width: 767px)
  .header
    padding: 0 15px !important
    .nav-menu // ipad之下的屏幕，不显示横向导航，并设置竖向导航（也不显示）
      position: absolute
      left: 0
      top: 60px
      width: inherit
      padding: 0 20px 10px
      background-color: #efefef
      box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1)
      li
        float: none
        border-bottom: 1px solid #dfdfdf
        &:hover
          color: $theme-color
        &:last-child
          border: none
    .btn-menu
      font-size: 28px
      display: block
@media (min-width: 768px)
  .nav-menu // ipad之上的屏幕，显示横向导航
    display: block !important
@media (max-width: 992px)
  .header
    padding: 0 25px
    .nav-menu
      margin-right: 15px
</style>