<template>
  <div class="content">
    <h2>系统试用申请</h2>
    <el-form
      :model="form"
      ref="applyForm"
      :rules="formRules"
      label-width="90px"
      label-position="left"
    >
      <el-form-item label="申请人" prop="name">
        <el-input
          v-model.trim="form.name"
          placeholder="请输入您的姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input
          v-model="form.phone"
          placeholder="请输入您的电话"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="companyName">
        <el-input
          v-model.trim="form.companyName"
          placeholder="请输入您的公司名称"
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
      <el-form-item label="实名验证" prop="realNameAuthentication">
        <el-input
          v-model.trim="form.realNameAuthentication"
          placeholder="请输入您的姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="试用产品" prop="trialSystemName">
        <el-select
          v-model.trim="form.trialSystemName"
          placeholder="请选择您要试用的系统"
          disabled
          clearable
          filterable
        >
          <el-option
            v-for="option in formOptions.trialSystemOptions"
            :value="option"
            :label="option"
            :key="option"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="reason" label="申请理由">
        <el-input
          maxlength="200"
          show-word-limit
          v-model="form.reason"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6 }"
          resize="none"
          placeholder="申请系统试用需要您简述一下理由"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-group">
      <el-button plain @click="clickToTrialProgress">查看申请</el-button>
      <el-button
        type="primary"
        @click="confirmTrialApplication"
        :class="{ 'apply-shake': shakeBtn }"
        >申请试用</el-button
      >
    </div>
    <account-trial-application-detail
      ref="detailDialog"
      :trialSystemName="form.trialSystemName"
    ></account-trial-application-detail>
  </div>
</template>

<script>
export default {
  props: {
    trialSystemDefaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        companyName: "",
        position: "",
        realNameAuthentication: "",
        trialSystemName: "",
        reason: "",
        userInfoPhone: "",
      },
      formRules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请输入您的姓名",
          },
        ],
        phone: [
          {
            required: true,
            trigger: "change",
            message: "请输入您的联系方式",
          },
        ],
        companyName: [
          {
            required: true,
            trigger: "change",
            message: "请输入您的公司名称",
          },
        ],
        position: [
          {
            required: true,
            trigger: "change",
            message: "请输入您的职位",
          },
        ],
        realNameAuthentication: [
          {
            required: true,
            trigger: "change",
            message: "请输入您的姓名",
          },
        ],
        trialSystemName: [
          {
            required: true,
            trigger: "change",
            message: "请选择您要试用的系统",
          },
        ],
        reason: [
          {
            required: true,
            trigger: "change",
            message: "请简述申请理由",
          },
        ],
      },
      formOptions: {
        trialSystemOptions: [
          "成衣业务管理系统",
          "面料业务管理系统",
          "牛仔面料生产管理系统",
        ],
      },
      shakeBtn: false,
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
  },
  methods: {
    initData() {
      this.form.trialSystemName =
        this.formOptions.trialSystemOptions[this.trialSystemDefaultIndex];
      this.userInfo.name && (this.form.name = this.userInfo.name);
      this.userInfo.phone && (this.form.phone = this.userInfo.phone);
      this.userInfo.position && (this.form.position = this.userInfo.position);
      this.userInfo.name &&
        (this.form.realNameAuthentication = this.userInfo.name);
      this.form.userInfoPhone = this.userInfo.phone;
    },
    clickToTrialProgress() {
      this.$refs.detailDialog.openDialog();
      // this.$emit("change-tab", "progress");
      // this.$emit("change-menu", "2-3");
    },
    confirmTrialApplication() {
      this.$refs.applyForm.validate((valid, message) => {
        if (valid) {
          this.$http
            .post("api/trialApplication/submit", this.form)
            .then((res) => {
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
              } else {
                console.log("提交失败", res.data.data);
                this.$message.warning({
                  message: `提交失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("提交失败", err.response);
              this.$message.error({
                message: `提交失败: ${err.message || "未知原因"}`,
                duration: 2500,
                offset: 90,
              });
            });
        } else {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-group {
    display: flex;
    margin-top: 10px;
    padding: 10px 0 20px 0;
    justify-content: center;
    border-top: 1px dashed #dcdcdc;
    width: 100%;
    max-width: 410px;
    .el-button {
      transition: all 0.3s;
      &:first-of-type {
        &:hover {
          color: #258783;
          border-color: #258783;
        }
      }
      &:last-of-type {
        margin-left: 14px;
        border-color: #2e9793;
        background-color: #279894;
        &:hover {
          border-color: #2fb5b1;
          background-color: #2fb5b1;
        }
      }
      &.apply-shake {
        background-color: #f69797;
        border-color: #dd8080;
      }
    }
  }
  h2 {
    border-bottom: 1px dashed #dcdcdc;
    margin: 20px 0 10px 0;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;
    max-width: 410px;
  }
  :deep().el-form {
    width: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 10px;
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
      &:last-of-type {
        margin-bottom: 0;
      }
      .el-form-item__content {
        .el-select {
          width: 100%;
        }
      }
    }
  }
}
@media screen and(max-width:1000px) {
  .content {
    h2 {
      margin-top: 10px;
    }
    :deep().el-form {
      max-height: 350px;
      width: 380px;
    }
    .btn-group {
      padding-bottom: 10px;
    }
  }
}
</style>
