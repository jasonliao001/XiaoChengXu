Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "percent",
        types: "Float",
        defaults: "无",
        help: "百分比0~100"
      },{
        attr: "show-info",
        types: "Boolean",
        defaults: "false",
        help: "在进度条右侧显示百分比"
      },{
        attr: "stroke-width",
        types: "Number",
        defaults: "6",
        help: "	进度条线的宽度，单位px"
      },{
        attr: "color",
        types: "Color",
        defaults: "#09BB07",
        help: "	进度条颜色 （请使用 activeColor）"
      },{
        attr: "activeColor	",
        types: "Color",
        defaults: "	",
        help: "	已选择的进度条的颜色"
      },{
        attr: "backgroundColor",
        types: "Color",
        defaults: "	",
        help: "	未选择的进度条的颜色"
      },{
        attr: "active",
        types: "Boolean",
        defaults: "false",
        help: "	进度条从左往右的动画	"
      },{
        attr: "active-mode",
        types: "String",
        defaults: "backwards",
        help: "	backwards: 动画从头播；forwards：动画从上次结束点接着播"
      }]
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/base/progress/exp/exp"
      })
    }
})