<template>
  <a-locale-provider :locale="locale">
    <div id="app" class="global-controller-app">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>

<style lang="less">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: Lato,"PingFang SC","Microsoft YaHei",sans-serif;
}

.global-controller-app {
}
</style>
