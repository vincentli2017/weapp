// workouts.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routine: []
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
    var routine = app.globalData.routine
    console.log('日常健身计划：', routine)
    this.data.routine = routine
    this.setData({
      routine: routine,
    })
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

  formSubmit: function(e) {
    console.log('根据日常训练，新建一个训练计划：', e.detail.value)
    app.createNewExercises(e.detail.value)
    wx.navigateTo({
      url: 'new'
    })
  }
})