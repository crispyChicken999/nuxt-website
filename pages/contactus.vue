<template>
  <div class="contact-us">
    <common-header></common-header>
    <common-banner
      title=""
      :background="
        require('~/assets/imgs/contactus/contactus-banner-background.webp')
      "
      stressWord="Contact us"
      subTitle="联系我们"
      :bannerHeight="500"
    ></common-banner>
    <div class="contact-us-content">
      <div class="wrapper">
        <div class="main-content">
          <div class="left-content">
            <h2>北京中恒智造科技有限公司</h2>
            <div class="line">
              <i class="iconfont icon-phone"></i>
              <p>
                <a href="tel:01083737271" title="点击拨打电话">010-8373 7271</a>
              </p>
            </div>
            <div class="line">
              <i class="iconfont icon-sms-phone"></i>
              <p>
                <a href="tel:19120463599" title="点击拨打电话">191 2046 3599</a>
              </p>
            </div>
            <div class="line">
              <i class="iconfont icon-drawer"></i>
              <p>
                <a href="mailto:zhongheng_sale@126.com" title="点击发送邮件"
                  >zhongheng_sale@126.com</a
                >
              </p>
            </div>
            <div class="line">
              <i class="iconfont icon-clock"></i>
              <p>工作日9：00-17：00</p>
            </div>
            <div class="line">
              <i class="iconfont icon-location-2"></i>
              <div>
                <p>北京市丰台区望园路1936号金时大厦三层</p>
                <p>广州市天河区大丰汇创意园F栋</p>
              </div>
            </div>
          </div>
          <div class="right-content">
            <p>服务热线</p>
            <h2>
              <a href="tel:01083737271" title="点击拨打电话">010-8373 7271</a>
            </h2>
            <p>服务电话</p>
            <h2>
              <a href="tel:19120463599" title="点击拨打电话">191 2046 3599</a>
            </h2>
            <h3>服务时间：<span>工作日9：00-17：00</span></h3>
          </div>
        </div>
        <div class="map">
          <client-only>
            <baidu-map
              :center="center"
              :zoom="zoom"
              class="baidu-map-container"
              @ready="isMapReady"
              :scroll-wheel-zoom="true"
            >
              <bm-map-type
                :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
                anchor="BMAP_ANCHOR_TOP_RIGHT"
              ></bm-map-type>
              <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
              <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
              <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :showAddressBar="true"
                :autoLocation="true"
              ></bm-geolocation>
              <bm-marker
                :position="center"
                :dragging="true"
                @click="infoWindowOpen"
              >
                <bm-info-window
                  :show="show"
                  @close="infoWindowClose"
                  @open="infoWindowOpen"
                  ><p>北京中恒智造科技有限公司</p>
                </bm-info-window>
              </bm-marker>
              <bm-traffic :predictDate="{ weekday: 7, hour: 12 }"> </bm-traffic>
            </baidu-map>
          </client-only>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
export default {
  head: {
    title: "中恒智造 - 联系我们",
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      show: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    isMapReady({ BMap, map }) {
      this.center.lng = 116.290232;
      this.center.lat = 39.88023;
      this.zoom = 18;
    },
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  .contact-us-content {
    min-height: 574px;
    display: flex;
    justify-content: center;
    background-color: #f0f3f5;
    .wrapper {
      position: relative;
      max-width: 1200px;
      width: 100%;
      top: -110px;
      .main-content {
        width: 100%;
        display: flex;
        height: fit-content;
        .left-content {
          gap: 45px;
          width: 100%;
          display: flex;
          max-width: 600px;
          color: #333333;
          transition: all 0.3s;
          flex-direction: column;
          background-color: #fff;
          padding: 103px 0 87px 63px;
          h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 400;
            transition: all 0.3s;
            word-break: break-all;
          }
          .line {
            display: flex;
            gap: 15px;
            div {
              p {
                &:first-of-type {
                  margin-bottom: 25px;
                }
              }
            }
          }
          i {
            color: #909090;
            font-size: 24px;
            display: inline-block;
            transition: all 0.3s;
          }
          p {
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            transition: all 0.3s;
            word-break: break-all;
            a {
              text-decoration: none;
              color: #333333;
              &:hover {
                color: #47a2fd;
                text-decoration: underline;
              }
            }
          }
        }
        .right-content {
          width: 100%;
          max-width: 600px;
          padding: 100px 0 120px 119px;
          background-color: #15af9f;
          transition: all 0.3s;
          p {
            font-size: 24px;
            font-weight: 400;
            color: #ffffff;
            transition: all 0.3s;
            word-break: break-all;
          }
          h2 {
            font-size: 36px;
            color: #ffffff;
            font-weight: bold;
            line-height: 42px;
            transition: all 0.3s;
            word-break: break-all;
            margin: 11px 0 88px 0;
            font-family: DIN-Bold, DIN;
            a {
              font-size: 32px;
              color: #ffffff;
              text-decoration: none;
              &:hover {
                text-shadow: 1px 1px #666;
                text-decoration: underline;
              }
            }
            &:first-of-type {
              position: relative;
              &::after {
                content: "";
                width: 27px;
                height: 1px;
                position: absolute;
                left: 0;
                bottom: -44px;
                background-color: #fff;
              }
            }
          }
          h3 {
            font-size: 24px;
            font-weight: 600;
            color: #ffffff;
            line-height: 28px;
            transition: all 0.3s;
          }
        }
      }
      .map {
        .baidu-map-container {
          width: 100%;
          max-width: 1200px;
          height: 400px;
          transition: all 0.3s;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .contact-us {
    .contact-us-content {
      .wrapper {
        position: static;
        padding: 40px 20px;
        .main-content {
          .left-content {
            padding: 50px 20px 50px 50px;
            gap: 40px;
          }
          .right-content {
            padding: 50px 20px 50px 50px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .contact-us {
    .contact-us-content {
      .wrapper {
        padding: 0;
        margin: 20px;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 0 12px 4px #ccc;
        .main-content {
          .left-content {
            padding: 20px;
            gap: 20px;
            h2 {
              font-size: 24px;
            }
            .line {
              gap: 10px;
              align-items: center;
              i {
                font-size: 20px;
              }
              p {
                font-size: 16px;
              }
              div {
                display: flex;
                flex-direction: column;
                gap: 10px;
                p {
                  &:first-of-type {
                    margin: 0;
                  }
                  margin: 0px;
                }
              }
              &:last-of-type {
                align-items: flex-start;
              }
            }
          }
          .right-content {
            padding: 20px;
            p {
              font-size: 20px;
              &:nth-of-type(2) {
                margin-top: 30px;
              }
            }
            h2 {
              font-size: 24px;
              a {
                font-size: 24px;
                word-break: break-word;
                display: inline-block;
                line-height: 30px;
                margin-top: 10px;
              }
              margin: 0;
              &:first-of-type {
                &::after {
                  display: none;
                }
              }
            }
            h3 {
              font-size: 20px;
              margin: 30px 0 0 0;
              word-break: keep-all;
            }
          }
        }
        .map {
          .baidu-map-container {
            height: 300px;
          }
        }
      }
    }
  }
}
</style>
