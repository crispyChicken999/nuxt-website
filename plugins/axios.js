import axios from "axios";
import Vue from "vue";
// import { Message } from "element-ui";
let baseURL;

if (process.env.NODE_ENV == "production") {
  //生产环境
  baseURL = "http://websitetest.goomaker.com";
} else {
  //本地环境
  baseURL = "http://websitetest.goomaker.com";
  // baseURL = "http://192.168.1.106:8133";
}

export { baseURL };

const service = axios.create({
  baseURL,
  // 超时时间 单位是ms，这里设置了60s的超时时间
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  (config) => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    //数据转化,也可以使用qs转换
    config.data = JSON.stringify(config.data);
    if (config.method === "post") {
      config.headers = {
        "Content-Type": "application/json", //配置请求头
      };
    } else {
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded", //配置请求头
      };
    }
    const token = localStorage.getItem("loginToken");
    if (token) {
      // config.params = {'token':token} // 如果要求携带在参数中
      config.headers.token = token; // 如果要求携带在请求头中
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response;
  },
  (error) => {
    if (error && error.response) {
      // 公共错误处理
      // 根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        error.message = "服务器响应超时，请刷新当前页";
      } else {
        error.message = "连接服务器失败";
      }
    }
    // Message.error({
    //   message: error.message,
    //   duration: 2000,
    //   offset: 100,
    // });
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.reject(error);
  }
);

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */

  get(url, params) {
    const config = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    return service(config);
  },

  post(url, params) {
    const config = {
      method: "post",
      url: url,
    };
    if (params) config.data = params;
    return service(config);
  },

  put(url, params) {
    const config = {
      method: "put",
      url: url,
    };
    if (params) config.params = params;
    return service(config);
  },

  delete(url, params) {
    const config = {
      method: "delete",
      url: url,
    };
    if (params) config.params = params;
    return service(config);
  },
};

Vue.prototype.$http = http;
