Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "value",
        types: "String",
        defaults: "",
        help: "输入框的初始内容"
      },{
        attr: "type",
        types: "String",
        defaults: "text",
        help: "input 的类型"
      },{
        attr: "password ",
        types: "Boolean",
        defaults: "	false",
        help: "	是否是密码类型"
      },{
        attr: "placeholder",
        types: "String",
        defaults: "",
        help: "	输入框为空时占位符"
      },{
        attr: "placeholder-style",
        types: "String",
        defaults: "",
        help: "指定 placeholder 的样式"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "	false",
        help: "是否禁用"
      },{
        attr: "maxlength",
        types: "Number",
        defaults: "	140",
        help: "最大输入长度，设置为 -1 的时候不限制最大长度"
      },{
        attr: "cursor-spacing",
        types: "Number",
        defaults: "0",
        help: "指定光标与键盘的距离，单位px。取input 距离底部的距离和cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
      },{
        attr: "focus",
        types: "Boolean",
        defaults: "false",
        help: "获取焦点"
      },{
        attr: "confirm-type",
        types: "String",
        defaults: "done",
        help: "设置键盘右下角按钮的文字"
      },{
        attr: "confirm-hold",
        types: "Boolean",
        defaults: "	false",
        help: "点击键盘右下角按钮时是否保持键盘不收起"
      },{
        attr: "bindinput",
        types: "EventHandle",
        defaults: "",
        help: "当键盘输入时，触发input事件，event.detail = {value: value}，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
      },{
        attr: "bindfocus",
        types: "	EventHandle",
        defaults: "",
        help: "输入框聚焦时触发，event.detail = {value: value}"
      },{
        attr: "bindfocus",
        types: "EventHandle",
        defaults: "",
        help: "输入框聚焦时触发，event.detail = {value: value}"
      },{
        attr: "bindblur",
        types: "EventHandle",
        defaults: "",
        help: "输入框失去焦点时触发，event.detail = {value: value}"
      },{
        attr: "bindconfirm",
        types: "EventHandle",
        defaults: "",
        help: "点击完成按钮时触发，event.detail = {value: value}"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/input/exp/exp"
      })
    }
})