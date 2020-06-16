<template>
  <div>
    <div class="pages-line"></div>
    <a-layout class="pages-layout">
      <a-layout-sider class="pages-sider" width="360">
        <page-sider />
        <infor-sider/>
      </a-layout-sider>
      <a-layout class="pages-content">
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
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
#components-layout-demo-basic .ant-layout-sider {
  width: 360px;
}

.pages-line {
  width: 100%;
  height: 5px;
  background-color: #fece5b;
}
.pages-layout {
  padding: 0 80px;

  .pages-sider{
    background-color: #f0f2f5;
  }

  .pages-content {
    margin-left: 18px;
    background-color: #fff;
    padding:20px;
  }
}
</style>
