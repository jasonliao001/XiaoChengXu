Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "device-position",
        types: "String",
        defaults: "back",
        help: "前置或后置，值为front, back"
      },{
        attr: "flash",
        types: "String",
        defaults: "auto",
        help: "	闪光灯，值为auto, on, off"
      },{
        attr: "bindtop",
        types: "EventHandle",
        defaults: "",
        help: "	摄像头在非正常终止时触发，如退出后台等情况"
      },{
        attr: "binderror",
        types: "EventHandle",
        defaults: "",
        help: "	用户不允许使用摄像头时触发"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/media/camera/exp/exp"
      })
    }
})