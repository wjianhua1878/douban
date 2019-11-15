// pages/more/more.js
let count = 20;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    this.data.type = options.type;
    if (options.type === 'movies') {
      wx.request({ //电影
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=20',
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let movieArr = res.data.subject_collection_items; //[{},{}]

          this.setData({
            lists: movieArr,

          })
        }
      });
    } else if (options.type === 'tv'){
      wx.request({//电视剧
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=10',
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let tvArr = res.data.subject_collection_items;//[{},{}]
          this.setData({
            lists: tvArr,
          })
        }
      }); 
    } else if (options.type === 'varietyShow'){
      wx.request({//综艺
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=10',
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let varietyShowArr = res.data.subject_collection_items;//[{},{}
          this.setData({
            lists: varietyShowArr
          })
        }
      });
    }
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showLoading({
      title: '加载中',
    });
    count = count + 10;
    if (this.data.type === 'movies'){
      wx.request({ //电影
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=' + count,
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let movieArr = res.data.subject_collection_items; //[{},{}]

          this.setData({
            lists: movieArr,
          });
          wx.hideLoading();
        }
      });
    }else if(this.data.type === 'tv'){
      wx.request({ //电视剧
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=' + count,
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let movieArr = res.data.subject_collection_items; //[{},{}]

          this.setData({
            lists: movieArr,
          });
          wx.hideLoading();
        }
      });
    } else if (this.data.type === 'varietyShow'){
      wx.request({ //综艺
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=' + count,
        success: res => {
          // console.log(res);
          // console.log(res.data.subject_collection_items);
          let movieArr = res.data.subject_collection_items; //[{},{}]

          this.setData({
            lists: movieArr,
          });
          wx.hideLoading();
        }
      });
    }
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})