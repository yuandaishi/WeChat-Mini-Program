// components/custom-checkbox/custom-checkbox.js
Component({
  pageLifetimes: {
    show() {
      console.log("父组件show");
    },
    hide() {
      console.log("父组件hide");
    },
  },
  lifetimes: {
    created() {
      console.log("组件created");
    },
    attached() {
      console.log("组件attached");
    },
    detached() {
      console.log("组件detached");
    },
  },
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    label: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCheck: false,
    name: "yds",
    num: 10,
    obj: {
      name: "yuan",
      age: 100,
    },
  },

  observers: {},
  /**
   * 组件的方法列表
   */
  methods: {
    updateLabel() {
      this.triggerEvent("myevent", "asdasd");
    },
    changeCheck() {
      this.setData({
        isCheck: !this.data.isCheck,
      });
    },
    updateData() {
      this.setData({
        num: this.data.num + 1,
      });
    },
  },
});
