<template>
  <div class="link">
    <div class="link-header">
      <dt-header :title="title" :showBack="true" @back="back"> </dt-header>
    </div>
    <a-spin :spinning="spinning">
      <div class="link-content">
        <div class="link-content-editor">
          <!-- <richEditor
            :contentCn="linkForm.image_text"
            @change="(value) => (linkForm.image_text = value)"
          ></richEditor> -->
          <div class="editor-toolbar"></div>
          <div class="link-content-editor-box">
            <div class="link-content-editor-box-title">
              <input
                class="link-content-editor-box-title-input"
                placeholder="请输入标题,不能超过30个字"
                v-model="linkForm.title"
                maxlength="30"
                type="text"
              />
            </div>
            <div class="editor-content"></div>
          </div>
        </div>
        <div class="link-content-form">
          <a-form-model
            ref="linkForm"
            :model="linkForm"
            :rules="linkRules"
            :label-align="'left'"
          >
            <!-- <a-form-model-item label="链接标题" prop="title">
              <a-input
                v-model="linkForm.title"
                placeholder="请输入标题，限30个字"
              />
            </a-form-model-item> -->
            <a-form-model-item
              label="文章链接封面图"
              help="建议尺寸100*100，最大支持2M"
              prop="attach_id"
            >
              <dt-uploader
                ref="uploader"
                @upload="upload"
                :maxFileSize="2"
                :propImgUrl="linkForm.pic_url"
                @closeImg="
                  linkForm.attach_id = '';
                  linkForm.pic_url = '';
                "
                @watchLoading="value => (uploaderLoading = value)"
              />
            </a-form-model-item>

            <a-form-model-item label="链接描述" prop="content">
              <a-textarea
                v-model="linkForm.content"
                placeholder="请输入链接描述，限128个字"
                :auto-size="{ minRows: 6, maxRows: 6 }"
              />
            </a-form-model-item>

            <a-form-model-item label="素材分组" prop="group_id">
              <a-select
                class="link-content-form-select"
                v-model="linkForm.group_id"
                @focus="getGroup"
                placeholder="请选择分组"
              >
                <a-spin
                  v-if="groupSpinning"
                  slot="notFoundContent"
                  size="small"
                />
                <a-select-option
                  :value="item.value"
                  v-for="item in groupList"
                  :key="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>

            <a-form-model-item label="备注" prop="remark">
              <a-textarea
                v-model="linkForm.remark"
                placeholder="备注仅员工可见，最多100字"
                :auto-size="{ minRows: 3, maxRows: 3 }"
              />
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
      <div class="link-footer">
        <a-space>
          <a-button :lodaing="spinning" @click="preview">预览</a-button>
          <a-button type="primary" @click="addLink" :lodaing="spinning">
            保存
          </a-button>
        </a-space>
      </div>
    </a-spin>

    <a-modal
      class="preview"
      width="640px"
      :visible="visible"
      title="链接预览"
      @cancel="visible = false"
    >
      <!-- 链接预览 -->
      <a-spin :spinning="spinningCode">
        <div class="preview-link">
          <div id="qrcode" ref="qrcode"></div>
        </div>
      </a-spin>
    </a-modal>
    <!-- 选择素材弹窗 -->
    <chooseMsg
      class="chooseMsg"
      :show="showModal"
      :type="typeValue"
      :news_type="1"
      :callback="modalVisibleChange"
      :choose-id="0"
      :comefrom="'3'"
    ></chooseMsg>
  </div>
</template>

<script>
// import richEditor from '@/components/content-editor/index.vue';
import WangEditor from "wangeditor";
import chooseMsg from "@/components/FilingCabinet/ChooseMsg";
import {
  attachmentGroup,
  imageTextAdd,
  listByIds,
  imageTextPreview
} from "@/api/material";
import { TYPE_NUM } from "@/common/constants";
import QRCode from "qrcodejs2";
export default {
  name: "AddLink",
  data() {
    return {
      contentCn: "",
      //添加渠道弹窗数据
      linkForm: {
        attach_id: "",
        title: "",
        pic_url: "",
        group_id: undefined,
        content: "",
        remark: "",
        attachment_id: "",
        image_text: ""
      },
      //添加渠道弹窗规则
      linkRules: {
        title: [
          // {
          //   trigger: 'change',
          //   validator: this.channelRules,
          // },
          { required: true, message: "链接标题不能为空", trigger: "change" },
          {
            max: 30,
            message: "链接标题最多30个字符",
            trigger: "change"
          }
        ],
        content: [
          { required: true, message: "链接描述不能为空", trigger: "change" },
          {
            max: 128,
            message: "链接描述长度不能超过128个字符",
            trigger: "change"
          }
        ],
        attach_id: [
          {
            required: true,
            message: "链接封面不能为空",
            trigger: ["blur", "change"]
          }
        ],
        remark: [
          {
            max: 100,
            message: "链接备注长度不能超过100个字符",
            trigger: "change"
          }
        ]
      },
      // 用于上传接口回显所用
      upLoadImg: "",
      uploaderLoading: false,
      groupList: [],
      groupSpinning: false,
      spinning: false,
      // 图文链接预览
      visible: false,
      spinningCode: false,
      isTip: false,
      editor: null,
      showModal: false,
      typeValue: 1,
      cosUrl: this.$store.state.cosUrl
    };
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    id() {
      return this.$route.query.id;
    },
    group_id() {
      return this.$route.query.group_id;
    },
    title() {
      return this.id ? "编辑图文链接" : "添加图文链接";
    }
  },
  watch: {
    id: {
      handler(newV) {
        if (newV) {
          this.getGroup();
          this.getLink(newV).then(() => {
            this.isTip = false;
          });
        }
      },
      immediate: true
    },
    "linkForm.attach_id": {
      handler() {
        if (this.$refs.linkForm) {
          this.$refs.linkForm.clearValidate("attach_id");
        }
      }
    },
    linkForm: {
      handler() {
        this.isTip = true;
      },
      deep: true
    }
  },
  components: {
    // richEditor,
    chooseMsg
  },
  mounted() {
    this.isTip = false;
    this.initEditor();
    this.init();
  },
  methods: {
    async init() {
      await this.getGroup();
      if (this.group_id) {
        this.linkForm.group_id = this.group_id;
      }
      this.isTip = false;
    },
    back() {
      if (this.isTip) {
        this.$confirm({
          title: "关闭将不会保存已编辑的内容，是否确认关闭？",
          okButtonProps: {
            // props: {
            //   type: 'danger',
            //   ghost: true,
            // },
          },
          okText: "确定",
          content: "",
          cancelText: "取消",
          icon: () =>
            this.$createElement("a-icon", {
              props: {
                type: "exclamation-circle",
                theme: "filled"
              }
            }),
          onOk: () => {
            this.$router.go(-1);
          }
        });
      } else {
        this.$router.go(-1);
      }
    },
    // 选择素材回调
    modalVisibleChange(event, e, id, data) {
      if (event == "ok") {
        let html = "";
        for (let i = 0; i < id.length; i++) {
          html += `<p><img style="max-width: 100%;" class="rich_pages js_insertlocalimg" src="${this
            .cosUrl + data[i].local_path}" /></p>`;
        }
        // this.imgEditor.execCommand('inserthtml', html);
        this.editor.cmd.do("insertHTML", html);
      }
      this.showModal = false;
    },
    initEditor() {
      this.editor = new WangEditor(".editor-toolbar", ".editor-content");
      this.editor.config.excludeMenus = ["video", "code"];
      this.editor.config.uploadImgServer = "/upload-img";
      this.editor.config.showLinkImg = false;
      this.editor.config.uploadImgFromMedia = () => {
        this.typeValue = 1;
        this.showModal = true;
        // this.showMsg(1);
      };
      this.editor.config.onchange = () => {
        this.linkForm.image_text = this.editor.txt.html();
      };
      this.editor.create();
      this.editor.txt.html(this.linkForm.image_text);
    },
    previewLink(url) {
      this.visible = true;
      this.spinningCode = true;
      this.$nextTick(() => {
        this.$refs.qrcode.innerHTML = "";
        new QRCode(this.$refs.qrcode, {
          width: 160,
          height: 160,
          text: `${this.$store.state.h5Url}/preview?num=${url}`, // 二维码地址
          colorDark: "#000",
          colorLight: "#FFF"
        });
        this.spinningCode = false;
      });
    },
    // 图片赋值
    upload(res) {
      this.linkForm.attach_id = res.data.info.id;
      this.linkForm.pic_url = res.data.info.local_path;
    },
    // 获取分组
    async getGroup() {
      this.groupSpinning = true;
      this.groupList = [];
      try {
        const { data: res } = await attachmentGroup({
          file_type: TYPE_NUM[this.type]
        });
        // 只保留一层的数据 为了兼容老数据
        this.groupList = [
          ...(res.data.group || []).map(item => {
            return {
              label: item.title,
              channel_type: item.channel_type,
              value: item.value,
              num: item.num
            };
          })
        ];
        this.groupSpinning = false;
      } catch (e) {
        this.groupSpinning = false;
        console.log(e);
      }
    },

    async addLink() {
      if (!this.linkForm.title) {
        this.$message.error("链接标题不能为空");
        return;
      } else if (this.linkForm.title.length > 30) {
        this.$message.error("链接标题最多30个字符");
        return;
      }
      if (!this.linkForm.image_text) {
        this.$message.error("请检查链接正文");
        return;
      } else if (this.getLength(this.linkForm.image_text) > 4000) {
        this.$message.error("链接正文最多4000个字符");
        return;
      }
      this.$refs.linkForm.validate(async valid => {
        if (valid) {
          this.spinning = true;
          try {
            await imageTextAdd({
              group_id: this.linkForm.group_id,
              attachment_id: this.linkForm.attachment_id,
              file_type: TYPE_NUM[this.type],
              msgData: [this.linkForm]
            });
            this.spinning = false;
            this.$router.push({ path: "/materialLibrary/link" });
          } catch (e) {
            console.log(e);
            this.spinning = false;
          }
        } else {
          this.$message.error("请检查当前内容是否完整");
        }
      });
    },
    getLength(value = "") {
      let temp = value.replace(/<\/?.+?>/g, "");
      let result = temp.replace(/ /g, ""); //result为获取冲文字得到后的内容
      //         获取img标签
      let re = /<img[^>]+>/g;
      let ImgA = value.match(re);
      let imgLen;
      if (ImgA) {
        imgLen = ImgA.length;
      }
      if (!ImgA) {
        imgLen = 0;
      }
      return imgLen + result.length;
    },

    async getLink(id) {
      this.spinning = true;
      try {
        const { data: res } = await listByIds({ attachment_ids: [id] });
        let linkData = res.data.attachments[0] || {};
        this.linkForm.title = linkData.file_name;
        this.linkForm.attach_id = linkData.attach_id;
        this.linkForm.pic_url = linkData.local_path;
        this.linkForm.group_id = linkData.group_id;
        this.linkForm.content = linkData.content;
        this.linkForm.remark = linkData.remark;
        this.linkForm.attachment_id = linkData.id;
        this.linkForm.image_text = linkData.image_text;
        this.editor.txt.html(this.linkForm.image_text);
        this.spinning = false;
      } catch (e) {
        console.log(e);
        this.spinning = false;
      }
    },

    async preview() {
      this.$refs.linkForm.validate(async valid => {
        if (valid) {
          if (!this.linkForm.image_text) {
            this.$message.warning("请检查链接正文");
            return;
          }
          this.spinning = true;
          try {
            const { data: res } = await imageTextPreview({
              ...this.linkForm,
              group_id: this.linkForm.group_id,
              attachment_id: "",
              file_type: TYPE_NUM[this.type],
              remark: this.remark,
              is_sync: 0
            });
            this.previewLink(res.data.num);
            this.spinning = false;
          } catch (e) {
            console.log(e);
            this.spinning = false;
          }
        } else {
          this.$message.error("请检查当前内容是否完整");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.link {
  width: 100%;
  height: 100%;
  &-content {
    display: grid;
    grid-column-start: span 2;
    grid-template-columns: auto 284px;
    gap: 16px;
    height: calc(100vh - 200px);
    padding: 0 24px;
    overflow: auto;
    &-editor {
      // margin-right: 16px;
      // background-color: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      &-box {
        flex-grow: 1;
        height: 100%;
        padding: 14px;
        background-color: #fff;
        .editor-content {
          position: relative;
          z-index: 1;
          // height: 100%;
          height: calc(100% - 84px);
          overflow-y: auto;
          border-bottom: 1px solid #e2e2e2;
        }
        &-title {
          width: 100%;
          padding: 10px 10px 0 10px;
          &-input {
            width: 100%;
            padding: 0 0 8px 0;
            font-size: 16px;
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.09);
            outline: none;

            &::-webkit-input-placeholder {
              color: rgba(213 213 213);
              font-weight: 500;
              font-size: 16px;
            }
          }
        }
      }
    }
    &-form {
      padding: 24px;
      overflow-y: auto;
      background-color: #fff;
      &-select {
        width: 160px;
      }
      .ant-form-item {
        margin-bottom: 8px;
      }
      /deep/ .ant-form-explain {
        margin-top: 8px;
      }
    }
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // width: 100%;
    // height: 54px;
    margin: 0 24px;
    padding: 12px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.09);
    // grid-column-start: span 2;
  }
}
// 预览弹窗样式
.preview {
  padding: 24px;

  &-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px;
    img {
      width: 160px;
    }
  }
}

.editor-toolbar {
  position: relative;
  z-index: 2;
  margin-bottom: 16px;
}
</style>
