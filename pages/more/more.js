// pages/more/more.js
let count = 20;
import {
  getMovies,
  getMoviesSoon,
  getHotMovies,
  getTv,
  getVarietyShow
} from "../../service/api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    requestType:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options);
    this.data.type = options.type;
    let requestType = options.request;
  this.setData({
    requestType
  })
    let optionsType = options.type;
    let type = {
      "movies": () => {
        this.getRequestData(getMovies, 20);
        wx.setNavigationBarTitle({
          title: '电影',
        })
      },
      "tv": () => {
        this.getRequestData(getTv, 20)
      },
      "varietyShow": () => {
        this.getRequestData(getVarietyShow, 20)
      },
      "hotMovies": () => {
        this.getRequestData(getHotMovies, 20)
      },
      "movieSoon": () => {
        this.getRequestData(getMoviesSoon, 20)
      }
    }
    type[optionsType]();


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
    let type = {
      "movies": () => {
        this.getRequestData(getMovies, count);
        
      },
      "tv": () => {
        this.getRequestData(getTv, count);
      },
      "varietyShow": () => {
        this.getRequestData(getVarietyShow, count);
      },
      "hotMovies": () => {
        this.getRequestData(getHotMovies, count);
      },
      "movieSoon": () => {
        this.getRequestData(getMoviesSoon, count);
      }
    }
    type[this.data.type]();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getRequestData: function (fn, count = 10) {
    fn(count).then(res => {
      let result = res.data.subject_collection_items; //[{},{}]
      this.setData({
        lists: result,
      });
      wx.hideLoading();
    }).catch(err => {
      console.log(err)
    });
  },
})