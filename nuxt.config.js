const CompressionPlugin = require("compression-webpack-plugin");
let plugins = [];
if (process.env.NODE_ENV === "production") {
  plugins.push("transform-remove-console");
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "中恒智造",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "北京中恒智造科技有限公司自2017年创立以来，一直深耕纺织制造业，是一家专注于纺织服装行业信息化、自动化、智能化产品研发和技术服务的高科技企业，致力于为客户提供高质量的服务和软硬件产品解决方案，帮助企业提升市场竞争力，打造行业优势。公司总部位于北京市丰台区，在广州市天河区设有分公司，办公总面积超2500平，累计拥有数十项软著及相关专利，目前公司汇聚了一批工厂智能制造领域的优秀技术人才，涵盖了从技术设计、产品研发、技术咨询、生产服务到实施专家等技术岗位，拥有雄厚的技术力量和丰富的行业经验。我们秉持实用、高效、精准、闭环的产品设计理念，不断探索先进的管理方法，将生产企业的管理思想与先进科学技术交相融合，努力打造行业精品，真正帮助客户解决需求痛点，为客户创造更大的社会价值。",
      },
      { name: "format-detection", content: "telephone=010-8373-7271" },
      {
        name: "keywords",
        content: "中恒智造,自动化料系统,成衣业务系统,智慧纺织,纺织数字化",
      },
      {
        property: "og:title",
        content: "北京中恒智造科技有限公司",
      },
      {
        property: "og:description",
        content: "深耕纺织行业，探索智慧未来",
      },
      {
        property: "og:image",
        content: "http://www.goomaker.com/_nuxt/img/5cb5f1f.png",
      },
    ],
    script: [],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~assets/fonts/font.css",
    "~assets/css/public.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/elementUI",
    "@/plugins/iconfont",
    // { src: "@/plugins/waves.js", ssr: false },
    { src: "@/plugins/aos.js", ssr: false },
    { src: "@/plugins/baiduMaps.js", ssr: false },
    { src: "@/plugins/rsa.js", ssr: false },
    { src: "@/plugins/axios.js", ssr: false },
    { src: "@/plugins/dynamicGrid.js", ssr: false },
    { src: "@/plugins/stars.js", ssr: false },
    { src: "@/plugins/vuexPersist.js", ssr: false },
    { src: "@/plugins/picViewer.js", ssr: false },
    { src: "@/plugins/ellipsisDirective.js", ssr: false },
    { src: "@/plugins/updateUserInfo.js", ssr: false },
    { src: "@/plugins/51la.js", ssr: false },
  ],

  // SEO setting - remove html data-x attribute
  hooks: {
    generate: {
      page(page) {
        const cheerio = require("cheerio");
        const $ = cheerio.load(page.html, { decodeEntities: false });
        const attrs = [
          "data-n-head-ssr",
          "data-n-head",
          "data-hid",
          "data-vue-ssr-id",
          "data-server-rendered",
        ];
        attrs.forEach((value) => {
          $("*[" + value + "]").removeAttr(value);
        });
        page.html = $.html();
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@aceforth/nuxt-optimized-images",
    "nuxt-precompress",
  ],

  // 打包时是否开启图片压缩
  optimizedImages: {
    optimizeImages: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },

  router: {
    middleware: "unknownRoute",
  },

  proxy: {
    "/map": {
      target: "http://api.map.baidu.com/",
      pathRewrite: { "^/map": "" },
    },
  },

  target: "static",

  server: {
    port: 8000, //端口
    host: "0.0.0.0", // default: localhost
  },

  // gzip压缩
  nuxtPrecompress: {
    gzip: {
      enabled: true,
      filename: "[path].gz[query]",
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      filename: "[path].br[query]",
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
    enabled: true,
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/,
    // Serving options
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ["br", "gzip"],
    },
  },

  loading: {
    continuous: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: [],
      preset: {},
    },
    babel: {
      plugins,
    },

    // 开启打包分析
    // analyze: true,
    // assetFilter: function (assetFilename) {
    //   return assetFilename.endsWith(".js");
    // },

    // npm run generate的时候打开
    // plugins: [
    //   new CompressionPlugin({
    //     test: /\.js$|\.html$|\.css/, // 匹配文件名
    //     threshold: 10240, // 对超过10kb的数据进行压缩
    //     deleteOriginalAssets: false, // 是否删除原文件
    //   }),
    // ],
    // optimization: {
    //   minimize: true,
    //   splitChunks: {
    //     chunks: "all",
    //     automaticNameDelimiter: ".",
    //     name: true,
    //     minSize: 10000,
    //     maxSize: 244000,
    //     cacheGroups: {
    //       vendor: {
    //         name: "node_vendors",
    //         test: /[\\/]node_modules[\\/]/,
    //         chunks: "all",
    //         maxSize: 244000,
    //       },
    //       styles: {
    //         name: "styles",
    //         test: /\.(css|vue)$/,
    //         chunks: "all",
    //         enforce: true,
    //       },
    //       commons: {
    //         test: /node_modules[\\/](vue|vue-loader|vue-router|vuex|vue-meta|core-js|@babel\/runtime|axios|webpack|setimmediate|timers-browserify|process|regenerator-runtime|cookie|js-cookie|is-buffer|dotprop|nuxt\.js)[\\/]/,
    //         chunks: "all",
    //         priority: 10,
    //         name: true,
    //       },
    //     },
    //   },
    // },
  },
};
