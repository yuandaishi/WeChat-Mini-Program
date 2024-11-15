// pages/profile/index.js
Page({
  options: {
    // styleIsolation: "shared",
  },
  getSonData(data) {
    console.log(data);
  },
  backToindex() {
    // wx.switchTab({
    //   url: "/pages/index/index",
    // });
    wx.navigateTo({
      url: "/pages/announcement/index",
    });
  },
  setStorage() {
    console.log("asdasdasdasd");
    wx.setStorageSync("name", "yds");
    wx.setStorageSync("me", { name: "yds", age: "16" });
  },
  getStorage() {
    let name = wx.getStorageSync("name");
    let me = wx.getStorageSync("me");
    console.log(name, me);
  },
  deleteStorage() {},
  clearStorage() {},
  changeNum() {
    this.setData({
      num: this.data.num + 1,
    });
  },
  deleteData() {
    wx.showModal({
      title: "提示",
      content: "是否要删除数据",
      complete: (res) => {
        if (res.cancel) {
          wx.showToast({
            title: "取消成功",
            icon: "none",
          });
        }

        if (res.confirm) {
          wx.showToast({
            title: "删除成功",
          });
        }
      },
    });
  },
  getData() {
    wx.showLoading({
      title: "获取数据中...",
      mask: true,
    });
    wx.request({
      url: "https://ff-proxy.leetcode.cn/api/features/sdk-8iOC11xvkMhY6iS",
      method: "get",
      data: {}, //请求参数
      header: {}, //请求头，
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => {
        // wx.hideLoading();
        console.log(res);
      },
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("padan onload");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("padan show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
