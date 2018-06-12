Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "longitude",
        types: "Number",
        defaults: "",
        help: "中心经度"
      },{
        attr: "latitude",
        types: "Number",
        defaults: "",
        help: "中心纬度"
      },{
        attr: "scale",
        types: "Number",
        defaults: "	16",
        help: "缩放级别，取值范围为5-18	"
      },{
        attr: "markers",
        types: "Array",
        defaults: "",
        help: "标记点"
      },{
        attr: "polyline",
        types: "Array",
        defaults: "",
        help: "	路线"
      },{
        attr: "circles",
        types: "Array",
        defaults: "",
        help: "圆"
      },{
        attr: "controls",
        types: "Array",
        defaults: "",
        help: "控件"
      },{
        attr: "include-points",
        types: "Array",
        defaults: "",
        help: "缩放视野以包含所有给定的坐标点"
      },{
        attr: "show-location",
        types: "	Boolean",
        defaults: "",
        help: "显示带有方向的当前定位点"
      },{
        attr: "bindmarkertap",
        types: "EventHandle",
        defaults: "",
        help: "点击标记点时触发"
      },{
        attr: "bindcallouttap",
        types: "EventHandle",
        defaults: "",
        help: "点击标记点对应的气泡时触发	"
      },{
        attr: "bindcontroltap",
        types: "EventHandle",
        defaults: "",
        help: "点击控件时触发	"
      },{
        attr: "bindregionchange",
        types: "EventHandle",
        defaults: "",
        help: "视野发生变化时触发	"
      },{
        attr: "bindtap",
        types: "EventHandle",
        defaults: "",
        help: "点击地图时触发	"
      }], 
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/map/exp/exp"
      })
    }
})