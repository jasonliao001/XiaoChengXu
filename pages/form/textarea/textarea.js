Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "value",
        types: "String",
        defaults: "",
        help: "	输入框的内容"
      },{
        attr: "placeholder",
        types: "String",
        defaults: "",
        help: "输入框为空时占位符"
      },{
        attr: "placeholder-style ",
        types: "String",
        defaults: "",
        help: "指定 placeholder 的样式"
      },{
        attr: "placeholder-class",
        types: "String",
        defaults: "	textarea-placeholder",
        help: "指定 placeholder 的样式类"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "	false",
        help: "是否禁用"
      },{
        attr: "maxlength",
        types: "Number",
        defaults: "140",
        help: "最大输入长度，设置为 -1 的时候不限制最大长度"
      },{
        attr: "auto-focus",
        types: "Boolean",
        defaults: "false",
        help: "自动聚焦，拉起键盘。"
      },{
        attr: "focus",
        types: "Boolean",
        defaults: "false",
        help: "获取焦点"
      },{
        attr: "auto-height",
        types: "Boolean",
        defaults: "false",
        help: "是否自动增高，设置auto-height时，style.height不生效"
      },{
        attr: "fixed",
        types: "Boolean",
        defaults: "false",
        help: "如果 textarea 是在一个position:fixed的区域，需要显示指定属性 fixed 为 true"
      },{
        attr: "cursor-spacing",
        types: "	Number",
        defaults: "0",
        help: "指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
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
        attr: "bindlinechange",
        types: "EventHandle",
        defaults: "",
        help: "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}"
      },{
        attr: "bindinput",
        types: "EventHandle",
        defaults: "",
        help: "当键盘输入时，触发 input 事件，event.detail = {value: value}， bindinput 处理函数的返回值并不会反映到 textarea 上"
      },{
        attr: "bindconfirm",
        types: "	EventHandle",
        defaults: "",
        help: "点击完成时， 触发 confirm 事件，event.detail = {value: value}"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/textarea/exp/exp"
      })
    }
})