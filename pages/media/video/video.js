Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "src",
        types: "String",
        defaults: "",
        help: "要播放视频的资源地址"
      },{
        attr: "initial-time",
        types: "Number",
        defaults: "",
        help: "	指定视频初始播放位置>1.6"
      },{
        attr: "duration",
        types: "Number",
        defaults: "",
        help: "指定视频时长"
      },{
        attr: "controls",
        types: "Boolean",
        defaults: "	true",
        help: "是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"
      },{
        attr: "danmu-list",
        types: "Object Array",
        defaults: "	",
        help: "	弹幕列表"
      },{ 
        attr: "danmu-btn",
        types: "Boolean",
        defaults: "false	",
        help: "	是否显示弹幕按钮，只在初始化时有效，不能动态变更"
      },{
        attr: "enable-danmu",
        types: "Boolean",
        defaults: "	false	",
        help: "	是否展示弹幕，只在初始化时有效，不能动态变更"
      },{
        attr: "autoplay",
        types: "Boolean",
        defaults: "	false",
        help: "	是否自动播放"
      },{
        attr: "autoplay",
        types: "Boolean",
        defaults: "	false",
        help: "	是否自动播放"
      },{
        attr: "loop",
        types: "Boolean",
        defaults: "	false",
        help: "	是否循环播放"
      },{
        attr: "muted",
        types: "Boolean",
        defaults: "	false",
        help: "	是否静音播放"
      },{
        attr: "page-gesture",
        types: "Boolean",
        defaults: "	false",
        help: "	在非全屏模式下，是否开启亮度与音量调节手势"
      },{
        attr: "direction",
        types: "	Number",
        defaults: "	false",
        help: "设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）"
      },{
        attr: "bindplay",
        types: "	EventHandle",
        defaults: "	",
        help: "	当开始/继续播放时触发play事件"
      },{
        attr: "bindpause",
        types: "EventHandle",
        defaults: "",
        help: "	当暂停播放时触发 pause 事件"
      },{
        attr: "bindended",
        types: "EventHandle",
        defaults: "",
        help: "当播放到末尾时触发 ended 事件"
      },{
        attr: "bindtimeupdate",
        types: "EventHandle",
        defaults: "",
        help: "播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次"
      },{
        attr: "bindfullscreenchange",
        types: "EventHandle",
        defaults: "",
        help: "当视频进入和退出全屏是触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal"
      },{
        attr: "objectFit",
        types: "String",
        defaults: "contain",
        help: "当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖"
      },{
        attr: "poster",
        types: "String",
        defaults: "",
        help: "视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效"
      }]
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/media/video/exp/exp"
      })
    }
})