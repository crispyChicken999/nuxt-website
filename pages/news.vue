<template>
  <div class="product">
    <common-header></common-header>
    <common-banner
      :background="
        require('~/assets/imgs/news/news-banner-background.webp')
      "
      title="新闻中心"
      subTitle="深耕纺织服装行业  纺织智能制造整体解决方案提供商"
      :showCooperateBtn="true"
    ></common-banner>
    <common-footer></common-footer>
    <common-right-side-bar></common-right-side-bar>
  </div>
</template>

<script>
export default {
  head: {
    title: "中恒智造 - 新闻中心",
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
