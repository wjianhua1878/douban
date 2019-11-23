// pages/comment/comment.js
import {getComments} from "../../service/api/index.js" 

let start = 0;
let count = 5;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '全部短评',
    })
    let type = options.type;
    let id = options.id;
    this.data.type = type;
    this.data.id = id;
    //获取短评
    getComments(type, id, 0, 20).then(res => {
      // console.log(res);
      let comments = res.data.interests;//短评
      let commentsTotal = res.data.total;//总数
      this.setData({
        comments,
        commentsTotal
      })
    }).catch(err => {
      console.log(err);
    })
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
    start = start + count;
    let id = this.data.id;
    let type = this.data.type;
    wx.showLoading({
      title: '加载中...',
    })
    getComments(type, id, start, count).then(res=>{
      let result = res.data.interests;
      let comments = this.data.comments;
      result.forEach(key=>{
        comments.push(key);
      })
      this.setData({
        comments
      });
      wx.hideLoading();
    }).catch(err=>{
      console.log(err);
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})