<template>
  <div class="emi">
    <common-header isHollowOutEnabled></common-header>
    <common-banner
      :background="require('~/assets/imgs/emi/emi-banner-background.webp')"
      :element="require('~/assets/imgs/emi/emi-banner-element.png')"
      :isDarkTitle="true"
      :isShowPreTitle="true"
      :isPreTitleBold="true"
      :showConsultBtn="true"
      :bannerHeight="500"
      preTitle="纺织工业数字化协同制造解决方案"
      title="中恒智造 EMI协同管控平台"
      subTitle="数据汇聚 智慧决策"
    ></common-banner>
    <div class="platform-intro">
      <div class="platform-title">
        <div class="title">平台介绍</div>
        <div class="subtitle">
          纺织行业的数字化解决方案，集自动化、信息化、数字化、智能化为一体，实现ERP、MES、IME三者融合的协同管控，数据汇聚，帮助企业智慧决策，创收增值。
        </div>
        <img
          src="~assets/imgs/emi/platform-intro-decoration.png"
          alt="platform-intro-decoration"
        />
      </div>
      <div class="intro-content">
        <p>
          EMI平台以全链路业务流程数字化管理，生产环节精细化管理，过程执行自动化管理为核心理念，创新形成的集团级协同制造管理系统，其汇聚了ERP(企业资源规划)、MES(制造执行分析)、IME(智能制造装备)三者独有的功能特性，打通了从业务管理、生产制造、执行分析之间各个环节信息流转，形成企业生产管理闭环，消除了生产企业的信息孤岛。
        </p>
      </div>
      <div class="platform-content">
        <div class="platform-detail">
          <div>
            <p>
              ERP（全称为Enterprise Resource
              Planning，即企业资源规划），是先进的企业管理模式，整合了企业管理理念、业务流程、基础数据、人力物力、计算机软硬件于一体，旨在对企业所拥有的人、财、物、产、供、销等综合资源进行综合平衡和优化管理，协调企业内部各管理部门，提高企业的核心竞争力，从而取得最好的经济效益。
            </p>
          </div>
          <p>ERP</p>
        </div>
        <div class="platform-detail">
          <div>
            <p>
              制造执行管理系统（MES）是实施企业敏捷制造战略和实现车间生产敏捷化的基本技术手段，是面向车间层的生产管理技术与实时信息系统。MES采集从接受订单到制成最终产品全过程的各种数据和状态信息，让产品在整个生产过程中变得清晰、透明，帮助企业实现生产的数字化和网络化，减低成本、按期交货，提高产品的质量和提高服务质量。
            </p>
          </div>
          <p>MES</p>
        </div>
        <div class="platform-detail">
          <div>
            <p>
              智能制造装备（Intelligent manufacturing
              equipment，简称IME），是指具有感知
              、分析、推理、决策、控制功能的制造装备，它是先进制造技术
              、信息技术和智能技术的集成和深度融合，实现生产过程自动化、智能化、精细化、绿色化，极大的降低人工依赖，推动工业生产整体技术水平的提升。
            </p>
          </div>
          <p>IME（智能制造装备）</p>
        </div>
        <!-- <el-tabs v-model="activeName" class="platform-detail-tabs">
          <el-tab-pane label="ERP" name="ERP"
            >EMI平台以全链路业务流程数字化管理，生产环节精细化管理，过程执行自动化管理为核心理念，创新形成的企业级制造管理系统，其汇聚了三大系统独有的功能特性，打通了从业务管理、生产制造、执行分析之间各个环节信息流转，形成企业生产管理闭环，消除了生产企业的信息孤岛。
          </el-tab-pane>
          <el-tab-pane label="MES" name="MES"
            >轻流mes设备管理系统，档案管理点检巡检维修报修设备保养数据追踪全覆盖,业务动态实时监控，自动提醒，用轻流mes设备管理系统，效率提升100%</el-tab-pane
          >
          <el-tab-pane label="IE(智能设备)" name="IE"
            >以规模化工业生产及工业经济系统为研究对象,以优化生产系统,提高劳动生产率和综合效益为追求目标</el-tab-pane
          >
        </el-tabs>
        <el-tabs
          v-model="activeName"
          class="platform-detail-left-tabs"
          tab-position="left"
        >
          <el-tab-pane label="ERP" name="ERP"
            >EMI平台以全链路业务流程数字化管理，生产环节精细化管理，过程执行自动化管理为核心理念，创新形成的企业级制造管理系统，其汇聚了三大系统独有的功能特性，打通了从业务管理、生产制造、执行分析之间各个环节信息流转，形成企业生产管理闭环，消除了生产企业的信息孤岛。
          </el-tab-pane>
          <el-tab-pane label="MES" name="MES"
            >轻流mes设备管理系统，档案管理点检巡检维修报修设备保养数据追踪全覆盖,业务动态实时监控，自动提醒，用轻流mes设备管理系统，效率提升100%</el-tab-pane
          >
          <el-tab-pane label="IE(智能设备)" name="IE"
            >以规模化工业生产及工业经济系统为研究对象,以优化生产系统,提高劳动生产率和综合效益为追求目标</el-tab-pane
          >
        </el-tabs> -->
      </div>
    </div>
    <div class="platform-framework">
      <div class="title">
        <div class="title-content">
          <h2>平台架构</h2>
          <p>平台的整体架构模式</p>
        </div>
      </div>
      <div class="framework-intro">
        <img src="~assets/imgs/emi/framework-intro.png" alt="framework-intro" />
      </div>
    </div>
    <div class="platform-features">
      <div class="title">
        <h2>平台特点</h2>
        <p>
          自主研发平台，软硬件双重技术加持，与阿里云、华为云、百度、讯飞等一流服务商的深度合作，让数据安全可靠、共享更方便！
        </p>
      </div>
      <div class="features-content">
        <div
          class="feature"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="~assets/imgs/emi/saas-decoration.png"
            alt="saas-decoration"
          />
          <div class="feature-detail">
            <h2>SAAS云服务</h2>
            <p>华为云等一流云服务商深度合作，数据安全可靠，共享更方便</p>
          </div>
        </div>
        <div
          class="feature"
          data-aos="fade-up"
          data-aos-delay="300"
          :data-aos-offset="clientWidth >= 1000 ? 200 : 0"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="~assets/imgs/emi/translate-decoration.png"
            alt="translate-decoration"
          />
          <div class="feature-detail">
            <h2>多语言自动翻译</h2>
            <p>不懂外语也可以轻松交流</p>
          </div>
        </div>
        <div
          class="feature"
          data-aos="fade-up"
          data-aos-delay="400"
          :data-aos-offset="clientWidth >= 1000 ? 300 : 0"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="~assets/imgs/emi/multi-device-decoration.png"
            alt="multi-device-decoration"
          />
          <div class="feature-detail">
            <h2>多端访问服务</h2>
            <p>完全自适应能力，微信，钉钉，移动端，PC端多端组合</p>
          </div>
        </div>
        <div
          class="feature"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
          :data-aos-offset="clientWidth >= 1000 ? 400 : 0"
        >
          <img
            src="~assets/imgs/emi/fast-interact-decoration.png"
            alt="fast-interact-decoration"
          />
          <div class="feature-detail">
            <h2>跨境通讯技术能力</h2>
            <p>解决了跨境数据访问延迟等难题，可达到秒级甚至毫秒级的访问速度</p>
          </div>
        </div>
      </div>
    </div>
    <div class="platform-solution">
      <div class="title">
        <h2>解决方案</h2>
        <p>云端协同，数据驱动，智慧决策</p>
      </div>
      <div class="solution-content">
        <img
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          src="~assets/imgs/emi/platform-solution-decoration.png"
          alt="platform-solution-decoration"
        />
      </div>
    </div>
    <div class="platform-value">
      <div class="title">
        <h2>平台价值</h2>
        <p>降本协同、透明高效，提质企业管理！</p>
      </div>
      <div class="value-content">
        <div
          class="value"
          data-aos-delay="100"
          data-aos="fade-up"
          :data-aos-offset="clientWidth >= 1000 ? 100 : 0"
          data-aos-easing="ease-in-sine"
        >
          <img src="~assets/imgs/emi/value-1.png" alt="value-decoration" />
          <h2>透明</h2>
          <p>
            精细化、数字化的管理手段让生产数据全周期透明可见，互联互通，消除信息孤岛，基于真实数据的建模分析，帮助企业快速实现问题溯源，挖掘高价值点，优化经营策略，让资产增值。
          </p>
        </div>
        <div
          class="value"
          data-aos-delay="200"
          data-aos="fade-up"
          :data-aos-offset="clientWidth >= 1000 ? 150 : 0"
          data-aos-easing="ease-in-sine"
        >
          <img src="~assets/imgs/emi/value-2.png" alt="value-decoration" />
          <h2>协同</h2>
          <p>
            物联网、自控、工业互联等先进技术的应用，全面贯穿从业务流程到生产执行到管控分析的各个环节，实现人与人、人与纺织设备、设备与设备之间的协同，解决信息的一致性和滞后性问题。
          </p>
        </div>
        <div
          class="value"
          data-aos-delay="300"
          data-aos="fade-up"
          :data-aos-offset="clientWidth >= 1000 ? 175 : 0"
          data-aos-easing="ease-in-sine"
        >
          <img src="~assets/imgs/emi/value-3.png" alt="value-decoration" />
          <h2>降本</h2>
          <p>
            智能化的生产模式，使得纺织生产将不再依赖“人与经验”，通过标准化、智能化的改造，帮助纺织企业实现精益化、柔性化生产，减少呆滞物料，降低生产成本、沟通成本和运营成本。
          </p>
        </div>
        <div
          class="value"
          data-aos-delay="400"
          data-aos="fade-up"
          :data-aos-offset="clientWidth >= 1000 ? 250 : 0"
          data-aos-easing="ease-in-sine"
        >
          <img src="~assets/imgs/emi/value-4.png" alt="value-decoration" />
          <h2>提质</h2>
          <p>
            利用平台的高度集成技术，全面管控生产流程的制造工艺、过程检验、质量把控、能源指标等多项标准，有效平衡产品质量与成本之间的关系，让产品品质更加稳定可控，客户更满意。
          </p>
        </div>
        <div
          class="value"
          data-aos-delay="500"
          data-aos="fade-up"
          :data-aos-offset="clientWidth >= 1000 ? 300 : 0"
          data-aos-easing="ease-in-sine"
        >
          <img src="~assets/imgs/emi/value-5.png" alt="value-decoration" />
          <h2>增效</h2>
          <p>
            打破时间与空间的约束，信息的互联共享使得多项工作可以并行开展，快速响应业务需要，极大地提升工作效率和运营的便捷性，消除低效盲点，敏捷生产，实现效率与产能倍增。
          </p>
        </div>
      </div>
    </div>
    <common-apply-for-trial></common-apply-for-trial>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
export default {
  head: {
    title: "中恒智造 - EMI平台",
  },
  data() {
    return {
      activeName: "ERP",
      clientWidth: 0,
      tabPosition: "top",
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
    });
  },
  methods: {
    handleResize() {
      this.clientWidth = document.body.clientWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
$titleFontSize: 34px;
$subTitleFontSize: 16px;
.emi {
  .platform-intro {
    .intro-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 20px 20px;
      p {
        max-width: 1200px;
        width: 100%;
        font-size: 22px;
        line-height: 36px;
        text-align: center;
      }
    }
    .platform-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 56px 0 93px 0;
      transition: all 0.3s;
      background-color: #f5faff;
      .title {
        font-size: $titleFontSize;
        font-weight: 600;
        color: #333333;
      }
      .subtitle {
        max-width: 710px;
        font-size: $subTitleFontSize;
        font-weight: 400;
        line-height: 24px;
        text-align: justify;
        text-align-last: center;
        padding: 0 10px;
        margin: 10px 0 27px 0;
        color: #333333;
      }
      img {
        max-width: 497px;
        width: calc(100% - 30px);
        height: auto;
        padding: 0 20px;
        transition: all 0.3s;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        @media (any-hover: hover) {
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .platform-content {
      display: grid;
      align-items: center;
      grid-column-gap: 100px;
      grid-row-gap: 20px;
      column-gap: 100px;
      row-gap: 20px;
      justify-content: center;
      grid-template-columns: repeat(3, minmax(110px, 330px));
      padding: 43px 0 60px 0;
      transition: all 0.3s;
      background-color: #fff;
      :deep().platform-detail-tabs {
        grid-column: 1 / span 3;
        .el-tabs__header {
          .el-tabs__nav-scroll {
            display: flex;
            .el-tabs__nav {
              display: flex;
              flex: 1;
              .el-tabs__item {
                position: relative;
                flex: 1;
                padding: 0;
                height: 50px;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;
                text-align: center;
                &:not(:last-of-type) {
                  padding-right: 156px;
                }
                &.is-active {
                  &::after {
                    content: "↓";
                    position: absolute;
                    left: 32%;
                    bottom: 0px;
                    height: 30px;
                    transform: translateX(-50%);
                  }
                }
                &:last-of-type {
                  &.is-active {
                    &::after {
                      left: 50%;
                    }
                  }
                }
              }
            }
          }
        }
        .el-tabs__content {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          line-height: 35px;
          .el-tab-pane {
            min-height: 110px;
            padding-top: 13px;
          }
        }
      }
      .platform-detail-left-tabs {
        display: none;
        grid-column: 1 / span 3;
        .el-tabs__content {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          line-height: 35px;
          .el-tab-pane {
            min-height: 110px;
          }
        }
      }
      .platform-detail {
        div {
          transition: all 0.3s;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 330px;
          height: 330px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px 2px #e9e9e9;
          p {
            opacity: 0;
            transition: all 0.3s;
            height: 100%;
            box-sizing: border-box;
            word-break: break-all;
            text-align: justify;
            background: #00000073;
            font-size: 16px;
            color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            line-height: 32px;
            margin: 0;
          }
        }
        > p {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
          color: #333;
          line-height: 21px;
          margin: 20px 0;
        }
        &:hover {
          div {
            p {
              opacity: 1;
            }
          }
          > p {
            color: #4694f2;
          }
        }
        &:nth-child(1) {
          div {
            background-image: url("~assets/imgs/emi/erp-decoration.png");
          }
        }
        &:nth-child(2) {
          div {
            background-image: url("~assets/imgs/emi/mes-decoration.png");
          }
        }
        &:nth-child(3) {
          div {
            background-image: url("~assets/imgs/emi/ie-decoration.png");
          }
        }
      }
    }
  }
  .platform-framework {
    text-align: center;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("~assets/imgs/emi/framework-title.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 171px;
      transition: all 0.3s;
      .title-content {
        h2 {
          font-size: $titleFontSize;
          font-weight: 600;
          color: #333333;
          line-height: 35px;
          margin: 0 0 10px 0;
        }
        p {
          font-size: $subTitleFontSize;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
          padding: 0 10px;
        }
      }
    }
    .framework-intro {
      transition: all 0.3s;
      padding: 93px 0 80px 0;
      img {
        transition: all 0.3s;
        width: calc(100% - 30px);
        max-width: 1100px;
        height: auto;
        margin: 0 10px;
      }
    }
  }
  .platform-features {
    background-image: url("~assets/imgs/emi/platform-features-background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 68px 0 134px 0;
    transition: all 0.3s;
    .title {
      text-align: center;
      h2 {
        font-size: $titleFontSize;
        font-weight: 600;
        color: #333333;
        line-height: 35px;
        margin: 0 0 10px 0;
      }
      p {
        font-size: $subTitleFontSize;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
        margin: 10px 0 27px 0;
        padding: 0 10px;
      }
    }
    .features-content {
      display: flex;
      gap: 77px;
      padding-top: 52px;
      flex-wrap: wrap;
      justify-content: center;
      // transition: all 0.3s;
      .feature {
        width: 229px;
        height: 292px;
        padding: 18px 20px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
        h2 {
          font-size: 22px;
          font-weight: 600;
          color: #333333;
          line-height: 26px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
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
  .platform-solution {
    transition: all 0.3s;
    .title {
      text-align: center;
      h2 {
        font-size: $titleFontSize;
        font-weight: 600;
        color: #333333;
        line-height: 35px;
        margin: 20px 0 10px 0;
      }
      p {
        font-size: $subTitleFontSize;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
        margin: 10px 0 0 0;
        padding: 0 10px;
      }
    }
    .solution-content {
      transition: all 0.3s;
      padding: 88px 0 125px 0;
      display: flex;
      justify-content: center;
      img {
        max-width: 950px;
        width: 100%;
        max-height: 362px;
        // transition: all 0.3s;
        @media (any-hover: hover) {
          &:hover {
            transition: all 0.3s;
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .platform-value {
    background-image: url("~assets/imgs/emi/platform-value-background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 68px 0 134px 0;
    // margin-bottom: 27px;
    transition: all 0.3s;
    .title {
      text-align: center;
      h2 {
        font-size: $titleFontSize;
        font-weight: 600;
        color: #333333;
        line-height: 35px;
        margin: 0 0 10px 0;
      }
      p {
        font-size: $subTitleFontSize;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
        margin: 10px 0 27px 0;
        padding: 0 10px;
      }
    }
    .value-content {
      display: flex;
      gap: 77px;
      padding-top: 52px;
      flex-wrap: wrap;
      justify-content: center;
      transition: all 0.3s;
      .value {
        width: 230px;
        height: 300px;
        background: #ffffff;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 25px 31px;
        text-align: center;
        box-sizing: border-box;
        // transition: all 0.3s;
        h2 {
          position: relative;
          margin: 12px 0 18px;
          color: #333333;
          font-size: 22px;
          font-weight: 600;
          line-height: 26px;
          &::after {
            content: "";
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 1px;
            background-color: #666;
          }
        }
        p {
          font-size: 10px;
          font-weight: 500;
          color: #666666;
          line-height: 20px;
          letter-spacing: 1px;
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
}
@media screen and (max-width: 1200px) {
  .emi {
    .platform-intro {
      .platform-title {
        padding: 50px 0;
      }
      .platform-content {
        column-gap: 70px;
        grid-template-columns: repeat(3, minmax(200px, 294px));
        :deep().platform-detail-tabs {
          grid-column: 1 / span 3;
          .el-tabs__header {
            .el-tabs__nav-scroll {
              .el-tabs__nav {
                .el-tabs__item {
                  &:not(:last-of-type) {
                    padding-right: 70px;
                  }
                  &.is-active {
                    &::after {
                      left: 40%;
                    }
                  }
                }
              }
            }
          }
          .el-tabs__content {
            .el-tab-pane {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        }
      }
    }
    .platform-framework {
      .title {
        height: 130px;
      }
      .framework-intro {
        // text-align: left;
        padding: 68px 0;
        img {
          width: calc(100% - 30px);
          height: auto;
          margin: 0 10px;
        }
      }
    }
    .platform-solution {
      .solution-content {
        padding: 50px 20px;
      }
    }
    .platform-value {
      .value-content {
        gap: 50px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .emi {
    .platform-intro {
      .platform-content {
        column-gap: 15px;
        justify-content: center;
        padding: 43px 25px 60px;
        .platform-detail {
          div {
            width: 100%;
            height: 250px;
            p {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px;
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
        .platform-detail-tabs {
          display: none;
        }
        .platform-detail-left-tabs {
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .emi {
    .platform-intro {
      .platform-title {
        .title {
          font-size: 24px;
        }
        img {
          width: calc(80% - 30px);
        }
      }
      .intro-content {
        margin-bottom: 0;
        p {
          text-align: justify;
          font-size: 18px;
          line-height: 30px;
        }
      }
      .platform-content {
        padding-bottom: 43px;
        .platform-detail {
          div {
            p {
              font-size: 13px;
              line-height: initial;
            }
          }
        }
      }
    }
    .platform-framework {
      .title {
        height: 90px;
        .title-content {
          h2 {
            font-size: 24px;
            line-height: initial;
            margin-bottom: 5px;
          }
          p {
            font-size: 14px;
          }
        }
      }
      .framework-intro {
        padding: 50px 0;
        img {
          width: calc(95% - 30px);
        }
      }
    }
    .platform-features {
      padding: 50px 0;
      .title {
        h2 {
          font-size: 24px;
        }
      }
      .features-content {
        gap: 20px;
        display: grid;
        padding: 0 15px;
        width: calc(100% - 30px);
        grid-template-columns: repeat(2, minmax(110px, 230px));
        .feature {
          width: 100%;
          padding: 15px 12px;
          height: 270px;
          h2 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
            text-align: left;
            text-align-last: center;
          }
          img {
            width: 100%;
          }
        }
      }
    }
    .platform-solution {
      padding: 50px 0;
      .title {
        h2 {
          font-size: 24px;
        }
      }
    }
    .platform-value {
      padding: 50px 0;
      .title {
        h2 {
          font-size: 24px;
        }
      }
      .value-content {
        gap: 20px;
        display: grid;
        padding: 0 15px;
        width: calc(100% - 30px);
        grid-template-columns: repeat(2, minmax(110px, 230px));
        .value {
          width: 100%;
          height: 280px;
          padding: 18px;
          overflow: hidden;
          position: relative;
          img {
            width: 30px;
            height: 30px;
          }
          p {
            font-size: 12px;
            text-align: justify;
            flex: 1;
          }
          &:last-of-type {
            height: fit-content;
            grid-area: 3 / span 2;
            h2 {
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .emi {
    .platform-features {
      background-image: none;
      background-color: #f5f8fa;
    }
    .platform-value {
      background-image: none;
      background-color: #f5f8fa;
    }
  }
}
@media screen and (max-width: 650px) {
  .emi {
    .platform-intro {
      .platform-content {
        column-gap: 15px;
        justify-content: center;
        grid-template-columns: repeat(2, minmax(200px, 330px));
        padding: 43px 15px 60px 15px;
        .platform-detail {
          div {
            width: 100%;
            height: 240px;
            p {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px;
            }
          }
        }
        .platform-detail-tabs {
          display: none;
        }
        .platform-detail-left-tabs {
          grid-column: 1 / span 2;
          display: block;
        }
      }
    }
    .platform-value {
      .value-content {
        .value {
          height: 250px;
          img {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .emi {
    .platform-intro {
      .platform-content {
        transition: all 0.3s;
        grid-template-columns: repeat(1, 1fr);
        .platform-detail {
          div {
            // background-size: contain;
            height: 230px;
            p {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px;
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
        .platform-detail-left-tabs {
          grid-column: 1 / span 1;
          :deep().el-tabs__content {
            transition: all 0.3s;
          }
        }
      }
    }
  }
}
</style>
