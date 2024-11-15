const behaviors = Behavior({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: "我已同意该协议",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "tom",
    obj: {
      name: "tyke",
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateName() {
      this.setData({
        name: "jerry",
      });
    },
  },
  lifetimes: {
    attached() {
      console.log("我是组件的生命周期函数");
    },
  },
});
export default behaviors;
