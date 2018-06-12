//app.js
App({
  onLaunch: function (options) {
    console.log("打开小程序的路径",options.path)
    console.log("打开小程序的query",options.query)
    console.log("打开小程序的场景值",options.scene)
    console.log("转发信息",options.shareTicket)
    console.log("当场景为由另一个小程序打开时，返回此字段",options.referrerInfo)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(options) {
    // path	String	打开小程序的路径
    // query	Object	打开小程序的query
    // scene	Number	打开小程序的场景值
    // shareTicket	String	shareTicket，详见 获取更多转发信息
    // referrerInfo	Object	当场景为由另一个小程序打开时，返回此字段
    // referrerInfo.appId	String	来源小程序的 appId
    // referrerInfo.extraData	Object	来源小程序传过来的数据
  },
  onHide: function() {
     
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})