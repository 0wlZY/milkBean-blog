<template>
  <div>
    <div class="pages-banner"></div>
    <a-layout class="pages-layout">
      <a-layout-sider class="pages-sider" width="360">
        <page-sider />
      </a-layout-sider>
      <a-layout class="pages-content">
        <a-layout-content>
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import pageSider from "@/components/menu/PageSider";

export default {
  components: {
    pageSider
  }
};
</script>

<style lang="less" scoped>
#components-layout-demo-basic .ant-layout-sider {
  width: 360px;
}

.pages-banner {
  width: 100%;
  // height: 150px;
  height: 5px;
  background-color: #222;
}
.pages-layout {
  padding: 0 80px;

  .pages-content {
    margin-left: 18px;
    background-color: #fff;
  }
}
</style>
