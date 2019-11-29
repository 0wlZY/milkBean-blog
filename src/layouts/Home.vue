<template>
  <div class="home-layout">
    <a-layout class="home-content-layout">
      <a-layout-header class="home-content-header">
        <page-header />
      </a-layout-header>
      <a-layout-content class="home-content-body">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="home-content-footer">f</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import pageHeader from "@/components/menu/PageHeader";

export default {
  components: {
    pageHeader
  }
};
</script>

<style lang="less" scoped>
.home-content-layout {
  background-color: #fff;
  .home-content-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 0;
    background-color: transparent;
  }
  .home-content-body {
    background-color: #dadfbc;
    margin-top: 64px;
    padding: 0 5%;
  }
  .home-content-footer {
    background-color: #dadfbc;
  }
}
</style>
