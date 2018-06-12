Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "id",
        types: "String",
        defaults: "",
        help: "audio 组件的唯一标识符 "
      },{
        attr: "src",
        types: "String",
        defaults: "",
        help: "		要播放音频的资源地址"
      },{
        attr: "loop",
        types: "Boolean",
        defaults: "false",
        help: "是否循环播放"
      },{
        attr: "controls",
        types: "Boolean",
        defaults: "true",
        help: "	是否显示默认控件"
      },{
        attr: "name",
        types: "String",
        defaults: "未知音频",
        help: "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
      },{
        attr: "author",
        types: "String",
        defaults: "未知作者",
        help: "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
      },{
        attr: "binderror",
        types: "EventHandle",
        defaults: "",
        help: "当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}"
      },{
        attr: "bindplay",
        types: "EventHandle",
        defaults: "",
        help: "当开始/继续播放时触发play事件"
      },{
        attr: "bindpause",
        types: "EventHandle",
        defaults: "",
        help: "当暂停播放时触发 pause 事件"
      },{
        attr: "bindtimeupdate",
        types: "Number",
        defaults: "",
        help: "当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}"
      },{
        attr: "bindended",
        types: "	EventHandle",
        defaults: "",
        help: "当播放到末尾时触发 ended 事件"
      }],
     
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/media/audio/exp/exp"
      })
    }
})