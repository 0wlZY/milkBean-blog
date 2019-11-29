<template>
  <div class="header-layout" :class="[`header-layout__${theme}`]">
    <div class="header-layout-title">
      <div class="header-layout-title-item">
        <a-row>
          <a-col :span="8">博客</a-col>
          <a-col :span="8">留言板</a-col>
          <a-col :span="8">关于</a-col>
        </a-row>
      </div>
      <div class="header-layout-title-item">
        <a-row>
          <a-col :span="24">
            <img class="item_icon" :src="icon" alt />
          </a-col>
        </a-row>
      </div>
      <div class="header-layout-title-item">
        <a-row>
          <a-col :span="8">写博客</a-col>
          <a-col :span="8">登录</a-col>
          <a-col :span="8">注册</a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "assets/images/home/home_page.png";

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
      default: "green"
    }
  },
  computed: {},
  data() {
    return {
      icon
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header-layout {
  width: 100%;
  height: 100%;
  z-index: 109;
  // color: rgb(253, 223, 125);
  color: #e8f1f8;
  font-weight: bold;
  box-shadow: 0 2px 3px rgba(26, 26, 26, 0.1);
  &.header-layout__green {
    background-color: #a8a660;
  }
  &-title {
    width: 60%;
    margin: 0 auto;
    &-item {
      text-align: center;
      width: 45%;
      display: inline-block;
    }
    &-item:nth-child(2) {
      width: 10%;
    }
    .item_icon {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #e88e01;
      box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.1);
    }
  }
}
</style>
