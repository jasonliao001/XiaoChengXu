Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "canvas-id",
        types: "	String",
        defaults: "",
        help: "canvas 组件的唯一标识符"
      },{
        attr: "disable-scroll",
        types: "Boolean",
        defaults: "false",
        help: "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
      },{
        attr: "bindtouchstart",
        types: "EventHandle",
        defaults: "",
        help: "手指触摸动作开始"
      },{
        attr: "bindtouchmove",
        types: "EventHandle",
        defaults: "",
        help: "手指触摸后移动"
      },{
        attr: "bindtouchend",
        types: "EventHandle",
        defaults: "",
        help: "手指触摸动作结束"
      },{
        attr: "bindtouchcancel",
        types: "EventHandle",
        defaults: "",
        help: "手指触摸动作被打断，如来电提醒，弹窗"
      },{
        attr: "bindlongtap",
        types: "EventHandle",
        defaults: "",
        help: "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动"
      },{
        attr: "binderror",
        types: "EventHandle",
        defaults: "",
        help: "当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}"
      }], 
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/canvas/exp/exp"
      })
    }
})