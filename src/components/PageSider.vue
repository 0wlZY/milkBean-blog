<template>
  <div class="sider-header">
    <!-- 标题模块 -->
    <div class="sider-header-title" :class="[`sider-header__${theme}`]">
      <div>
        <span class="sider-header-welcome">welcome</span>
        <span class="sider-header-name">milk-bean's blog</span>
      </div>
    </div>
    <!-- 菜单模块 -->
    <tree-menu :menus="authMenu" />
  </div>
</template>

<script>
import treeMenu from "@/components/menu/TreeMenu";

export default {
  props: {
    /**
     * 菜单风格
     *
     */
    theme: {
      type: String,
      default: "black",
    },
  },
  components: {
    treeMenu,
  },
  computed: {
    /**
     * 本地菜单
     * @dir @/store/module/menu.js
     */
    menuList() {
      return this.$store.state.menu.menuList;
    },

    /**
     * 权限菜单
     * 根据本地菜单与用户权限进行匹配所得
     * 注：后台未提供菜单数据
     */
    authMenu() {
      const revealMenu = this.menuList.filter((item) => !item.hideMenu) || [];
      return revealMenu;
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.sider-header {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

  // 黑色模块
  .sider-header-title {
    height: 160px;
    color: #fff;
    text-align: center;
    position: relative;

    &.sider-header__black {
      background: url(~@/assets/images/home/theme.jpg) no-repeat;
      background-size: cover;
    }

    div {
      padding-top: 40px;
      position: absolute;
      top: 0;
      left: 0;
      height: 160px;
      width: 100%;
      background: rgba(255, 255, 255, 0.3);

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
}
</style>
