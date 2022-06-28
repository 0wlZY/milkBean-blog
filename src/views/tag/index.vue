<template>
  <div class="label">
    <div class="label-title">标签共有12个</div>
    <div class="label-content">
      <a-button v-for="(item, index) in words" :key="`${index}-${item}`"
        ><a-icon type="tag" />{{ item.name }}</a-button
      >
      <a-divider :dashed="true" />
      <word-cloud />
    </div>
  </div>
</template>

<script>
import WordCloud from "@/components/WordCloud";

export default {
  components: {
    WordCloud
  },
  data() {
    return {
      words: [
        {
          name: "web",
          value: 84
        },
        {
          name: "GIT",
          value: 5
        },
        {
          name: "CSS",
          value: 22
        },
        {
          name: "CSS",
          value: 11
        },
        {
          name: "前端",
          value: 101
        },
        {
          name: "CSS",
          value: 33
        },
        {
          name: "Vue",
          value: 77
        },
        {
          name: "js",
          value: 98
        },

        {
          name: "互联网",
          value: 66
        },
        {
          name: "插件",
          value: 55
        },
        {
          name: "UI",
          value: 44
        },
        {
          name: "GIT",
          value: 5
        },
        {
          name: "CSS",
          value: 22
        },
        {
          name: "CSS",
          value: 11
        },
        {
          name: "CSS",
          value: 33
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.label {
  width: 100%;
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
