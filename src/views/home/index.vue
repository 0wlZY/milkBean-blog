<template>
  <ul class="home-list">
    <li class="list-item" v-for="(item, index) in listData" :key="index">
      <div class="list-item-article">
        <div class="list-item-article-title">
          <a href="${item.href}"
            ><h3>{{ item.title }}</h3></a
          >
          <a-breadcrumb separator="|">
            <a-breadcrumb-item class="list-breadcrumb">
              <span style="margin-right: 8px;">发表于</span>
              {{ item.articleTime }}
            </a-breadcrumb-item>
            <a-breadcrumb-item class="list-breadcrumb">
              <a-icon type="tags" style="margin-right: 8px;" />
              {{ item.articleType }}
            </a-breadcrumb-item>
            <a-breadcrumb-item class="list-breadcrumb">
              <span style="margin-right: 8px;">阅读量</span>
              {{ item.articleFrequency }}
            </a-breadcrumb-item>
          </a-breadcrumb>
          <div class="article-description">
            <p>{{ item.description }}</p>
          </div>
        </div>
        {{ item.content }}
      </div>
      <div class="post-more-link">
        <a class="btn" href="${item.href}" rel="contents">
          阅读全文 »
        </a>
      </div>
    </li>
    <a-pagination class="list-page" align="right" :total="30" />
  </ul>
</template>

<script>
import openImg from "assets/images/contect/open.jpg";

const defData = [
  {
    id: "1",
    href: "https://www.antdv.com/",
    title: "我的博客开张啦~",
    description:
      "历经了千辛万苦我的博客终于改版成相对满意的样子，今天正式开张~欢迎多多光临~",
    content:
      "vue中的v-for 循环对象数组。循环的主体不会变 ，主要模式还是<p v-for='item in list'>{{item}}</p>data如下data: {list: [{ id: 1, name: 'zs1' },{ id: 2, name: 'zs2' }]},刻意知道list数组中，不是单纯地 数字，而是 每一个对象。所以",
    articleTime: "2020-07-31",
    articleType: "other",
    articleFrequency: "98"
  },

  {
    id: "2",
    href: "https://www.antdv.com/",
    title: "关于发布文章",
    description: "如何使用插件进入博客，用于编辑文章教程",
    content:
      "vue中的v-for 循环对象数组。循环的主体不会变 ，主要模式还是<p v-for='item in list'>{{item}}</p>data如下data: {list: [{ id: 1, name: 'zs1' },{ id: 2, name: 'zs2' }]},刻意知道list数组中，不是单纯地 数字，而是 每一个对象。所以"
  },
  {
    id: "3",
    href: "https://www.antdv.com/",
    title: "关于发布文章",
    description: "如何使用插件进入博客，用于编辑文章教程",
    content:
      "vue中的v-for 循环对象数组。循环的主体不会变 ，主要模式还是<p v-for='item in list'>{{item}}</p>data如下data: {list: [{ id: 1, name: 'zs1' },{ id: 2, name: 'zs2' }]},刻意知道list数组中，不是单纯地 数字，而是 每一个对象。所以"
  },
  {
    id: "4",
    href: "https://www.antdv.com/",
    title: "关于发布文章",
    description: "如何使用插件进入博客，用于编辑文章教程",
    content:
      "vue中的v-for 循环对象数组。循环的主体不会变 ，主要模式还是<p v-for='item in list'>{{item}}</p>data如下data: {list: [{ id: 1, name: 'zs1' },{ id: 2, name: 'zs2' }]},刻意知道list数组中，不是单纯地 数字，而是 每一个对象。所以"
  }
];

export default {
  components: {},
  data() {
    return {
      listData: defData,
      openImg,
      // pagination: {
      //   onChange: page => {
      //     console.log(page);
      //   },
      //   pageSize: 3,
      // },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-list {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  .list-item {
    background-color: #fff;
    padding: 25px 40px;
    border-bottom: 1px solid #e8e8e8;
    line-height: 1.7;
    border-radius: 0 100px 100px 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    // .list-item-img{
    //   margin: 30px 0;
    //   padding: 3px;
    //   border: 1px solid #ddd;
    // }

    &-article {
      display: block;
      color: #555;
      font-size: 16px;

      &-title {
        margin-bottom: 16px;
        line-height: 1.2;
        .list-breadcrumb {
          margin-right: 8px;
          color: rgba(0, 0, 0, 0.45);
        }
        h2 {
          vertical-align: top;
          color: #555;
          margin-bottom: 12px;
        }

        .ant-breadcrumb {
          margin-bottom: 20px;
          margin-top: 16px;
        }

        .article-description {
          font-size: 16px;
          padding: 0 15px;
          color: #666;
          border-left: 4px solid #ddd;
          margin-bottom: 25px;
        }
      }
    }

    .post-more-link {
      margin-top: 20px;
      text-align: left;

      .btn {
        color: #555;
        font-size: 16px;
        padding: 0;
        border-bottom: 2px solid #666;
      }
    }
  }

  .list-page {
    margin-top: 20px;
  }
}
</style>
