 <template>
  <ul class="home-list">
    <li class="list-item" v-for="(item,index) in listData" :key="index">
      <div align="center">
        <img class="list-item-img" :src="openImg" alt="" >
      </div>
      <div class="list-item-article">
        <div class="list-item-article-meta">
          <a href=${item.href}><h4>{{item.title}}</h4></a>
          {{item.description}}
        </div>
        {{item.content}} 
      </div>
      <a-breadcrumb separator="|">
        <a-breadcrumb-item v-for="{ type, text} in actions" :key="type"  style="margin-right: 8px;color:rgba(0, 0, 0, 0.45);">
          <a-icon :type="type" style="margin-right: 8px"  />{{text}}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </li>
  </ul>
</template>

<script>
import openImg from 'assets/images/contect/open.jpg'

const defData = [{
    id:'1',
    href: 'https://www.antdv.com/',
    title: "我的博客开张啦~",
    description:
      '历经了千辛万苦我的博客终于改版成相对满意的样子，今天正式开张~欢迎多多光临~',
    content:
      "vue中的v-for 循环对象数组。循环的主体不会变 ，主要模式还是<p v-for='item in list'>{{item}}</p>data如下data: {list: [{ id: 1, name: 'zs1' },{ id: 2, name: 'zs2' }]},刻意知道list数组中，不是单纯地 数字，而是 每一个对象。所以"
      }]

export default {
  components: {},
  data() {
    return {
      listData:defData,
      openImg,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  }
};
</script>

<style lang="less" scoped>
.home-list{
  margin: 0;
  padding: 0;
  list-style: none;

  .list-item{
    padding: 16px 0;
    border-bottom: 1px solid #e8e8e8;

    &-img{
      width:600px;
      height: 200px;
      margin: 30px 0;
      padding: 3px;
      border: 1px solid #ddd;
    }

    &-article{
      display: block;
      color: #555;
      font-size: 16px;

      &-meta{
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        margin-bottom:16px;
        h4{
          color: rgba(0, 0, 0, 0.85);
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 24px;
        }
      }
    }
    .ant-breadcrumb{
      margin-top: 16px;
    }
  }

}
</style>
