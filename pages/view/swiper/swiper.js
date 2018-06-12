Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "indicator-dots",
        types: "Boolean",
        defaults: "false",
        help: "	是否显示面板指示点"
      },{
        attr: "indicator-color",
        types: "Color",
        defaults: "	rgba(0, 0, 0, .3)",
        help: "指示点颜色"
      },{
        attr: "indicator-active-color",
        types: "Color",
        defaults: "#000000",
        help: "当前选中的指示点颜色"
      },{
        attr: "autoplay",
        types: "Boolean",
        defaults: "false",
        help: "	是否自动切换"
      },{
        attr: "current",
        types: "Number",
        defaults: "0",
        help: "	当前所在页面的 index"
      },{
        attr: "interval",
        types: "Number",
        defaults: "5000",
        help: "	自动切换时间间隔"
      },{
        attr: "duration",
        types: "Number",
        defaults: "500",
        help: "滑动动画时长"
      },{
        attr: "circular",
        types: "Boolean",
        defaults: "false",
        help: "是否采用衔接滑动"
      },{
        attr: "vertical",
        types: "Boolean",
        defaults: "false",
        help: "滑动方向是否为纵向"
      },{
        attr: "bindchange",
        types: "EventHandle",
        defaults: "",
        help: "current 改变时会触发 change 事件，event.detail = {current: current, source: source}" 
      }]
      
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/view/swiper/exp/exp"
      })
    }
})