<template>
  <!-- 菜单模块 -->
  <div class="sider-infor-menu">
    <img :src="imgAvatar" alt="" />
    <div>
      <h2>May</h2>
      <p>所有的晦暗都留给过往，凛冬散尽星河长明。</p>
    </div>
    <a-row class="sider-state">
      <a-col :span="6" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">浏览数</span>
      </a-col>
      <a-col :span="3">
        <a-divider type="vertical" />
      </a-col>
      <a-col :span="6" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">点赞</span>
      </a-col>
      <a-col :span="3">
        <a-divider type="vertical" />
      </a-col>
      <a-col :span="6" class="sider-state-item">
        <span class="sider-state-item-count">121</span>
        <span class="sider-state-item-name">文章</span>
      </a-col>
    </a-row>
    <a-divider :dashed="true" />
    <div class="sider-skip">
      <a-row>
        <a-col :span="12">
          <a-icon type="github" theme="filled" />
          <span>GitHub</span>
        </a-col>
        <a-col :span="12">
          <a-icon type="wechat" theme="filled" />
          <span>Wechat</span>
        </a-col>
      </a-row>
      <a-row class="sider-skip">
        <a-col :span="12">
          <a-icon type="weibo-circle" theme="filled" />
          <a
            href="https://weibo.com/3914829201/profile?topnav=1&wvr=6&is_all=1"
            target="_blank"
          >
            <span>微博</span>
          </a>
        </a-col>
      </a-row>
    </div>
    <a-divider :dashed="true" />
    <div class="sider-links">
      <div class="sider-links-title">
        <a-icon type="link" />
        <span>友链</span>
      </div>
      <ul>
        <li>
          <a href="http://www.96qufei.cn" title="曲永庆的博客" target="_blank">
            <span> Qufei's blog</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import imgAvatar from "@/assets/images/home/avatar.jpg";

export default {
  computed: {},
  data() {
    return {
      imgAvatar,
    };
  },
  methods: {},
  watch: {},
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #555;
}
.sider-infor-menu {
  margin: 30px 0;
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

    .ant-divider {
      height: 30px;
      margin-top: 10px;
    }

    .sider-state-item {
      display: inline-block;
      color: #fece5b;
      font-size: 14px;

      &-count {
        display: block;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }

  .sider-skip {
    text-align: left;

    .ant-row {
      margin-bottom: 15px;

      i {
        font-size: 24px;
        margin-right: 8px;
      }
    }
  }

  .sider-links {
    &-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;

      span {
        margin-left: 8px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        margin: 15px 0 0;

        span {
          padding-bottom: 5px;
          border-bottom: 1px solid #555;
        }

        a {
          text-decoration: none;
          color: #555;
        }

        a:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
