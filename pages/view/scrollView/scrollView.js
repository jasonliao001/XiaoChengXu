Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "scroll-x",
        types: "Boolean",
        defaults: "false",
        help: "允许横向滚动"
      },{
        attr: "scroll-y",
        types: "Boolean",
        defaults: "false",
        help: "允许纵向滚动"
      },{
        attr: "upper-threshold",
        types: "Number",
        defaults: "50",
        help: "距顶部/左边多远时（单位px），触发 scrolltoupper 事件"
      },{
        attr: "lower-threshold",
        types: "Number",
        defaults: "50",
        help: "距底部/右边多远时（单位px），触发 scrolltolower 事件" 
      },{
        attr: "scroll-top",
        types: "Number",
        defaults: "",
        help: "	设置竖向滚动条位置"
      },{
        attr: "scroll-left",
        types: "Number",
        defaults: "",
        help: "设置横向滚动条位置"
      },{
        attr: "scroll-into-view",
        types: "String",
        defaults: "",
        help: "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
      },{
        attr: "scroll-with-animation",
        types: "Boolean",
        defaults: "false",
        help: "在设置滚动条位置时使用动画过渡"
      },{
        attr: "enable-back-to-top",
        types: "Boolean",
        defaults: "false",
        help: "iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向"
      },{
        attr: "bindscrolltoupper",
        types: "EventHandle",
        defaults: "",
        help: "滚动到顶部/左边，会触发 scrolltoupper 事件"
      },{
        attr: "bindscrolltolower",
        types: "EventHandle",
        defaults: "",
        help: "滚动到底部/右边，会触发 scrolltolower 事件"
      },{
        attr: "bindscroll",
        types: "EventHandle",
        defaults: "",
        help: "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
      }],
    },
    goExp: () => {
        wx.navigateTo({
          url: "/pages/view/scrollView/exp/exp"
        })
    }
})