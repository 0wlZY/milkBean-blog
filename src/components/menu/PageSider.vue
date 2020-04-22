<template>
  <div class="sider-header">
    <!-- 黑色模块 -->
    <div class="sider-header-title" :class="[`sider-header__${theme}`]">
      <div>
        <span class="sider-header-welcome">welcome</span>
        <span class="sider-header-name">milk-bean's blog</span>
      </div>
    </div>
    <!-- 菜单模块 -->
    <div class="sider-header-menu"></div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 菜单风格
     *
     */
    theme: {
      type: String,
      default: "black"
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
.sider-header {
  // 黑色模块
  .sider-header-title {
    height: 160px;
    color: #fff;
    text-align: center;

    &.sider-header-title__black {
      background-color: #222;
    }

    div {
      padding-top: 40px;

      span {
        display: block;
      }

      .sider-header-welcome {
        font-size: 30px;
      }

      .sider-header-name {
        font-size: 20px;
      }
    }
  }

  // 菜单模块
  .sider-header-menu {
    background-color: #fff;
    font-size: 20px;
    color: #555;
  }
}
</style>
