<template>
  <div class="content">
    <h2>常见问题</h2>
    <el-collapse class="faq-collapse" v-model="activeName" accordion>
      <el-collapse-item title="如何修改密码？" name="1">
        <p>在登录页中-选择忘记密码，即可通过手机号来修改密码</p>
      </el-collapse-item>
      <el-collapse-item title="审核需要多长时间？" name="2">
        <p>
          一般情况下，七天工作日内审核完毕，如有特殊需求，请拨打导航栏-联系我们页面中的联系方式来加速审核。
        </p>
      </el-collapse-item>
      <el-collapse-item title="为什么需要上传营业执照？" name="3">
        <p>
          上传营业执照，一方面能够确认您的身份，另一方面能够根据您公司所处的行业，为您提供针对性的定制化服务。
        </p>
      </el-collapse-item>
      <el-collapse-item title="购买服务前能否先体验一下？" name="4">
        <p>
          我们提供系统试用服务，请在个人中心-产品体验中提交您的试用申请，我们将尽快为您提供相应试用账号。
        </p>
      </el-collapse-item>
      <el-collapse-item title="购买服务不满意后是否可以退款？" name="5">
        <p>
          很抱歉我们的服务未能满足您的需要，如您坚持退款，在购买服务后30天内，您可在个人中心-客户服务-售后服务中进行退款申请。
        </p>
      </el-collapse-item>
      <el-collapse-item title="我有疑问怎么才能联系你们？" name="6">
        <p>
          您可以通过导航栏-联系我们页面中的联系方式，向我们进行咨询，我们将竭诚为您服务。
        </p>
      </el-collapse-item>
      <el-collapse-item
        title="我有关于产品的意见和建议，怎么进行反馈？"
        name="7"
      >
        <p>
          您可以通过个人中心-客户服务-意见反馈中提交您的诉求，我们会根据您的意见和建议及时改进我们的产品。如需帮助，请通过联系我们中的联系方式进行咨询。
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      activeName: "1",
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  transition: all 0.3s;
  margin: 0 10px;
  .el-collapse {
    width: 400px;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
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
    :deep().el-collapse-item {
      &.is-active {
        .el-collapse-item__header {
          color: #3dc0bc;
          text-indent: 2px;
        }
      }
      @media (any-hover: hover) {
        &:hover {
          .el-collapse-item__header {
            color: #04cbc5;
            text-indent: 2px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .content {
    .el-collapse {
      width: 100%;
      max-width: 320px;
    }
  }
}
</style>
