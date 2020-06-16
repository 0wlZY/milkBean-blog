<template>
  <!-- 菜单模块 -->
  <div class="sider-infor-menu">
    <img :src="imgAvatar" alt="">
    <div>
      <h2>May</h2>
      <p>所有的晦暗都留给过往，凛冬散尽星河长明。</p>
    </div>
    <nav class="sider-state">
      <div class="sider-state-item">
        <a href="#">
          <span class="sider-state-item-count">121</span>
          <span class="sider-state-item-name">posts</span>
        </a>
      </div>
      <div class="sider-state-item">
        <a href="#">
          <span class="sider-state-item-count">121</span>
          <span class="sider-state-item-name">posts</span>
        </a>
      </div>
      <div class="sider-state-item">
        <a href="#">
          <span class="sider-state-item-count">121</span>
          <span class="sider-state-item-name">posts</span>
        </a>
      </div>
    </nav>
    
   
    <a-back-top />
  </div>
</template>

<script>
import imgAvatar from '@/assets/images/home/avatar.jpg'

export default {
  computed: {},
  data() {
    return {
      imgAvatar,
    };
  },
  methods: {
   
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.sider-infor-menu{
    margin-top: 30px;
    padding: 30px;
    background-color: #fff;
    font-size: 16px;
    color: #555;
    text-align:center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  img{
    width: 80%;
    margin-bottom: 15px;
  }
  .sider-state-item{
    display: inline-block;

  }
  .sider-state-item-count{

    display: block;
      text-align: center;
      color: inherit;
      font-weight: 600;
      font-size: 16px;
  }
}

</style>