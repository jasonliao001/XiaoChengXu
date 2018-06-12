Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "bindchange",
        types: "EventHandle",
        defaults: "",
        help: "<checkbox-group/>中选中项发生改变是触发change事件，detail = {value:[选中的checkbox的value的数组]}"
      },{
        attr: "value",
        types: "String",
        defaults: "",
        help: "	<checkbox/>标识，选中时触发<checkbox-group/>的change事件，并携带<checkbox/>的value"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "false",
        help: "	是否禁用"
      },{
        attr: "checked",
        types: "Boolean",
        defaults: "false",
        help: "当前是否选中，可用来设置默认选中"
      },{
        attr: "color",
        types: "Color",
        defaults: "",
        help: "checkbox的颜色，同css的color"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/checkbox/exp/exp"
      })
    }
})