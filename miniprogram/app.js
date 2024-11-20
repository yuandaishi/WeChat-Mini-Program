// app.js
// 冷启动->小程序初始化（onLaunch，只执行一次）->小程序启动或切前台（onShow）->小程序切后台（onHide）
// 如果是热启动的话，则直接执行onShow，不会执行onLaunch
App({
  onLaunch() {
    // 进行冷启动才会触发
    //console.log("onLaunch");
  },
  onShow() {},
  onHide() {
    //console.log("onHide");
  },
});
