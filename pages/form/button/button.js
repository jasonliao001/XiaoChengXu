Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "size",
        types: "String",
        defaults: "default",
        help: "按钮的大小"
      },{
        attr: "type",
        types: "String",
        defaults: "default",
        help: "	按钮的样式类型"
      },{
        attr: "plain",
        types: "Boolean",
        defaults: "false",
        help: "手按钮是否镂空，背景色透明"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "false",
        help: "是否禁用"
      },{
        attr: "loading",
        types: "Boolean",
        defaults: "false",
        help: "名称前是否带 loading 图标"
      },{
        attr: "form-type",
        types: "String",
        defaults: "",
        help: "用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件"
      },{
        attr: "open-type",
        types: "String",
        defaults: "",
        help: "微信开放能力"
      },{
        attr: "open-type",
        types: "String",
        defaults: "",
        help: "微信开放能力"
      },{
        attr: "hover-class",
        types: "String",
        defaults: "button-hover",
        help: "指定按钮按下去的样式类。当 hover-class='none' 时，没有点击态效果"
      },{
        attr: "hover-start-time",
        types: "Number",
        defaults: "	20",
        help: "按住后多久出现点击态，单位毫秒"
      },{
        attr: "hover-stay-time",
        types: "Number",
        defaults: "70",
        help: "手指松开后点击态保留时间，单位毫秒"
      },{
        attr: "session-from",
        types: "String",
        defaults: "",
        help: "open-type='contact'时有效：用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。"
      },{
        attr: "bindgetuserinfoHandler",
        types: "Handler",
        defaults: "",
        help: "open-type='getUserInfo'时有效：用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo"
      }],
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/button/exp/exp"
      })
    }
})