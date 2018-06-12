Page({
    data:{
      title: ["属性名", "类型", "默认值","说明"],
      content: [{
        attr: "hover-class",
        types: "String",
        defaults: "none",
        help: "指定按下去的样式类。当 hover-class='none' 时，没有点击态效果"
      },{
        attr: "hover-start-time",
        types: "Number",
        defaults: "	50",
        help: "按住后多久出现点击态，单位毫秒"
      },{
        attr: "hover-stay-time",
        types: "Number",
        defaults: "	400",
        help: "手指松开后点击态保留时间，单位毫秒"
      }],
      exp: `<view class="section">
      < view class="section__title" > flex - direction: row</view >
      <view class="flex-wrp" style= "flex-direction:row;" >
      <view class="flex-item bc_green">1 < /view>
      < view class="flex-item bc_red" > 2 < /view>
      < view class="flex-item bc_blue" > 3 < /view>
      < /view>
      < /view>
      < view class="section" >
      <view class="section__title">flex - direction: column</view >
      <view class="flex-wrp" style= "height: 300px;flex-direction:column;" >
      <view class="flex-item bc_green" > 1 < /view>
      < view class="flex-item bc_red" > 2 < /view>
      < view class="flex-item bc_blue" > 3 < /view>
      < /view>
      </view>`
    },
    goExp: ()=>{
      wx.navigateTo({
        url: "/pages/view/views/exp/exp"
      })
    }
})