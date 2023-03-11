<template>
  <el-dialog
    title="产品系统使用权限申请详情"
    class="trial-detail-dialog"
    :visible.sync="toggleDetailMessageDialog"
    :append-to-body="true"
  >
    <div class="details">
      <div class="basic-detail">
        <el-form label-position="right" label-width="122px">
          <el-form-item label="申请编号">{{
            detailData.applicationNo || "暂无数据"
          }}</el-form-item>
          <el-form-item label="申请人">{{
            detailData.name || "暂无数据"
          }}</el-form-item>
          <el-form-item label="联系方式">{{
            detailData.phone || "暂无数据"
          }}</el-form-item>
          <el-form-item label="公司名称">{{
            detailData.companyName || "暂无数据"
          }}</el-form-item>
          <el-form-item label="职位">{{
            detailData.position || "暂无数据"
          }}</el-form-item>
          <el-form-item label="体验产品">{{
            detailData.trialSystemName || "暂无数据"
          }}</el-form-item>
          <el-form-item label="申请理由">
            <p class="ellipsis" v-ellipsis>
              {{ detailData.reason || "暂无数据" }}
            </p>
          </el-form-item>
          <el-form-item label="审批日期">{{
            detailData.approvalDate || "暂无数据"
          }}</el-form-item>
          <el-form-item label="审批状态"
            ><span class="status">
              {{ detailData.state || "暂无数据" }}</span
            ></el-form-item
          >
        </el-form>
      </div>
      <div class="process">
        <el-timeline :reverse="false">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="
              activityColorMap[activity.type]
                ? activityColorMap[activity.type]
                : '#ccc'
            "
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <p class="title">{{ activity.title }}</p>
            <p class="sub-title" :style="{ color: activity.subTitleColor }">
              {{ activity.subTitle }}
            </p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    trialSystemName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      activityColorMap: {
        success: "#00B42A",
        processing: "#165DFF",
        fail: "#F53F3F",
        default: "#ccc",
      },
      activities: [
        {
          title: "提交申请",
          type: "success",
          timestamp: "2023-01-10",
        },
        {
          title: "系统管理员审批",
          subTitle: "等待审批",
          type: "processing",
          subTitleColor: "#4A80C0",
        },
        {
          title: "申请结果",
          subTitle: "通过/不通过",
          type: "fail",
        },
        {
          title: "账号&密码",
          type: "default",
          subTitle: "无",
        },
      ],
      toggleDetailMessageDialog: false,
      detailData: {},
    };
  },
  created() {},
  mounted() {},
  computed: {
    userInfo: {
      get() {
        return this.$store.state.account.userInfo;
      },
    },
  },
  methods: {
    openDialog() {
      let params = {
        phone: this.userInfo.phone,
        name: this.trialSystemName,
      };
      this.$http
        .get("api/trialApplication/detail", params)
        .then((res) => {
          console.log("获取申请记录: ", res);
          if (
            res &&
            res.data &&
            res.data.tipInfo &&
            res.data.tipInfo.includes("成功")
          ) {
            this.toggleDetailMessageDialog = true;
            this.detailData = res.data.data;
            this.activities[0].timestamp = res.data.data.applyDate;
          } else {
            console.log("获取申请记录失败", res.data.msg);
            this.$message.warning({
              message: `获取申请记录失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("获取申请记录失败", err.response);
          this.$message.error({
            message: `获取申请记录失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },
  },
};
</script>

<style lang="scss">
.el-dialog {
  display: flex;
  display: -ms-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
  .el-dialog__body {
    max-height: 100%;
    flex: 1;
    -ms-flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .el-dialog__wrapper {
    overflow: hidden;
  }
}
.trial-detail-dialog,
.trial-edit-dialog {
  .el-dialog__footer {
    .apply-shake {
      transition: all 0.3s;
      background-color: #ff7171;
      border-color: #ff7171;
    }
  }
  .el-dialog__body {
    .el-form {
      .el-form-item {
        .el-form-item__content {
          .el-select {
            width: 100%;
          }
        }
      }
    }
  }
}
.trial-detail-dialog {
  .el-dialog {
    width: fit-content;
    .el-dialog__body {
      .details {
        display: flex;
        gap: 30px;
        justify-content: center;
        .basic-detail {
          position: relative;
          .ellipsis {
            width: 20vmin;
            max-width: 220px;
          }
          .el-form {
            padding-right: 15px;
            .status {
              color: #279894;
            }
            .el-form-item {
              margin: 0;
              .el-form-item__label {
                font-weight: 700;
                font-size: 14px;
                padding-right: 22px;
              }
            }
          }
          &::after {
            content: "";
            position: absolute;
            top: 0;
            width: 1px;
            height: 100%;
            right: -15px;
            background-color: #f4f4f4;
          }
        }
        .process {
          .el-timeline {
            padding: 0 15px;
            .el-timeline-item {
              &:first-of-type {
                &::before {
                  position: absolute;
                  content: "";
                  left: 4px;
                  top: -10px;
                  height: 12px;
                  z-index: -2;
                  border-left: 2px solid #e4e7ed;
                }
              }
              &:last-of-type {
                &::before {
                  position: absolute;
                  content: "";
                  left: 4px;
                  top: 10px;
                  height: 10px;
                  z-index: -2;
                  border-left: 2px solid #e4e7ed;
                }
              }
              .el-timeline-item__node--normal {
                left: 0;
              }
              .el-timeline-item__node {
                width: 10px;
                height: 10px;
                // position: relative;
                &::before {
                  position: absolute;
                  z-index: -1;
                  content: "";
                  top: 50%;
                  left: 50%;
                  width: 18px;
                  height: 18px;
                  border-radius: 9px;
                  background-color: #ffffff;
                  transform: translate(-50%, -50%);
                }
              }
              .el-timeline-item__tail {
                z-index: -2;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width:1000px) {
  .trial-detail-dialog {
    .el-dialog {
      .el-dialog__body {
        .details {
          gap: 20px;
          .basic-detail {
            .ellipsis {
              max-width: 120px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width:600px) {
  .trial-detail-dialog {
    .el-dialog {
      .el-dialog__body {
        .details {
          .basic-detail {
            .el-form {
              padding-right: 0px;
              .status {
                color: #279894;
              }
              .el-form-item {
                margin: 0;
                .el-form-item__label {
                  width: 78px !important;
                  font-weight: 700;
                  font-size: 12px;
                  padding-right: 8px;
                  line-height: 30px;
                  // max-width: 78px;
                  text-align: right;
                }
                .el-form-item__content {
                  font-size: 12px;
                  line-height: 30px;
                  margin-left: 80px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
