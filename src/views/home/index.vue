<template>
  <div>
    <div class="home-banner">
      <img :src="banner" alt />
    </div>
    <div class="home-content">
      <div class="home-content-item">
        <template>
          <a-skeleton />
        </template>
      </div>
    </div>
  </div>
</template>
     

<script>
import banner from "assets/images/home/banner_milke.jpg";
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
  margin-top: 2px;
  width: 100%;
  img {
    width: 100%;
  }
  // height: 100%;
}
.home-content {
  background-color: #e8f1f8;
  border-top: 2px solid #e88e01;
}
</style>

