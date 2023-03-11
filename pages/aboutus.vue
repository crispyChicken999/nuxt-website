<template>
  <div class="aboutus">
    <client-only>
      <viewer :images="imageList"></viewer>
    </client-only>
    <common-header></common-header>
    <common-banner
      title=""
      :background="
        require('~/assets/imgs/aboutus/aboutus-banner-background.webp')
      "
      stressWord="About us"
      subTitle="关于我们"
      :bannerHeight="500"
    ></common-banner>
    <div class="about-us-info">
      <div class="about-us-content">
        <div class="found-in">
          <div class="title">
            <h1>2017</h1>
            <p>创立于</p>
          </div>
          <div class="content">
            <h2>中恒智造</h2>
            <p>
              北京中恒智造科技有限公司（简称中恒智造）是一家专注纺织行业信息化、自动化、智能化产品研发和技术服务的高科技企业，拥有创新知识产权、独立研发设计能力和丰富行业经验。
            </p>
            <p>
              具有强大的行业个性化需求定制开发能力，是纺织服装行业智能制造系统集成商及整体解决方案提供商。
            </p>
          </div>
        </div>
        <div class="advantage">
          <div class="title">平台优势</div>
          <div class="content">
            中恒智造以中国制造2025为参照体系，以市场为导向，潜心于智能制造产品的研发。公司经过多年发展，聚集了一大批经验丰富、科学严谨、优质高效的技术人员，为企业强势发展奠定了坚实的基础。
          </div>
        </div>
        <div class="advantage">
          <div class="title">业务优势</div>
          <div class="content">
            研发人员与业务人员长期深入生产一线，从订单获取、原料采购、生产排单到最后的成品交付，深入了解生产过程中的每一个环节，促使产品开发与业务应用交相融合，确保能够真正落地服务客户。
          </div>
        </div>
        <div class="advantage">
          <div class="title">技术优势</div>
          <div class="content">
            采用SaaS（软件即服务）云端部署模式，标准化接口，按需灵活配置，极高的可延展性，支持二次定制开发；采用业内先进的技术栈，持续敏捷迭代升级；集团级、全球性的协同能力，更低的使用成本，更短的实施周期，无需安装，随处可用。
          </div>
        </div>
      </div>
    </div>
    <div class="core-value">
      <div class="wrapper">
        <div class="core-value-content">
          <h1>核心价值</h1>
          <div class="item-list">
            <div class="item">
              <div
                class="decoration"
                data-aos-delay="100"
                data-aos="zoom-out-right"
                data-aos-easing="ease-out-cubic"
                :data-aos-offset="clientWidth >= 1000 ? 150 : 0"
                :data-aos-duration="clientWidth >= 1000 ? 1000 : 500"
              >
                <img
                  src="~assets/imgs/aboutus/core-value-1.png"
                  alt="decoration"
                />
              </div>
              <div class="content">
                <h3>管理方法</h3>
                <p>不断探索、持续创新</p>
              </div>
            </div>
            <div class="item">
              <div
                class="decoration"
                data-aos-delay="100"
                data-aos="zoom-out-right"
                data-aos-easing="ease-out-cubic"
                :data-aos-offset="clientWidth >= 1000 ? 150 : 0"
                :data-aos-duration="clientWidth >= 1000 ? 1000 : 500"
              >
                <img
                  src="~assets/imgs/aboutus/core-value-2.png"
                  alt="decoration"
                />
              </div>
              <div class="content">
                <h3>设计理念</h3>
                <p>软件的人机交互、界面美观的整体设计</p>
              </div>
            </div>
            <div class="item">
              <div
                class="decoration"
                data-aos-delay="100"
                data-aos="zoom-out-right"
                data-aos-easing="ease-out-cubic"
                :data-aos-offset="clientWidth >= 1000 ? 150 : 0"
                :data-aos-duration="clientWidth >= 1000 ? 1000 : 500"
              >
                <img
                  src="~assets/imgs/aboutus/core-value-3.png"
                  alt="decoration"
                />
              </div>
              <div class="content">
                <h3>企业精神</h3>
                <p>打造行业精品，创造社会价值</p>
              </div>
            </div>
            <div class="item">
              <div
                class="decoration"
                data-aos-delay="100"
                data-aos="zoom-out-right"
                data-aos-easing="ease-out-cubic"
                :data-aos-offset="clientWidth >= 1000 ? 150 : 0"
                :data-aos-duration="clientWidth >= 1000 ? 1000 : 500"
              >
                <img
                  src="~assets/imgs/aboutus/core-value-4.png"
                  alt="decoration"
                />
              </div>
              <div class="content">
                <h3>高端定制化</h3>
                <p>定制开发，免费实地考察</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="team-member">
        <div class="title">
          <h2>团队成员</h2>
          <p>
            来自于海内外著名高校和一流名牌大学，拥有国际化的视野和强大的技术背景，为企业发展保驾护航！
          </p>
        </div>
        <div class="university-list">
          <div
            data-aos="zoom-in-right"
            v-for="item in 10"
            class="university-item"
            :key="`university_${item}`"
            :data-aos-delay="clientWidth >= 900 ? item * 100 : 0"
            :data-aos-duration="
              clientWidth >= 900 ? (item <= 3 ? 300 : item * 100) : 300
            "
            data-aos-easing="ease-out-cubic"
          >
            <img
              class="university-item-img"
              :src="require(`../assets/imgs/aboutus/university-${item}.png`)"
              :alt="`university_${item}`"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-content">
        <div class="title">
          <h2>全球化的技术服务</h2>
          <p>
            我们的产品和服务在全球多个国家和地区被使用，从美国到欧洲，从孟加拉国到越南，从北京到上海，广州....
          </p>
        </div>
        <div class="content">
          <img
            data-aos-delay="400"
            data-aos-offset="40"
            data-aos-duration="700"
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/aboutus/worldwide-usage.webp"
            alt="service-content-decoration"
          />
        </div>
      </div>
    </div>
    <div class="certificate">
      <div class="certificate-content">
        <div class="title">
          <h2>资质证书</h2>
        </div>
        <div class="content cards-content">
          <div class="animated-cards">
            <!-- <div class="card" v-for="i in 17" :key="i">{{i}}</div>
            <div class="card" v-for="i in 17" :key="i">{{i}}</div> -->
            <div
              class="card"
              :class="`card-item-${i}`"
              v-for="i in CERTIFICATE_NUM"
              :key="i"
              data-aos-delay="300"
              data-aos="flip-left"
              data-aos-offset="200"
              :data-current-key="i"
              data-aos-duration="600"
              data-aos-easing="ease-out-cubic"
            >
              <img
                alt="证书"
                :src="
                  require(`../assets/imgs/aboutus/certificates/certificate-${i}.png`)
                "
              />
              <i
                class="el-icon-zoom-in"
                @click.stop="showPicViewer(i)"
                title="点击放大"
              ></i>
            </div>
            <div
              class="card"
              v-for="i in CERTIFICATE_NUM"
              :class="`card-item-${i + CERTIFICATE_NUM}`"
              :key="'copy_' + i"
              data-aos-delay="300"
              data-aos="flip-left"
              data-aos-offset="200"
              :data-current-key="i + CERTIFICATE_NUM"
              data-aos-duration="600"
              data-aos-easing="ease-out-cubic"
            >
              <img
                alt="证书"
                :src="
                  require(`../assets/imgs/aboutus/certificates/certificate-${i}.png`)
                "
              />
              <i
                class="el-icon-zoom-in"
                @click.stop="showPicViewer(i)"
                title="点击放大"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
const CERTIFICATE_NUM = 8; // 证书数量
export default {
  head: {
    title: "中恒智造 - 关于我们",
  },
  data() {
    return {
      clientWidth: 0,
      imageList: [],
      CERTIFICATE_NUM,
    };
  },
  mounted() {
    for (let i = 1; i <= CERTIFICATE_NUM; i++) {
      this.imageList.push(
        require(`../assets/imgs/aboutus/certificates/certificate-${i}.png`)
      );
    }
    this.imageList;
    this.handleResize();
    this.clientWidth >= 1200 && requestAnimationFrame(this.wavesGenerator);
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
      cancelAnimationFrame(this.wavesGenerator);
    });
  },
  methods: {
    handleResize() {
      this.clientWidth = document.body.clientWidth;
    },
    showPicViewer(i) {
      this.$viewerApi({
        images: this.imageList,
        options: {
          initialViewIndex: i - 1,
        },
      });
    },
    wavesGenerator(isInit = false) {
      let targetDOM = document.querySelector(".animated-cards");
      if (!targetDOM) return;
      let targetWidth = targetDOM.clientWidth;

      let style = window.getComputedStyle(targetDOM);
      let matrix = new WebKitCSSMatrix(style.webkitTransform);

      let currentTranslateX = Math.abs(matrix.m41);
      let animationDuration = Number(style.animationDuration.replace("s", ""));

      let horizontalDistance = Number(targetWidth) * 0.5;
      let moveSpeed = Math.abs(horizontalDistance / animationDuration); // per second

      let outerContainer = document.querySelector(".cards-content");
      let outerWidth = outerContainer.clientWidth;

      let cardDOMList = document.querySelectorAll(".card");

      // visiable area
      let destinationPoint = currentTranslateX + outerWidth;
      let startingPoint = currentTranslateX;
      let visiableElement = [];
      for (let [index, item] of cardDOMList.entries()) {
        if (
          item.offsetLeft >= startingPoint &&
          item.offsetLeft <= destinationPoint
        ) {
          visiableElement.push(item);
        }
      }
      let transformScaleValueList = [];
      switch (visiableElement.length) {
        case 4:
          transformScaleValueList = [
            "scale(1.15)",
            "scale(1.25)",
            "scale(1.25)",
            "scale(1.15)",
          ];
          break;
        case 5:
          transformScaleValueList = [
            "scale(1.05)",
            "scale(1.15)",
            "scale(1.25)",
            "scale(1.15)",
            "scale(1.05)",
          ];
          break;
        case 6:
          transformScaleValueList = [
            "scale(1.05)",
            "scale(1.15)",
            "scale(1.25)",
            "scale(1.25)",
            "scale(1.15)",
            "scale(1.05)",
          ];
          break;
      }
      function update() {
        for (let [index, item] of cardDOMList.entries()) {
          if (
            [3, 4, 5, 6].includes(Number(visiableElement[0].dataset.currentKey))
          ) {
            [3, 4, 5, 6].includes(index) &&
              (item.style["transform"] = "none !important;");
          } else {
            item.style = "";
          }
        }
        for (let [index, item] of visiableElement.entries()) {
          item.style["transform"] =
            transformScaleValueList[index] + " translateZ(0)";
        }
      }
      update();
      window.requestAnimationFrame(this.wavesGenerator);
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutus {
  .about-us-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    transition: all 0.3s;
    .about-us-content {
      gap: 31px;
      width: 100%;
      top: -108px;
      display: flex;
      max-width: 1100px;
      position: relative;
      align-items: center;
      transition: all 0.3s;
      flex-direction: column;
      justify-content: center;
      padding: 220px 100px 0;
      background-color: #fff;
      .title {
        font-size: 28px;
        font-weight: 500;
        color: #333333;
        line-height: 33px;
        transition: all 0.3s;
        h1 {
          margin: 0;
          font-size: 100px;
          font-weight: 500;
          color: #333333;
          line-height: 117px;
          transition: all 0.3s;
          font-family: DIN-Medium, DIN;
        }
      }
      .content {
        font-size: 22px;
        font-weight: 500;
        color: #666666;
        max-width: 800px;
        line-height: 37px;
        text-align: justify;
        transition: all 0.3s;
        h2 {
          font-size: 48px;
          font-weight: 600;
          color: #333333;
          line-height: 56px;
          margin: 0 0 26px 0;
          transition: all 0.3s;
        }
        p {
          &:last-of-type {
            margin-top: 31px;
          }
        }
      }
      .found-in {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .advantage {
        display: flex;
        justify-content: space-between;
        width: 100%;
        transition: all 0.3s;
      }
    }
  }
  .core-value {
    transition: all 0.3s;
    .wrapper {
      display: flex;
      background: #15af9f;
      justify-content: center;
    }
    .core-value-content {
      color: white;
      height: fit-content;
      transition: all 0.3s;
      padding-bottom: 196px;
      h1 {
        font-size: 48px;
        color: #ffffff;
        font-weight: 500;
        line-height: 81px;
        transition: all 0.3s;
        margin: 93px 0 82px 50px;
      }
      .item-list {
        display: grid;
        grid-row-gap: 127px;
        transition: all 0.3s;
        grid-column-gap: 100px;
        margin: 0 151px 0 222px;
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
        .item {
          gap: 18px;
          display: flex;
          // justify-content: space-between;
          &:hover {
            .decoration {
              transition: all 0.3s;
              transform: scale(1.05) translateY(-15px);
              box-shadow: 2px 2px 12px 4px #24f7e175;
            }
          }
          .decoration {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 126px;
            height: 126px;
            background: rgba(255, 255, 255, 0.48);
            border: 1px solid #fffcfc;
            border-radius: 100px;
          }
          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: fit-content;
            h3 {
              margin-top: 0;
              font-size: 20px;
              font-weight: 600;
              transition: all 0.3s;
            }
            p {
              font-size: 16px;
              font-weight: 500;
              max-width: 220px;
              line-height: 24px;
              // white-space: nowrap;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
  .team {
    display: flex;
    justify-content: center;
    padding: 117px 0 166px 0;
    background-color: #f7fbfc;
    transition: all 0.3s;
    .team-member {
      .title {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h2 {
          margin-top: 0;
          font-size: 50px;
          color: #333333;
          font-weight: 600;
          line-height: 59px;
          text-align: center;
          margin-bottom: 30px;
          transition: all 0.3s;
        }
        p {
          width: 100%;
          margin: 0 20px;
          font-size: 20px;
          max-width: 940px;
          color: #666666;
          font-weight: 500;
          line-height: 46px;
          text-align: center;
          transition: all 0.3s;
        }
      }
      .university-list {
        display: grid;
        margin-top: 100px;
        grid-template-columns: repeat(5, 148px);
        grid-row-gap: 47px;
        grid-column-gap: 99px;
        transition: all 0.3s;
        .university-item {
          position: relative;
          overflow: hidden;
          &-img {
            width: 148px;
            height: 148px;
            vertical-align: top;
          }
          &::after {
            content: "";
            position: absolute;
            left: -110%;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0)
            );
            transform: skew(-30deg);
          }
          &:hover {
            transition: all 0.3s;
            transform-style: preserve-3d;
            transform: scale(1.1) translateY(-20px) rotate3d(0.5, 0.8, 1, -5deg);
            filter: saturate(1.5);
            &::after {
              left: 110%;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
  .service {
    display: flex;
    justify-content: center;
    padding: 84px 0 76px 0;
    .service-content {
      .title {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h2 {
          margin-top: 0;
          font-size: 50px;
          color: #333333;
          font-weight: 600;
          line-height: 59px;
          text-align: center;
          margin-bottom: 30px;
        }
        p {
          width: 100%;
          margin: 0 20px 77px;
          font-size: 20px;
          max-width: calc(100% - 40px);
          color: #666666;
          font-weight: 500;
          line-height: 46px;
          text-align: center;
        }
      }
      .content {
        img {
          max-width: 1000px;
          width: 100%;
          margin: 0 20px;
        }
      }
    }
  }
  .certificate {
    display: flex;
    justify-content: center;
    margin: 84px 0 76px 0;
    .certificate-content {
      .title {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h2 {
          margin-top: 0;
          font-size: 50px;
          color: #333333;
          font-weight: 600;
          line-height: 59px;
          text-align: center;
          margin-bottom: 30px;
        }
      }
      .content {
        max-width: 100%;
        width: 1200px;
        overflow: hidden;
        .animated-cards {
          margin: 0;
          display: flex;
          padding-top: 80px;
          width: fit-content;
          margin-bottom: 64px;
          animation: scroll 12s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
          .card {
            margin: 0;
            width: 254px;
            display: flex;
            height: 350px;
            color: #fff;
            font-size: 48px;
            font-weight: 700;
            overflow: hidden;
            min-height: 350px;
            // transition: all 3s;
            border-radius: 4px;
            position: relative;
            align-items: center;
            will-change: transform;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: center;
            border: 1px solid #ccc;
            box-shadow: -20px 0 10px -10px rgba(0, 0, 0, 0.611);
            background: linear-gradient(85deg, #434343, #262626);
            transition-timing-function: cubic-bezier(0.68, 0.3, 0.35, 0.74);
            &:nth-child(1) {
              transform: scale(1.05) translateZ(0);
            }
            &:nth-child(2) {
              transform: scale(1.15) translateZ(0);
            }
            &:nth-child(3) {
              transform: scale(1.25) translateZ(0);
            }
            &:nth-child(4) {
              transform: scale(1.25) translateZ(0);
            }
            &:nth-child(5) {
              transform: scale(1.15) translateZ(0);
            }
            &:nth-child(6) {
              transform: scale(1.05) translateZ(0);
            }
            i {
              position: absolute;
              z-index: 2;
              right: 2px;
              bottom: 2px;
              padding: 4px;
              opacity: 0;
              font-size: 16px;
              cursor: pointer;
              color: #404040;
              border-radius: 4px;
              transition: all 0.2s;
              border: 1px solid #ccc;
              background-color: #fff;
              box-shadow: 0px 0px 10px 2px #9f9f9f94;
              &:hover {
                color: #fff;
                border-color: #56a7f8;
                background-color: #409eff;
              }
            }
            img {
              width: 100%;
              height: 100%;
              transition: all 0.3s;
            }
            &:not(:first-child) {
              margin-left: -50px; // 证书盒子向左缩进值
            }
            &:focus-within,
            &:hover {
              i {
                opacity: 1;
              }
              transition: all 0.2s;
              transform: translate(20px, -1rem) scale(1.35) !important;
            }
            &:hover ~ .card {
              transition: all 0.2s;
              transform: translateX(130px) !important;
            }
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(calc(-50% + 24px));
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .aboutus {
    .about-us-info {
      .about-us-content {
        top: 0;
        position: static;
        padding: 110px 20px;
        .title {
          font-size: 24px;
          line-height: normal;
          h1 {
            font-size: 70px;
            line-height: normal;
            font-family: DIN-Medium, DIN;
          }
        }
        .content {
          font-size: 18px;
          line-height: normal;
          max-width: calc(100% - 250px);
          h2 {
            font-size: 36px;
            line-height: normal;
            margin: 0 0 20px 0;
          }
          p {
            &:last-of-type {
              margin-top: 20px;
            }
          }
        }
      }
    }
    .core-value {
      height: 100%;
      position: static;
      .core-value-content {
        max-width: 1200px;
        width: 100%;
        padding-bottom: 100px;
        h1 {
          margin: 50px 0 50px 100px;
          font-size: 48px;
          line-height: normal;
        }
        .item-list {
          margin: 0 50px 0 100px;
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 100px;
          grid-column-gap: 50px;
          .item {
            gap: 15px;
            display: flex;
            .decoration {
              width: 100px;
              height: 100px;
              border-radius: 75px;
              img {
                max-width: 90px;
              }
            }
            .content {
              h3 {
                font-size: 20px;
                line-height: normal;
              }
              p {
                font-size: 18px;
                line-height: normal;
              }
            }
          }
        }
      }
    }
    .team {
      padding: 100px 0;
      .team-member {
        .title {
          h2 {
            font-size: 40px;
            line-height: normal;
          }
          p {
            margin: 0;
            padding: 0 20px;
            font-size: 18px;
            max-width: calc(100% - 40px);
            line-height: normal;
          }
        }
        .university-list {
          margin-top: 50px;
          grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
          grid-row-gap: 50px;
          grid-column-gap: 50px;
          .university-item {
            text-align: center;
            &-img {
              width: 148px;
              height: 148px;
              vertical-align: top;
            }
          }
        }
      }
    }
    .service {
      padding: 50px 0;
      .service-content {
        .title {
          h2 {
            font-size: 40px;
            line-height: normal;
          }
          p {
            margin: 0 0 50px 0;
            padding: 0 20px;
            font-size: 18px;
            max-width: calc(100% - 40px);
            line-height: normal;
          }
        }
        .content {
          img {
            width: calc(100% - 40px);
            margin: 0 20px;
          }
        }
      }
    }
    .certificate {
      padding: 50px 0;
      width: 100%;
      .certificate-content {
        width: 100%;
        .title {
          h2 {
            margin-top: 0;
            font-size: 40px;
            line-height: normal;
          }
        }
        .content {
          max-width: 1200px;
          width: 100%;
          .animated-cards {
            margin: 0;
            display: flex;
            padding-top: 80px;
            margin-bottom: 64px;
            width: fit-content;
            animation: scroll 20s linear infinite;
            &:hover {
              animation-play-state: paused;
            }
            .card {
              &:nth-child(1) {
                transform: none;
              }
              &:nth-child(2) {
                transform: none;
              }
              &:nth-child(3) {
                transform: none;
              }
              &:nth-child(4) {
                transform: none;
              }
              &:nth-child(5) {
                transform: none;
              }
              &:nth-child(6) {
                transform: none;
              }
              img {
                width: 100%;
                height: 100%;
                transition: all 0.3s;
              }
              &:not(:first-child) {
                margin-left: -30px; // 证书盒子向左缩进值
              }
              &:focus-within,
              &:hover {
                transform: translate(20px, -1rem) scale(1.15);
              }
              &:hover ~ .card {
                transform: translateX(130px);
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .aboutus {
    .about-us-info {
      .about-us-content {
        padding: 50px 30px;
        .title {
          font-size: 20px;
          h1 {
            font-size: 56px;
          }
          p {
            font-weight: 700;
          }
        }
        .content {
          font-size: 18px;
          max-width: calc(100% - 150px);
          h2 {
            font-size: 28px;
            margin: 0 0 20px 0;
          }
          p {
            &:last-of-type {
              margin-top: 20px;
            }
          }
        }
        .advantage {
          flex-direction: column;
          .title {
            font-weight: 700;
            margin-bottom: 10px;
          }
          .content {
            max-width: 100%;
          }
        }
      }
    }
    .core-value {
      .core-value-content {
        width: 100%;
        padding-bottom: 80px;
        h1 {
          margin: 50px 0 50px 70px;
          font-size: 36px;
          line-height: normal;
        }
        .item-list {
          margin: 0 50px 0 50px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-row-gap: 50px;
          grid-column-gap: 50px;
          .item {
            display: flex;
            justify-content: space-evenly;
            .decoration {
              width: 100px;
              height: 100px;
              border-radius: 50px;
              flex: 0 0 auto;
              border: none;
              box-shadow: 2px 2px 12px 4px #b0b0b075;
              img {
                max-width: 50px;
              }
            }
            .content {
              width: 240px;
              h3 {
                font-size: 20px;
                line-height: normal;
                margin-top: 0;
              }
              p {
                font-size: 18px;
                line-height: normal;
                white-space: pre-wrap;
              }
            }
          }
        }
      }
    }
    .team {
      padding: 50px 0 70px 0;
      .team-member {
        .university-list {
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-row-gap: 30px;
          grid-column-gap: 30px;
          padding: 0 20px;
          .university-item {
            &-img {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
    .certificate {
      margin: 20px 0;
    }
  }
}
</style>
