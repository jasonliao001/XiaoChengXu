Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "min",
        types: "Number",
        defaults: "0",
        help: "最小值"
      },{
        attr: "max",
        types: "Number",
        defaults: "	100",
        help: "	最大值"
      },{
        attr: "step",
        types: "Number",
        defaults: "1",
        help: "步长，取值必须大于 0，并且可被(max - min)整除"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "false",
        help: "是否禁用"
      },{
        attr: "value",
        types: "Number",
        defaults: "	0",
        help: "当前取值"
      },{
        attr: "color",
        types: "Color",
        defaults: "#e9e9e9",
        help: "背景条的颜色（请使用 backgroundColor）"
      },{
        attr: "selected-color",
        types: "Color",
        defaults: "#1aad19",
        help: "已选择的颜色（请使用 activeColor）"
      },{
        attr: "show-value",
        types: "	Boolean",
        defaults: "false",
        help: "是否显示当前 value"
      },{
        attr: "show-value",
        types: "	Boolean",
        defaults: "false",
        help: "是否显示当前 value"
      },{
        attr: "bindchange",
        types: "	EventHandle",
        defaults: "",
        help: "完成一次拖动后触发的事件，event.detail = {value: value}"
      },{
        attr: "bindchanging ",
        types: "EventHandle",
        defaults: "",
        help: "拖动过程中触发的事件，event.detail = {value: value}"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/slider/exp/exp"
      })
    }
})