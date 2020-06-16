<template>
  <!-- 菜单模块 -->
  <div class="sider-header-menu">
    <a-menu
      @click="handleClick"
      style="width:100%"
      :default-selected-keys="['1']"
      mode="inline"
    >
      <a-menu-item :key="item.id" v-for="(item) in menuList">
        <a-icon type="pie-chart" />
        <span>{{item.menu}}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
const menuList=[{id:1,menu:'首页'},{id:2,menu:'分页'},{id:3,menu:'归档'}]
export default {
  computed: {},
  data() {
    return {
      menuList
    };
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
.ant-menu{
  width:100%;
  padding: 10px 0;
}
</style>
