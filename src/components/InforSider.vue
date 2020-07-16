<template>
  <!-- 菜单模块 -->
  <div class="sider-infor-menu">
    <img :src="imgAvatar" alt="" />
    <div>
      <h2>May</h2>
      <p>所有的晦暗都留给过往，凛冬散尽星河长明。</p>
    </div>
    <a-row class="sider-state">
      <a-col :span="8" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">浏览数</span>
      </a-col>
      <a-col :span="8" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">点赞</span>
      </a-col>
      <a-col :span="8" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">文章</span>
      </a-col>
    </a-row>

    <a-back-top />
  </div>
</template>

<script>
import imgAvatar from "@/assets/images/home/avatar.jpg";

export default {
  computed: {},
  data() {
    return {
      imgAvatar
    };
  },
  methods: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.sider-infor-menu {
  margin-top: 30px;
  padding: 30px;
  background-color: #fff;
  font-size: 16px;
  color: #555;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

  img {
    width: 80%;
    margin-bottom: 15px;
  }

  .sider-state {
    margin-top: 30px;

    .sider-state-item:last-child {
      border: none;
    }

    .sider-state-item {
      border-right: 1px solid #fece5b;
      display: inline-block;
      color: #fece5b;
      font-size: 14px;

      .sider-state-item-count {
        display: block;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
</style>
