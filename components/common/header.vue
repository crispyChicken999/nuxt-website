<template>
  <div
    class="header-wrapper"
    :class="{
      'is-hollow-out': isHollowOutEnabled,
    }"
    :style="{ height: `${threshold}px` }"
  >
    <div class="background">
      <header class="header">
        <div class="mobile-menu-drawer">
          <i class="iconfont icon-hamburger" @click="openDrawer"></i>
        </div>
        <div class="logo-section" :class="{ 'is-login': loginState }">
          <nuxt-link to="/"
            ><img
              src="~assets/imgs/common/logo.png"
              alt="北京中恒智造科技有限公司"
              class="logo-img"
          /></nuxt-link>
          <div class="company-name">
            <p class="company-chinese-name" @click="$router.push('/')">
              中恒智造
            </p>
            <p class="company-english-name">
              Zhongheng Intelligent Manufacturing
            </p>
          </div>
          <div class="logo-description">
            <div class="logo-info">
              <p>深耕纺织行业</p>
              <p>探索智慧未来</p>
            </div>
          </div>
        </div>
        <div class="nav-login-wrapper">
          <el-menu
            class="header-meanu"
            mode="horizontal"
            text-color="#333333"
            active-text-color="#2d948f"
            :default-active="activeIndex"
            :router="true"
          >
            <template v-for="menu in menuList">
              <el-menu-item
                v-if="!menu.hasOwnProperty('subMenu')"
                :key="menu.label"
                :index="menu.link"
              >
                <template slot="title">{{ menu.label }}</template>
              </el-menu-item>
              <el-submenu :key="menu.label" v-else :index="menu.link">
                <template slot="title">{{ menu.label }}</template>
                <el-menu-item
                  v-for="subMenu in menu.subMenu"
                  :key="subMenu.label"
                  :index="subMenu.link"
                  >{{ subMenu.label }}</el-menu-item
                >
              </el-submenu>
            </template>
          </el-menu>
          <div class="login-btn-section">
            <client-only>
              <el-button
                round
                plain
                size="small"
                @click="login"
                v-if="!loginState"
                >登录 / 注册</el-button
              >
              <!-- <el-button round size="small" type="primary" plain @click="register">注册</el-button> -->
              <template v-else>
                <el-dropdown @command="handleCommand">
                  <el-avatar
                    name="user-avatar"
                    aria-label="user avatar icon"
                    :src="userAvatar"
                    fit="cover"
                    icon="el-icon-user-solid"
                  ></el-avatar>
                  <el-dropdown-menu slot="dropdown">
                    <template v-if="loginState">
                      <el-dropdown-item disabled
                        >用户名:{{
                          userInfo.nickname || userInfo.name || userInfo.phone
                        }}
                      </el-dropdown-item>
                      <el-dropdown-item
                        icon="iconfont icon-account-center"
                        command="account"
                        >个人中心</el-dropdown-item
                      >
                      <el-dropdown-item
                        divided
                        command="logout"
                        icon="iconfont icon-logout"
                        >退出登录</el-dropdown-item
                      >
                    </template>
                    <template v-else>
                      <el-dropdown-item
                        icon="iconfont icon-login"
                        command="login"
                        >登录</el-dropdown-item
                      >
                      <el-dropdown-item
                        icon="iconfont icon-register"
                        command="register"
                        >注册</el-dropdown-item
                      >
                    </template>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </client-only>
            <div class="mobile-menu-drawer">
              <i class="iconfont icon-hamburger" @click="openDrawer"></i>
              <el-drawer
                size="50%"
                title="menu"
                direction="ltr"
                :show-close="true"
                :with-header="false"
                :lock-scroll="false"
                :append-to-body="true"
                class="mobile-drawer-content"
                :visible.sync="toggleDrawer"
              >
                <el-menu
                  :router="true"
                  :collapse="false"
                  text-color="#303030"
                  :default-openeds="openeds"
                  active-text-color="#279793"
                  class="header-mobile-meanu"
                  :default-active="activeIndex"
                >
                  <template v-for="menu in menuList">
                    <el-menu-item
                      v-if="!menu.hasOwnProperty('subMenu')"
                      :key="menu.label"
                      :index="menu.link"
                    >
                      <template slot="title">{{ menu.label }}</template>
                    </el-menu-item>
                    <el-submenu :key="menu.label" v-else :index="menu.link">
                      <template slot="title">{{ menu.label }}</template>
                      <el-menu-item
                        v-for="subMenu in menu.subMenu"
                        :key="subMenu.label"
                        :index="subMenu.link"
                        >{{ subMenu.label }}</el-menu-item
                      >
                    </el-submenu>
                  </template>
                </el-menu>
                <!-- <el-button v-if="loginState" plain @click="clickToAccountCenter"
                  >个人中心</el-button
                >
                <el-button v-else plain @click="login">立即登录/注册</el-button> -->
              </el-drawer>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否启用镂空效果
    isHollowOutEnabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuList: [
        {
          label: "首页",
          link: "/",
        },
        {
          label: "EMI协同管控平台",
          link: "/emi",
        },
        {
          label: "产品中心",
          link: "/product",
        },
        {
          label: "走进我们",
          link: "/aboutus",
          subMenu: [
            {
              label: "关于我们",
              link: "/aboutus",
            },
            {
              label: "联系我们",
              link: "/contactus",
            },
          ],
        },
      ],
      toggleDrawer: false,
      threshold: 68,
      activeIndex: "",
      openeds: ["/aboutus"],
    };
  },
  mounted() {
    this.handleResize();
    this.redirectFinalRoute();
    window.addEventListener("resize", this.handleResize);
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("resize", this.handleResize);
    });
    if (this.$route.path && this.$route.path.includes("/product/detail")) {
      this.activeIndex = "/product";
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.account.userInfo;
    },
    loginState() {
      return this.$store.state.account.loginState;
    },
    userAvatar() {
      return this.$store.state.account.userAvatar || "";
    },
  },
  methods: {
    redirectFinalRoute() {
      let path = this.$route.path;
      this.activeIndex =
        path && path.lastIndexOf("/") !== 0
          ? path.substr(0, path.length - 1)
          : path;
    },
    openDrawer() {
      this.toggleDrawer = true;
    },
    handleResize() {
      this.threshold = document.body.clientWidth >= 1000 ? 68 : 60;
    },
    login() {
      this.$router.push({
        path: "/login",
      });
    },
    logout() {
      this.$store.commit("account/setUserInfo", {});
      this.$store.commit("account/setLoginState", false);
      this.$store.commit("account/setUserAvatar", "");
      this.$store.commit("account/setUserCertificate", "");
      this.$router.push({
        path: "/login",
      });
    },
    register() {
      this.$router.push({
        path: "/login",
        query: {
          register: true,
        },
      });
    },
    clickToAccountCenter() {
      this.$router.push({
        path: "/account",
      });
    },
    handleCommand(command) {
      let commandList = {
        login: this.login,
        logout: this.logout,
        register: this.register,
        account: this.clickToAccountCenter,
      };
      commandList[command]();
    },
  },
};
</script>

<style lang="scss">
.el-dropdown-menu {
  margin-top: 25px !important;
  .el-dropdown-menu__item {
    &:hover {
      background-color: #f2fffc;
      color: #2d948f;
    }
  }
}
.el-menu--popup {
  .el-menu-item {
    &:hover {
      color: #2d948f !important;
      background-color: #f2fffc;
    }
  }
}
.mobile-drawer-content {
  .el-drawer__body {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .el-button {
      display: none;
    }
  }
  ul {
    flex: 1;
    margin: 0;
    padding: 10px 0;
    transition: all 0.3s;
  }
  .el-button {
    width: calc(100% - 20px);
    margin: 10px;
    &:hover {
      color: #28817c;
      border-color: #35a7a2;
    }
  }
}
</style>
<style lang="scss" scoped>
.is-hollow-out {
  .background {
    background-color: transparent;
    background-image: radial-gradient(transparent 0.2px, #fff 1px);
    background-size: 3px 3px;
    backdrop-filter: saturate(250%) blur(6px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    .header {
      background-color: transparent;
      .header-meanu {
        background-color: transparent !important;
        li {
          background-color: transparent;
        }
        .el-menu-ite {
          &:hover {
            background-color: transparent;
          }
        }
        :deep().el-submenu {
          .el-submenu__title {
            &:hover {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
}
.background {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #cccccc8f;
  top: 0;
  position: fixed;
  z-index: 11;
}
.header {
  width: 100%;
  height: 68px;
  display: flex;
  max-width: 1920px;
  align-items: center;
  transition: all 0.3s;
  background-color: #fff;
  justify-content: space-evenly;
  > .mobile-menu-drawer {
    display: none;
    margin-left: 10px;
    i {
      font-size: 30px;
      color: #28817c;
    }
  }
  .logo-section {
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    justify-content: center;
    .logo-img {
      width: 53px;
      height: 53px;
      transition: all 0.3s;
    }
    .company-name {
      display: flex;
      white-space: nowrap;
      transition: all 0.3s;
      margin: 0 21px 0 10px;
      flex-direction: column;
      p {
        margin: 0;
        color: #2d2d2d;
        transition: all 0.3s;
      }
      .company-chinese-name {
        font-size: 32px;
        width: fit-content;
        transition: all 0.3s;
        font-family: "HuXiaoBo-NanShen";
      }
      .company-english-name {
        transform: scale(0.56);
        transform-origin: left;
        width: 130px;
        user-select: all;
        font-size: 8px;
        font-weight: 700;
        word-spacing: 1px;
        letter-spacing: 0px;
        font-family: "MicrosoftYaHei-Bold";
      }
    }
    .logo-description {
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      p {
        margin: 0;
        color: #333;
        font-size: 16px;
        white-space: nowrap;
        transition: all 0.3s;
      }
      &::before {
        top: 50%;
        width: 2px;
        content: "";
        left: -20px;
        height: 38px;
        position: absolute;
        transition: all 0.3s;
        background-color: #c6c6c6;
        transform: translateY(-50%);
      }
    }
  }
  .nav-login-wrapper {
    height: 100%;
    display: flex;
  }
  :deep().header-meanu {
    border-bottom: none;
    > {
      :not(:first-child) {
        margin-left: 10px;
      }
    }
    .el-menu-item,
    .el-submenu {
      height: 68px;
      line-height: 68px;
    }
    .el-submenu__title {
      height: 68px;
      line-height: 68px;
    }
    li,
    div {
      &:hover {
        color: #2d948f !important;
        border-bottom-color: #2d948f !important;
      }
    }
  }
  .login-btn-section {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: 10px;
    .el-button {
      transition: all 0.3s;
      padding: 0 14px;
      height: 30px;
      color: white;
      background-color: #34918c;
      border-color: #34918c;
      display: none;
      &:hover {
        opacity: 0.8;
        border-color: #35928ecc;
      }
    }
    .el-dropdown {
      display: none;
      cursor: pointer;
      margin-right: 10px;
      .el-avatar {
        display: block;
        background-color: #2d948f;
      }
    }
    .mobile-menu-drawer {
      display: none;
      font-size: 26px;
      margin-right: 15px;
      cursor: pointer;
      i {
        color: #2d948f;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .header {
    justify-content: space-between;
    .login-btn-section {
      padding-right: 20px;
    }
  }
}
@media screen and (min-width: 1000px) and (max-width: 1199px) {
  .header {
    justify-content: space-between;
    .login-btn-section {
      padding-right: 20px;
    }
  }
}
@media screen and (max-width: 999px) {
  .header {
    height: 60px;
    justify-content: space-between;
    .logo-section {
      padding-left: 10px;
      .logo-img {
        width: 40px;
        height: 40px;
      }
      .company-name {
        margin: 0 10px;
        .company-chinese-name {
          font-size: 24px;
        }
        .company-english-name {
          transform-origin: left center;
          width: 97px;
          height: 10px;
          transform: scale(0.4);
        }
      }
      .logo-description {
        margin-left: 10px;
        .logo-info {
          p {
            font-size: 13px;
          }
        }
        &::before {
          left: -10px;
        }
      }
    }
    .header-meanu {
      display: none;
    }
    :deep().header-meanu {
      border-bottom: none;
      > {
        :not(:first-child) {
          margin-left: 10px;
        }
      }
      .el-menu-item,
      .el-submenu {
        height: 60px;
        line-height: 60px;
      }
      .el-submenu__title {
        height: 60px;
        line-height: 60px;
      }
      li,
      div {
        &:hover {
          color: #2d948f !important;
          border-bottom-color: #2d948f !important;
        }
      }
    }
    .login-btn-section {
      .mobile-menu-drawer {
        display: block;
        i {
          font-size: 30px;
        }
      }
      .el-button {
        margin-right: 10px;
      }
      .el-dropdown {
        display: block;
        visibility: hidden;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .header {
    .nav-login-wrapper {
      .login-btn-section {
        margin: 0;
        min-width: 50px;
      }
    }
    .logo-section {
      // padding-left: 55px;
      // margin-left: -40px;
      &.is-login {
        padding-left: 10px;
      }
      .logo-img {
        display: none;
      }
      .company-name {
        margin: 0 10px;
        .company-english-name {
          display: none;
        }
      }
      .logo-description {
        display: none;
      }
    }
    .mobile-menu-drawer {
      display: block;
    }
    .login-btn-section {
      .mobile-menu-drawer {
        display: none;
      }
    }
  }
}
</style>
