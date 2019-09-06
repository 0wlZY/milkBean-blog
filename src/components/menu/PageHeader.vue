<template>
  <div class="header-layout" :class="[`header-layout__${theme}`]">
    <div class="header-layout-title">
      <div class="header-layout-title-item">
        <a-row justify="start">
          <a-col :span="6">首页</a-col>
          <a-col :span="6">博客</a-col>
          <a-col :span="6">留言板</a-col>
          <a-col :span="6">关于</a-col>
        </a-row>
      </div>
      <div class="header-layout-title-item">
        <a-row justify="end">
          <a-col :span="6">搜索</a-col>
          <a-col :span="6">写博客</a-col>
          <a-col :span="6">登录</a-col>
          <a-col :span="6">注册</a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 菜单风格
     * pink - 粉色#ea4c89
     * green - 草绿#99CC99、b8d8b8
     * line - 无色、线
     */
    theme: {
      type: String,
      default: "line"
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header-layout {
  width: 100%;
  height: 100%;
  z-index: 109;
  color: rgb(253, 223, 125);
  box-shadow: 0 2px 3px rgba(26, 26, 26, 0.1);
  &.header-layout__line {
    background-color: #fff;
  }
  &-title {
    width: 90%;
    margin: 0 auto;
    &-item {
      width: 30%;
      display: inline-block;
      text-align: center;
      &:last-child {
        float: right;
        clear: both;
      }
    }
  }
}
</style>
