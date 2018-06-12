Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "for",
        types: "String",
        defaults: "",
        help: "绑定控件的id"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/label/exp/exp"
      })
    }
})