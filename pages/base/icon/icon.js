Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "type",
        types: "String",
        defaults: "",
        help: "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cance   l, download, search, clear"
      },{
        attr: "size",
        types: "Number",
        defaults: "23",
        help: "icon的大小，单位px"
      },{
        attr: "color",
        types: "Color",
        defaults: "	",
        help: "	icon的颜色，同css的color"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/base/icon/exp/exp"
      })
    }
})