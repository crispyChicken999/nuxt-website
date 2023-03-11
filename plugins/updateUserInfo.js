/**
 * 同步用户信息（刷新时）
 */
import Vue from "vue";

let http = Vue.prototype.$http;
let store =
  (localStorage.getItem("Store") &&
    (store = JSON.parse(localStorage.getItem("Store")))) ||
  "";
let phone =
  (store &&
    store.account &&
    store.account.userInfo &&
    store.account.userInfo.phone) ||
  "";
let params = { phone };

initialize();

function initialize() {
  if (!phone) return;
  updateUserInfo();
  updateUserAvatar();
  updateUserCertificate();
}

function updateUserInfo() {
  http
    .get("api/userInfo/getUserInfo", params)
    .then((res) => {
      if (
        res &&
        res.data &&
        res.data.tipInfo &&
        res.data.tipInfo.includes("成功")
      ) {
        if (res.data.data) {
          if (process.client) {
            setTimeout(() => {
              window.$nuxt.$store.commit("account/setUserInfo", res.data.data);
            }, 0);
          }
        }
      } else {
        console.log("初始化-刷新用户信息失败: ", res.data.msg);
      }
    })
    .catch((err) => {
      console.log("初始化-刷新用户信息失败: ", err);
    });
}

function updateUserAvatar() {
  http
    .get("api/userInfo/getUserAvatar", params)
    .then((res) => {
      if (process.client) {
        setTimeout(() => {
          window.$nuxt.$store.commit(
            "account/setUserAvatar",
            (res && res.data && res.data.data) || ""
          );
        }, 0);
      }
    })
    .catch((err) => {
      console.log("初始化-获取头像失败: ", err);
    });
}

function updateUserCertificate() {
  http
    .get("api/userInfo/getUserCertificate", params)
    .then((res) => {
      if (process.client) {
        setTimeout(() => {
          window.$nuxt.$store.commit(
            "account/setUserCertificate",
            (res && res.data && res.data.data) || ""
          );
        }, 0);
      }
    })
    .catch((err) => {
      console.log("初始化-获取营业执照失败: ", err);
    });
}
