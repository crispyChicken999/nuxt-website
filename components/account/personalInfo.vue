<template>
  <div class="content">
    <el-upload
      v-loading="isUploading"
      class="avatar-uploader"
      :action="uploadBaseURL"
      :show-file-list="false"
      :data="{ phone: form.phone }"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      element-loading-text="正在上传中..."
      :on-change="() => (isUploading = false)"
      :on-progress="() => (isUploading = true)"
      element-loading-spinner="el-icon-loading"
    >
      <div v-if="imageUrl" class="avatar-img">
        <img :src="imageUrl" />
      </div>
      <i
        v-else
        class="el-icon-plus avatar-uploader-icon"
        title="点击上传头像"
      ></i>
    </el-upload>
    <el-form
      :model="form"
      :rules="formRules"
      ref="infoForm"
      label-width="90px"
      label-position="left"
    >
      <el-form-item label="账号" prop="nickname">
        <el-input
          v-model.trim="form.nickname"
          placeholder="请输入您的账号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="name">
        <el-input
          v-model.trim="form.name"
          placeholder="请输入您的真实姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="wechatNo">
        <el-input
          v-model.trim="form.wechatNo"
          placeholder="请输入您的微信号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model="form.phone"
          placeholder="请输入您的手机号"
          clearable
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model.trim="form.email"
          placeholder="请输入您的邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-input
          v-model.trim="form.position"
          placeholder="请输入您的职位"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="通讯地址" prop="address">
        <el-input
          v-model.trim="form.address"
          placeholder="请输入您的通讯地址"
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-group">
      <el-button type="primary" plain size="medium" @click="confirmEdit"
        >保存修改</el-button
      >
      <el-button plain size="medium" @click="clearField">清空设置</el-button>
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/plugins/axios.js";

export default {
  data() {
    return {
      imageUrl: "",
      uploadBaseURL: `${baseURL}/api/avatar/upload`, //'https://jsonplaceholder.typicode.com/posts/',
      form: {
        nickname: "",
        name: "",
        wechatNo: "",
        phone: "",
        email: "",
        position: "",
        address: "",
      },
      formRules: {
        nickname: [
          {
            required: true,
            message: "请输入您的账号",
            trigger: "change",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入您的真实姓名",
            trigger: "change",
          },
        ],
        wechatNo: [
          {
            required: true,
            message: "请输入您的微信号",
            trigger: "change",
          },
        ],
      },
      isUploading: false,
    };
  },
  created() {},
  mounted() {
    this.initData();
  },
  computed: {
    userInfo() {
      return this.$store.state.account.userInfo;
    },
    userAvatar() {
      return this.$store.state.account.userAvatar;
    },
  },
  watch: {
    userInfo: {
      handler() {
        for (let key in this.userInfo) {
          this.form[key] = this.userInfo[key];
        }
      },
    },
    userAvatar: {
      handler() {
        this.imageUrl = this.userAvatar;
      },
    },
  },
  methods: {
    initData() {
      for (let key in this.userInfo) {
        this.form[key] = this.userInfo[key];
      }
      this.imageUrl = this.userAvatar;
    },
    confirmEdit() {
      this.$refs.infoForm.validate((valid, message) => {
        if (valid) {
          this.$http
            .post("api/userInfo/edit", this.form)
            .then((res) => {
              console.log("编辑用户信息: ", res);
              if (
                res &&
                res.data &&
                res.data.data &&
                res.data.data.includes("成功")
              ) {
                this.$message.success({
                  message: "修改成功",
                  offset: 90,
                });
                this.$emit("change-menu", "1-2");
                this.updateUserInfo();
              } else {
                console.log("编辑失败", res.data.msg);
                this.$message.warning({
                  message: `编辑失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("编辑失败", err.response);
              this.$message.error({
                message: `编辑失败: ${err.message || "未知原因"}`,
                duration: 2000,
                offset: 90,
              });
            });
        } else {
          // this.$message.warning({
          //   message: `表单输入有误，请重新输入`,
          //   offset: 90,
          // });
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
    updateUserInfo() {
      let params = {
        phone: this.form.phone,
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
    clearField() {
      for (let key in this.form) {
        if (!["phone"].includes(key)) {
          this.form[key] = "";
        }
      }
    },
    handleAvatarSuccess(res, file) {
      if (res && res.data && res.data.includes("picture")) {
        this.$store.commit("account/setUserAvatar", res.data);
        this.$message.success({
          message: "修改成功",
          offset: 90,
        });
      }
      this.imageUrl = JSON.parse(JSON.stringify(this.userAvatar));
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error({
          message: "上传头像图片大小不能超过 2MB!",
          offset: 90,
        });
      }
      return isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 30px 0;
  transition: all 0.3s;
  .avatar-uploader {
    display: flex;
    border-bottom: 1px dotted #ccc;
    padding-bottom: 20px;
    margin-bottom: 10px;
    justify-content: center;
    .el-upload {
      cursor: pointer;
      overflow: hidden;
      position: relative;
      border-radius: 6px;
      border: 1px dashed #d9d9d9;
      .avatar-uploader-icon {
        width: 100px;
        height: 100px;
        font-size: 28px;
        color: #8c939d;
        line-height: 100px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.2s;
        box-sizing: border-box;
        border: 1px dashed #d9d9d9;
        &:hover {
          color: #409eff;
          border-color: #409eff;
        }
      }
      .avatar-img {
        width: 100px;
        height: 100px;
        display: block;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 12px 4px #d4d4d4;
        transition: all 0.3s;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:hover {
          border: 1px dashed #409eff;
          &::after {
            content: "点击更换";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100px;
            height: 100px;
            color: white;
            font-size: 12px;
            letter-spacing: 0px;
            text-align: center;
            line-height: 100px;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  :deep().el-form {
    overflow-y: scroll;
    max-height: 350px;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #c4c4c434;
      box-shadow: inset 0 0 3px rgba(130, 130, 130, 0.519);
      -webkit-box-shadow: inset 0 0 3px rgba(130, 130, 130, 0.519);
    }
    .el-form-item {
      position: relative;
      margin-right: 10px;
      &:not(:last-of-type) {
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -10px;
          border-bottom: 1px dotted #ccc;
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      &:not(.is-error) {
        .el-form-item__content {
          .el-select,
          .el-input {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            &:focus-within {
              .el-input__inner {
                background-color: #fff;
              }
            }
            &:not(:focus-within) {
              &:hover {
                .el-input__inner {
                  background-color: #e5e6eb;
                  border-color: #ddd;
                }
              }
            }
            .el-input__inner {
              background-color: #fafafa;
            }
          }
        }
      }
      .el-form-item__content {
        .el-form-item__error {
          position: relative;
        }
        .el-select,
        .el-input {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
  .btn-group {
    display: flex;
    padding-top: 20px;
    margin-top: 10px;
    border-top: 1px dotted #ccc;
    justify-content: center;
    .el-button {
      &:first-of-type {
        color: #fff;
        border-color: #279894;
        background-color: #279894;
        &:hover {
          border-color: #30aba7;
          background-color: #30aba7;
        }
      }
      &:last-of-type {
        &:hover {
          color: #258783;
          border-color: #258783;
        }
      }
    }
  }
}
@media screen and(max-width:1000px) {
  .content {
    padding: 10px 0;
  }
}
</style>
