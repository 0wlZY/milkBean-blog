<template>
  <!-- 菜单模块 -->
  <div class="sider-header-menu">
    <a-menu
      mode="inline"
      style="width: 100%"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
      @openChange="onOpenChange"
    >
      <template v-for="item in menus">
        <a-menu-item :key="item.path">
          <router-link :to="item.path">
            <a-icon :type="`${item.imgIcon}`" />
            <span>{{ item.meta && item.meta.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
      cachedOpenKeys: [],
    };
  },
  computed: {
    /**
     * 获取所有一级菜单
     */
    rootSubmenuKeys: (vm) => {
      const keys = [];
      vm.menus.forEach((item) => keys.push(item.path));
      return keys;
    },
  },
  watch: {
    collapsed(val) {
      if (val) {
        this.cachedOpenKeys = this.openKeys.concat();
        this.openKeys = [];
      } else {
        this.openKeys = this.cachedOpenKeys;
      }
    },
    $route() {
      this.updateMenu();
    },
  },
  methods: {
    /**
     * 只显示当前父级菜单，点击其他菜单隐藏当前
     */
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => !this.openKeys.includes(key)
      );
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },

    /**
     * 更新菜单，选中当前页
     */
    updateMenu() {
      const routes = this.$route.matched.concat();

      if (routes.length >= 3) {
        routes.pop();
        this.selectedKeys = [routes[0].path];
      } else {
        const pathItem = routes.pop().path;
        this.selectedKeys = [
          pathItem.substr(pathItem.length - 1) === "/"
            ? pathItem.substr(0, pathItem.length - 1)
            : pathItem,
        ];
      }

      const openKeys = [];
      routes.forEach((item) => {
        openKeys.push(item.path);
      });
      this.collapsed
        ? (this.cachedOpenKeys = openKeys)
        : (this.openKeys = openKeys);
    },
  },
  mounted() {
    this.updateMenu();
  },
};
</script>

<style lang="less" scoped>
.ant-menu {
  width: 100%;
  padding: 10px 0;
}
</style>
