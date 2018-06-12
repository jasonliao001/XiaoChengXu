Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "src",
        types: "String",
        defaults: "",
        help: "图片资源地址"
      },{
        attr: "mode",
        types: "String",
        defaults: "	'scaleToFill'",
        help: "	图片裁剪、缩放的模式"
      },{
        attr: "binderror",
        types: "HandleEvent",
        defaults: "",
        help: "错误发生时，发布到AppService的事件名，事件对象event.detail = { errMsg: 'something wrong' }"
      },{
        attr: "bindload",
        types: "HandleEvent",
        defaults: "	",
        help: "	当图片载入完毕时，发布到AppService的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/media/image/exp/exp"
      })
    }
})