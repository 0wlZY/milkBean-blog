<template>
  <div>
    <div class="home-banner">
      <img :src="banner" alt />
    </div>
    <div class="home-content">
      <div class="home-content-item"></div>
    </div>
  </div>
</template>

<script>
import banner from "assets/images/home/banner.jpg";
export default {
  components: {},
  data() {
    return {
      banner
    };
  }
};
</script>

<style lang="less" scoped>
.home-banner {
  margin-top: 10px;
  width: 100%;
  img {
    width: 100%;
  }
  // height: 100%;
}
</style>

