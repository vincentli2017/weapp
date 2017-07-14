//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  /**
   * 保存训练记录到历史记录里面
   */
  pushItem: function (item) {
    this.globalData.history.unshift(item)
    if (item.switch == true) {
      this.globalData.routine.unshift(item);
    }
    console.log('刚刚添加了新的健身记录：', item)
    console.log('最新历史记录为：',this.globalData.history)
  },

  /**
   * 将训练日常保存在global data，以方便新建训练时调用这些训练名称和训练量
   */
  createNewExercises: function (item) {
    this.globalData.tempName = item.tempName;
    this.globalData.tempValue = item.tempValue;
    console.log('刚刚更新了最近的训练记录名称：', item.tempName);
    console.log('刚刚更新了最近的训练记录量：', item.tempValue)
  },

  globalData: {
    userInfo: null,
    history: [{ "date": "2017-08-09", "name": "test", "value": "12312 12312" }],
    routine: [],
    tempName: "",
    tempValue: ""
  }
})
