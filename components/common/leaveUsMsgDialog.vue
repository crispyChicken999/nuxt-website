<template>
  <el-dialog
    class="leave-a-message-dialog"
    :append-to-body="true"
    :lock-scroll="false"
    :visible.sync="toggleDialog"
    @close="cleanUp"
  >
    <div slot="title" class="dialog-header-content">
      <h2>欢迎申请试用</h2>
    </div>
    <div class="message-dialog-content">
      <div class="decoration">
        <div class="company-info">
          <img
            src="~assets/imgs/common/sidebar-white-logo.png"
            alt="中恒EMI平台"
          />
          <div class="info-details">
            <p>致力于纺织工业</p>
            <p>智能制造整体解决方案</p>
          </div>
        </div>
        <div class="illustration">
          <img
            src="~assets/imgs/common/sidebar-message-dialog-illustrations.png"
            alt="illustration"
          />
        </div>
      </div>
      <div class="message-details-form">
        <h2>欢迎申请试用</h2>
        <h3>如有特殊问题请留言，我们第一时间为您解答</h3>
        <div class="input-area">
          <el-form
            :inline="true"
            :model="form"
            ref="trialForm"
            label-width="100px"
          >
            <el-form-item
              label="您的称呼"
              prop="realName"
              :rules="{
                required: true,
                message: '请输入姓名',
                trigger: 'change',
              }"
            >
              <el-input
                v-model="form.realName"
                placeholder="输入您的姓名"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item
              label="手机号码"
              prop="phone"
              :rules="{
                required: true,
                message: '请输入手机号码',
                trigger: 'change',
              }"
            >
              <el-input
                v-model="form.phone"
                placeholder="输入手机号码我们将第一时间联系您"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item
              label="企业名称"
              prop="companyName"
              :rules="{
                required: true,
                message: '请输入企业名称',
                trigger: 'change',
              }"
            >
              <el-input
                v-model="form.companyName"
                placeholder="输入您的企业名称"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item
              label="试用产品"
              prop="experienceVersionName"
              :rules="{
                required: true,
                message: '请选择试用产品',
                trigger: 'change',
              }"
            >
              <el-select
                v-model="form.experienceVersionName"
                placeholder="请选择试用产品"
                clearable
                filterable
              >
                <el-option
                  v-for="option in systemOptions"
                  :key="option"
                  :label="option"
                  :value="option"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="留言">
              <el-input
                v-model="form.remark"
                placeholder="如有行业特殊需求请给我们留言"
                type="textarea"
                clearable
                rows="5"
                resize="none"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="input-tips">
            <p><i class="el-icon-lock"></i>您的信息将严格保密，请放心填写</p>
          </div>
        </div>
        <div class="submit-btn">
          <el-button type="primary" @click="confirm">立即提交</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        realName: "",
        phone: "",
        companyName: "",
        experienceVersionName: "",
        remark: "",
      },
      toggleDialog: false,
      systemOptions: [
        "成衣业务管理系统",
        "牛仔面料生产管理系统",
        "面料业务管理系统",
        "可视化数据大屏",
        "浆染自动化料系统",
        "其他系统 - 请留言注明",
      ],
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    openDialog(systemName) {
      this.form.experienceVersionName = systemName;
      this.toggleDialog = true;
    },
    confirm() {
      this.$refs.trialForm.validate((valid) => {
        if (valid) {
          this.$http
            .post("api/experience/ApplyForProbation", this.form)
            .then((res) => {
              if (
                res &&
                res.data &&
                res.data.data &&
                res.data.data.includes("ok")
              ) {
                this.$message.success({
                  message: "提交成功",
                  offset: 90,
                });
                this.applyForm = this.$options.data().applyForm;
              } else {
                console.log("提交失败", res.data.data);
                this.$message.warning({
                  message: `提交失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
              this.form = this.$options.data().form;
              this.$nextTick(() => {
                this.$refs.trialForm.clearValidate();
              });
              this.toggleDialog = false;
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
          this.$message.warning({
            message: "表单输入有误，请重新输入",
            offset: 90,
          });
        }
      });
    },
    cleanUp() {
      this.$refs.trialForm.clearValidate();
    },
  },
};
</script>

<style lang="scss">
.leave-a-message-dialog {
  .el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 200px);
    max-width: calc(100% - 50px);
    width: 926px;
    border-radius: 10px;
    .el-dialog__header {
      padding: 0;
      .dialog-header-content {
        display: none;
        position: relative;
        z-index: -2;
        h2 {
          color: white;
          font-size: 22px;
          line-height: 50px;
          margin: 0;
          padding: 10px 0 10px 86px;
          filter: hue-rotate(330deg);
          transition: all 0.3s;
          background-image: url("~assets/imgs/common/sidebar-message-background.png");
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      .el-dialog__headerbtn {
        top: -13px;
        right: -11px;
        background-color: #777777;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.3s;
        .el-dialog__close {
          color: white;
        }
        &:hover,
        &:active {
          background: #9e9e9e;
        }
        &::after {
          content: "";
          position: absolute;
          z-index: -1;
          padding: 17px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 0 8px 0px #5a5a5a;
        }
      }
    }
    .el-dialog__body {
      flex: 1;
      overflow: auto;
      padding: 0;
      height: 496px;
      .message-dialog-content {
        display: flex;
        transition: all 0.3s;
        .decoration {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 350px;
          padding: 48px 0;
          filter: hue-rotate(330deg);
          background-image: url("~assets/imgs/common/sidebar-message-background.png");
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 10px 0 0 10px;
          .company-info {
            display: flex;
            img {
              width: 53px;
              height: 53px;
            }
            p {
              font-family: Microsoft YaHei;
              font-weight: 400;
              font-size: 22px;
              line-height: 22px;
              color: #ffffff;
              margin-left: 12px;
              &:first-of-type {
                margin-bottom: 11px;
              }
            }
          }
          .illustration {
            img {
              width: 242px;
              height: 289px;
              filter: hue-rotate(30deg);
            }
          }
        }
        .message-details-form {
          flex: 1;
          padding: 39px 0;
          font-family: Microsoft YaHei;
          transition: all 0.3s;
          h2 {
            font-size: 22px;
            line-height: 22px;
            color: #259F9B;
            margin: 0 0 14px 0;
            padding: 0 101px 0 86px;
          }
          h3 {
            font-size: 14px;
            color: #999999;
            margin: 0 0 38px 0;
            padding: 0 101px 0 86px;
          }
          .el-form {
            padding: 0 101px 0 55px;
            .el-form-item {
              display: flex;
              align-items: center;
              &.is-required {
                .el-form-item__label {
                  &::before {
                    display: none;
                  }
                }
              }
              .el-form-item__label {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #878787;
                line-height: 12px;
              }
              .el-form-item__content {
                flex: 1;
                position: relative;
                .el-input {
                  .el-input__inner {
                    width: 100%;
                  }
                }
                textarea {
                  &::placeholder {
                    font-family: "微软雅黑";
                    font-size: 14px;
                    font-weight: 300;
                  }
                }
                .el-select {
                  width: 100%;
                }
                &::after {
                  content: "*";
                  color: red;
                  position: absolute;
                  top: 50%;
                  right: -15px;
                  transform: translateY(-50%);
                }
              }
              &:last-of-type {
                .el-form-item {
                  margin-bottom: 18px;
                }
                .el-form-item__content {
                  &::after {
                    content: "";
                  }
                }
              }
            }
          }
          .input-tips {
            color: #fd581f;
            margin-bottom: 35px;
            padding: 0 101px 0 80px;
            i {
              margin-left: 4px;
            }
          }
          .submit-btn {
            display: flex;
            justify-content: center;
            .el-button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 159px;
              height: 36px;
              background: #259F9B;
              border-color: #259F9B;
              border-radius: 4px;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .leave-a-message-dialog {
    .el-dialog {
      .el-dialog__header {
        .dialog-header-content {
          display: block;
          h2 {
            border-radius: 10px 10px 0 0;
          }
        }
      }
      .el-dialog__body {
        .message-dialog-content {
          .decoration {
            display: none;
          }
          .message-details-form {
            padding-top: 17px;
            h2 {
              display: none;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .leave-a-message-dialog {
    .el-dialog {
      .el-dialog__header {
        .dialog-header-content {
          h2 {
            padding-left: 20px;
          }
        }
      }
      .el-dialog__body {
        .message-dialog-content {
          .message-details-form {
            padding: 20px;
            h3 {
              padding: 0 50px;
            }
            .el-form {
              padding: 0 50px 0 20px;
            }
            .input-tips {
              padding: 0 50px;
            }
          }
        }
      }
    }
  }
}
</style>
