<template>
  <div class="product">
    <common-header ref="header"></common-header>
    <common-banner
      title="产品中心"
      :isDarkTitle="true"
      :bannerHeight="500"
      :isShowDescription="true"
      description="更多产品和服务请联系咨询"
      subTitle="基于EMI协同管控平台技术框架定制开发"
      :background="
        require('~/assets/imgs/product/product-banner-background.webp')
      "
    ></common-banner>
    <div
      v-if="isDone"
      ref="fastLink"
      class="fast-link"
      :style="{
        position: scrollTop >= fixedScrollDistance ? 'fixed' : 'static',
        top: fiexdTop - 1 + 'px',
        width: scrollTop >= fixedScrollDistance ? `${clientWidth}px` : '100%',
      }"
    >
      <div class="link-content">
        <div class="link">
          <a
            :class="{
              active: this.isErpSectionActive,
            }"
            @click="scrollToPos('erp')"
            >ERP定制产品</a
          >
        </div>
        <div class="link">
          <a
            :class="{
              active: this.isFactorySectionActive,
            }"
            @click="scrollToPos('factory')"
            >智慧工厂</a
          >
        </div>
        <div class="link">
          <a
            :class="{
              active: this.isFacilitySectionActive,
            }"
            @click="scrollToPos('facility')"
            >智能装备</a
          >
        </div>
      </div>
    </div>
    <div
      class="placeholder-element"
      :style="{
        height:
          scrollTop >= fixedScrollDistance
            ? `${fixedPlaceholderHeight}px`
            : '0',
      }"
    ></div>
    <div class="product-detail is-dark" ref="erp">
      <!-- <a name="erp-customization" class="anchor"></a> -->
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-right' : 'zoom-in-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="600"
            src="~assets/imgs/product/product-1-decoration.png"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>成衣业务管理系统</h2>
          <p>
            融合企业以样带销”的销售模式，涵盖款式样衣、打版借版、销售订单、大货生产、进度跟踪、成衣出入库、销售统计、客户档案等环节，业务流程数字化、精细化管理，规范业务一单不落，帮助企业更专注于市场。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(1)">查看详情</el-button>
            <el-button type="primary" @click="applyForTrial('成衣业务管理系统')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail is-reverse">
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-left' : 'zoom-in-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="600"
            src="~assets/imgs/product/product-2-decoration.png"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>牛仔面料生产管理系统</h2>
          <p>
            面料生产管理涵盖了从原纱、辅料、机物料、浆染、织造、后整到成品检验入库的完整的面料生产环节，生产流程支持全数字化、自动化管理，辅以浆染、后整自动化料控制系统及智能操作终端，实现面料生产数据互联互通，消除管理盲点，标准化作业生产，极大降低人工经验依赖性和作业出错率。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(2)">查看详情</el-button>
            <el-button
              type="primary"
              @click="applyForTrial('牛仔面料生产管理系统')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail is-dark">
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-right' : 'zoom-in-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="600"
            src="~assets/imgs/product/product-3-decoration.png"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>面料业务管理系统</h2>
          <p>
            轻量级的面料业务销售管理应用。客户品牌建档管理，防止业务撞单及人员流动造成客户流失，订单信息集中管控，统筹运维保障及时交付，仓库信息及时、准确传递与反馈，方便业务人员快速响应客户需求。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(3)">查看详情</el-button>
            <el-button type="primary" @click="applyForTrial('面料业务管理系统')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="anchor"><a name="intelligence-factory"></a></div> -->
    <div class="product-detail" ref="factory">
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-right' : 'zoom-in-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="600"
            src="~assets/imgs/product/product-4-decoration.webp"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>可视化数据大屏</h2>
          <p>
            系统将根据用户需求定制各类生产、营销、库存、采购、质量等报表，并通过数据挖掘，深度分析隐含在数据背后的数据信息，蒋相关数据转化为技术图表和直观的图形，从而形成营销管理仪表盘、质量管理仪表盘、生产管理仪表盘、物流管理仪表盘，有助于企业高层分析数据，为高层提供决策支持。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(4)">查看详情</el-button>
            <el-button type="primary" @click="applyForTrial('可视化数据大屏')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail is-reverse is-dark" ref="facility">
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-left' : 'zoom-out-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="300"
            data-aos-offset="150"
            data-aos-duration="600"
            src="~assets/imgs/product/product-5-decoration.webp"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>织物回潮率在线检测控制系统</h2>
          <p>
            EnSAF04-M型烘筒节能控制系统通过在线实时检测织物的回潮率指标，利用分级调节+双闭环控制的方式，智能调节烘筒的蒸汽供给量，从而改变烘筒表面的烘干温度，使得织物获得稳定的回潮率，依此节省不必要的蒸汽能源，降低生产成本，减少碳排放量。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(5)">查看详情</el-button>
            <el-button
              type="primary"
              @click="applyForTrial('织物回潮率在线检测控制系统')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail is-last" ref="facility">
      <div class="content">
        <div class="decoration">
          <img
            :data-aos="clientWidth >= 1000 ? 'fade-up-right' : 'zoom-out-down'"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="300"
            data-aos-offset="150"
            data-aos-duration="600"
            src="~assets/imgs/product/product-6-decoration.png"
            alt="product-decoration"
          />
        </div>
        <div class="details">
          <h2>浆染自动化料系统</h2>
          <p>
            自动化料系统是由中恒智造按照纺织印染工业染化料配液工艺流程及相关要求，结合自动化控制技术、工业互联网技术、IOT物联网技术、信息化技术、大数据等研发设计而成的一套高效率、自动化、智能化的染色配液调浆控制系统。.化料系统、用料系统的现场数据对比标准以及各个系统直接的对比，从而提醒管理人员当前的化料情况，生成浆染化料日志，实现由化料到生产的环节打通，数据串联，实现工厂的生产数据化，为未来实现无人车间做出重大变革。
          </p>
          <div class="detail-btn-group">
            <el-button plain @click="clickToDetail(6)">查看详情</el-button>
            <el-button type="primary" @click="applyForTrial('浆染自动化料系统')"
              >申请试用</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <common-leave-us-msg-dialog ref="dialog"></common-leave-us-msg-dialog>
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
      fixedScrollDistance: 0,
      fixedPlaceholderHeight: 0,
      scrollTop: 0,
      fiexdTop: 0,
      clientWidth: 0,
      offsetTop: {
        erp: 0,
        factory: 0,
        facility: 0,
      },
      fastLinkHeight: 0,
      headerHeight: 0,
      isDone: false,
    };
  },
  created() {},
  computed: {
    isErpSectionActive() {
      let scrollTop = this.scrollTop + this.fastLinkHeight + this.headerHeight;
      return scrollTop <= this.offsetTop.factory;
    },
    isFactorySectionActive() {
      let scrollTop =
        this.scrollTop + this.fastLinkHeight + this.headerHeight + 100;
      return (
        this.offsetTop.factory < scrollTop &&
        scrollTop <= this.offsetTop.facility
      );
    },
    isFacilitySectionActive() {
      let scrollTop =
        this.scrollTop + this.fastLinkHeight + this.headerHeight + 300;
      return scrollTop >= this.offsetTop.facility;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.isDone = true;
    });
    this.initData();
    this.handleScroll();
    this.handleResize();
    setTimeout(() => {
      this.handleResize();
    }, 300);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("scroll", this.handleScroll);
    });
  },
  methods: {
    initData() {
      this.fastLinkHeight =
        (this.$refs.fastLink && this.$refs.fastLink.offsetHeight) || 0;
      this.headerHeight =
        (this.$refs.header && this.$refs.header.$el.offsetHeight) || 0;
    },
    clickToDetail(type) {
      this.$router.push({
        path: "/product/details",
        query: {
          type,
        },
      });
    },
    applyForTrial(systemName) {
      this.$refs.dialog.openDialog(systemName);
    },
    scrollToPos(type) {
      window.scrollTo({
        top: this.offsetTop[type],
        left: 0,
        behavior: "smooth",
      });
    },
    handleResize() {
      let clientWidth = document.body.clientWidth;
      let headerHeight = clientWidth >= 1000 ? 68 : 60;
      let bannerHeight = 500;
      let fixedPlaceholderHeight = 200;

      if (959 < clientWidth) {
        bannerHeight = 500;
      } else if (799 < clientWidth && clientWidth <= 959) {
        bannerHeight = 330;
      } else if (clientWidth <= 799) {
        bannerHeight = 220;
      }

      if (1200 < clientWidth) {
        fixedPlaceholderHeight = 150;
      } else if (950 < clientWidth && clientWidth <= 1200) {
        fixedPlaceholderHeight = 140;
      } else if (750 < clientWidth && clientWidth <= 950) {
        fixedPlaceholderHeight = 130;
      } else if (clientWidth <= 750) {
        fixedPlaceholderHeight = 100;
      }

      this.fiexdTop = headerHeight;
      this.fixedScrollDistance = bannerHeight;
      this.clientWidth = clientWidth;
      this.fastLinkHeight =
        (this.$refs.fastLink && this.$refs.fastLink.offsetHeight) || 0;
      this.headerHeight =
        (this.$refs.header && this.$refs.header.$el.offsetHeight) || 0;
      this.offsetTop = {
        erp:
          (this.$refs.erp && this.$refs.erp.offsetTop) -
            this.fastLinkHeight -
            this.headerHeight || 0,
        factory:
          (this.$refs.factory && this.$refs.factory.offsetTop) -
            this.fastLinkHeight -
            this.headerHeight || 0,
        facility:
          (this.$refs.facility && this.$refs.facility.offsetTop) -
            this.fastLinkHeight -
            this.headerHeight || 0,
      };
      this.fixedPlaceholderHeight = fixedPlaceholderHeight;
    },
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  .fast-link {
    width: 100%;
    height: 150px;
    background-color: #fff;
    display: flex;
    align-items: center;
    transition: height 0.3s;
    justify-content: center;
    z-index: 1;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    .link-content {
      display: flex;
      min-width: 1115px;
      margin-top: -20px;
      position: relative;
      height: fit-content;
      transition: all 0.3s;
      justify-content: space-between;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        bottom: -12px;
        background: #bbdad9;
      }
      .link {
        a {
          font-size: 36px;
          font-weight: 600;
          color: #333333;
          line-height: 46px;
          position: relative;
          // transition: all 0.3s;
          text-decoration: none;
          &.active {
            &::after {
              position: absolute;
              content: "";
              left: 0;
              z-index: 1;
              width: 100%;
              height: 8px;
              bottom: -14px;
              background: #259f9b;
              border-radius: 1px;
            }
          }
        }
        @media (any-hover: hover) {
          a:hover {
            cursor: pointer;
            &::after {
              position: absolute;
              content: "";
              left: 0;
              z-index: 1;
              width: 100%;
              height: 8px;
              bottom: -14px;
              background: #259f9b;
              border-radius: 1px;
            }
          }
        }
      }
    }
  }
  .product-detail {
    // z-index: 0;
    display: flex;
    min-height: 600px;
    position: relative;
    align-items: center;
    transition: all 0.3s;
    justify-content: center;
    &.is-last {
      padding-bottom: 50px;
    }
    &.is-dark {
      background-color: #f0f3f5;
    }
    &.is-reverse {
      .content {
        flex-direction: row-reverse;
      }
    }
    .anchor {
      position: absolute;
      left: 0;
      top: -170px;
    }
    .content {
      gap: 89px;
      display: flex;
      height: 410px;
      transition: all 0.3s;
      .decoration {
        display: flex;
        align-items: center;
        img {
          height: auto;
          width: 555px;
          border-radius: 8px;
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
          @media (any-hover: hover) {
            &:hover {
              transition: all 0.3s;
              transform: scale(1.12);
            }
          }
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.3s;
        gap: 40px;
        h2 {
          margin: 0;
          font-size: 48px;
          font-weight: 500;
          color: #333333;
          line-height: 56px;
          transition: all 0.3s;
          max-width: 480px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          color: #666666;
          line-height: 25px;
          max-width: 551px;
          text-align: justify;
          transition: all 0.3s;
          &:hover {
            color: #999;
          }
        }
        .detail-btn-group {
          .el-button {
            font-size: 16px;
            padding: 14px 33px;
            transition: all 0.2s;
            &.el-button--primary {
              margin-left: 20px;
              border-color: #259f9b;
              background-color: #259f9b;
              &:hover {
                border-color: #2dbeb9;
                background-color: #2dbeb9;
              }
            }
            &.is-plain {
              color: #259f9b;
              border-color: #259f9b;
              background-color: transparent;
              &:hover {
                color: #2dbeb9;
                border-color: #2dbeb9;
                background-color: #f1fbfb;
              }
            }
          }
        }
      }
    }
  }
  .anchor {
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    line-height: 35px;
    text-align: center;
    position: relative;
    padding: 31px 0 25px;
    a {
      position: absolute;
      top: -170px;
      left: 0;
    }
  }
}
@media screen and (max-width: 1200px) {
  .product {
    .fast-link {
      height: 140px;
      .link-content {
        min-width: calc(100% - 60px);
        margin: -20px 40px 0;
      }
    }
    .product-detail {
      min-height: 500px;
      .anchor {
        top: -150px;
      }
      .content {
        gap: 70px;
        height: 330px;
        .decoration {
          img {
            height: auto;
            width: 500px;
            transition: all 0.3s;
          }
        }
        .details {
          gap: 20px;
          h2 {
            font-size: 36px;
            line-height: 50px;
          }
          p {
            font-size: 18px;
            line-height: 26px;
            max-width: 400px;
          }
          .detail-btn-group {
            .el-button {
              font-size: 16px;
              padding: 10px 20px;
              &:last-of-type {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
    .anchor {
      top: -150px;
    }
  }
}
@media screen and (max-width: 950px) {
  .product {
    .fast-link {
      height: 130px;
      .link-content {
        .link {
          a {
            font-size: 24px;
            line-height: 30px;
          }
        }
      }
    }
    .product-detail {
      min-height: 400px;
      .anchor {
        top: -120px;
      }
      .content {
        gap: 50px;
        height: 280px;
        .decoration {
          img {
            height: auto;
            width: 400px;
            transition: all 0.3s;
          }
        }
        .details {
          gap: 15px;
          h2 {
            font-size: 24px;
            line-height: 36px;
          }
          p {
            font-size: 14px;
            line-height: 20px;
            max-width: 300px;
          }
        }
      }
    }
    .anchor {
      top: -120px;
    }
  }
}
@media screen and (max-width: 750px) {
  .product {
    .fast-link {
      height: 100px;
      .link-content {
        .link {
          a {
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
    .product-detail {
      flex-direction: column;
      height: fit-content;
      .anchor {
        top: -70px;
      }
      &.is-reverse {
        .content {
          flex-direction: column;
        }
      }
      .content {
        flex-direction: column;
        gap: 30px;
        height: fit-content;
        align-items: center;
        padding: 30px 0;
        .decoration {
          padding: 0 20px;
          img {
            height: auto;
            max-width: 400px;
            width: 100%;
            transition: all 0.3s;
          }
        }
        .details {
          gap: 15px;
          text-align: center;
          h2 {
            font-size: 24px;
            line-height: 36px;
            max-width: initial;
          }
          p {
            font-size: 14px;
            line-height: 20px;
            max-width: 600px;
            padding: 0 20px;
          }
        }
      }
    }
    .anchor {
      top: -70px;
    }
  }
}
</style>
