<template>
  <!-- 菜单模块 -->
  <div class="sider-header-menu">
    <a-menu
      @click="handleClick"
      style="width:100%"
      :defaultSelectedKeys="['1']"
      mode="inline"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="pie-chart" />
        <span>分类</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="pie-chart" />
        <span>归档</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
// 菜单模块
.sider-header-menu {
  background-color: #fff;
  font-size: 20px;
  color: #555;
}
</style>
