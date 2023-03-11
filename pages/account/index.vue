<template>
  <div class="account">
    <common-header></common-header>
    <div class="main-section">
      <!-- <div class="account-background" id="starCanvasOverlay">
        <common-particles
          id="account-particles"
          class="particles-background"
          color="#279793"
          :particleOpacity="0.7"
          :particlesNumber="100"
          shapeType="circle"
          :particleSize="4.5"
          linesColor="#d1e3e2"
          :linesWidth="2.7"
          :lineLinked="true"
          :lineOpacity="0.36"
          :linesDistance="150"
          :moveSpeed="3.2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </common-particles>
      </div> -->
      <div class="account-wrapper">
        <div class="account-content">
          <div class="account-menu">
            <h2>个人中心</h2>
            <el-menu
              mode="vertical"
              ref="desktopMenu"
              text-color="#333333"
              :collapse="false"
              class="desktop-menu"
              menu-trigger="click"
              @select="handleSelect"
              :unique-opened="false"
              active-text-color="#FFFFFF"
              :default-active="defaultActive"
              :default-openeds="defaultOpenedsArray"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="iconfont icon-basic-info"></i>
                  <span>基本信息</span>
                </template>
                <el-menu-item index="1-1">个人资料</el-menu-item>
                <el-menu-item index="1-2">实名认证</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="iconfont icon-product-trial"></i>
                <span slot="title">产品体验</span>
              </el-menu-item>
              <!-- <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont icon-product-trial"></i>
                  <span>产品体验</span>
                </template>
                <el-menu-item index="2-1">试用产品列表</el-menu-item>
                <el-menu-item index="2-2">提交试用申请</el-menu-item>
                <el-menu-item index="2-3">试用申请进度</el-menu-item>
                <el-menu-item index="2-4">试用中心</el-menu-item>
              </el-submenu> -->
              <el-submenu index="3">
                <template slot="title">
                  <i class="iconfont icon-client-service"></i>
                  <span>客户服务</span>
                </template>
                <el-menu-item index="3-1">购买服务</el-menu-item>
                <el-menu-item index="3-2">意见反馈</el-menu-item>
                <el-menu-item index="3-3">常见问题</el-menu-item>
                <el-menu-item index="3-4">我的专属顾问</el-menu-item>
                <el-menu-item index="3-5">历史合同订单</el-menu-item>
                <el-menu-item index="3-6">售后服务</el-menu-item>
              </el-submenu>
            </el-menu>
            <el-menu
              ref="mobileMenu"
              mode="horizontal"
              text-color="#333"
              class="mobile-menu"
              menu-trigger="click"
              :unique-opened="true"
              :default-openeds="[]"
              :append-to-body="true"
              :collapse="isCollapse"
              @select="handleSelect"
              active-text-color="#FFFFFF"
              :default-active="defaultActive"
            >
              <el-submenu index="1" popper-class="mobile-sub-menu">
                <template slot="title">
                  <i class="iconfont icon-basic-info"></i>
                  <span>基本信息</span>
                </template>
                <el-menu-item index="1-1">个人资料</el-menu-item>
                <el-menu-item index="1-2">实名认证</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="iconfont icon-product-trial"></i>
                <span slot="title">产品体验</span>
              </el-menu-item>
              <!-- <el-submenu index="2" popper-class="mobile-sub-menu">
                <template slot="title">
                  <i class="iconfont icon-product-trial"></i>
                  <span>产品体验</span>
                </template>
                <el-menu-item index="2-1">试用产品列表</el-menu-item>
                <el-menu-item index="2-2">提交试用申请</el-menu-item>
                <el-menu-item index="2-3">试用申请进度</el-menu-item>
                <el-menu-item index="2-4">试用中心</el-menu-item>
              </el-submenu> -->
              <el-submenu index="3" popper-class="mobile-sub-menu">
                <template slot="title">
                  <i class="iconfont icon-client-service"></i>
                  <span>客户服务</span>
                </template>
                <el-menu-item index="3-1">购买服务</el-menu-item>
                <el-menu-item index="3-2">意见反馈</el-menu-item>
                <el-menu-item index="3-3">常见问题</el-menu-item>
                <el-menu-item index="3-4">我的专属顾问</el-menu-item>
                <el-menu-item index="3-5">历史合同订单</el-menu-item>
                <el-menu-item index="3-6">售后服务</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <div
            class="account-details"
            :style="
              ['2-1', '2-4'].includes(defaultActive)
                ? 'align-items:flex-start'
                : ''
            "
          >
            <!-- <el-alert>
              <marquee slot="title">www</marquee>
            </el-alert> -->
            <component
              v-if="componentList[current]"
              :is="componentList[current]"
              @change-menu="clickToMenu"
            ></component>
            <template v-else>
              <div class="my-todo">
                <div class="text-wrapper" v-for="item in 20" :key="item">
                  <p class="flow-text">
                    <span v-for="text in 16" :key="'text_1_' + text">
                      <template>{{
                        ["TODO", "ZHONGHENG", "INTELLIGENCE"][text % 3]
                      }}</template>
                    </span>
                  </p>
                  <p class="flow-text">
                    <span v-for="text in 16" :key="'text_2_' + text">
                      <template>{{
                        ["TODO", "ZHONGHENG", "INTELLIGENCE"][text % 3]
                      }}</template>
                    </span>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="account-footer">
          <p>
            <img src="~assets/imgs/login/login-footer-badge.png" alt="badge" />
            备案号：<a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              >京ICP备2021018631号</a
            >
            | © Copyright 2021 北京中恒智造科技有限公司 版权所有
          </p>
          <p v-if="clientWidth > 800">
            深耕纺织行业，探索智慧未来 | 专业无止境，服务尽我心
          </p>
          <template v-else>
            <p>深耕纺织行业，探索智慧未来</p>
            <p>专业无止境，服务尽我心</p>
          </template>
        </div>
      </div>
    </div>
    <!-- <common-right-side-bar></common-right-side-bar> -->
  </div>
</template>

<script>
export default {
  middleware: "account-authentication",
  head: {
    title: "中恒智造 - 个人中心",
  },
  data() {
    return {
      isCollapse: false,
      current: "1-1",
      defaultActive: "1-1",
      defaultOpenedsArray: ["1", "2"],
      clientWidth: 0,
      componentList: {
        "1-1": "account-personal-info",
        "1-2": "account-real-name-authentication",
        2: "account-trial-application",
        "2-1": "account-trial-application-list",
        "2-2": "account-trial-application-form",
        "2-3": "account-trial-application-progress",
        "2-4": "account-trial-application",
        "3-2": "account-feedback",
        "3-3": "account-frequently-asked-questions",
      },
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
  methods: {
    handleResize() {
      this.clientWidth = document.body.clientWidth;
      if (this.clientWidth > 1000) {
        // this.defaultOpenedsArray = ["1"];
        // this.$refs.desktopMenu && this.$refs.desktopMenu.close();
      } else {
        // this.defaultOpenedsArray = [];
        this.$refs.mobileMenu && this.$refs.mobileMenu.close();
      }
      if (this.clientWidth <= 700) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleSelect(index) {
      this.current = index;
      this.defaultActive = index;
    },
    clickToMenu(index) {
      this.current = index;
      this.defaultActive = index;
    },
  },
};
</script>
<style lang="scss">
.mobile-sub-menu {
  .el-menu {
    .el-menu-item.is-active {
      background-color: #279894 !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.account {
  .main-section {
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: url("~assets/imgs/account/account-center-background.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 68px);
    .account-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      #account-particles {
        height: 100%;
      }
    }
    .account-wrapper {
      z-index: 1;
    }
    .account-content {
      width: calc(100vw - 40px);
      display: flex;
      margin: 0 20px;
      max-width: 1200px;
      min-height: 600px;
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s;
      .account-menu {
        width: 200px;
        background-color: #fff;
        box-shadow: 0px -1px 8px 0px rgba(0, 0, 0, 0.08);
        z-index: 1;
        display: flex;
        flex-direction: column;
        .iconfont {
          margin-right: 5px;
          color: #258783;
        }
        h2 {
          width: 100%;
          color: #333;
          font-size: 26px;
          user-select: none;
          text-align: center;
        }
        .mobile-menu {
          display: none;
          &.el-menu--collapse {
            :deep().el-submenu__title {
              span {
                display: none;
              }
            }
          }
          :deep() .el-submenu {
            &.is-active {
              .el-submenu__title {
                border-color: #258783 !important;
              }
            }
          }
          :deep() .el-submenu__title {
            justify-content: center;
            color: #333 !important;
          }
        }
        .el-menu {
          overflow: hidden;
          border-right: none;
          width: 100%;
          flex: 1;
          .el-menu-item {
            &.is-active {
              i {
                color: #fff;
              }
              background-color: #258783;
            }
          }
        }
      }
      .account-details {
        width: 100%;
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
        max-width: 1000px;
        align-items: center;
        transition: all 0.3s;
        // flex-direction: column;
        justify-content: center;
        background-color: #fff;
        .my-todo {
          transform: rotate(333deg) translateY(-273px);
          height: 640px;
          pointer-events: none;
          .text-wrapper {
            display: flex;
            @for $i from 1 through 20 {
              &:nth-child(#{$i}n) {
                transform: translateX(#{$i * 20}px) skew(25deg, 10deg);
              }
            }
            p {
              font-size: 52px;
              line-height: 60px;
              user-select: none;
              color: transparent;
              white-space: nowrap;
              font-weight: normal;
              font-family: parcel;
              background-clip: text;
              content-visibility: auto;
              -webkit-background-clip: text;
              animation: text-scroll 25s linear infinite;
              -webkit-backface-visibility: hidden;
              -moz-backface-visibility: hidden;
              -ms-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-perspective: 1000;
              -moz-perspective: 1000;
              -ms-perspective: 1000;
              perspective: 1000;
              opacity: 1;
              span {
                display: inline-block;
                padding: 0 10px;
              }
            }
            .flow-text {
              --bg-size: 100%;
              --color-one: #17ead9;
              --color-two: #6078ea;
              --color-three: #9360ea;
              --color-four: #f588a1;
              font-weight: 700;
              background: linear-gradient(
                  90deg,
                  var(--color-one),
                  var(--color-two),
                  var(--color-three),
                  var(--color-four),
                  var(--color-three),
                  var(--color-two),
                  var(--color-one)
                )
                0 0 / var(--bg-size) 100%;
              background-clip: text;
              // animation: move-bg 12s infinite linear;
              @media (prefers-reduced-motion: no-preference) {
                .flow-text {
                  animation: move-bg 12s linear infinite;
                }
                @keyframes move-bg {
                  to {
                    background-position: var(--bg-size) 0;
                  }
                }
              }
            }
            @keyframes text-scroll {
              0% {
                transform: translateX(50%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }
        }
      }
    }
    .account-footer {
      font-size: 14px;
      margin-top: 20px;
      color: #91a7c5;
      transition: all 0.3s;
      p {
        text-align: center;
        transition: none;
        img {
          vertical-align: bottom;
        }
        a {
          color: #91a7c5;
          text-decoration: none;
          &:hover {
            color: #b8cff0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .account {
    .main-section {
      height: calc(100vh - 60px);
      .account-wrapper {
        margin: 0 20px;
      }
      .account-content {
        margin: 0;
        width: 100%;
        max-width: 800px;
        flex-direction: column;
        .account-menu {
          flex-direction: row;
          width: 100%;
          .iconfont {
            margin: 0;
            text-align: center;
          }
          h2 {
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }
          .el-menu {
            &.desktop-menu {
              display: none;
            }
            &.mobile-menu {
              display: grid;
            }
            border-bottom: none;
            display: grid;
            grid-template-columns: repeat(4, minmax(60px, 1fr));
            &::before,
            &::after {
              display: none;
            }
            :deep().el-submenu {
              .el-submenu__title {
                width: 100%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                span {
                  // display: inline-block;
                  margin-left: 5px;
                }
              }
            }
            :deep().el-menu-item {
              .el-tooltip {
                display: inline-flex !important;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        .account-details {
          max-width: 100%;
          position: relative;
          .my-todo {
            position: absolute;
            transform: rotate(333deg) translateY(-70px);
            .text-wrapper {
              .flow-text {
                font-size: 32px;
                line-height: 40px;
              }
            }
          }
        }
      }
      .account-footer {
        margin-top: 15px;
        p {
          &:nth-child(1) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
