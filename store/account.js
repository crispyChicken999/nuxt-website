import { baseURL } from "@/plugins/axios.js";
export const state = () => ({
  userInfo: {},
  loginState: false,
  userAvatar: "",
  userCertificate: "",
});

export const mutations = {
  setUserInfo(state, data) {
    data.certificate && delete data.certificate;
    data.image && delete data.image;
    data.id && delete data.id;
    state.userInfo = data;
  },
  setLoginState(state, data) {
    state.loginState = data;
  },
  setUserAvatar(state, data) {
    state.userAvatar = "";
    if (data) {
      state.userAvatar = `${baseURL}/${data}`;
    } else {
      state.userAvatar = "";
    }
  },
  setUserCertificate(state, data) {
    state.userCertificate = "";
    if (data) {
      state.userCertificate = `${baseURL}/${data}`;
    } else {
      state.userCertificate = "";
    }
  },
};
