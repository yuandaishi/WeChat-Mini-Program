// index.js
// 访问页面->onLoad(监听初次页面加载，只会调用一次)->onShow(监听页面展示)->onReady(监听初次渲染完成，只会调用一次)->onUnload(监听页面卸载)
//如果保存当前页面，不销毁，则流程
// 访问页面->onLoad(监听页面加载)->onShow(监听页面展示)->onHide(监听页隐藏)-onShow(再次回到当前页面)
import { $axios, randomLetter } from "@utils/index";
Page({
  /**
   * 页面的初始数据
   */
  swiperCurrentChange(event) {
    const {
      detail: { current },
    } = event;
    this.setData({
      swiperCurrent: current,
    });
  },
  toCate(event) {
    const {
      mark: { item: item },
    } = event;
    wx.reLaunch({
      url: `/pages/cate/index?name=${item.name}&id=${item.id}`,
    });
  },
  toDetail(event) {
    const {
      mark: { item: item },
    } = event;
    wx.navigateTo({
      url: `/pages/detail/index?name=${item.name}&id=${item.id}`,
    });
  },
  // 不要用箭头函数。this容易出问题
  async getInitData(letter) {
    this.setData({
      gettingData: true,
    });
    let { code, data } = await $axios.request(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    this.setData({
      gettingData: false,
    });
    if (code === 40000) return;
    let drinks = data.drinks || [];
    drinks.map((item) => (item.price = (Math.random() * 1000) | (0 + 300)));
    this.setData({
      drinksTotal: drinks,
      drinksCurrent: drinks.slice(0, 4),
    });
  },
  data: {
    gettingData: false,
    drinksTotal: [],
    drinksCurrent: [],
    swiperCurrent: 0,
    IngredientsList: [
      {
        name: "Vodka",
        src: "/assets/images/Vodka-s.png",
        id: "Ingredient-1",
      },
      {
        name: "Gin",
        src: "/assets/images/Gin-s.png",
        id: "Ingredient-2",
      },
      {
        name: "Rum",
        src: "/assets/images/Rum-s.png",
        id: "Ingredient-3",
      },
      {
        name: "Tequila",
        src: "/assets/images/Tequila-s.png",
        id: "Ingredient-4",
      },
    ],
    swiperList: [
      {
        name: "Mojito",
        src: "/assets/images/Mojito.jpg",
        id: "1",
        current: 0,
      },
      {
        name: "Long Island Tea",
        src: "/assets/images/LongIslandTea.jpg",
        id: "2",
        current: 1,
      },
      {
        name: "Negroni",
        src: "/assets/images/Negroni.jpg",
        id: "3",
        current: 2,
      },
      {
        name: "Old Fashioned",
        src: "/assets/images/OldFashioned.jpg",
        id: "4",
        current: 3,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载，只会触发一次
   */
  onLoad(options) {
    //this.getInitData(randomLetter());
  },

  /**
   * 生命周期函数--监听页面初次渲染完成(一个页面只会触发一次)
   */
  onReady() {
    //console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示，在小程序从后台进入前台时，也会触发
   */
  onShow() {
    this.getInitData(randomLetter());
  },

  /**
   * 生命周期函数--监听页面隐藏，在小程序从前台进入后台时，也会触发
   */
  onHide() {
    this.setData({
      drinksTotal: [],
      drinksCurrent: [],
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.drinksCurrent.length >= this.data.drinksTotal.length) {
      return;
    }
    wx.showToast({
      title: "数据加载中...",
      icon: "none",
      mask: true,
    });
    setTimeout(() => {
      this.setData({
        drinksCurrent: this.data.drinksTotal.slice(
          0,
          this.data.drinksCurrent.length + 4
        ),
      });
    }, 1500);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
