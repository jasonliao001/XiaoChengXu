Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "size",
        types: "Number",
        defaults: "18",
        help: "会话按钮大小，有效值 18-27，单位：px"
      },{
        attr: "type",
        types: "	String",
        defaults: "default-dark",
        help: "会话按钮的样式类型"
      },{
        attr: "session-from",
        types: "	String",
        defaults: "",
        help: "用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。"
      }]
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/contact/exp/exp"
      })
    }
})