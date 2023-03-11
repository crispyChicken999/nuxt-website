<template>
  <div class="content">
    <h2>历史申请记录</h2>
    <div class="progress-table">
      <el-table
        border
        stripe
        v-loading="isTableLoading"
        element-loading-text="正在加载中..."
        ref="table"
        :height="400"
        :max-height="400"
        :data="tableData"
        highlight-current-row
      >
        <el-table-column
          width="100"
          prop="applyDate"
          align="center"
          label="申请日期"
        ></el-table-column>
        <el-table-column width="100" align="center" label="申请编号">
          <template slot-scope="scope">
            <span>{{ scope.row.applicationNo || "暂无数据" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          prop="name"
          align="center"
          label="申请人"
        ></el-table-column>
        <el-table-column width="100" align="center" label="联系方式">
          <template slot-scope="scope">
            <span>{{ scope.row.phone || "暂无数据" }}</span>
          </template>
        </el-table-column>
        <el-table-column width="100" align="center" label="公司名称">
          <template slot-scope="scope">
            <span>{{ scope.row.companyName || "暂无数据" }}</span>
          </template>
        </el-table-column>
        <el-table-column width="100" align="center" label="职位">
          <template slot-scope="scope">
            <span>{{ scope.row.position || "暂无数据" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="trialSystemName"
          width="150"
          align="center"
          label="试用系统名称"
        ></el-table-column>
        <el-table-column
          prop="status"
          width="100"
          align="center"
          label="申请进度"
        >
          <template slot-scope="scope">
            <el-tag size="small" :type="tagType(scope.row.state)">{{
              scope.row.state || "审核中"
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column width="180" align="center" label="试用系统账号&密码">
          <template slot-scope="scope">
            <span>{{
              scope.row.trialSystemAccountPassword || "暂无数据"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope" align="center">
            <el-button @click="showDetails(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <!-- <el-button type="text" size="small" @click="editData(scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              icon-color="#f44336"
              icon="el-icon-warning"
              placement="top"
              title="确定删除该申请记录吗？"
              @confirm="deleteData(scope.row)"
            >
              <el-button
                type="text"
                size="small"
                slot="reference"
                class="delete-btn"
                >删除</el-button
              >
            </el-popconfirm> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
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
              currentRowData.applicationNo || "暂无数据"
            }}</el-form-item>
            <el-form-item label="申请人">{{
              currentRowData.name || "暂无数据"
            }}</el-form-item>
            <el-form-item label="联系方式">{{
              currentRowData.phone || "暂无数据"
            }}</el-form-item>
            <el-form-item label="公司名称">{{
              currentRowData.companyName || "暂无数据"
            }}</el-form-item>
            <el-form-item label="职位">{{
              currentRowData.position || "暂无数据"
            }}</el-form-item>
            <el-form-item label="体验产品">{{
              currentRowData.trialSystemName || "暂无数据"
            }}</el-form-item>
            <el-form-item label="申请内容简述">{{
              currentRowData.reason || "暂无数据"
            }}</el-form-item>
            <el-form-item label="审批日期">{{
              currentRowData.approvalDate || "暂无数据"
            }}</el-form-item>
            <el-form-item label="审批状态">{{
              currentRowData.approvalStatus || "暂无数据"
            }}</el-form-item>
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
    <el-dialog
      width="400px"
      title="编辑试用申请"
      :append-to-body="true"
      class="trial-edit-dialog"
      :visible.sync="toggleEditMessageDialog"
    >
      <el-form
        :model="form"
        ref="editForm"
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
        <el-form-item label="试用系统" prop="trialSystemName">
          <el-select
            v-model.trim="form.trialSystemName"
            placeholder="请选择您要试用的系统"
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
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="toggleEditMessageDialog = false"
          >取消</el-button
        >
        <el-button
          plain
          type="primary"
          @click="confirmEditData"
          :class="{ 'apply-shake': shakeBtn }"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTableLoading: false,
      tableData: [],
      currentRowData: {},
      clientWidth: 0,
      form: {
        name: "",
        phone: "",
        companyName: "",
        position: "",
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
          "服装系统",
          "成衣系统",
          "浆染系统",
          "面料系统",
          "财务系统",
        ],
      },
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
      toggleEditMessageDialog: false,
      shakeBtn: false,
    };
  },
  created() {},
  mounted() {
    this.initData();
    this.getTableData();
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
    });
  },
  computed: {
    userInfo() {
      return this.$store.state.account.userInfo;
    },
  },
  methods: {
    tagType(state) {
      !state && (state = "");
      if (state.includes("审核中")) {
        return "warning";
      } else if (state.includes("成功")) {
        return "success";
      } else if (state.includes("失败")) {
        return "danger";
      } else {
        return "info";
      }
    },
    initData() {
      this.form.userInfoPhone = this.userInfo.phone;
    },
    handleResize() {
      this.clientWidth = document.body.clientWidth;
    },
    showDetails(data) {
      this.currentRowData = data;
      this.toggleDetailMessageDialog = true;
    },
    editData(data) {
      this.currentRowData = data;
      for (let key in data) {
        this.form.hasOwnProperty(key) && (this.form[key] = data[key]);
      }
      this.toggleEditMessageDialog = true;
    },
    confirmEditData(data) {
      this.$refs.editForm.validate((valid, message) => {
        if (valid) {
          let params = {
            id: this.currentRowData.id,
            ...this.form,
          };
          this.$http
            .post("api/trialApplication/edit", params)
            .then((res) => {
              console.log("编辑提交记录: ", res);
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
                this.toggleEditMessageDialog = false;
                this.getTableData();
              } else {
                console.log("编辑提交记录", res.data.msg);
                this.$message.warning({
                  message: `编辑提交记录: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("编辑提交记录", err.response);
              this.$message.error({
                message: `编辑提交记录: ${err.message || "未知原因"}`,
                duration: 2000,
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
    deleteData(data) {
      let params = {
        id: data.id,
      };
      this.$http
        .delete("api/trialApplication/delete", params)
        .then((res) => {
          console.log("删除提交记录: ", res);
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
            this.getTableData();
          } else {
            console.log("删除提交记录失败", res.data.msg);
            this.$message.warning({
              message: `删除提交记录失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("删除提交记录失败", err.response);
          this.$message.error({
            message: `删除提交记录失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },
    getTableData() {
      let params = {
        pageNo: 1,
        pageSize: 100,
        userInfoPhone: this.userInfo.phone,
      };
      this.isTableLoading = true;
      this.$http
        .get("api/trialApplication/list", params)
        .then((res) => {
          console.log("申请记录列表: ", res);
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log("获取申请记录失败", err.response);
          this.$message.error({
            message: `获取申请记录失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        })
        .finally(() => {
          this.isTableLoading = false;
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
          .el-form {
            padding-right: 15px;
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
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .progress-table {
    .el-table {
      max-width: 600px;
      overflow: auto;
      .delete-btn {
        color: red;
        margin-left: 10px;
        &:hover {
          color: #ff7171;
        }
      }
    }
  }
}
@media screen and(max-width:1000px) {
  .content {
    .progress-table {
      .el-table {
        max-width: 500px;
      }
    }
  }
}
@media screen and(max-width:800px) {
  .content {
    .progress-table {
      .el-table {
        max-width: 400px;
      }
    }
  }
}
@media screen and(max-width:600px) {
  .content {
    .progress-table {
      .el-table {
        max-width: 350px;
      }
    }
  }
}
</style>
