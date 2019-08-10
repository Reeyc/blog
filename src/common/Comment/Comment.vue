<template>
  <div class="comment">
    <div class="container">
      <el-row class="contact">
        <el-col :span="12" class="item">
          <el-input
            v-model="name"
            size="medium"
            maxlength="10"
            show-word-limit
            prefix-icon="el-icon-user"
            clearable
            placeholder="你的大名..."
          ></el-input>
        </el-col>
        <el-col :span="12" class="item">
          <el-input
            v-model="email"
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
        v-model="comment"
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
      name: "",
      email: "",
      comment: ""
    };
  },
  methods: {
    submit() {
      if (!this.name) {
        this.$message.error("名称为空...");
        return;
      }
      if (!this.comment) {
        this.$message.error("请输入留言...");
        return;
      }
      this.$confirm("确定提交评论吗？", "提示", {
        iconClass: "el-icon-question",
        customClass: "myConfirm"
      })
        .then(() => {
          this.$alert("留言功能完善中，敬请期待...", "提示", {
            type: "warning"
          });
        })
        .catch(e => console.log(e));
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
@media (max-width: 500px)
  .container
    padding: 25px !important
    .submit
      bottom: 35px !important
      right: 35px !important
</style>
