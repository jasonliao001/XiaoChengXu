Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "checked",
        types: "Boolean",
        defaults: "false",
        help: "是否选中"
      },{
        attr: "type",
        types: "String",
        defaults: "	switch",
        help: "	样式，有效值：switch, checkbox"
      },{
        attr: "bindchange ",
        types: "EventHandle",
        defaults: "",
        help: "hecked 改变时触发change事件，event.detail={ value:checked}"
      },{
        attr: "color ",
        types: "Color",
        defaults: "",
        help: "switch的颜色，同css的color"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/form/exp/exp"
      })
    }
})