<template>
  <div class="comment">
    <div class="container">
      <el-row class="contact">
        <el-col :span="12" class="item">
          <el-input
            v-model="comment.name"
            size="medium"
            maxlength="8"
            show-word-limit
            prefix-icon="el-icon-user"
            clearable
            placeholder="你的大名..."
          ></el-input>
        </el-col>
        <el-col :span="12" class="item">
          <el-input
            v-model="comment.email"
            size="medium"
            maxlength="30"
            show-word-limit
            prefix-icon="el-icon-message"
            clearable
            placeholder="你的邮箱..."
          ></el-input>
        </el-col>
      </el-row>
      <el-input
        v-model="comment.content"
        type="textarea"
        :rows="7"
        resize="none"
        maxlength="500"
        clearable
        placeholder="期待你的留言..."
      ></el-input>
      <el-button
        type="success"
        size="medium"
        icon="el-icon-finished"
        circle
        @click="submit"
        class="submit"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //发送请求的数据
      comment: {
        id: "",
        name: "",
        email: "",
        content: ""
      }
    };
  },
  methods: {
    submit() {
      // 未填名称
      if (!this.comment.name) {
        this.$message({
          message: "名称为空...",
          type: "error",
          customClass: "myMsg"
        });
        return;
      }
      // 未填内容
      if (!this.comment.content) {
        this.$message({
          message: "请输入留言...",
          type: "error",
          customClass: "myMsg"
        });
        return;
      }
      // 确认提交
      this.$confirm("确定提交评论吗？", "提示", {
        iconClass: "el-icon-question",
        customClass: "myConfirm"
      })
        .then(() => {
          // 发送请求
          this.comment.id = this.$route.params.id;
          this.$http.comment.add_comment(this.comment).then(res => {
            if (!res || res.code !== 1) return;
            // 评论添加成功，派发给Article组件
            this.$bus.$emit("addComment", res);
            // 清空评论框
            Object.keys(this.comment).forEach(
              item => (this.comment[item] = "")
            );
            this.$message({
              message: res.message,
              type: "success",
              customClass: "myMsg"
            });
          });
        })
        .catch(e => {});
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
.comment
  background-color: #f7f7f7
  .container
    position: relative
    padding: 50px 130px
    margin: 0 auto
    .contact
      display: flex
      justify-content: space-between
      align-items: center
      .item
        margin: 0 5px 10px
    &>>>.el-input__inner, &>>>.el-textarea__inner
      input-color(4px, 13px)
    .submit
      position: absolute
      bottom: 60px
      right: 140px
@media (min-width: 992px)
  .container
    width: 66.66667% !important
@media (max-width: 700px)
  .container
    padding: 25px !important
    .submit
      bottom: 35px !important
      right: 35px !important
</style>
