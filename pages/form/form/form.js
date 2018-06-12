Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "report-submit",
        types: "Boolean",
        defaults: "",
        help: "是否返回formId用于发送模板消息"
      },{
        attr: "bindsubmit",
        types: "EventHandle",
        defaults: "",
        help: "	携带form中的数据触发submit事件，event.detail = { value : {'name':'value'} , formId:'' }"
      },{
        attr: "bindreset",
        types: "EventHandle",
        defaults: "",
        help: "	表单重置时会触发reset事件"
      }],
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/form/exp/exp"
      })
    }
})