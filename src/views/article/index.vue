<template>
  <div class="pages">
    <div class="pages-line"></div>
    <div class="pages-layout">
      <div class="top-button">
        <div class="go">
          <img :src="imgGo" alt="" />
          <span>退出文章编辑</span>
        </div>
        <button>
          发布文章
        </button>
      </div>
      <div class="editor-toolbar"></div>
      <div class="editor-text">
        <a-input
          placeholder="请输入标题"
          class="editor-text-title"
          maxlength="30"
          type="text"
        />
        <a-divider />
        <div class="editor-text-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import imgGo from "@/assets/images/go.png";
// 引入 wangEditor
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      imgGo,
      editor: null,
      editorData: ""
    };
  },
  mounted() {
    const editor = new wangEditor(".editor-toolbar", ".editor-text-content");
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = newHtml => {
      this.editorData = newHtml;
    };
    // 创建编辑器
    editor.create();
    this.editor = editor;
  },
  methods: {
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html();
      alert(data);
    }
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  }
};
</script>

<style lang="less">
.pages {
  height: 100%;
  &-line {
    width: 100%;
    height: 8px;
    background-color: #fece5b;
    position: fixed;
    top: 0;
    z-index: 9;
  }
  &-layout {
    margin-top: 8px;
    padding: 0 10%;
    width: 100%;
    .top-button {
      padding: 40px 0 20px 0;
      display: flex;
      justify-content: space-between;
      .go {
        display: flex;
        img {
          width: 40px;
          height: 40px;
          margin-right: 8px;
        }
        span {
          color: #383838;
          font-size: 24px;
        }
      }
      button {
        width: 130px;
        height: 45px;
        color: #fff;
        border-radius: 30px;
        background-color: #f2d577;
        border: none;
        font-size: 18px;
        cursor: pointer;
      }
      button:hover {
        background-color: #fece5b;
      }
    }
    .w-e-toolbar {
      height: 50px;
      border-radius: 5px;
      align-content: center;
      margin-bottom: 30px;
      border: 1px solid #f2d577;
    }
    .editor-text {
      background-color: #fff;
      border: 1px solid #f2d577;
      border-radius: 5px;
      padding: 30px 20px;
      // font-size: 18px;
      min-height: 900px;
      &-title {
        border: none;
        font-size: 24px;
      }
      .ant-input:focus {
        border: none;
        box-shadow: none;
      }
    }
  }
}
</style>
