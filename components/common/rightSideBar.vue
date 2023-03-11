<template>
  <transition-group name="el-fade-in-linear">
    <div class="guidance" key="guidance-element" v-show="currentScroll <= 350 && clientWidth >= 1000">
      <i class="el-icon-arrow-down"></i>
      <i class="el-icon-arrow-down"></i>
      <i class="el-icon-arrow-down"></i>
    </div>
    <div
      class="right-side-bar"
      key="right-side-bar-element"
      v-show="currentScroll > 350"
    >
      <!-- <div class="wechat">
        <i class="iconfont icon-wechat"></i>
        <p class="side-bar-desc">微信咨询</p>
        <div class="wechat-content">
          <img
            src="~assets/imgs/common/footer-consult-wechat.png"
            alt="wechat-icon"
          />
          <p>企业微信：杨先生</p>
        </div>
      </div>
      <div class="contact-phone">
        <i class="el-icon-phone"></i>
        <p class="side-bar-desc">联系电话</p>
        <div class="phone-content">
          <p>销售热线（周一至周五 9：00-18：00）</p>
          <p>400-000-0000</p>
        </div>
      </div> -->
      <!-- <div class="leave-a-message" title="点击留言" @click="openMessageDialog">
        <i class="el-icon-edit-outline"></i>
        <p class="side-bar-desc">联系留言</p>
      </div> -->
      <div class="back-to-top" @click="scrollToTop">
        <i class="el-icon-caret-top" title="回到顶部"></i>
      </div>
      <common-leave-us-msg-dialog ref="dialog"></common-leave-us-msg-dialog>
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      currentScroll: 0,
      clientWidth: 0,
      toggleMessageDialog: false,
      form: {
        name: "",
        phone: "",
        message: "",
      },
    };
  },
  created() {},
  mounted() {
    this.handleScroll();
    this.handleResize();
    window.addEventListener("scroll", throttle(this.handleScroll, 300));
    window.addEventListener("resize", throttle(this.handleResize, 300));
    this.$once("hook:beforeDestory", () => {
      window.removeEventListener("scroll", throttle(this.handleScroll, 300));
      window.removeEventListener("resize", throttle(this.handleResize, 300));
    });
  },
  computed: {},
  methods: {
    scrollToTop() {
      document.querySelector("html").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.currentScroll = document.querySelector("html").scrollTop;
    },
    handleResize() {
      this.clientWidth = document.body.clientWidth;
    },
    openMessageDialog() {
      this.$refs.dialog.openDialog();
    },
  },
};
function throttle(func, wait) {
  var timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}
</script>

<style lang="scss" scoped>
.guidance {
  position: fixed;
  top: 500px;
  right: 36px;
  z-index: 9999;
  color: #f57f17;
  border-radius: 20px;
  padding: 10px 12px;
  transform: translateY(-50%);
  i {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    transform-origin: center center;
    text-shadow: 0 0 5px #ff2a2a, 0 0 25px #ff2a2a, 0 0 50px #ff2a2a,
      0 0 200px #ff2a2a;
    &:nth-of-type(1) {
      animation: guidance-scroll 1.75s ease-in-out -0.5s infinite forwards;
    }
    &:nth-of-type(2) {
      animation: guidance-scroll 1.75s ease-in-out 0s infinite forwards;
    }
    &:nth-of-type(3) {
      animation: guidance-scroll 1.75s ease-in-out 0.5s infinite forwards;
    }
    @keyframes guidance-scroll {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.7);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}

.right-side-bar {
  display: none;
  position: fixed;
  z-index: 10;
  background-color: white;
  bottom: 20px;
  right: 20px;
  border-radius: 12px;
  width: 50px;
  height: 50px;
  display: grid;
  grid-template-rows: repeat(4, 50px);
  box-shadow: 0px 0px 6px 0px #82828291;
  transition: all 0.3s;
  p {
    margin: 0;
    font-size: 12px;
  }
  .wechat {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
    & > p {
      color: #2c86ed;
    }
    & > i {
      width: 20px;
      height: 17px;
      display: inline-block;
      margin-bottom: 9px;
      color: #2c86ed;
      font-size: 20px;
      // background-image: url("~assets/imgs/common/sidebar-wechat.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    &:hover {
      background-color: #2c86ed;
      border-radius: 35px 35px 0 0;
      border: 1px solid #2c86ed;
      & > p {
        color: white;
      }
      cursor: pointer;
      i {
        color: white;
      }
      .wechat-content {
        display: block;
      }
    }
    .wechat-content {
      display: none;
      position: absolute;
      top: -31px;
      left: -134px;
      padding: 10px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 12px 0px #cccccc;
      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 12px;
        color: #777777;
      }
    }
  }
  .contact-phone,
  .leave-a-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
    color: #2c86ed;
    position: relative;
    cursor: pointer;
    i {
      font-size: 20px;
      margin-bottom: 7px;
    }
    &:hover {
      color: white;
      background-color: #2c86ed;
      i {
        color: white;
      }
    }
  }
  .contact-phone {
    .phone-content {
      display: none;
      position: absolute;
      top: 0px;
      left: -246px;
      padding: 16px 10px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 12px 0px #cccccc;
      p {
        font-size: 12px;
        color: #777777;
        line-height: 12px;
        &:last-of-type {
          margin-top: 11px;
          line-height: 15px;
          font-size: 18px;
          color: #2c86ed;
        }
      }
    }
    &:hover {
      .phone-content {
        display: block;
      }
    }
    &:active {
      .phone-content {
        display: block;
      }
    }
  }
  .back-to-top {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c1c1c1;
    font-size: 30px;
    i {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 6px;
        width: 18px;
        height: 2px;
        background-color: #c1c1c1;
      }
    }
    &:hover,
    &:active {
      color: #2d948f;
      cursor: pointer;
      i {
        &::after {
          background-color: #2d948f;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .right-side-bar {
    transform: none;
    top: initial;
    bottom: 70px;
    right: 20px;
    border-radius: 12px;
    width: 45px;
    height: 45px;
    grid-template-rows: repeat(4, 45px);
    .side-bar-desc {
      display: none;
    }
    .wechat {
      &:hover,
      &:active {
        border-radius: 10px 10px 0 0;
      }
      i.wechat-icon {
        margin-bottom: 0;
      }
    }
    .contact-phone {
      .phone-content {
        top: -12px;
      }
    }
    i.el-icon-phone,
    i.el-icon-edit-outline {
      margin: 0;
    }
    .back-to-top {
      .el-icon-caret-top {
        font-size: 24px;
        &::after {
          top: 4px;
          left: 4px;
          width: 15px;
        }
      }
    }
  }
}
</style>
