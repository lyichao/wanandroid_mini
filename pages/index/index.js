//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList:[
      {uri:"https://wanandroid.com/blogimgs/9b9a4c7d-00d3-4e20-8f81-685467336de1.png"},
      {uri:"https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png"},
      {uri:"https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png"},
      {uri:"https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png"},
    ],
      itemList:[
          {}
      ],
      scrollDuration:500
  },

     /**
    * 监听用户滑动页面事件。
    * 请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。
    */
   onPageScroll: function(e) {

    console.log('触发onPageScroll事件')
    //动态设置滑动到顶部的时长，最近最远速度相差无几，演示效果暂不考虑性能。
  
 },
 /**
  *  滚动到页面顶部
  */
 scrollTop: function() {
   wx.pageScrollTo({
    scrollTop: 0,
    duration: this.data.scrollDuration
   })
 },

 gotoSearch: function(){
   wx.navigateTo({
     url: '../search/search',
   })
 },



})
