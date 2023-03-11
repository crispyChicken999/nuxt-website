<template>
  <div class="trial-center">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="试用产品列表" name="list">
        <template v-if="current === 'list'">
          <account-trial-application-list
            @change-tab="handleTabChange"
          ></account-trial-application-list
        ></template>
        <template v-if="current === 'form'">
          <el-page-header @back="current = 'list'" content="申请试用">
          </el-page-header>
          <account-trial-application-form
            :trialSystemDefaultIndex="trialSystemDefaultIndex"
            @change-tab="handleTabChange"
          ></account-trial-application-form>
        </template>
        <template v-if="current === 'progress'">
          <el-page-header @back="current = 'form'" content="申请记录">
          </el-page-header>
          <account-trial-application-progress></account-trial-application-progress>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "list",
      current: "list",
      trialSystemDefaultIndex: 0,
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    handleTabChange(tabName, trialSystemDefaultIndex) {
      this.trialSystemDefaultIndex = trialSystemDefaultIndex;
      this.current = tabName;
    },
  },
};
</script>

<style lang="scss" scoped>
.trial-center {
  flex: 1;
  padding: 20px;
  .el-tabs {
    min-height: 692px;
    display: flex;
    flex-direction: column;
    :deep().el-tabs__header {
      .el-tabs__item {
        color: #2daca8;
      }
    }
    :deep().el-tabs__content {
      flex: 1;
      display: flex;
      .el-tabs__item {
        box-shadow: none !important;
      }
      .el-tab-pane {
        flex: 1;
        height: 100%;
      }
    }
  }
}
@media screen and(max-width:1000px) {
  .trial-center {
    .el-tabs {
      min-height: initial;
    }
  }
}
</style>
