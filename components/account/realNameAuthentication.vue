<template>
  <div class="content">
    <viewer :images="[imageUrl]"></viewer>
    <h2>营业执照</h2>
    <el-upload
      drag
      v-loading="isUploading"
      :show-file-list="false"
      :action="uploadBaseURL"
      class="certificate-uploader"
      :data="{ phone: userInfo.phone }"
      :class="imageUrl ? 'is-upload' : ''"
      element-loading-text="正在上传中..."
      :on-success="handleCertificateSuccess"
      :before-upload="beforeCertificateUpload"
      :on-change="() => (isUploading = false)"
      :on-progress="() => (isUploading = true)"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <template v-if="imageUrl">
        <img :src="imageUrl" class="certificate" />
        <i
          class="el-icon-zoom-in"
          @click.stop="showPicViewer"
          title="点击放大"
        ></i>
        <i
          class="el-icon-close"
          @click.stop="confirmRemove"
          title="点击删除"
        ></i>
      </template>
      <template v-else>
        <div class="empty-tips">
          <i class="iconfont icon-file-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </div>
      </template>
    </el-upload>
    <div class="el-upload__tip" slot="tip">
      只能上传JPG/PNG文件，且不超过4MB
    </div>
    <div class="code">
      <h2>统一信用代码</h2>
      <div class="input-area" :class="{ 'apply-shake': isNeedShaking }">
        <el-input
          clearable
          v-model="form.code"
          @keyup.native.enter="confirmSave"
          placeholder="请输入组织统一信用代码"
        ></el-input>
        <el-button type="primary" plain @click="confirmSave">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/plugins/axios.js";

export default {
  data() {
    return {
      uploadBaseURL: `${baseURL}/api/certificate/upload`,
      isUploading: false,
      imageUrl: "",
      form: {
        code: "",
      },
      isNeedShaking: false,
    };
  },
  created() {},
  mounted() {
    this.initData();
  },
  watch: {
    userCertificate: {
      handler() {
        this.imageUrl = this.userCertificate;
      },
    },
    userInfo: {
      handler() {
        this.form.code = this.userInfo.code;
      },
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.account.userInfo;
    },
    userCertificate() {
      return this.$store.state.account.userCertificate;
    },
  },
  methods: {
    initData() {
      this.imageUrl = this.userCertificate;
      this.form.code = this.userInfo.code;
    },
    showPicViewer() {
      this.$viewerApi({
        images: [this.imageUrl],
      });
    },
    handleCertificateSuccess(res, file) {
      if (res && res.data && res.data.includes("picture")) {
        this.$store.commit("account/setUserCertificate", res.data);
        this.$message.success({
          message: "修改成功",
          offset: 90,
        });
      }
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.imageUrl = JSON.parse(JSON.stringify(this.userCertificate));
    },
    beforeCertificateUpload(file) {
      const isLt4M = file.size / 1024 / 1024 < 4;
      const isJPG_PNG = ["image/jpeg", "image/png"].includes(file.type);
      if (!isJPG_PNG) {
        this.$message.error({
          message: "营业执照图片只能是 JPG/PNG 格式!",
          offset: 90,
        });
      }
      if (!isLt4M) {
        this.$message.error({
          message: "营业执照图片大小不能超过 4MB!",
          offset: 90,
        });
      }
      return isJPG_PNG && isLt4M;
    },
    confirmRemove() {
      let params = {
        phone: this.userInfo.phone,
      };
      this.$http
        .get("api/userInfo/certificate/delete", params)
        .then((res) => {
          console.log("删除证书图片: ", res);
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.includes("成功")
          ) {
            this.$message.success({
              message: "删除成功",
              offset: 90,
            });
            this.$store.commit("account/setUserCertificate", "");
            this.imageUrl = "";
          } else {
            console.log("删除证书图片失败", res.data.msg);
            this.$message.warning({
              message: `删除证书图片失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("删除证书图片失败", err.response);
          this.$message.error({
            message: `删除证书图片失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },
    confirmSave() {
      if (!this.form.code) {
        this.$message.warning({
          message: "请输入信用代码",
          offset: 90,
        });
        this.isNeedShaking = true;
        setTimeout(() => {
          this.isNeedShaking = false;
        }, 1500);
        return;
      }
      let params = {
        phone: this.userInfo.phone,
        code: this.form.code,
      };
      this.$http
        .get("api/userInfo/code/edit", params)
        .then((res) => {
          console.log("保存信用代码: ", res);
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.includes("成功")
          ) {
            this.$message.success({
              message: "保存成功",
              offset: 90,
            });
            this.updateUserInfo();
          } else {
            console.log("保存信用代码失败", res.data.msg);
            this.$message.warning({
              message: `保存信用代码失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("保存信用代码失败", err.response);
          this.$message.error({
            message: `保存信用代码失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },
    updateUserInfo() {
      let params = {
        phone: this.userInfo.phone,
      };
      this.$http
        .get("api/userInfo/getUserInfo", params)
        .then((res) => {
          console.log("获取用户信息: ", res);
          if (
            res &&
            res.data &&
            res.data.tipInfo &&
            res.data.tipInfo.includes("成功")
          ) {
            if (res.data.data) {
              this.$store.commit("account/setUserInfo", res.data.data);
            }
          } else {
            console.log("获取用户信息失败", res.data.msg);
            this.$message.warning({
              message: `获取用户信息失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("获取用户信息失败", err.response);
          this.$message.error({
            message: `获取用户信息失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  h2 {
    color: #333;
    font-size: 20px;
    font-weight: 500;
  }
  .certificate-uploader {
    overflow: hidden;
    border-radius: 6px;
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
            cursor: pointer;
            color: #404040;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: #fff;
            transition: all 0.15s;
            &.el-icon-close {
              bottom: initial;
              top: 2px;
            }
            &:hover {
              color: #fff;
              border-color: #2b9a97;
              background-color: #2b9a97;
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
      height: 200px;
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;
      -webkit-tap-highlight-color: #00000000;
      .el-upload-dragger {
        width: 360px;
        height: 200px;
        text-align: center;
        position: relative;
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
  .code {
    margin-top: 20px;
    display: flow-root;
    .input-area {
      display: flex;
      button {
        margin-left: 10px;
        background-color: #edfefd;
        color: #258783;
        border-color: #c1dcdb;
        &:hover {
          color: #fff;
          border-color: #30aba7;
          background-color: #30aba7;
        }
      }
    }
  }
}
</style>
