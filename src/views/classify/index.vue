<template>
  <div class="classify-list">
    <div class="classify-list-title">分类共有12个</div>
    <div class="classify-list-content">
      <a-button
        v-for="(item, index) in dataClassify"
        :key="`${index}-${item}`"
        >{{ `${item.name}(${item.num})` }}</a-button
      >
      <a-divider :dashed="true" />
      <radar-chart />
    </div>
  </div>
</template>

<script>
import RadarChart from "@/components/RadarChart";

export default {
  components: {
    RadarChart
  },
  data() {
    return {
      dataClassify: [
        { name: "Vue", num: "3" },
        { name: "JS", num: "4" },
        { name: "生活篇章", num: "4" },
        { name: "读书笔记", num: "4" },
        { name: "css", num: "4" },
        { name: "啊吧啊吧", num: "2" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.classify-list {
  text-align: center;
  &-title {
    font-size: 24px;
    margin: 40px 0;
  }
  &-content {
    button {
      font-size: 18px;
      padding: 5px 15px;
      height: auto;
      margin: 10px;
      border-radius: 10px;
    }
  }
}
</style>
