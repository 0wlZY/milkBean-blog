<template>
  <div>
    <div class="pages-line"></div>
    <a-layout class="pages-layout">
      <a-layout-sider
        class="pages-sider"
        width="400"
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          top: '5px'
        }"
      >
        <page-sider />
        <infor-sider />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '420px' }">
        <a-layout-content
          class="pages-content"
          :style="{ margin: '5px ', overflow: 'initial' }"
        >
          <router-view />
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
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
  width: 400px;
}

.pages-line {
  width: 100%;
  height: 5px;
  background-color: #fece5b;
  position: fixed;
  top: 0;
  z-index: 9;
}

.pages-layout {
  width: 100%;

  .pages-sider {
    background-color: #f0f2f5;
    padding-left: 5px;
  }

  .pages-content {
    min-height: 840px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 0 40px 40px 40px;
  }
}
@media only screen and (max-width: 1280px) {
  .pages-layout {
    padding: 0 4% 20px 4%;
  }
}

@media screen and (min-width: 1281px) {
  .pages-layout {
    padding: 0 10% 20px 10%;
  }
}
</style>
