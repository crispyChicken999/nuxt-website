<template>
  <div
    class="apply-for-trial"
    :class="{
      'is-dark': isDarkBg,
    }"
  >
    <a class="fast-link" name="consult"></a>
    <div class="apply-for-trial-content">
      <div class="apply-title">
        <p class="main-title">立即咨询</p>
        <p class="sub-title">留下您的联系方式，专业顾问会尽快联系您</p>
      </div>
      <el-form :model="applyForm" ref="applyForm">
        <div class="apply-form">
          <el-form-item prop="companyName">
            <el-input
              v-model="applyForm.companyName"
              placeholder="企业名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="realName"
            :rules="{
              required: true,
              message: '请输入姓名',
              trigger: 'change',
            }"
          >
            <el-input v-model="applyForm.realName" clearable placeholder="姓名">
              <template slot="prefix">
                <span class="required-label">*</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="userPhone"
            :rules="{
              required: true,
              validator: phoneNumberValidator,
              trigger: 'change',
            }"
          >
            <el-input
              v-model="applyForm.userPhone"
              maxlength="11"
              clearable
              placeholder="联系方式"
            >
              <template slot="prefix">
                <span class="required-label">*</span>
              </template>
            </el-input>
          </el-form-item>
          <el-button class="submit-btn" @click="handleFormSubmit"
            >提交</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDarkBg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      applyForm: {
        companyName: "",
        realName: "",
        userPhone: "",
      },
      phoneReg:
        /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/,
      phoneNumberValidator: (rule, value, callback) => {
        let reg = this.phoneReg;
        if (!value) {
          callback(new Error("请输入联系方式"));
        } else if (!reg.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    // 提交成功回调
    handleFormSubmit() {
      this.$refs.applyForm.validate((valid) => {
        if (valid) {
          this.$http
            .post("api/userInfo/commitUserInfo", this.applyForm)
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
                this.applyForm = this.$options.data().applyForm;
                this.$nextTick(() => {
                  this.$refs.applyForm.clearValidate();
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
          this.$message({
            message: "表单输入有误，请重新输入",
            offset: 90,
            type: "warning",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apply-for-trial {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  background-color: #fff;
  transition: all 0.3s;
  position: relative;
  &.is-dark {
    background-color: #f5f8fa;
    .apply-for-trial-content {
      .apply-form {
        .el-input {
          :deep() .el-input__inner {
            border: none;
            outline: none;
          }
        }
      }
    }
  }
  .fast-link {
    position: absolute;
    top: 0;
    left: 0;
  }
  .apply-for-trial-content {
    .apply-title {
      position: relative;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s;
      .main-title {
        font-size: 24px;
        font-weight: 700;
        transition: all 0.3s;
        text-indent: 20px;
      }
      .sub-title {
        font-size: 24px;
        font-weight: 300;
        transition: all 0.3s;
        text-indent: 20px;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 7px;
        height: 70px;
        transition: all 0.3s;
        border-radius: 2px;
        background-color: #38ad7d;
      }
    }
    .apply-form {
      margin-top: 60px;
      display: flex;
      transition: all 0.3s;
      grid-column-gap: 50px;
      column-gap: 50px;
      .required-label {
        display: flex;
        height: 100%;
        align-items: center;
        color: red;
        font-size: 18px;
      }
      .el-input {
        :deep() .el-input__inner {
          border: none;
          outline: 1px solid #f0f0f0;
          width: 275px;
          height: 45px;
          transition: all 0.3s;
          padding-left: 20px;
          font-size: 18px;
          &::-webkit-input-placeholder {
            font-size: 18px;
          }
          &:focus {
            outline: 1px solid #38ad7d;
          }
        }
        &:hover {
          :deep() .el-input__inner {
            transition: none;
            outline: 1px solid #38ad7d;
          }
        }
      }
      .el-form-item {
        margin-bottom: 0;
        width: 100%;
      }
      .submit-btn {
        color: #ffffff;
        border: none;
        background-color: #13bc75;
        width: 135px;
        height: 45px;
        font-size: 18px;
        font-weight: 300;
        flex: 0 0 auto;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
@media screen and (max-width: 1099px) {
  .apply-for-trial {
    height: auto;
    padding: 50px 0;
    .apply-for-trial-content {
      .apply-form {
        flex-direction: column;
        grid-row-gap: 20px;
        row-gap: 20px;
        .el-input {
          :deep().el-input__inner {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .apply-for-trial {
    .fast-link {
      top: -50px;
    }
    .apply-for-trial-content {
      .apply-title {
        height: 50px;
        .main-title,
        .sub-title {
          font-size: 18px;
          text-indent: 0;
          padding-left: 20px;
        }
        &::before {
          height: 50px;
        }
      }
      .apply-form {
        margin-top: 40px;
        align-items: center;
        .el-input {
          :deep().el-input__inner {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
