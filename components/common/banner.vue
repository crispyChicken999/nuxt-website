<template>
  <div
    class="banner-section"
    :style="{
      backgroundImage: `url(${background})`,
      height: `${bannerHeight}px`,
    }"
  >
    <div class="banner-desc" :class="isDarkTitle ? 'dark' : ''">
      <h3
        class="pre-title"
        :style="{ fontWeight: isPreTitleBold ? 700 : 400 }"
        v-if="isShowPreTitle"
      >
        {{ preTitle }}
      </h3>
      <h1 class="title">
        <span class="stress-word" v-if="stressWord">{{ stressWord }}</span
        ><span
          :style="{
            'word-break':
              $route.path && $route.path.includes('emi')
                ? 'keep-all'
                : 'initial',
          }"
          >{{ title }}</span
        >
      </h1>
      <h2
        class="sub-title"
        :class="isProductDetailPage ? 'is-product-detail' : ''"
      >
        {{ subTitle }}
      </h2>
      <el-button
        v-if="showCooperateBtn"
        @click="openDialog"
        class="cooperate-btn"
        >申请合作>></el-button
      >
      <a v-if="showConsultBtn" href="#consult" class="consult-btn">即刻咨询</a>
      <p v-if="isShowDescription" class="description">{{ description }}</p>
      <p v-if="isShowApplyForTrialBtn" class="consult-btn" @click="openDialog">
        申请试用
      </p>
    </div>
    <div class="banner-element">
      <img v-if="element" :src="element" alt="banner-element" />
    </div>
    <common-leave-us-msg-dialog ref="dialog"></common-leave-us-msg-dialog>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "",
      required: true,
    },
    bannerHeight: {
      type: [String, Number],
      default: 440,
    },
    element: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
      required: true,
    },
    subTitle: {
      type: String,
      default: "",
      required: true,
    },
    stressWord: {
      type: String,
      default: "",
    },
    showCooperateBtn: {
      type: Boolean,
      default: false,
    },
    showConsultBtn: {
      type: Boolean,
      default: false,
    },
    isDarkTitle: {
      type: Boolean,
      default: false,
    },
    isShowDescription: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    isShowApplyForTrialBtn: {
      type: Boolean,
      default: false,
    },
    isShowPreTitle: {
      type: Boolean,
      default: false,
    },
    isPreTitleBold: {
      type: Boolean,
      default: false,
    },
    preTitle: {
      type: String,
      default: "",
    },
    isProductDetailPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    openDialog() {
      this.$refs.dialog.openDialog();
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-section {
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-evenly;
  .banner-desc {
    .pre-title {
      margin: 0 0 15px 0;
      transition: all 0.3s;
      font-size: 36px;
      font-weight: 500;
      color: #ffffff;
      line-height: 42px;
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgb(255, 255, 255)),
        to(rgba(255, 255, 255, 0.6))
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .title {
      transition: all 0.3s;
      margin: 0 0 0 0;
      font-size: 60px;
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgb(255, 255, 255)),
        to(rgba(255, 255, 255, 0.6))
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      .stress-word {
        display: inline-block;
        font-size: 80px;
        line-height: 80px;
        vertical-align: bottom;
      }
      span {
        vertical-align: bottom;
      }
    }
    .sub-title {
      max-width: 900px;
      transition: all 0.3s;
      font-size: 24px;
      font-weight: 400;
      margin: 19px 0 35px 0;
      text-align: justify;
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgb(255, 255, 255)),
        to(rgba(255, 255, 255, 0.6))
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      &.is-product-detail {
        font-size: 18px;
        padding-right: 10px;
      }
    }
    &.dark {
      .pre-title,
      .title,
      .sub-title {
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#3a3c3c),
          to(#3a3c3c)
        );
      }
    }
    p.description {
      font-size: 18px;
      font-weight: 400;
      color: #666666;
      line-height: 21px;
    }
    .cooperate-btn {
      transition: all 0.3s;
      color: white;
      background-color: #ffbe0d;
      border: none;
      border-radius: 10px;
      color: #4b4b4b;
      font-size: 16px;
      padding: 17px 34px;
      &:hover {
        background-color: #fbcb47;
      }
    }
    .consult-btn {
      display: block;
      width: fit-content;
      transition: all 0.3s;
      color: white;
      background-color: #4aa793;
      border: none;
      border-radius: 4px;
      color: #ffffff;
      font-size: 18px;
      padding: 11px 37px;
      text-decoration: none;
      &:hover {
        background-color: #56bba5;
      }
    }
  }
  .banner-element {
    vertical-align: top;
  }
}
@media screen and (max-width: 1099px) {
  .banner-section {
    .banner-desc {
      .pre-title {
        font-size: 24px;
        line-height: 36px;
      }
      .title {
        font-size: 40px;
        .stress-word {
          font-size: 70px;
          line-height: 70px;
        }
      }
      .sub-title {
        max-width: 700px;
        margin: 10px 0 20px 0;
        font-size: 20px;
      }
      .consult-btn {
        padding: 10px 20px;
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 959px) {
  .banner-section {
    height: 330px !important;
    .banner-element {
      img {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 799px) {
  .banner-section {
    height: 220px !important;
    .banner-desc {
      .pre-title {
        display: none;
        font-size: 18px;
        line-height: 24px;
      }
      .title {
        font-size: 24px;
        padding: 0 10px;
        .stress-word {
          font-size: 60px;
          line-height: 60px;
        }
      }
      .sub-title {
        margin: 5px 0 10px 0;
        font-size: 14px;
        padding: 0 10px;
      }
      p.description {
        padding: 0 10px;
        font-size: 14px;
      }
      &.dark {
        .sub-title {
          font-size: 14px;
          padding: 0 10px;
        }
        .title,
        .sub-title {
          &.is-product-detail {
            filter: none;
          }
          filter: drop-shadow(3px 2px 2px #ccc);
          background-image: -webkit-gradient(
            linear,
            0 0,
            0 bottom,
            from(#020202),
            to(#4e545b)
          );
        }
      }
      .cooperate-btn {
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 8px;
      }
      .consult-btn {
        padding: 5px 10px;
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 499px) {
  .banner-section {
    .banner-desc {
      .pre-title {
        font-size: 14px;
        line-height: 20px;
      }
      .title {
        font-size: 26px;
        .stress-word {
          font-size: 50px;
          line-height: 50px;
        }
      }
      .sub-title {
        max-width: 360px;
        margin: 5px 0 10px 0;
        font-size: 14px;
      }
      .cooperate-btn {
        padding: 10px 20px;
        font-size: 12px;
        border-radius: 4px;
      }
      .consult-btn {
        // padding: 10px 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
