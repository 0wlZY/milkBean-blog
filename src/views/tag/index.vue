<template>
  <div class="label">
    <div class="label-title">标签共有12个</div>
    <div class="label-content">
      <a
        v-for="item in words"
        :key="item.name[item.value]"
        href=""
        :style="`font-size:${
          item.value < 100 ? 12 + parseInt(item.value / 10) * 2 : 30
        }px; color: ${
          item.value < 100 ? colorwords[parseInt(item.value / 10)] : '#111111'
        }`"
        >{{ item.name }}</a
      >
    </div>
  </div>
  <!-- <div class="content-box">
    <div ref="keyWords" style="height: 300px"></div>
  </div> -->
</template>
<script>
// import "echarts-wordcloud";
export default {
  // data: function () {
  //   return {
  data() {
    return {
      colorwords: [
        "#cccccc",
        "#B7B7B7",
        "#a2a2a2",
        "#8e8e8e",
        "#797979",
        "#646464",
        "#4f4f4f",
        "#3b3b3b",
        "#262626",
        "#111111",
      ],
      words: [
        {
          name: "web",
          value: 84,
        },
        {
          name: "GIT",
          value: 5,
        },
        {
          name: "CSS",
          value: 22,
        },
        {
          name: "CSS",
          value: 11,
        },
        {
          name: "前端",
          value: 101,
        },
        {
          name: "CSS",
          value: 33,
        },
        {
          name: "Vue",
          value: 77,
        },
        {
          name: "js",
          value: 98,
        },

        {
          name: "互联网",
          value: 66,
        },
        {
          name: "插件",
          value: 55,
        },
        {
          name: "UI",
          value: 44,
        },
        {
          name: "GIT",
          value: 5,
        },
        {
          name: "CSS",
          value: 22,
        },
        {
          name: "CSS",
          value: 11,
        },
        {
          name: "CSS",
          value: 33,
        },
      ],
    };
  },
  //   mounted() {
  //     this.$nextTick(() => {
  //       this.initEchart();
  //     });
  //   },
  //   methods: {
  //     initEchart() {
  //       //获取DOM节点并初始化
  //       const el = this.$refs.keyWords;
  //       const echarts = require("echarts");
  //       const myChart = echarts.init(el);
  //       const colorList = ["#f89b6299", "#afcf7cde", "#fece5b"];
  //       const option = {
  //         tooltip: {
  //           show: true,
  //         },
  //         series: [
  //           {
  //             //用来调整词之间的距离
  //             gridSize: 20,
  //             //用来调整字的大小范围
  //             sizeRange: [18, 40],
  //             // shape: "circle",
  //             //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
  //             rotationRange: [0, 0],
  //             type: "wordCloud",
  //             size: ["95%", "95%"],
  //             textRotation: [0, 90],
  //             textPadding: 0,
  //             autoSize: {
  //               enable: true,
  //               minSize: 14,
  //             },
  //             textStyle: {
  //               normal: {
  //                 color: function () {
  //                   let index = Math.floor(Math.random() * colorList.length);
  //                   return colorList[index];
  //                 },
  //               },
  //             },
  //             data: this.words,
  //           },
  //         ],
  //       };

  //       //设置图表的参数
  //       myChart.setOption(option);
  //     },
  //   },
};
</script>

<style lang="less" scoped>
.label {
  padding: 0 60px;
  .label-title {
    text-align: center;
    font-size: 18px;
    margin: 40px 0;
  }
  .label-content {
    line-height: 2;
    a {
      margin: 10px;
      display: inline-block;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>