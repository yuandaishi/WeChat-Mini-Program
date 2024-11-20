// components/good-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodItem: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(event) {
      const {
        mark: { item: item },
      } = event;
      wx.navigateTo({
        url: `/pages/detail/index?name=${item.name}&id=${item.id}`,
      });
    },
  },
});
