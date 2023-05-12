<template>
  <div class="steam-system">
    <div class="intro">
      <h2 class="title">系统介绍</h2>
      <p class="sub-title">
        EnSAF04-M型回潮率在线检测控制系统通过在线实时检测织物的回潮率指标，利用分级调节+双闭环控制的方式，智能调节烘筒的蒸汽供给量，从而改变烘筒表面的烘干温度，使得织物获得稳定的回潮率，依此节省不必要的蒸汽能源，降低生产成本，减少碳排放量。
      </p>
      <div
        class="intro-img"
        data-aos-delay="100"
        data-aos="zoom-in-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-cubic"
      >
        <img alt="product-5-1" src="~assets/imgs/product/product-5-1.webp" />
      </div>
    </div>
    <div class="tech-params">
      <div class="main-title"><h1>技术参数</h1></div>
      <div class="tech-img">
        <img
          alt="product-5-2"
          data-aos-delay="100"
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          src="~assets/imgs/product/product-5-2.webp"
        />
        <img
          alt="product-5-3"
          data-aos-delay="100"
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          src="~assets/imgs/product/product-5-3.webp"
        />
      </div>
    </div>
    <div class="soft-intro">
      <h2 class="title">软件介绍</h2>
      <p class="sub-title">
        蒸汽节能管理系统是一款轻量化的蒸汽烘干节能数智化管理软件，通过物联网技术与企业内部的所有蒸汽节能设备进行数据互联，实现云端协同和全链路数字化管理，将生产过程中的真实节能数据准确记录，形成各类统计分析报表，为企业的绿色生产提供强有力的数据支撑。
      </p>
      <div class="soft-img">
        <img
          data-aos-delay="100"
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          src="~assets/imgs/product/product-5-4.webp"
          alt="product-5-4"
        />
        <div
          class="attached-img"
          data-aos-delay="100"
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          <img src="~assets/imgs/product/product-5-5.webp" alt="product-5-5" />
          <div class="soft-advantage">
            <p>
              实现对蒸汽消耗的准确计量、分析和管控，为企业提供更加精准和高效的能耗管理和优化服务
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="invest-value">
      <div class="main-title"><h1>投资价值</h1></div>
      <div class="invest-img">
        <div class="wrapper">
          <img
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/product/product-5-6.webp"
            alt="product-5-6"
          />
          <img
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/product/product-5-7.webp"
            alt="product-5-7"
          />
          <img
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/product/product-5-8.webp"
            alt="product-5-8"
          />
          <img
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/product/product-5-9.webp"
            alt="product-5-9"
          />
          <img
            data-aos-delay="100"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            src="~assets/imgs/product/product-5-10.webp"
            alt="product-5-10"
          />
        </div>
      </div>
    </div>
    <div class="advantages">
      <img
        ref="advantageImg"
        data-aos="flip-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-cubic"
        :style="{ top: `${imageTop}px` }"
        src="~assets/imgs/product/product-5-11.webp"
        alt="product-5-11"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL: "",
      imageTop: -76,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.handleResize);
    });
  },
  methods: {
    openPreview(name) {
      this.imageURL = require(`../../assets/imgs/product/${name}`);
      this.$viewerApi({
        images: [this.imageURL],
      });
    },
    handleResize() {
      if (window.innerWidth < 1118) {
        const target = this.$refs.advantageImg;
        const width = target.clientWidth;
        const top = width * 0.0705;
        // const formula =  / 2;
        this.imageTop = -top;
      } else {
        this.imageTop = -76;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.steam-system {
  .title {
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    text-align: center;
    margin: 0 0 20px 0;
    transition: all 0.3s;
  }
  .sub-title {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    text-align: center;
    margin: 0 auto 45px;
    line-height: 24px;
    max-width: 1200px;
    width: fit-content;
    transition: all 0.3s;
    padding: 0 15px;
  }
  .main-title {
    display: flex;
    h1 {
      font-size: 30px;
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
  .intro {
    text-align: center;
    padding-top: 50px;
    .intro-img {
      margin-top: 53px;
      padding: 0 20px;
      width: calc(100% - 40px);
      img {
        max-width: 900px;
        width: 100%;
      }
    }
  }
  .tech-params {
    margin-top: 30px;
    .tech-img {
      display: flex;
      gap: 102px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: calc(100% - 40px);
      padding: 0 20px;
      img {
        max-width: 100%;
      }
    }
  }
  .soft-intro {
    background-color: #ebf7f9;
    margin-top: 50px;
    padding: 50px 0 140px 0;
    .soft-img {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: calc(100% - 40px);
      padding: 0 20px;
      img {
        max-width: 100%;
      }
      .attached-img {
        position: relative;
        .soft-advantage {
          position: absolute;
          right: 0;
          font-size: 16px;
          font-weight: 500;
          color: #000000;
          padding: 10px 30px;
          border-radius: 8px;
          background-color: #99d6d2;
          width: fit-content;
          margin: 50px auto;
          text-align: center;
          width: 769px;
          transition: all 0.3s;
        }
      }
    }
  }
  .invest-value {
    margin-top: 50px;
    padding-bottom: 50px;
    transition: all 0.3s;
    .invest-img {
      display: flex;
      align-items: center;
      justify-content: center;
      .wrapper {
        display: flex;
        max-width: 1200px;
        // flex-direction: column-reverse;
        justify-content: center;
        flex-wrap: wrap;
        gap: 75px;
        transition: all 0.3s;
        img {
          transition: all 0.3s;
          flex: 0 1 0;
          border-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
          @media (any-hover: hover) {
            &:hover {
              transform: translateY(-5px);
              box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
            }
          }
        }
      }
    }
  }
  .advantages {
    padding: 0 20px;
    margin-top: 100px;
    text-align: center;
    transition: all 0.3s;
    background-color: #ebf7f9;
    img {
      width: 100%;
      $padding-offset: 2.82px;
      position: relative;
      top: -76px;
      max-width: 1078px;
    }
  }
}

@media screen and (max-width: 1800px) {
  .steam-system {
    .main-title {
      h1 {
        margin-left: 300px;
      }
    }
  }
}
@media screen and (max-width: 1700px) {
  .steam-system {
    .main-title {
      h1 {
        margin-left: 260px;
      }
    }
  }
}
@media screen and (max-width: 1600px) {
  .steam-system {
    .main-title {
      h1 {
        margin-left: 220px;
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .steam-system {
    .main-title {
      h1 {
        margin-left: 180px;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .steam-system {
    .main-title {
      h1 {
        margin-left: 140px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .steam-system {
    .main-title {
      h1 {
        font-size: 28px;
        line-height: 48px;
        margin-left: 100px;
      }
    }
    .invest-value {
      .invest-img {
        display: flex;
        align-items: center;
        justify-content: center;
        .wrapper {
          gap: 30px;
          img {
            width: 290px;
          }
        }
      }
    }
    .soft-intro {
      padding-bottom: 0;
      .soft-img {
        .attached-img {
          .soft-advantage {
            width: 100%;
            max-width: 500px;
            margin: 30px auto;
            position: static;
            box-sizing: border-box;
            p {
              width: fit-content;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .product-detail {
    .main-title {
      h1 {
        margin-left: 80px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .steam-system {
    .title {
      font-size: 24px;
    }
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
    .invest-value {
      margin-bottom: 0;
      .invest-img {
        .wrapper {
          gap: 15px;
          img {
            width: calc(50% - 19.5px);
          }
        }
      }
    }
    .advantages {
      margin-top: 50px;
    }
  }
}
</style>
