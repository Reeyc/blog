<template>
  <div class="footer">
    <ul class="nav-menu border-bottom">
      <li>JavaScript</li>
      <el-divider direction="vertical"></el-divider>
      <li>CSS</li>
      <el-divider direction="vertical"></el-divider>
      <li>Vue</li>
      <el-divider direction="vertical"></el-divider>
      <li>React</li>
    </ul>
    <el-row type="flex" justify="center" class="copyright">
      <el-col :span="7" :xs="20" :md="5" class="item">
        <dl>
          <dt>HelloYec</dt>
          <dd>赣ICP备16002719号-3</dd>
          <dd>浙公网安备 33011802001277号</dd>
          <dd>© 2019 - Hansuku</dd>
        </dl>
      </el-col>
      <el-col :span="7" :xs="0" :md="5" class="item">
        <dl>
          <dt>RECENT POSTS</dt>
          <dd>操作模拟测试和单元测试</dd>
          <dd>小记一则强制更新 Service-Worker 的</dd>
          <dd>小程序中类抖音的交互实现方案</dd>
          <dd>Vue-Cli3.x 更新填坑</dd>
          <dd>封装小程序wx.request 添加token</dd>
        </dl>
      </el-col>
      <el-col :span="7" :xs="0" :md="5" class="item">
        <dl>
          <dt>RECENT COMMENTS</dt>
          <dd>Hello 欢迎大家在底下评论</dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  li
    padding: 25px
    cursor: pointer
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
