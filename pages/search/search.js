// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput:false,
    searchText:'',
    tagList:[
      {tagName:'面试'},
      {tagName:'Studio3'},
      {tagName:'动画'},
      {tagName:'自定义View'},
      {tagName:'性能优化 速度'},
      {tagName:'gradle'},
      {tagName:'Crmera 相机'},
      {tagName:'代码混淆 安全'},
      {tagName:'逆向 安全'}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showInput: function(){
    this.setData({
      showInput:true
    })
  },

  hideInput: function(){
    this.setData({
      showInput:false
    })
  },

  clickTag: function(e){
    console.log(e.currentTarget.dataset.name)
    this.setData({
      searchText:e.currentTarget.dataset.name,
      showInput:true
    })
  },

  cleanSearchText: function(){
    this.setData({
    searchText:''
    })
  },

  inputTyping: function(e){
    console.log(e)
    this.setData({
      searchText: e.detail.value
    });
  }

})