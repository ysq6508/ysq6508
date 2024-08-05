"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("onMounted");
    });
    const state = common_vendor.reactive({
      title: "helloworld"
    });
    const goHello = () => {
      common_vendor.index.switchTab({
        url: "/pages/hello/hello"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(state.title),
        c: common_vendor.o(goHello)
      };
    };
  }
};
wx.createPage(_sfc_main);
