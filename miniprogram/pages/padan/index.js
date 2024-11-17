const appInstance = getApp();
Page({
  // 用来获取微信头像
  changeAvatarUrl(event) {
    console.log(event);
    this.setData({
      avatarUrl: event.detail.avatarUrl,
    });
  },
  onSubmit(event) {
    console.log(event);
  },
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "/assets/images/shuzhengqun.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (obj) {
    console.log(obj);
    return {
      title: "分享title",
      imageUrl: "/assets/images/shuzhengqun.png",
    };
  },
  onShareTimeline() {},
  getPhoneNumber() {},
  login() {
    console.log(appInstance);
  },
  navigatorTo() {
    wx.navigateTo({
      url: "/modules/goodModule/pages/announcement/index",
      success(res) {
        res.eventChannel.emit("myevent", { name: "tom" });
      },
    });
  },
});
