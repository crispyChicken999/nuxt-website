<template>
  <footer class="footer">
    <div class="main-content">
      <section class="logo-section">
        <nuxt-link to="/"
          ><img
            src="~assets/imgs/common/logo.png"
            alt="北京中恒智造科技有限公司"
            class="logo-img"
        /></nuxt-link>
        <div class="company-name">
          <p class="company-chinese-name">中恒智造</p>
          <p class="company-english-name">
            Zhongheng Intelligent Manufacturing
          </p>
        </div>
      </section>
      <nav class="nav-menu-section">
        <ul>
          <li
            v-for="(navItem, index) in navList"
            :key="'footer_nav_item_' + index"
          >
            <i class="prefix-icon iconfont" :class="navItem.icon"></i>
            <nuxt-link :to="navItem.link">{{ navItem.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <section class="about-and-contact-us">
        <div
          v-for="(item, index) in aboutUsList"
          :key="'about_us_item_' + index"
          :class="item.className"
        >
          <i class="prefix-icon iconfont" :class="item.icon"></i>
          <nuxt-link v-if="item.isHyperLink" to="/aboutus">{{
            item.label
          }}</nuxt-link>
          <span v-else
            ><a
              v-if="item.hrefType"
              :title="item.title"
              :href="item.hrefType + item.label"
              >{{ item.label }}</a
            ><template v-else>{{ item.label }}</template></span
          >
        </div>
      </section>
      <section class="consult-channel">
        <div class="wechat-code">
          <!-- <div class="personal-wechat">
            <img
              src="~assets/imgs/common/footer-consult-wechat.png"
              alt="cto-wechat-code"
            />
            <p>扫码咨询</p>
          </div> -->
          <div class="official-account">
            <img
              src="~assets/imgs/common/footer-official-account.png"
              alt="official-account"
            />
            <p>微信公众号</p>
          </div>
        </div>
        <div class="company-address">
          <p>
            <i class="iconfont icon-location"></i
            >地址：北京市丰台区望园路1936号金时大厦三层
          </p>
          <p>广州市天河区大丰汇创意园F栋</p>
        </div>
      </section>
    </div>
    <div class="copyright">
      <p>
        © Copyright 2021 北京中恒智造科技有限公司 版权所有 备案号：<a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener"
          >京ICP备2021018631号</a
        >
      </p>
      <p>
        Beijing Zhongheng Intelligent Manufacturing Technology Co.,Ltd. All
        rights reserved
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          icon: "icon-home-fill",
          label: "首页",
          link: "/",
        },
        {
          icon: "icon-three-hexagon",
          label: "EMI协同管控平台",
          link: "/emi",
        },
        {
          icon: "icon-square",
          label: "产品中心",
          link: "/product",
        },
      ],
      aboutUsList: [
        {
          className: "about-us",
          icon: "icon-planet",
          label: "走进我们",
          isHyperLink: true,
        },
        {
          hrefType: "tel:",
          title: "点击拨打电话",
          icon: "icon-phone-2",
          label: "010-8373 7271",
          className: "landline-phone",
        },
        {
          hrefType: "tel:",
          label: "19120463599",
          title: "点击拨打电话",
          className: "telephone",
          icon: "icon-cellphone",
        },
        {
          hrefType: "mailto:",
          className: "e-mail",
          title: "点击发送邮件",
          icon: "icon-mail-solid",
          label: "zhongheng_sale@126.com",
        },
        {
          className: "service-time",
          icon: "icon-clock-circle",
          label: "服务时间：工作日 9：00-17：00",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  font-family: Microsoft YaHei;
  .main-content {
    display: flex;
    justify-content: center;
    color: white;
    padding: 28px 0 21px 0;
    background-color: #30343f;
    .logo-section {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .logo-img {
        width: 53px;
        height: 53px;
      }
      .company-name {
        display: flex;
        flex-direction: column;
        margin: 0 21px 0 10px;
        white-space: nowrap;
        p {
          margin: 0;
        }
        .company-chinese-name {
          width: fit-content;
          font-size: 32px;
          font-family: "HuXiaoBo-NanShen";
        }
        .company-english-name {
          font-size: 8px;
          letter-spacing: 0px;
          word-spacing: 1px;
          zoom: 0.6;
        }
      }
    }
    .nav-menu-section {
      ul {
        transition: all 0.3s;
        display: grid;
        grid-template-columns: 110px 130px 110px 110px 110px;
        grid-column-gap: 10px;
        place-items: center;
        padding: 0;
        margin: 0px 50px 0 17px;
        li {
          display: flex;
          white-space: nowrap;
          align-items: center;
          justify-content: center;
          vertical-align: bottom;
          a {
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 300;
            transition: all 0.3s;
          }
          &:hover {
            text-shadow: 2px 2px 4px #000;
            cursor: pointer;
            a {
              color: #2d948f;
            }
            .prefix-icon {
              color: #2d948f;
            }
          }
          .prefix-icon {
            width: 16px;
            height: 16px;
            font-size: 16px;
            margin-right: 5px;
            transition: all 0.3s;
            display: inline-block;
            background-size: 16px auto;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .about-and-contact-us {
      font-size: 14px;
      font-weight: 300;
      .prefix-icon {
        display: inline-block;
        margin-right: 4px;
        transition: all 0.3s;
      }
      .about-us {
        display: flex;
        align-items: center;
        margin: 0px 0 12px 0;
        font-size: 16px;
        a {
          text-decoration: none;
          color: white;
          transition: all 0.3s;
        }
        &:hover {
          text-shadow: 2px 2px 4px #000;
          cursor: pointer;
          a {
            color: #2d948f;
          }
          .prefix-icon {
            color: #2d948f;
          }
        }
      }
      .landline-phone {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        a {
          text-decoration: none;
          color: white;
        }
        &:hover {
          a {
            text-decoration: underline;
          }
        }
      }
      .telephone {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        a {
          text-decoration: none;
          color: white;
        }
        &:hover {
          a {
            text-decoration: underline;
          }
        }
      }
      .e-mail {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        a {
          text-decoration: none;
          color: white;
        }
        &:hover {
          a {
            text-decoration: underline;
          }
        }
      }
      .service-time {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
      }
    }
    .consult-channel {
      margin-left: 31px;
      transition: all 0.3s;
      .wechat-code {
        display: flex;
        justify-content: center;
        .personal-wechat {
          margin-right: 42px;
        }
        img {
          width: 88px;
          height: 89px;
        }
        p {
          margin: 5px 0 21px 0;
          text-align: center;
          color: #696765;
          font-size: 12px;
        }
      }
      .company-address {
        text-align: center;
        font-size: 14px;
        p {
          line-height: 24px;
          margin-bottom: 5px;
          &:last-of-type {
            margin-bottom: 5px;
          }
        }
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
  }
  .copyright {
    background-color: #272727;
    text-align: center;
    color: #7a7a7a;
    font-size: 12px;
    padding: 11px 0 8px 0;
    p {
      margin: 0;
      padding: 0 10px;
      a {
        color: #7a7a7a;
        text-decoration: none;
        &:hover {
          color: #bbbbbb;
        }
        &:active {
          color: #bbbbbb;
        }
      }
      &:first-of-type {
        margin-bottom: 5px;
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .footer {
    .main-content {
      .nav-menu-section {
        ul {
          grid-template-columns: 100px 130px 100px;
          grid-row-gap: 10px;
          place-items: flex-start;
          margin: 0px 17px;
          grid-column-gap: 15px;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .footer {
    .main-content {
      .nav-menu-section {
        ul {
          grid-template-columns: 100px 130px 100px;
          grid-row-gap: 10px;
          place-items: flex-start;
          margin-bottom: 9px;
          grid-column-gap: 15px;
        }
      }
      .consult-channel {
        margin-left: 10px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .footer {
    .main-content {
      .logo-section {
        padding-bottom: 10px;
        .logo-img {
          width: 40px;
          height: 40px;
        }
        .company-name {
          margin: 0 10px;

          .company-english-name {
            zoom: 0.6;
          }
        }
      }
      flex-direction: column;
      align-items: center;
      .nav-menu-section {
        ul {
          grid-template-columns: 100px 130px 100px;
          grid-row-gap: 10px;
          place-items: flex-start;
          grid-column-gap: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      .about-and-contact-us {
        > div {
          justify-content: center;
        }
      }
      .consult-channel {
        margin-left: 0px;
        .company-address {
          p:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
    .copyright {
      p {
        line-height: 15px;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .footer {
    .main-content {
      .logo-section {
        display: flex;
        align-items: center;
        .company-name {
          .company-english-name {
            display: none;
          }
        }
      }
    }
  }
}
</style>
