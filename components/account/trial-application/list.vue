<template>
  <div
    class="content"
    v-loading="isLoading"
    element-loading-text="正在获取详情，请稍后..."
  >
    <div class="product-list">
      <div class="product-item" @click="openDialog(0)">
        <div class="product__inner">
          <div class="decoration">
            <img
              src="~assets/imgs/account/product-item-list-decoration-1.png"
              alt="prodcut-detail-decoration"
            />
          </div>
          <div class="description">
            <h2 class="title">成衣业务管理系统</h2>
            <p class="intro">
              成衣系统融合企业“以样带销”的销售模式，覆盖样衣、打板等流程，以数字化、精细化管理帮助企业更专注于市场.
            </p>
          </div>
        </div>
      </div>
      <div class="product-item" @click="openDialog(1)">
        <div class="product__inner">
          <div class="decoration">
            <img
              src="~assets/imgs/account/product-item-list-decoration-2.png"
              alt="prodcut-detail-decoration"
            />
          </div>
          <div class="description">
            <h2 class="title">面料业务管理系统</h2>
            <p class="intro">
              成衣系统融合企业“以样带销”的销售模式，覆盖样衣、打板等流程，以数字化、精细化管理帮助企业更专注于市场.
            </p>
          </div>
        </div>
      </div>
      <div class="product-item" @click="openDialog(2)">
        <div class="product__inner">
          <div class="decoration">
            <img
              src="~assets/imgs/account/product-item-list-decoration-3.png"
              alt="prodcut-detail-decoration"
            />
          </div>
          <div class="description">
            <h2 class="title">牛仔面料生产管理系统</h2>
            <p class="intro">
              成衣系统融合企业“以样带销”的销售模式，覆盖样衣、打板等流程，以数字化、精细化管理帮助企业更专注于市场.
            </p>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :append-to-body="true"
      class="trial-intro-dialog"
      :visible.sync="toggleDialog"
    >
      <el-carousel
        class="intro-carousel"
        slot="footer"
        height="580px"
        indicator-position="outside"
        arrow="never"
      >
        <el-carousel-item>
          <div class="intro">
            <img
              src="~assets/imgs/account/trial-intro-decoration-1.png"
              alt="trial-intro-decoration"
            />
            <h2>EMI协同管控平台</h2>
            <p>专业无止境，服务尽我心</p>
            <div class="btn-group">
              <el-button @click="clickToApplicationForm">立即申请</el-button>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="intro">
            <img
              src="~assets/imgs/account/trial-intro-decoration-2.png"
              alt="trial-intro-decoration"
            />
            <h2>一键申请</h2>
            <p>深耕纺织行业，探索智慧未来</p>
            <div class="btn-group">
              <el-button @click="clickToApplicationForm">立即申请</el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
    <account-trial-application-detail
      ref="detailDialog"
      :trialSystemName="trialSystemOptionList[trialSystemDefaultIndex]"
    ></account-trial-application-detail>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDialog: false,
      trialSystemDefaultIndex: 0,
      trialSystemOptionList: [
        "成衣业务管理系统",
        "面料业务管理系统",
        "牛仔面料生产管理系统",
      ],
      isLoading: false,
    };
  },
  created() {},
  mounted() {},
  computed: {
    userInfo: {
      get() {
        return this.$store.state.account.userInfo;
      },
    },
  },
  methods: {
    openDialog(index) {
      this.trialSystemDefaultIndex = index;
      let params = {
        phone: this.userInfo.phone,
        name: this.trialSystemOptionList[this.trialSystemDefaultIndex],
      };
      this.isLoading = true;
      this.$http
        .get("api/trialApplication/detail", params)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.tipInfo &&
            res.data.tipInfo.includes("成功")
          ) {
            this.$refs.detailDialog.openDialog();
          } else {
            this.toggleDialog = true;
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    clickToApplicationForm() {
      this.toggleDialog = false;
      this.$emit("change-tab", "form", this.trialSystemDefaultIndex);
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
.trial-intro-dialog {
  .el-dialog {
    width: 450px;
    height: 700px;
    .el-dialog__body {
      display: none;
    }
    .el-dialog__footer {
      overflow: hidden;
      padding: 30px 0;
      .intro-carousel {
        .el-carousel__indicators {
          .el-carousel__indicator {
            button {
              border-radius: 4px;
              box-sizing: border-box;
              box-shadow: 0 0 1px #ccc;
              width: 8px;
              height: 8px;
              background-color: #817d7d;
              &:hover {
                opacity: 1;
              }
            }
            &.is-active {
              button {
                width: 28px;
                height: 8px;
                background-color: #d9d9d9;
              }
            }
          }
        }
        .intro {
          background-color: #fff;
          img {
            width: 100%;
          }
          h2 {
            margin: 92px 0 20px 0;
            font-size: 32px;
            font-weight: 700;
            color: #333;
            text-align: center;
          }
          p {
            font-size: 18px;
            color: #666666;
            text-align: center;
            margin-bottom: 57px;
          }
          .btn-group {
            text-align: center;
            padding-bottom: 10px;
            .el-button {
              background-color: #279894;
              width: 284px;
              height: 42px;
              color: #fff;
              border-radius: 21px;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.content {
  flex: 1;
  // height: 100%;
  height: 635px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f8fa;
  .product-list {
    // padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 430px));
    gap: 26px;
    justify-content: center;
    .product-item {
      padding: 25px 22px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px 2px #afafaf8c;
      overflow: hidden;
      position: relative;
      transition: all 0.3s;
      cursor: pointer;
      &::before {
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
        filter: saturate(1.5);
        &::before {
          left: 110%;
          transition: all 0.3s;
        }
      }
      @media (any-hover: hover) {
        &:hover {
          transform: translateY(-5px);
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 65px;
        height: 65px;
        opacity: 0.3;
        right: -18px;
        bottom: -15px;
        pointer-events: none;
        background-repeat: no-repeat;
      }
      &:nth-child(1) {
        background-image: linear-gradient(90deg, #476be5, #7391f6);
        &::after {
          background-image: url("~assets/imgs/account/product-item-list-decoration-1.png");
        }
      }
      &:nth-child(2) {
        background-image: linear-gradient(90deg, #52b7b7, #39c8de);
        &::after {
          background-image: url("~assets/imgs/account/product-item-list-decoration-2.png");
        }
      }
      &:nth-child(3) {
        background-image: linear-gradient(90deg, #43b2ec, #91d1f2);
        &::after {
          background-image: url("~assets/imgs/account/product-item-list-decoration-3.png");
        }
      }
      .product__inner {
        display: flex;
        align-items: center;
        gap: 15px;
        .decoration {
          display: flex;
          align-items: center;
          img {
            width: 65px;
            height: 65px;
          }
        }
        .description {
          .title {
            margin: 0 0 11px 0;
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
          }
          .intro {
            font-size: 10px;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }
    }
  }
}
@media screen and(max-width:1000px) {
  .content {
    height: fit-content;
    max-height: 635px;
    .product-list {
      gap: 15px;
      .product-item {
        padding: 15px 20px;
        .product__inner {
          gap: 18px;
          .decoration {
            img {
              width: 45px;
              height: 45px;
            }
          }
        }
      }
    }
  }
}
</style>
