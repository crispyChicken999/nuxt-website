<template>
  <div class="home-page">
    <common-header></common-header>
    <client-only>
      <viewer :images="previewImageList"></viewer>
    </client-only>
    <el-carousel
      :interval="5000"
      ref="topCarousel"
      class="top-carousel"
      @change="topCarouselChange"
      :autoplay="isCarouselAutoPlay"
      :arrow="clientWidth > 1000 ? 'hover' : 'never'"
      :height="clientWidth >= 1000 ? '500px' : '426px'"
    >
      <el-carousel-item class="top-carousel-item__first">
        <div class="home-page-carousel-item">
          <!-- <client-only>
            <canvas
              id="canvas-grid"
              class="home-carousel-background second"
            ></canvas>
          </client-only> -->
          <div class="carousel-content">
            <div class="carousel-left-content">
              <h1>纺织智能制造整体解决方案提供商</h1>
              <h2>全要素链接 · 网络化协同 · 数字化管理 · 智能化生产</h2>
              <a href="#consult">
                <el-button plain class="consult-btn">立即咨询</el-button></a
              >
            </div>
            <div class="carousel-right-content">
              <div class="orient-cloud">
                <div class="middle-cloud">
                  <img
                    src="~assets/imgs/home/top-carousel-first-decoration-item.webp"
                    alt="first-carousel-item"
                  />
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>浆染</p>
                    <p>浆染</p>
                    <p>浆染</p>
                    <p>浆染</p>
                    <p>浆染</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>织造</p>
                    <p>织造</p>
                    <p>织造</p>
                    <p>织造</p>
                    <p>织造</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>后整</p>
                    <p>后整</p>
                    <p>后整</p>
                    <p>后整</p>
                    <p>后整</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>印花</p>
                    <p>印花</p>
                    <p>印花</p>
                    <p>印花</p>
                    <p>印花</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>成衣</p>
                    <p>成衣</p>
                    <p>成衣</p>
                    <p>成衣</p>
                    <p>成衣</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>服装</p>
                    <p>服装</p>
                    <p>服装</p>
                    <p>服装</p>
                    <p>服装</p>
                  </div>
                </div>
                <div class="stage">
                  <div class="surrounding-text">
                    <p>原纱</p>
                    <p>原纱</p>
                    <p>原纱</p>
                    <p>原纱</p>
                    <p>原纱</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="top-carousel-item__second">
        <div class="home-page-carousel-item">
          <!-- <client-only>
            <common-particles
              id="top_carousel_item_background_second"
              class="home-carousel-background"
              color="#29EDCA"
              :particleOpacity="0.7"
              :particlesNumber="85"
              shapeType="circle"
              :particleSize="5.5"
              linesColor="#3D8382"
              :linesWidth="2.1"
              :lineLinked="true"
              :lineOpacity="0.55"
              :linesDistance="150"
              :moveSpeed="3.8"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="false"
              clickMode="push"
            >
            </common-particles>
            <canvas
              id="second-carousel-item"
              class="home-carousel-background second"
            ></canvas> -->
          <!-- <canvas
              id="canvas-grid"
              class="home-carousel-background second"
            ></canvas>
          </client-only> -->
          <div class="carousel-content">
            <div class="carousel-left-content">
              <h1>智能制造解决方案</h1>
              <h2>为纺织工厂提供全面的智能制造解决方案</h2>
              <a href="#consult">
                <el-button plain class="consult-btn">立即咨询</el-button></a
              >
            </div>
            <div class="carousel-right-content second">
              <img
                title="点击放大"
                @click="
                  showPicViewer('top-carousel-second-decoration-item.webp')
                "
                alt="second-carousel-item"
                src="~assets/imgs/home/top-carousel-second-decoration-item.webp"
              />
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="emi-management-platform">
      <h2 class="title-with-decoration">EMI协同管控平台</h2>
      <h3 class="title-description">
        致力于为纺织行业提供全产业链协同智造整体解决方案，"智能硬件”+“管理软件”深度融合，一站式解决纺织企业的转型升级难题。
      </h3>
      <div class="intro">
        <div class="intro-content">
          <img
            alt="智能制造提供商"
            class="intelligent-supplier-img"
            src="~assets/imgs/home/intelligent-supplier.png"
          />
        </div>
      </div>
      <div class="service-features">
        <div class="content-list">
          <div
            class="content-item"
            data-aos="zoom-out-right"
            data-aos-delay="200"
            data-aos-offset="-100"
          >
            <div class="img-icon">
              <img src="~assets/imgs/home/diamond.png" alt="凸显价值" />
            </div>
            <div class="title-box">
              <h3>凸显价值</h3>
            </div>
            <p>
              标准化作业流程，敏捷生产，保质保优，提高企业竞争力，凸显行业优势。
            </p>
          </div>
          <div
            class="content-item"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="-100"
          >
            <div class="img-icon">
              <img src="~assets/imgs/home/heart.png" alt="省心省力" />
            </div>
            <div class="title-box">
              <h3>省心省力</h3>
            </div>
            <p>
              生产经营数字化，全线管控，大幅度减少线下工作线上更便捷专注业务，一
              触即达，省时省心省力。
            </p>
          </div>
          <div
            class="content-item"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="-100"
          >
            <div class="img-icon">
              <img src="~assets/imgs/home/paper-plane.png" alt="提速增效" />
            </div>
            <div class="title-box">
              <h3>提速增效</h3>
            </div>
            <p>
              精益生产，制造资源分配更加合理，帮助企业及时生产，快速回笼资金。
            </p>
          </div>
          <div
            class="content-item"
            data-aos="zoom-out-left"
            data-aos-delay="800"
            data-aos-offset="-100"
          >
            <div class="img-icon">
              <img src="~assets/imgs/home/target.png" alt="专注、精准" />
            </div>
            <div class="title-box">
              <h3>专注精准</h3>
            </div>
            <p>专注目标客户，精准行业市场，直指客户痛点。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="core-service">
      <h2 class="title-with-decoration">服务模块</h2>
      <h3 class="title-description">
        <p>
          基于自主研发的EMI协同管控平台，为企业搭建集团式统一多组织的信息化、数字化、智能化管理体系，满足企业多元化、个性化的转型需求。
        </p>
        <p class="text-inline">
          基于自主研发的EMI协同管控平台，为企业搭建集团式统一多组织的信息化、数字化、智能化管理体系，满足企业多元化、个性化的转型需求。
        </p>
      </h3>
      <div class="service-content">
        <div class="contents">
          <div
            class="content"
            data-aos-delay="100"
            data-aos-offset="150"
            data-aos="zoom-in-down"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/home/core-service-1.png"
              alt="core-service-feature"
            />
            <p>软件定制化服务</p>
          </div>
          <div
            class="content"
            data-aos-delay="100"
            data-aos-offset="150"
            data-aos="zoom-in-down"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/home/core-service-2.png"
              alt="core-service-feature"
            />
            <p>智慧工厂规划与整体解决方案</p>
          </div>
          <div
            class="content"
            data-aos-delay="100"
            data-aos-offset="150"
            data-aos="zoom-in-down"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="~assets/imgs/home/core-service-3.png"
              alt="core-service-feature"
            />
            <p>智能化系统工程</p>
          </div>
        </div>
        <div class="decoration">
          <img
            data-aos-delay="50"
            data-aos-offset="100"
            data-aos="zoom-out-left"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/home/core-service-decoration.png"
            alt="core-service-decoration"
          />
        </div>
      </div>
    </div>
    <div class="management-concept">
      <h2 class="title-with-decoration">三大核心管理理念</h2>
      <h3 class="title-description">
        <p>我们不断探索先进的智能制造解决方案</p>
        <p>将生产企业卓越的管理思想与先进科学技术交相融合！</p>
        <p class="text-inline">
          我们不断探索先进的智能制造解决方案，将生产企业卓越的管理思想与先进科学技术交相融合！
        </p>
      </h3>
      <div class="concept-content">
        <div
          class="concept-item"
          data-aos-delay="100"
          data-aos-offset="150"
          data-aos="zoom-out-right"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="~/assets/imgs/home/concept-item-1.png"
            alt="concept-item-1"
          />
          <p class="concept-desc">全链路业务流程数字化管理</p>
        </div>
        <div
          class="concept-item"
          data-aos-delay="100"
          data-aos-offset="150"
          :data-aos="clientWidth >= 1000 ? 'zoom-out-down' : 'zoom-out-left'"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="~/assets/imgs/home/concept-item-2.png"
            alt="concept-item-2"
          />
          <p class="concept-desc">生产环节精细化管理</p>
        </div>
        <div
          class="concept-item"
          data-aos-delay="100"
          data-aos-offset="150"
          :data-aos="clientWidth >= 1000 ? 'zoom-out-left' : 'fade-up'"
          data-aos-duration="400"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="~/assets/imgs/home/concept-item-3.png"
            alt="concept-item-3"
          />
          <p class="concept-desc">过程执行自动化管理</p>
        </div>
      </div>
    </div>
    <div class="custom-services">
      <h2 class="title-with-decoration">顾问式服务</h2>
      <h3 class="title-description">
        <p>
          服务企业的各个发展阶段，根据企业的发展状况提供最优的解决方案，专家诊断按需配置，个性定制，终身服务。
        </p>
        <p>
          每一项应用服务，都是企业管理刚需，删繁就简，需要什么配置什么，以实现企业核心价值为目标，拒绝无用功能的堆砌！
        </p>
        <p class="text-inline">
          服务企业的各个发展阶段，根据企业的发展状况提供最优的解决方案，专家诊断按需配置，个性定制，终身服务。
          每一项应用服务，都是企业管理刚需，删繁就简，需要什么配置什么，以实现企业核心价值为目标，拒绝无用功能的堆砌！
        </p>
      </h3>
      <div class="custom-services-intro">
        <div class="custom-services-content">
          <div class="service-customize">
            <img
              class="floating-img"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="750"
              data-aos-delay="200"
              src="~/assets/imgs/home/pro-diagnosis.png"
              alt="pro-diagnosis"
            />
            <img
              class="floating-img"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="750"
              data-aos-delay="200"
              src="~/assets/imgs/home/personalization.png"
              alt="personalization"
            />
            <img
              src="~/assets/imgs/home/custom-services-background.png"
              alt="custom-services-background"
            />
          </div>
          <div class="service-guarantee">
            <img
              class="floating-img"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="750"
              data-aos-delay="200"
              src="~/assets/imgs/home/adjustable-fee.png"
              alt="adjustable-fee"
            />
            <img
              class="floating-img"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="750"
              data-aos-delay="200"
              src="~/assets/imgs/home/lifelong-service.png"
              alt="lifelong-service"
            />
            <img
              src="~/assets/imgs/home/services-guarantee-background.png"
              alt="services-guarantee-background"
            />
          </div>
        </div>
      </div>
    </div>
    <common-apply-for-trial isDarkBg></common-apply-for-trial>
    <common-leave-us-msg-dialog ref="dialog"></common-leave-us-msg-dialog>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head: {
    title: '中恒智造 - 纺织数智化方案提供商',
  },
  data() {
    return {
      carouselHeight: 0,
      carouselIndex: 0,
      clientWidth: 1920,
      isDisplayParticles: true,
      isCarouselAutoPlay: true,
      phoneReg:
        /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/,
      phoneNumberValidator: (rule, value, callback) => {
        let reg = this.phoneReg;
        if (!value) {
          callback(new Error("联系方式必填"));
        } else if (!reg.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      },
      previewImageList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      this.$nextTick(() => {
        // this.$initGrid();
        this.getCarouselHeight(false);
        if (this.clientWidth <= 1000) {
          this.slideBanner();
        }
        this.seoImprovement();
      });
      window.addEventListener("resize", this.getCarouselHeight);
      this.$once("hook:beforeDestory", () => {
        window.removeEventListener("resize", this.getCarouselHeight);
      });
    },

    // SEO
    seoImprovement() {
      for (let item of document.querySelectorAll(".el-carousel__button")) {
        item.setAttribute("aria-label", "element carousel switch button");
      }
    },

    // “为什么选我们” 的轮播图高度变化
    getCarouselHeight(e, isMannul = false) {
      let map = {
        0: "first",
        1: "second",
        2: "third",
      };
      let target = document.querySelector(
        `#${map[this.carouselIndex]}Carousel`
      );
      this.clientWidth = document.body.clientWidth;
      if (isMannul && this.clientWidth < 1100) {
        let pos = document.querySelector(".why-us-main-content");
        window.scrollTo(0, pos.offsetTop - 80);
      }
      if (document.body.clientWidth > 1099) {
        this.carouselHeight = 1100;
        return;
      }
      target && (this.carouselHeight = target.scrollHeight);
    },

    // “为什么选我们” 的轮播图变化
    carouselChange(currentIndex) {
      this.carouselIndex = currentIndex;
      this.getCarouselHeight(null, true);
    },

    // 了解更多
    learnMore() {
      this.$router.push({
        path: "/emi",
      });
    },

    // 轮播图滚动触发
    topCarouselChange() {},

    // 打开弹窗
    openDialog() {
      this.$refs.dialog.openDialog();
    },

    // 停止自动播放
    stopAuto() {
      this.isCarouselAutoPlay = false;
    },

    // 开始自动播放
    startAuto() {
      this.isCarouselAutoPlay = true;
    },

    // 轮播手滑切换
    slideBanner() {
      let box = document.querySelector(".el-carousel__container");
      let startPoint = 0;
      let stopPoint = 0;
      let resetPoint = () => {
        startPoint = 0;
        stopPoint = 0;
      };
      box.addEventListener(
        "touchstart",
        (e) => {
          this.stopAuto();
          startPoint = e.changedTouches[0].pageX;
        },
        { passive: true }
      );
      box.addEventListener(
        "touchmove",
        (e) => {
          stopPoint = e.changedTouches[0].pageX;
        },
        { passive: true }
      );
      box.addEventListener(
        "touchend",
        () => {
          if (stopPoint == 0 || startPoint - stopPoint == 0) {
            resetPoint();
            this.startAuto();
            return;
          }
          if (startPoint - stopPoint > 0) {
            resetPoint();
            this.$refs.topCarousel.next();
            this.startAuto();
            return;
          }
          if (startPoint - stopPoint < 0) {
            resetPoint();
            this.$refs.topCarousel.prev();
            this.startAuto();
            return;
          }
        },
        { passive: true }
      );
    },

    // 点击打开图片预览
    showPicViewer(fileName) {
      this.previewImageList = [require(`../assets/imgs/home/${fileName}`)];
      this.$viewerApi({
        images: this.previewImageList,
        // options: {
        //   initialViewIndex: i - 1,
        // },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  font-family: Microsoft YaHei;
  .top-carousel {
    padding-right: 17px;
    &.el-carousel {
      .el-carousel__container {
        .top-carousel-item__first {
          .home-page-carousel-item {
            background-image: url("~assets/imgs/home/top-carousel-first-item-background.webp");
          }
        }
        .top-carousel-item__second {
          .home-page-carousel-item {
            background-image: url("~assets/imgs/home/top-carousel-second-item-background.webp");
          }
        }
        .home-page-carousel-item {
          height: 100%;
          background-size: cover;
          background-color: #0d1633;
          background-repeat: no-repeat;
          background-position: top left;
          #canvas-grid {
            width: 100% !important;
            height: 100% !important;
          }
          .home-carousel-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
          }
          h1 {
            margin-top: 0;
          }
          .carousel-content {
            height: 100%;
            display: flex;
            color: white;
            align-items: center;
            justify-content: space-evenly;
            .carousel-left-content {
              position: relative;
              z-index: 2;
              h1 {
                font-size: 50px;
                font-weight: 700;
                transition: all 0.3s;
                margin: 0 0 20px 0;
              }
              h2 {
                font-size: 24px;
                font-weight: 400;
                transition: all 0.3s;
                margin: 0 0 70px 0;
                span {
                  display: inline-block;
                  border-radius: 20px;
                  height: 32px;
                  line-height: 32px;
                  padding: 4px 15px;
                  border: 1px solid #ccc;
                  margin-right: 5px;
                }
              }
              h3 {
                font-size: 20px;
                font-weight: 400;
                margin: 0 0 35px 0;
              }
              .el-button {
                width: 150px;
                height: 50px;
                font-size: 18px;
                color: white;
                background: #279793;
                transition: all 0.3s;
                border: 1px solid #279793;
                border-radius: 4px;
                transition: all 0.3s;
                &:hover {
                  background: #35ccc7;
                  border-color: #35ccc7;
                }
              }
            }
            .carousel-right-content {
              position: relative;
              z-index: 2;
              transition: all 0.3s;
              img {
                transition: all 0.3s;
                width: 355px;
                height: auto;
                filter: drop-shadow(2px 8px 12px #25b9a2);
              }
              &.second {
                cursor: pointer;
                img {
                  width: 658px;
                }
              }
              &.third {
                img {
                  width: 229px;
                }
              }
              &.four {
                img {
                  width: 340px;
                }
              }
              .orient-cloud {
                width: 500px;
                height: 300px;
                position: relative;
                .middle-cloud {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  animation: imageHoverEffect 5s linear infinite;
                  @keyframes imageHoverEffect {
                    0% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                    100% {
                      transform: translateY(0);
                    }
                  }
                  &::after {
                    content: "";
                    position: absolute;
                    bottom: -45px;
                    width: 90%;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #25b9a2;
                    transform-style: preserve-3d;
                    transform: rotateZ(360deg) rotateY(60deg) rotateX(0deg);
                    filter: drop-shadow(0px 2px 15px #25b9a2) blur(1px);
                    box-shadow: 2px 2px 12px 0px #25b9a2;
                    animation: hoverEffect 5s linear infinite;
                    @keyframes hoverEffect {
                      0% {
                        transform: rotateZ(360deg) rotateY(55deg) rotateX(0deg);
                      }
                      50% {
                        transform: rotateZ(360deg) rotateY(62deg) rotateX(0deg);
                      }
                      100% {
                        transform: rotateZ(360deg) rotateY(55deg) rotateX(0deg);
                      }
                    }
                  }
                }
                .stage {
                  transform-style: preserve-3d;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 106px;
                  height: 140px;
                  transform: translate3d(-50%, -50%, 0) rotateX(330deg);
                  .surrounding-text {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 100px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    white-space: nowrap;
                    animation: rotate1 10s linear infinite;
                    font-size: 36px;
                    transform-origin: center center;
                    transform-style: preserve-3d;
                    p {
                      backface-visibility: hidden;
                      -webkit-backface-visibility: hidden;
                      position: absolute;
                      &:nth-child(1) {
                        -webkit-text-stroke: 1px black;
                      }
                      &:nth-child(2) {
                        -webkit-text-stroke: 1px black;
                        transform: translateZ(1px);
                      }
                      &:nth-child(3) {
                        -webkit-text-stroke: 1px black;
                        transform: translateZ(2px);
                      }
                      &:nth-child(4) {
                        -webkit-text-stroke: 2px black;
                        transform: translateZ(3px);
                      }
                      &:nth-child(5) {
                        transform: translateZ(4px);
                      }
                    }
                  }
                  &:nth-of-type(1) {
                    .surrounding-text {
                      animation-name: rotate1;
                      @keyframes rotate1 {
                        from {
                          transform: rotateY(0deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(360deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(2) {
                    .surrounding-text {
                      animation-name: rotate2;
                      @keyframes rotate2 {
                        from {
                          transform: rotateY(-50deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(310deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(3) {
                    .surrounding-text {
                      animation-name: rotate3;
                      @keyframes rotate3 {
                        from {
                          transform: rotateY(-100deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(260deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(4) {
                    .surrounding-text {
                      animation-name: rotate4;
                      @keyframes rotate4 {
                        from {
                          transform: rotateY(-150deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(210deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(5) {
                    .surrounding-text {
                      animation-name: rotate5;
                      @keyframes rotate5 {
                        from {
                          transform: rotateY(-200deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(160deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(6) {
                    .surrounding-text {
                      animation-name: rotate6;
                      @keyframes rotate6 {
                        from {
                          transform: rotateY(-250deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(110deg) translateZ(200px);
                        }
                      }
                    }
                  }
                  &:nth-of-type(7) {
                    .surrounding-text {
                      animation-name: rotate7;
                      @keyframes rotate7 {
                        from {
                          transform: rotateY(-310deg) translateZ(200px);
                        }
                        to {
                          transform: rotateY(50deg) translateZ(200px);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .title-with-decoration {
    font-weight: 400;
    font-size: 32px;
    position: relative;
    margin: 0 auto 26px;
    width: fit-content;
    text-align: center;
    color: #1b1b1b;
    transition: all 0.3s;
    &.dark {
      color: white;
      &::before,
      &::after {
        filter: grayscale(1);
      }
    }
  }
  .title-description {
    margin: 0 auto 45px;
    width: fit-content;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #696765;
    text-align: center;
    transition: all 0.3s;
    p {
      line-height: 32px;
      &.text-inline {
        display: none;
      }
    }
    &.dark {
      color: white;
    }
  }
  .emi-management-platform {
    transition: all 0.3s;
    padding-top: 73px;
    .intro {
      margin: 80px 0 50px 0;
      display: flex;
      justify-content: center;
      transition: all 0.3s;
      .intro-content {
        position: relative;
        text-align: center;
        width: fit-content;
        padding: 0 20px;
        img {
          width: 100%;
          max-width: 1208px;
          transition: all 0.2s;
          // &:hover {
          //   filter: drop-shadow(2px 4px 6px #b2edf2) saturate(1.2);
          // }
        }
        .bubble-text {
          position: absolute;
          background-color: #fff;
          min-width: 85px;
          z-index: 2;
          span {
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 14px;
            letter-spacing: 2px;
            color: #666666;
            position: relative;
            display: block;
            box-shadow: 3px 5px 10px #b6b6b6;
            &::before {
              content: "";
              position: absolute;
              bottom: -10px;
              width: 0px;
              height: 0px;
              border-color: white transparent transparent transparent;
              border-width: 5px;
              border-style: solid;
              filter: drop-shadow(3px 5px 10px #b6b6b6);
            }
          }
          &:hover {
            transition: all 0.3s;
            transform: translateY(-15px);
          }
          &.middle-top {
            top: 100px;
            left: 744px;
          }
          &.left-1 {
            top: -5px;
            left: 373px;
          }
          &.right-1 {
            top: -13px;
            right: 359px;
          }
          &.left-2 {
            top: 53px;
            left: 21px;
          }
          &.right-2 {
            top: 64px;
            right: 1px;
          }
          &.left-3 {
            top: 363px;
            left: -36px;
          }
          &.right-3 {
            top: 217px;
            right: -102px;
          }
          &.left-4 {
            top: 436px;
            left: 198px;
          }
          &.right-4 {
            top: 460px;
            right: 267px;
          }
          &.left-5 {
            top: 441px;
            left: 500px;
          }
          &.right-5 {
            top: 445px;
            right: 525px;
          }
          &.middle-bottom {
            bottom: 29px;
            left: 743px;
          }
          &.learn-more {
            top: 423px;
            right: 23px;
            span {
              color: #3fa9f5;
              text-decoration: underline;
              cursor: pointer;
              user-select: none;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
    .service-features {
      display: flex;
      justify-content: center;
      position: relative;
      padding-top: 50px;
      .content-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 40px;
        .content-item {
          width: 240px;
          height: 210px;
          padding: 30px 18px;
          border-radius: 12px;
          box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);
          position: relative;
          background: rgb(255, 255, 255);
          &:hover {
            transition: all 0.5s;
            transition-delay: 0;
          }
          p {
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 25px;
            text-align: center;
            color: #a2a2a2;
          }
          .title-box {
            font-size: 18px;
            color: #070707;
            text-align: center;
            margin: 50px 0 20px;
          }
          .img-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 2px 2px 10px 0 #96cfb7;
            img {
              width: 32px;
              height: auto;
            }
          }
          @media (any-hover: hover) {
            &:hover {
              transform: translateY(-25px);
            }
          }
        }
      }
    }
  }
  .core-service {
    margin: 120px 0 0 0;
    padding: 43px 0 121px 0;
    background-color: #f5faff;
    .service-content {
      gap: 200px;
      display: flex;
      padding-top: 50px;
      justify-content: center;
      .contents {
        gap: 24px;
        display: flex;
        flex-direction: column;
        .content {
          gap: 14px;
          width: 356px;
          height: 140px;
          display: flex;
          border-radius: 8px;
          align-items: center;
          background-color: #72c9c0;
          @media (any-hover: hover) {
            &:hover {
              transition: all 0.3s;
              transform: translateY(-15px) scale(1.05);
              box-shadow: 2px 2px 4px 2px #14674565;
            }
          }
          img {
            width: 91px;
            height: 91px;
            margin-left: 20px;
          }
          p {
            width: 100%;
            font-size: 22px;
            font-weight: 600;
            color: #ffffff;
            max-width: 154px;
            text-align: center;
          }
        }
      }
      .decoration {
        display: flex;
        align-items: center;
        padding: 0 20px;
        img {
          max-width: 598px;
          width: 100%;
        }
      }
    }
  }
  .custom-services {
    padding: 150px 0 70px;
    margin-bottom: 67px;
    background-image: url("~assets/imgs/home/custom-service-background.png");
    background-color: white;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .custom-services-intro {
      .custom-services-content {
        transition: all 0.3s;
        display: flex;
        justify-content: center;
        grid-column-gap: 200px;
        column-gap: 200px;
        padding: 120px 0 50px;
        .service-customize,
        .service-guarantee {
          position: relative;
          .floating-img {
            position: absolute;
            transition: all 0.3s;
            top: -10%;
            right: -30%;
            &:first-of-type {
              left: -20%;
              right: initial;
              top: -25%;
            }
            &:hover {
              transition: all 0.3s;
              transform: translateY(-15px);
            }
          }
        }
      }
    }
  }
  .management-concept {
    padding: 135px 0;
    .concept-content {
      display: flex;
      column-gap: 60px;
      align-items: center;
      transition: all 0.3s;
      justify-content: center;
      grid-column-gap: 60px;
      .concept-item {
        width: 370px;
        height: 314px;
        display: flex;
        row-gap: 75px;
        grid-row-gap: 75px;
        border-radius: 8px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        box-shadow: 2px 2px 8px 2px #cccccc96;
        @media (any-hover: hover) {
          &:hover {
            transition: all 0.3s;
            transform: translateY(-20px);
          }
        }
        img {
          width: auto;
          height: 120px;
        }
        .concept-desc {
          font-size: 24px;
          font-weight: 300;
          transition: all 0.3s;
        }
      }
    }
  }
}
@media screen and (max-width: 1399px) {
  .home-page {
    .top-carousel {
      &.el-carousel {
        .el-carousel__container {
          .home-page-carousel-item {
            .carousel-content {
              .carousel-left-content {
                h1 {
                  font-size: 40px;
                }
                h2 {
                  font-size: 20px;
                  margin-bottom: 40px;
                }
                .el-button {
                  width: 130px;
                }
              }
              .carousel-right-content {
                zoom: 0.9;
              }
            }
          }
        }
      }
    }
    .core-service {
      .service-content {
        gap: initial;
        justify-content: space-evenly;
        .contents {
          gap: 16px;
        }
      }
    }
  }
}
@media screen and (max-width: 1099px) {
  .home-page {
    .title-with-decoration {
      font-size: 30px;
      letter-spacing: 6px;
    }
    .title-description {
      font-size: 18px;
    }
    .top-carousel {
      padding-right: 0;
      &.el-carousel {
        .el-carousel__container {
          .home-page-carousel-item {
            .carousel-content {
              .carousel-left-content {
                h1 {
                  font-size: 34px;
                }
                h2 {
                  font-size: 18px;
                  margin-bottom: 20px;
                }
                .el-button {
                  width: 110px;
                  height: 35px;
                  line-height: 0;
                  font-size: 14px;
                }
              }
              .carousel-right-content {
                zoom: 0.8;
              }
            }
          }
        }
      }
    }
    .core-service {
      .service-content {
        padding-top: 0;
        flex-direction: column-reverse;
        .contents {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 50px;
        }
        .decoration {
          justify-content: center;
        }
      }
    }
    .custom-services {
      background-color: #f5faff;
      background-image: none;
      margin: 80px 0;
      padding: 50px;
      .custom-services-intro {
        .custom-services-content {
          flex-direction: column;
          grid-row-gap: 100px;
          row-gap: 100px;
          align-items: center;
          padding: 80px 0 0 0;
          div {
            flex: 0 0 auto;
            width: fit-content;
          }
        }
      }
    }
    .management-concept {
      .concept-content {
        flex-wrap: wrap;
        grid-row-gap: 50px;
        row-gap: 50px;
      }
    }
  }
}
@media screen and (max-width: 999px) {
  .home-page {
    .title-with-decoration {
      font-size: 32px;
      letter-spacing: 4px;
    }
    .title-description {
      font-size: 16px;
      padding: 0 20px;
      p:not(:last-of-type) {
        display: none;
      }
      p.text-inline {
        display: block;
      }
    }
    .top-carousel {
      &.el-carousel {
        .el-carousel__container {
          .home-page-carousel-item {
            .carousel-content {
              .carousel-right-content {
                zoom: 0.6;
              }
            }
          }
        }
      }
    }
    .emi-management-platform {
      padding-top: 40px;
      .intro {
        margin: 30px 0;
      }
      .service-features {
        padding-top: 50px;
        .content-list {
          gap: 40px 20px;
          display: grid;
          padding: 0 10px;
          grid-template-columns: repeat(2, minmax(110px, 270px));
          .content-item {
            max-width: 240px;
            max-height: 270px;
            width: calc(100% - 36px);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;
            .title-box {
              margin: 20px 0;
              h3 {
                margin: 0;
              }
            }
            p {
              line-height: initial;
              font-size: 14px;
            }
          }
        }
      }
    }
    .core-service {
      padding-bottom: 50px;
      .service-content {
        .contents {
          display: grid;
          padding: 50px 10px 0;
          width: calc(100% - 20px);
          grid-template-columns: repeat(2, minmax(110px, 350px));
          .content {
            gap: 20px;
            width: 100%;
            height: 120px;
            justify-content: center;
            img {
              margin-left: 10px;
              transition: all 0.3s;
            }
            p {
              margin-right: 10px;
              font-size: 18px;
            }
            &:nth-child(2) {
              p {
                max-width: initial;
                width: fit-content;
              }
              grid-area: 2 / span 2;
            }
          }
        }
      }
    }

    .management-concept {
      gap: 40px 20px;
      padding: 50px 0 30px 0;
      .concept-content {
        gap: 20px;
        display: grid;
        padding: 0 15px;
        width: calc(100% - 30px);
        grid-template-columns: repeat(2, minmax(110px, 270px));
        .concept-item {
          grid-row-gap: 40px;
          row-gap: 40px;
          width: 100%;
          height: 250px;
          &:last-of-type {
            grid-area: 2 / span 2;
          }
          img {
            height: 100px;
          }
          .concept-desc {
            font-size: 18px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 799px) {
  .home-page {
    .top-carousel {
      &.el-carousel {
        .el-carousel__container {
          .home-page-carousel-item {
            .carousel-content {
              .carousel-left-content {
                h1 {
                  font-size: 30px;
                }
                h2 {
                  font-size: 16px;
                  margin-bottom: 20px;
                }
                .el-button {
                  width: 110px;
                  height: 35px;
                  line-height: 0;
                  font-size: 14px;
                }
              }
              .carousel-right-content {
                display: none;
              }
            }
          }
        }
      }
    }
    .emi-management-platform {
      .service-features {
        .content-list {
          padding: 0 15px;
          gap: 35px 20px;
          grid-template-columns: repeat(2, minmax(110px, 250px));
          .content-item {
            max-height: 200px;
            padding: 20px;
            // box-sizing: border-box;
            .title-box {
              margin: 0;
            }
          }
        }
      }
    }
    .core-service {
      margin-top: 80px;
      .service-content {
        .contents {
          .content {
            height: 100px;
            justify-content: center;
            gap: 10px;
            overflow: hidden;
            img {
              width: 60px;
              height: auto;
              margin-left: 5px;
            }
            p {
              margin-right: 5px;
              text-align: center;
            }
          }
        }
      }
    }
    .custom-services {
      padding: 50px 0;
    }
  }
}
@media screen and (max-width: 599px) {
  .home-page {
    .title-with-decoration {
      font-size: 26px;
      letter-spacing: 0px;
      margin-bottom: 15px;
      &::before {
        left: -30px;
      }
      &::after {
        right: -30px;
      }
    }
    .title-description {
      font-size: 14px;
      margin-bottom: 25px;
      p {
        &:not(:last-of-type) {
          display: none;
        }
        &:last-of-type {
          display: block;
        }
      }
    }
    .top-carousel {
      &.el-carousel {
        .el-carousel__container {
          .home-page-carousel-item {
            .carousel-content {
              .carousel-left-content {
                h1 {
                  font-size: 24px;
                }
                h2 {
                  font-size: 12px;
                  margin-bottom: 20px;
                  span {
                    padding: 4px 10px;
                    margin-right: 5px;
                  }
                }
                .el-button {
                  width: 110px;
                  height: 35px;
                  line-height: 0;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .custom-services {
      margin: 30px 0 50px 0;
      .custom-services-intro {
        .custom-services-content {
          flex-direction: column;
          grid-row-gap: 100px;
          row-gap: 100px;
          align-items: center;
          .service-customize,
          .service-guarantee {
            img:last-of-type {
              width: 200px;
              height: auto;
            }
            .floating-img {
              width: 75px;
              height: auto;
              &:first-of-type {
                left: -30%;
              }
              &:nth-child(2) {
                right: -40%;
              }
            }
          }
        }
      }
    }
    .management-concept {
      .concept-content {
        .concept-item {
          height: 180px;
          grid-row-gap: 20px;
          row-gap: 20px;
          img {
            height: 80px;
          }
          .concept-desc {
            font-size: 14px;
            text-align: center;
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
