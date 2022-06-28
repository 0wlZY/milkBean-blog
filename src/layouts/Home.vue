<template>
  <div class="pages">
    <div class="pages-line"></div>
    <div class="pages-layout">
      <div class="layout-sider">
        <page-sider />
        <infor-sider />
      </div>
      <div class="layout-content">
        <router-view />
      </div>
    </div>
    <div class="pages-footer">
      Ant Design ©2018 Created by Ant UED
    </div>
  </div>
</template>

<script>
import pageSider from "@/components/PageSider";
import inforSider from "@/components/InforSider";

export default {
  components: {
    pageSider,
    inforSider
  }
};
</script>

<style lang="less" scoped>
.pages {
  height: 100%;
  &-line {
    width: 100%;
    height: 8px;
    background-color: #fece5b;
    position: fixed;
    top: 0;
    z-index: 9;
  }

  &-layout {
    margin-top: 8px;
    padding: 0 10%;
    display: flex;
    align-items: flex-start;

    .layout-sider {
      margin-right: 30px;
      flex: 0 0 400px;
    }

    .layout-content {
      flex: 1;
      // background-color: #fff;
      // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      //   0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      padding-bottom: 40px;
      min-height: 1200px;
    }
  }
  &-footer {
    text-align: center;
    padding: 30px 0;
  }
}
</style>
