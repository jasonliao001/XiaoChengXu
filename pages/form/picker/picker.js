Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "range",
        types: "Array/Object Array",
        defaults: "[]",
        help: "mode为 selector 或 multiSelector 时，range 有效"
      },{
        attr: "range-key",
        types: "String",
        defaults: "",
        help: "当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
      },{
        attr: "value",
        types: "Number",
        defaults: "0",
        help: "value 的值表示表示选择了 range 中的第几个（下标从 0 开始）。"
      },{
        attr: "bindchange",
        types: "EventHandle",
        defaults: "",
        help: "value 改变时触发 change 事件，event.detail = {value: value}"
      },{
        attr: "disabled",
        types: "Boolean",
        defaults: "false",
        help: "是否禁用"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/form/picker/exp/exp"
      })
    }
})