// pages/cate/index.js
Page({
  selectActive(event) {
    const {
      mark: { item: item },
    } = event;
    this.doActive(item);
  },
  doActive(item) {
    let newArr = this.data.IngredientsList.map((itemT) => {
      itemT.active = false;
      if (itemT.name === item.name) {
        itemT.active = true;
      }
      return itemT;
    });
    this.setData({
      // currentId: item.id,//写在这里，滚动高度会出现问题，所以要等布局完毕之后，再滚动
      IngredientsList: newArr,
    });
    setTimeout(() => {
      this.setData({
        currentId: item.id,
      });
    }, 0);
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentId: "Ingredient-1",
    IngredientsList: [
      {
        name: "Vodka",
        surname: "Vodka",
        src: "/assets/images/Vodka-s.png",
        id: "Ingredient-1",
        active: true,
      },
      {
        name: "Gin",
        surname: "Gin",
        src: "/assets/images/Gin-s.png",
        id: "Ingredient-2",
        active: false,
      },
      {
        name: "Rum",
        surname: "Rum",
        src: "/assets/images/Rum-s.png",
        id: "Ingredient-3",
        active: false,
      },
      {
        name: "Tequila",
        surname: "Tequila",
        src: "/assets/images/Tequila-s.png",
        id: "Ingredient-4",
        active: false,
      },
      {
        name: "Scotch",
        surname: "Scotch",
        src: "/assets/images/Scotch.png",
        id: "Ingredient-5",
        active: false,
      },
      {
        name: "Absolut Kurant",
        surname: "Kurant",
        src: "/assets/images/Absolut Kurant.png",
        id: "Ingredient-6",
        active: false,
      },
      {
        name: "Absolut Peppar",
        surname: "Peppar",
        src: "/assets/images/Absolut Peppar.png",
        id: "Ingredient-7",
        active: false,
      },
      {
        name: "Absolut Vodka",
        surname: "Vodka",
        src: "/assets/images/Absolut Vodka.png",
        id: "Ingredient-8",
        active: false,
      },
      {
        name: "Advocaat",
        surname: "Advocaat",
        src: "/assets/images/Advocaat.png",
        id: "Ingredient-9",
        active: false,
      },
      {
        name: "Amaretto",
        surname: "Amaretto",
        src: "/assets/images/Amaretto.png",
        id: "Ingredient-10",
        active: false,
      },
      {
        name: "Angostura Bitters",
        surname: "Angostura",
        src: "/assets/images/Angostura Bitters.png",
        id: "Ingredient-11",
        active: false,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { name, id } = options;
    this.doActive({ name, id });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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
