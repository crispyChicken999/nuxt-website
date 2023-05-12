<template>
  <div class="product-detail">
    <common-header isHollowOutEnabled></common-header>
    <common-banner
      :title="product[type || 1].title"
      :isDarkTitle="isDarkTitle"
      :bannerHeight="500"
      :isShowPreTitle="true"
      :isPreTitleBold="true"
      :preTitle="product[type || 1].preTitle"
      :isProductDetailPage="true"
      :isShowApplyForTrialBtn="true"
      :subTitle="product[type || 1].subTitle"
      :background="bannerBackground"
    ></common-banner>
    <template v-if="product[type || 1].title === '成衣业务管理系统'">
      <el-page-header
        @back="$router.go(-1)"
        content="产品详情"
      ></el-page-header>
      <div class="info-content">
        <div class="wrapper">
          <div class="content">
            <div
              class="info"
              data-aos-delay="100"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-1.png"
                alt="system-feature-decoration"
              />
              <p>样衣款式管理有序</p>
            </div>
            <div
              class="info"
              data-aos-delay="200"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-2.png"
                alt="system-feature-decoration"
              />
              <p>合同订单永不丢失</p>
            </div>
            <div
              class="info"
              data-aos-delay="300"
              data-aos="zoom-in-up"
              data-aos-offset="250"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-3.png"
                alt="system-feature-decoration"
              />
              <p>库存明细智能盘点</p>
            </div>
            <div
              class="info"
              data-aos-delay="400"
              data-aos="zoom-in-up"
              :data-aos-offset="clientWidth >= 1000 ? 275 : 0"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-4.png"
                alt="system-feature-decoration"
              />
              <p>自动跟单到期提醒</p>
            </div>
            <div
              class="info"
              data-aos-delay="500"
              data-aos="zoom-in-up"
              :data-aos-offset="clientWidth >= 1000 ? 300 : 0"
              data-aos-easing="ease-out-cubic"
            >
              <div>
                <img
                  src="~assets/imgs/product/product-1-5.png"
                  alt="system-feature-decoration"
                />
                <p>销售收入灵活统计</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>功能模块</h1></div>
        <div class="feature-list">
          <div
            class="feature"
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-1.png"
              alt="icon"
            />
            <p>档案管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="200"
            data-aos="zoom-in-up"
            data-aos-offset="150"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-2.png"
              alt="icon"
            />
            <p>款式管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="300"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-3.png"
              alt="icon"
            />
            <p>样衣管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="400"
            data-aos="zoom-in-up"
            data-aos-offset="225"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-4.png"
              alt="icon"
            />
            <p>销售管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="500"
            data-aos="zoom-in-up"
            data-aos-offset="250"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-5.png"
              alt="icon"
            />
            <p>成衣入库</p>
          </div>
          <div
            class="feature"
            data-aos-delay="600"
            data-aos="zoom-in-up"
            data-aos-offset="275"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-6.png"
              alt="icon"
            />
            <p>销售出库</p>
          </div>
          <div
            class="feature"
            data-aos-delay="700"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/product/product-function-icon-7.png"
              alt="icon"
            />
            <p>销售统计</p>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>产品界面</h1></div>
        <div class="product-interface-main-content">
          <div class="content">
            <img
              data-aos-delay="0"
              data-aos="zoom-in-right"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-1-7.png"
              alt="system-process-decoration"
            />
            <img
              data-aos-delay="0"
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-1-8.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>业务流程</h1></div>
        <div class="process-main-content">
          <div class="content">
            <img
              data-aos-delay="100"
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-duration="420"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-1-6.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>目标用户</h1></div>
        <div class="apply-groups">
          <div class="content">
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-9.png"
                alt="system-process-decoration"
              />
              <p>服装贸易公司</p>
            </div>
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-left"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-1-10.png"
                alt="system-process-decoration"
              />
              <p>成衣厂业务部</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="product[type || 1].title === '面料生产管理系统'">
      <el-page-header
        @back="$router.go(-1)"
        content="产品详情"
      ></el-page-header>
      <div class="info-content is-dark second">
        <div class="wrapper">
          <div class="content">
            <div
              class="info"
              data-aos-delay="100"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-2-1.png"
                alt="system-feature-decoration"
              />
              <p>数字化</p>
            </div>
            <div
              class="info"
              data-aos-delay="200"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-2-2.png"
                alt="system-feature-decoration"
              />
              <p>自动化</p>
            </div>
            <div
              class="info"
              data-aos-delay="300"
              data-aos="zoom-in-up"
              data-aos-offset="250"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-2-3.png"
                alt="system-feature-decoration"
              />
              <p>精细化</p>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>功能模块</h1></div>
        <!-- <div class="feature-list second">
          <div
            class="feature"
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-5.png" alt="icon" />
            <p>合同管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="200"
            data-aos="zoom-in-up"
            data-aos-offset="150"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-6.png" alt="icon" />
            <p>客户档案</p>
          </div>
          <div
            class="feature"
            data-aos-delay="300"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-7.png" alt="icon" />
            <p>生产发货审批</p>
          </div>
          <div
            class="feature"
            data-aos-delay="400"
            data-aos="zoom-in-up"
            data-aos-offset="225"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-8.png" alt="icon" />
            <p>大货出入库</p>
          </div>
          <div
            class="feature"
            data-aos-delay="500"
            data-aos="zoom-in-up"
            data-aos-offset="250"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-9.png" alt="icon" />
            <p>仓库日报</p>
          </div>
        </div> -->
        <div class="tab-list">
          <div class="tab-list-wrapper">
            <div class="tab-options">
              <div
                class="option"
                :class="{ active: activeOptionIndex === 0 }"
                @mouseover="handleTabOptionSelect(0)"
              >
                <img
                  src="~assets/imgs/product/product-2-4.png"
                  alt="option-icon"
                />
                <p>原纱辅料管理</p>
              </div>
              <div
                class="option"
                :class="{ active: activeOptionIndex === 1 }"
                @mouseover="handleTabOptionSelect(1)"
              >
                <img
                  src="~assets/imgs/product/product-2-5.png"
                  alt="option-icon"
                />
                <p>过程检测</p>
              </div>
              <div
                class="option"
                :class="{ active: activeOptionIndex === 2 }"
                @mouseover="handleTabOptionSelect(2)"
              >
                <img
                  src="~assets/imgs/product/product-2-6.png"
                  alt="option-icon"
                />
                <p>过程管理</p>
              </div>
              <div
                class="option"
                :class="{ active: activeOptionIndex === 3 }"
                @mouseover="handleTabOptionSelect(3)"
              >
                <img
                  src="~assets/imgs/product/product-2-7.png"
                  alt="option-icon"
                />
                <p>生产内控</p>
              </div>
            </div>
            <div class="tab-content">
              <div class="tab-content-wrapper">
                <div class="content-item-list">
                  <div
                    class="item"
                    v-for="detail in contentDetails[activeOptionIndex]"
                    :key="detail"
                  >
                    {{ detail }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>产品界面</h1></div>
        <div class="product-interface-main-content">
          <div class="content">
            <img
              data-aos-delay="0"
              data-aos="zoom-in-right"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-2-8.png"
              alt="system-process-decoration"
            />
            <img
              data-aos-delay="0"
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-2-9.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>业务流程</h1></div>
        <div class="process-main-content">
          <div class="content">
            <img
              data-aos-delay="100"
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-duration="420"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-2-10.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>目标用户</h1></div>
        <div class="apply-groups">
          <div class="content">
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-2-11.png"
                alt="system-process-decoration"
              />
              <p>面料工厂</p>
            </div>
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-left"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-2-12.png"
                alt="system-process-decoration"
              />
              <p>品牌商业务部</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="product[type || 1].title === '面料业务管理系统'">
      <el-page-header
        @back="$router.go(-1)"
        content="产品详情"
      ></el-page-header>
      <div class="info-content third">
        <div class="wrapper">
          <div class="content">
            <div
              class="info"
              data-aos-delay="100"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-1.png"
                alt="system-feature-decoration"
              />
              <p>自定义流程审批</p>
            </div>
            <div
              class="info"
              data-aos-delay="200"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-2.png"
                alt="system-feature-decoration"
              />
              <p>人员权限自由分配</p>
            </div>
            <div
              class="info"
              data-aos-delay="300"
              data-aos="zoom-in-up"
              data-aos-offset="250"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-3.png"
                alt="system-feature-decoration"
              />
              <p>订单信息清晰明确</p>
            </div>
            <div
              class="info"
              data-aos-delay="400"
              data-aos="zoom-in-up"
              data-aos-offset="275"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-4.png"
                alt="system-feature-decoration"
              />
              <p>每日跟踪大货出入情况</p>
            </div>
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>功能模块</h1></div>
        <div class="feature-list third">
          <div
            class="feature"
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-5.png" alt="icon" />
            <p>合同管理</p>
          </div>
          <div
            class="feature"
            data-aos-delay="200"
            data-aos="zoom-in-up"
            data-aos-offset="150"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-6.png" alt="icon" />
            <p>客户档案</p>
          </div>
          <div
            class="feature"
            data-aos-delay="300"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-7.png" alt="icon" />
            <p>生产发货审批</p>
          </div>
          <div
            class="feature"
            data-aos-delay="400"
            data-aos="zoom-in-up"
            data-aos-offset="225"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-8.png" alt="icon" />
            <p>大货出入库</p>
          </div>
          <div
            class="feature"
            data-aos-delay="500"
            data-aos="zoom-in-up"
            data-aos-offset="250"
            data-aos-easing="ease-out-cubic"
          >
            <img src="~assets/imgs/product/product-3-9.png" alt="icon" />
            <p>仓库日报</p>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>产品界面</h1></div>
        <div class="product-interface-main-content">
          <div class="content">
            <img
              data-aos-delay="0"
              data-aos="zoom-in-right"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-3-10.png"
              alt="system-process-decoration"
            />
            <img
              data-aos-delay="0"
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-3-11.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details">
        <div class="main-title"><h1>业务流程</h1></div>
        <div class="process-main-content">
          <div class="content">
            <img
              data-aos-delay="100"
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-duration="420"
              data-aos-easing="ease-out-cubic"
              src="~assets/imgs/product/product-3-12.png"
              alt="system-process-decoration"
            />
          </div>
        </div>
      </div>
      <div class="details is-dark">
        <div class="main-title"><h1>目标用户</h1></div>
        <div class="apply-groups">
          <div class="content">
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-13.png"
                alt="system-process-decoration"
              />
              <p>大成衣厂公司</p>
            </div>
            <div
              class="group"
              data-aos-delay="200"
              data-aos-offset="100"
              data-aos-duration="600"
              data-aos="zoom-out-left"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="~assets/imgs/product/product-3-14.png"
                alt="system-process-decoration"
              />
              <p>大品牌商业务部</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template
      v-else-if="product[type || 1].title === '织物回潮率在线检测控制系统'"
    >
      <el-page-header
        @back="$router.go(-1)"
        content="产品详情"
      ></el-page-header>
      <product-steam-system></product-steam-system>
    </template>
    <template v-else>
      <el-page-header
        @back="$router.go(-1)"
        content="产品详情"
      ></el-page-header>
      <div class="empty-tips flow-text">敬请期待...</div>
    </template>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
export default {
  head: {
    title: "中恒智造 - 产品中心",
  },
  data() {
    return {
      type: this.$route.query.type > 6 ? 1 : this.$route.query.type,
      product: {
        1: {
          title: "成衣业务管理系统",
          subTitle:
            "融合企业“以样带销”的销售模式，涵盖款式样衣、打版借版、销售订单、大货生产、进度跟踪、成衣出入库、销售统计、客户档案等环节，业务流程数字化、精细化管理，规范业务一单不落，帮助企业更专注于市场。",
          preTitle: "ERP定制产品",
        },
        2: {
          title: "面料生产管理系统",
          subTitle:
            "生产流程支持全数字化、自动化管理，辅以浆染、后整自动化料控制系统及智能操作终端，实现面料生产数据互联互通，消除管理盲点，标准化作业生产，极大降低人工经验依赖性和作业出错率。",
          preTitle: "ERP定制产品",
        },
        3: {
          title: "面料业务管理系统",
          subTitle:
            "轻量级的面料业务销售管理应用，客户品牌建档管理，防止业务撞单及人员流动造成客户流失，订单信息集中管控，统筹运维保障及时交付，仓库信息及时、准确传递与反馈，方便业务人员快速响应客户需求。",
          preTitle: "ERP定制产品",
        },
        4: {
          title: "可视化数据大屏",
          subTitle: "基于EMI协同管控平台技术框架定制开发",
          preTitle: "智慧工厂",
        },
        5: {
          title: "织物回潮率在线检测控制系统",
          subTitle: "",
          preTitle: "蒸汽烘干节能减碳系列",
        },
        6: {
          title: "浆染自动化料系统",
          subTitle: "基于EMI协同管控平台技术框架定制开发",
          preTitle: "智能装备",
        },
      },
      clientWidth: 0,
      activeOptionIndex: 0,
      contentDetails: [
        [
          "原纱信息管理",
          "原纱采购管理",
          "原纱仓储管理",
          "辅料信息管理",
          "辅料采购管理",
          "辅料仓储管理",
          "机物料信息管理",
          "机物料采购管理",
          "机物料仓储管理",
        ],
        [
          "原纱检测",
          "染色母液检测",
          "染色助剂检测",
          "染色生产工艺检测",
          "品种上染率检测",
          "上浆生产工艺检测",
          "坯布（疵点）检测",
          "成品布检测",
        ],
        [
          "订单总调度",
          "生产计划",
          "资源配置",
          "工艺标准",
          "质量管控",
          "实绩操作",
          "投入产出",
          "生产跟踪",
          "订单进度",
          "过程数据",
        ],
        [
          "产品核价",
          "月度生产单耗环比分析",
          "智能分析",
          "成本核算",
          "月度盘点",
          "投入产出",
        ],
      ],
    };
  },
  created() {},
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
    });
  },
  computed: {
    bannerBackground() {
      let background = require("~/assets/imgs/product/product-banner-background.webp");
      if (this.type === "5") {
        background = require("~/assets/imgs/product/product-5-banner-background.webp");
      }
      return background;
    },
    isDarkTitle() {
      return this.type !== "5";
    },
  },
  methods: {
    handleTabOptionSelect(index) {
      this.activeOptionIndex = index;
    },
    handleResize() {
      this.clientWidth = document.body.clientWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  .main-title {
    display: flex;
    h1 {
      font-size: 50px;
      font-weight: 600;
      color: #333333;
      line-height: 59px;
      margin-left: calc(20%);
      margin-top: 48px;
      margin-bottom: 48px;
      position: relative;
      transition: all 0.3s;
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        right: -39px;
        transform: translateY(-50%);
        width: 27px;
        height: 35px;
        background-image: url("~assets/imgs/product/product-detail-title-decoration.png");
      }
    }
  }
  .el-page-header {
    height: 40px;
    line-height: 40px;
    transition: all 0.3s;
    margin: 20px 0 20px calc(20%);
    :deep().el-page-header__left {
      transition: all 0.3s;
      &:hover {
        // filter: drop-shadow(0 2px 4px #ccc);
        text-shadow: 1px 1px 2px #b8b8b8;
      }
    }
  }
  .info-content {
    display: flex;
    min-height: 370px;
    align-items: center;
    justify-content: center;
    &.is-dark {
      background-color: #f0f3f5;
    }
    &.second {
      .content {
        .info {
          width: 360px;
        }
      }
    }
    .content {
      display: flex;
      width: 1200px;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 50px;
      gap: 32px;
      .info {
        width: 214px;
        overflow: hidden;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.1);
        img {
          width: 100%;
        }
        p {
          width: 100%;
          height: 72px;
          line-height: 72px;
          font-size: 18px;
          font-weight: 500;
          color: #333333;
          text-align: center;
        }
        @media (any-hover: hover) {
          &:hover {
            transition: all 0.3s;
            transform: translateY(-25px);
          }
        }
      }
    }
  }
  .details {
    &.is-dark {
      background-color: #f0f3f5;
    }
    .feature-list {
      gap: 103px;
      display: flex;
      flex-wrap: wrap;
      transition: all 0.2s;
      align-content: center;
      justify-content: center;
      padding: 45px 45px 90px 45px;
      &.third {
        .feature {
          img {
            width: 100px;
            height: 100px;
            margin-bottom: 28px;
          }
          p {
            color: #333;
          }
          @media (any-hover: hover) {
            &:hover {
              cursor: pointer;
              p {
                color: #4cb5bb;
              }
              img {
                transform: scale(1.05);
                filter: drop-shadow(0px 0px 8px #ccc);
              }
            }
          }
        }
      }
      .feature {
        color: #666666;
        text-align: center;
        i {
          color: #999999;
          transition: all 0.3s;
          font-size: 48px;
          margin-bottom: 20px;
          display: inline-block;
        }
        img {
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
          transition: all 0.3s;
        }
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 18px;
          transition: all 0.3s;
          white-space: nowrap;
        }
        @media (any-hover: hover) {
          &:hover {
            cursor: pointer;
            color: #4cb5bb;
            i {
              color: #4cb5bb;
            }
            img {
              filter: sepia(1) saturate(1.7) hue-rotate(137deg);
            }
          }
        }
      }
    }
    .tab-list {
      display: flex;
      padding: 30px 0 50px 0;
      align-items: center;
      justify-content: center;
      .tab-list-wrapper {
        display: flex;
        overflow: hidden;
        max-width: 1200px;
        border-radius: 8px;
        flex-direction: column;
        transition: all 0.3s;
        .tab-options {
          display: grid;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          grid-template-columns: repeat(4, minmax(110px, 285px));
          .option {
            padding: 20px 0;
            p {
              margin-top: 24px;
              font-size: 16px;
              font-weight: 600;
              color: #333333;
              transition: all 0.3s;
            }
            &:hover {
              background-color: #f4f7f9;
              img {
                filter: drop-shadow(2px 2px 8px #a3d3d1);
              }
              p {
                text-shadow: 2px 2px 2px #ccc;
              }
            }
            &.active {
              background-color: #f4f7f9;
              img {
                filter: drop-shadow(2px 4px 6px #ccc);
              }
              p {
                text-shadow: 2px 2px 4px #cdcdcd;
              }
            }
          }
        }
        .tab-content {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f4f7f9;
          transition: all 0.3s;
          .tab-content-wrapper {
            padding: 50px 70px;
            width: 100%;
            min-height: 220px;
            box-sizing: border-box;
            transition: all 0.3s;
            .content-item-list {
              display: grid;
              gap: 35px 20px;
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
              transition: all 0.3s;
              .item {
                font-size: 16px;
                list-style-position: inside;
                display: list-item;
                color: #666;
                white-space: nowrap;
                transition: all 0.3s;
              }
            }
          }
        }
      }
    }
    .product-interface-main-content {
      display: flex;
      justify-content: center;
      padding: 47px 0 70px 0;
      .content {
        gap: 42px;
        display: flex;
        padding: 0 20px;
        img {
          max-width: 538px;
          border-radius: 6px;
          box-sizing: border-box;
          width: calc(50% - 20px);
          border: 1px solid #cccccc75;
          &:first-of-type {
            @media (any-hover: hover) {
              &:hover ~ img {
                transform: translateX(50px);
              }
            }
          }
          @media (any-hover: hover) {
            &:hover {
              transition: all 0.3s;
              transform: scale(1.2);
            }
          }
        }
      }
    }
    .process-main-content {
      display: flex;
      justify-content: center;
      .content {
        padding: 0 20px 40px;
        img {
          width: 100%;
          max-width: 1205px;
        }
      }
    }
    .apply-groups {
      display: flex;
      justify-content: center;
      padding: 15px 0 70px 0;
      .content {
        gap: 42px;
        display: flex;
        .group {
          max-width: 570px;
          max-height: 353px;
          width: 100%;
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.3s;
            vertical-align: bottom;
          }
          &:hover {
            img {
              transform: scale(1.2);
            }
          }
          p {
            left: 0;
            bottom: 0;
            width: 100%;
            display: flex;
            height: 139px;
            font-size: 48px;
            font-weight: 600;
            color: #ffffff;
            position: absolute;
            align-items: center;
            text-indent: 30px;
            background-color: #00000075;
          }
        }
      }
    }
  }
  .empty-tips {
    margin: 0;
    display: flex;
    height: 500px;
    font-size: 68px;
    font-weight: 700;
    text-align: center;
    align-items: center;
    justify-content: center;
    // background: linear-gradient(90deg, #17ead9, #6078ea);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .flow-text {
    --bg-size: 400%;
    --color-one: #17ead9;
    --color-two: #6078ea;
    // font-size: clamp(3rem, 25vmin, 8rem);
    background: linear-gradient(
        90deg,
        var(--color-one),
        var(--color-two),
        var(--color-one)
      )
      0 0 / var(--bg-size) 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: move-bg 12s infinite linear;
  }

  @media (prefers-reduced-motion: no-preference) {
    .boujee-text {
      animation: move-bg 12s linear infinite;
    }
    @keyframes move-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }
}
@media screen and (max-width: 1800px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 300px;
      }
    }
    .el-page-header {
      margin-left: 300px;
    }
  }
}
@media screen and (max-width: 1700px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 260px;
      }
    }
    .el-page-header {
      margin-left: 260px;
    }
  }
}
@media screen and (max-width: 1600px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 220px;
      }
    }
    .el-page-header {
      margin-left: 220px;
    }
  }
}
@media screen and (max-width: 1500px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 180px;
      }
    }
    .el-page-header {
      margin-left: 180px;
    }
  }
}
@media screen and (max-width: 1400px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 140px;
      }
    }
    .el-page-header {
      margin-left: 140px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .product-detail {
    .main-title {
      h1 {
        font-size: 36px;
        line-height: 48px;
        margin-left: 100px;
      }
    }
    .el-page-header {
      margin-left: 100px;
    }
    .details {
      .feature-list {
        gap: 50px;
        padding: 30px 30px 60px 30px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .product-detail {
    .main-title {
      h1 {
        font-size: 36px;
        line-height: 48px;
        margin-left: 80px;
      }
    }
    .el-page-header {
      margin-left: 80px;
    }
    .info-content {
      &.second {
        .content {
          .info {
            width: auto;
            &:last-of-type {
              height: auto;
              display: block;
              grid-area: 2 / span 2;
              box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
      &.third {
        .content {
          .info {
            &:last-of-type {
              display: block;
              grid-area: initial;
              height: auto;
              box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
      .content {
        gap: 30px;
        display: grid;
        padding: 30px 10px;
        width: calc(100% - 20px);
        grid-template-columns: repeat(2, minmax(110px, 214px));
        .info {
          width: 100%;
          max-width: 214px;
          p {
            height: 50px;
            line-height: 50px;
          }
          &:last-of-type {
            height: 250px;
            display: flex;
            max-width: 458px;
            box-shadow: none;
            text-align: center;
            align-items: center;
            grid-area: 3 / span 2;
            flex-direction: column;
            justify-content: center;
            div {
              width: fit-content;
              box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.1);
              img {
                max-width: 214px;
              }
            }
          }
        }
      }
    }
    .details {
      .feature-list {
        gap: 45px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        justify-content: center;
        align-items: center;
        &.third {
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          .feature {
            img {
              width: 48px;
              height: 48px;
              margin-bottom: 10px;
            }
          }
        }
      }
      .tab-list {
        .tab-list-wrapper {
          flex-direction: row;
          .tab-options {
            grid-template-columns: repeat(1, minmax(110px, 250px));
            .option {
              img {
                width: 75px;
                height: 75px;
              }
              p {
                margin-top: 16px;
              }
            }
          }
          .tab-content {
            .tab-content-wrapper {
              padding: 50px;
              width: 50vw;
              max-width: 500px;
              .content-item-list {
                gap: 35px 20px;
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                .item {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
      .apply-groups {
        .content {
          padding: 0 20px;
          transition: all 0.3s;
          .group {
            p {
              transition: all 0.3s;
              height: 120px;
              font-size: 36px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .product-detail {
    .main-title {
      h1 {
        font-size: 24px;
        line-height: 36px;
        margin-left: 50px;
        margin-top: 30px;
        margin-bottom: 30px;
        &::after {
          width: 18px;
          height: 24px;
          right: -26px;
          background-size: cover;
        }
      }
    }
    .el-page-header {
      margin: 10px 0 10px 20px;
    }
    .details {
      .feature-list {
        gap: 45px;
      }
      .tab-list {
        .tab-list-wrapper {
          .tab-options {
            grid-template-columns: repeat(1, minmax(150px, 1fr));
            .option {
              img {
                width: 75px;
                height: 75px;
              }
              p {
                margin-top: 16px;
              }
            }
          }
          .tab-content {
            .tab-content-wrapper {
              padding: 50px 20px;
              width: 60vw;
              max-width: 300px;
              .content-item-list {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                .item {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
      .process-main-content {
        .content {
          padding: 0 50px 40px;
        }
      }
      .product-interface-main-content {
        .content {
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          img {
            width: 100%;
          }
        }
      }
      .apply-groups {
        .content {
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          .group {
            p {
              max-height: 100px;
              height: 3em;
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
