// new.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"2017-01-01",
    exercises: {"name":"胸", "value":"卧推：4*100"}
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
   * 当从routine中新建一个健身计划时， 更新默认列表的内容
   */
  onShow: function () {
    console.log('新建名称：', app.globalData.tempName)
    console.log('新建量：', app.globalData.tempValue)
    if (app.globalData.tempName != ""){
      this.data.exercises.name = app.globalData.tempName
    }
    if (app.globalData.tempValue != "") {
      this.data.exercises.value = app.globalData.tempValue
    }
    this.setData({
      exercises: this.data.exercises
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

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  itemSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    app.pushItem(e.detail.value)
    wx.navigateBack();
  }

  // insert: function () {
  //   var ex = this.data.exercises;
  //   ex.push(this.data.exercises.length);
  //   this.setData({
  //     exercises: ex
  //   });
  // }
})