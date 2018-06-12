Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "bindchange",
        types: "EventHandle",
        defaults: "",
        help: "<radio-group/>中的选中项发生变化时触发change事件，event.detail = {value: 选中项radio的value}"
      },{
        attr: "value",
        types: "String",
        defaults: "",
        help: "<radio/>标识。当该<radio/>选中时，<radio-group/> 的change 事件会携带<radio/>的value"
      },{
        attr: "checked",
        types: "Boolean",
        defaults: "false",
        help: "当前是否选中"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "false",
        help: "是否禁用"
      },{
        attr: "color",
        types: "Color",
        defaults: "",
        help: "radio的颜色，同css的color"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/radioGroup/exp/exp"
      })
    }
})