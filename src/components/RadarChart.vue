<template>
  <div class="radar-chart-box" ref="radarChart"></div>
</template>

<script>
export default {
  data() {
    return {
      myChart: null
    };
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    initRadarChart() {
      const el = this.$refs.radarChart;
      const echarts = require("echarts");
      const myChart = echarts.init(el);

      const option = {
        backgroundColor: "#fff",
        radar: {
          radius: "80%",
          name: {
            textStyle: {
              color: "#555",
              fontSize: "18",
              padding: [13, 15]
            }
          },
          //雷达分类名的位置
          nameGap: "2",
          indicator: [
            {
              name: "vue",
              max: 50
            },
            { name: "js", max: 50 },
            { name: "生活篇章", max: 50 },
            { name: "读书笔记", max: 50 },
            { name: "css", max: 50 },
            { name: "啊吧啊吧", max: 50 }
          ],
          splitArea: {
            //雷达底部样式
            areaStyle: {
              color: [
                "rgba(222,134,85, 0.1)",
                "rgba(222,134,85, 0.2)",
                "rgba(222,134,85, 0.4)",
                "rgba(222,134,85, 0.6)",
                "rgba(222,134,85, 0.8)",
                "rgba(222,134,85, 1)"
              ].reverse()
            }
          },
          axisLine: {
            //雷达底部分隔线样式
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          splitLine: {
            // 雷达底部线圈
            lineStyle: {
              width: 2,
              color: [
                "rgba(224,134,82, 0.1)",
                "rgba(224,134,82, 0.2)",
                "rgba(224,134,82, 0.4)",
                "rgba(224,134,82, 0.6)",
                "rgba(224,134,82, 0.8)",
                "rgba(224,134,82, 1)"
              ].reverse()
            }
          }
        },
        series: [
          {
            type: "radar",
            //展示线内部阴影
            areaStyle: {
              normal: {
                color: "rgba(252,211,3, 0.3)"
              }
            },
            //展示数据节点的大小
            symbolSize: 0,
            //展示线
            lineStyle: {
              normal: {
                color: "rgba(252,211,3, 1)",
                width: 1
              }
            },
            //数据
            data: [
              {
                value: [28, 33, 28, 9, 40, 50]
              }
            ]
          }
        ]
      };

      myChart.setOption(option);
      // window.addEventListener("resize", function () {
      //   myChart.resize();
      // });
    }
  },
  mounted() {
    // if (this.dataSource && this.dataSource.length > 0) {
    this.$nextTick(() => {
      this.initRadarChart();
    });
    // }
  }
};
</script>

<style lang="less" scoped>
.radar-chart-box {
  width: 100%;
  height: 600px;
  margin: 0 auto;
}
</style>
