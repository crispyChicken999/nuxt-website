<template>
  <div class="content">
    <h2>意见反馈</h2>
    <el-form
      :model="form"
      :rules="formRules"
      ref="feedbackForm"
      label-width="90px"
      llabel-position="left"
    >
      <el-form-item prop="type" label="反馈类型">
        <el-select
          v-model="form.type"
          clearable
          filterable
          placeholder="请选择反馈类型"
        >
          <el-option
            v-for="option in formOptions.feedbackType"
            :key="option"
            :value="option"
            :label="option"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="feedback" label="问题描述">
        <el-input
          maxlength="200"
          show-word-limit
          v-model="form.feedback"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 5 }"
          resize="none"
          placeholder="请输入要反馈的需求或意见"
        ></el-input>
      </el-form-item>
      <el-form-item label="相关图片">
        <el-upload
          drag
          v-loading="isUploading"
          :show-file-list="false"
          :action="uploadBaseURL"
          class="photo-uploader"
          :data="{ phone: userInfo.phone }"
          :class="imageUrl ? 'is-upload' : ''"
          element-loading-text="正在上传中..."
          :on-success="handlePhotoSuccess"
          :before-upload="beforePhotoUpload"
          :on-change="() => (isUploading = false)"
          :on-progress="() => (isUploading = true)"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <template v-if="imageUrl">
            <img :src="imageUrl" class="photo" />
            <i
              class="el-icon-zoom-in"
              @click.stop="showPicViewer"
              title="点击放大"
            ></i>
          </template>
          <template v-else>
            <div class="empty-tips">
              <i class="iconfont icon-file-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
            </div>
          </template>
        </el-upload>
        <p class="upload-limit">只能上传JPG/PNG文件，且不超过4MB</p>
      </el-form-item>
      <el-form-item prop="contactWays" label="联系方式">
        <el-input
          v-model="form.contactWays"
          placeholder="请输入联系方式"
          clearable
        >
          <template slot="suffix">
            <el-tooltip
              effect="dark"
              content="请输入邮件、手机号码或QQ号码任意一种联系方式"
              placement="top"
            >
              <i class="el-icon-info"></i>
            </el-tooltip>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="btn-group">
      <el-button
        plain
        type="primary"
        :class="{ 'apply-shake': shakeBtn }"
        @click="confirmSubmit"
        >提交反馈</el-button
      >
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/plugins/axios.js";

export default {
  data() {
    return {
      form: {
        type: "",
        feedback: "",
        contactWays: "",
        photo: "",
      },
      formRules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择反馈类型",
          },
        ],
        feedback: [
          {
            required: true,
            trigger: "change",
            message: "请输入反馈内容",
          },
        ],
      },
      formOptions: {
        feedbackType: [
          "吐槽",
          "产品bug",
          "用户需求",
          "使用方法咨询",
          "意见建议",
          "其他",
        ],
      },
      isUploading: false,
      imageUrl: "",
      uploadBaseURL: `${baseURL}/api/feedbackPhoto/upload`,
      shakeBtn: false,
    };
  },
  created() {},
  computed: {
    userInfo() {
      return this.$store.state.account.userInfo;
    },
  },
  methods: {
    showPicViewer() {
      this.$viewerApi({
        images: [this.imageUrl],
      });
    },
    handlePhotoSuccess(res, file) {
      if (res && res.data && res.data.includes("picture")) {
        this.$message.success({
          message: "上传成功",
          offset: 90,
        });
        this.form.photo = res.data;
      }
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforePhotoUpload(file) {
      const isLt4M = file.size / 1024 / 1024 < 4;
      const isJPG_PNG = ["image/jpeg", "image/png"].includes(file.type);
      if (!isJPG_PNG) {
        this.$message.error({
          message: "相关图片只能是 JPG/PNG 格式!",
          offset: 90,
        });
      }
      if (!isLt4M) {
        this.$message.error({
          message: "相关图片大小不能超过 4MB!",
          offset: 90,
        });
      }
      return isJPG_PNG && isLt4M;
    },
    confirmSubmit() {
      this.$refs.feedbackForm.validate((valid, message) => {
        if (valid) {
          let params = {
            phone: this.userInfo.phone,
            ...this.form,
          };
          this.$http
            .post("api/clientService/feedback/submit", params)
            .then((res) => {
              console.log("意见反馈提交: ", res);
              if (
                res &&
                res.data &&
                res.data.data &&
                res.data.data.includes("成功")
              ) {
                this.$message.success({
                  message: "提交成功",
                  offset: 90,
                });
                this.imageUrl = "";
                this.form = this.$options.data().form;
                this.$nextTick(() => {
                  this.$refs.feedbackForm.clearValidate();
                });
              } else {
                console.log("意见反馈提交失败", res.data.msg);
                this.$message.warning({
                  message: `意见反馈提交失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("意见反馈提交失败", err.response);
              this.$message.error({
                message: `意见反馈提交失败: ${err.message || "未知原因"}`,
                duration: 2000,
                offset: 90,
              });
            });
        } else {
          // this.$message.warning({
          //   message: "表单输入有误，请重新输入",
          //   offset: 90,
          // });
          this.shakeBtn = true;
          setTimeout(() => {
            this.shakeBtn = false;
          }, 1500);
          this.$message.error({
            message: message[Object.keys(message)[0]][0].message,
            offset: 90,
          });
          this.$nextTick(() => {
            const el = document.querySelectorAll(".el-form-item__error")[0];
            el.scrollIntoView({ block: "center", behavior: "smooth" });
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .btn-group {
    display: flex;
    margin-top: 20px;
    transition: all 0.3s;
    justify-content: flex-end;
    .el-button {
      &.apply-shake {
        background-color: #f69797;
        border-color: #dd8080;
      }
    }
  }
  :deep().el-form {
    .el-form-item {
      .el-form-item__content {
        .el-select {
          width: 100%;
        }
        .upload-limit {
          font-size: 12px;
          color: #333;
          line-height: 10px;
          margin-top: -5px;
        }
      }
    }
  }
  .photo-uploader {
    overflow: hidden;
    border-radius: 6px;
    // height: 160px;
    em {
      color: #258783;
      &:hover {
        opacity: 0.8;
      }
    }
    &.is-upload {
      :deep().el-upload-dragger {
        position: relative;
        i {
          display: none;
          &:active {
            color: #404040;
          }
        }
        &:hover {
          i {
            position: absolute;
            display: block;
            z-index: 2;
            right: 2px;
            bottom: 2px;
            padding: 4px;
            font-size: 20px;
            color: #404040;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: #fff;
            transition: all 0.15s;
            &:hover {
              color: #fff;
              border-color: #258783;
              background-color: #258783;
            }
          }
          &::after {
            content: "点击更换或拖拽重新上传";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            display: flex;
            color: white;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    :deep().el-upload {
      height: 160px;
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;
      -webkit-tap-highlight-color: #00000000;
      .el-upload-dragger {
        width: 360px;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .el-icon-upload {
          margin: 0;
        }
        .empty-tips {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          .iconfont {
            font-size: 50px;
            color: #999;
            margin-bottom: 20px;
          }
        }
        p {
          font-size: 12px;
          line-height: 20px;
          color: #737373;
        }
        img {
          width: auto;
          height: 100%;
        }
        &:hover {
          border-color: #258783;
        }
      }
      &:hover {
        border-color: #258783;
      }
    }
  }
  .btn-group {
    padding-bottom: 20px;
    .el-button {
      border-color: #c1dcdb;
      background-color: #edfefd;
      color: #258783;
      &:hover {
        border-color: #c1dcdb;
        background-color: #30aba7;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .content {
    :deep().el-form {
      .el-form-item {
        .el-form-item__content {
          // todo
        }
      }
    }
    .photo-uploader {
      :deep().el-upload {
        width: 100%;
        .el-upload-dragger {
          width: 100%;
        }
      }
    }
  }
}
</style>
