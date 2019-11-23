// pages/movies_detail/movies_detail.js
import {
  getInfoById,
  getTags,
  getComments
} from '../../service/api/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies_detail: {},
    ellipsisIntro: true, // 文字是否收起，默认收起
    ellipsisComment: true, // 文字是否收起，默认收起
    comments:[]//短评
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    let type = options.type;
    this.setData({
      type,
      id
    })
    // console.log(options);

    //获取电影详情信息
    getInfoById(type,id).then(res => {
      let movies_detail = res.data;     
      this.setData({
        movies_detail,   
      });
    }).catch(err => {
      console.log(err);
    });

    //获取电影标签
    getTags(type,id).then(res=>{
      // console.log(res.data.tags);
      let tags = res.data.tags
      this.setData({
        tags
      })
    }).catch(err=>{
      console.log(err);
    });

    //获取短评
    getComments(type,id,0,3).then(res=>{
      // console.log(res);
      let comments = res.data.interests;//短评
      let commentsTotal = res.data.total;//总数
      this.setData({
        comments,
        commentsTotal
      })
    }).catch(err=>{
      console.log(err);
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
  * 收起/展开按钮点击事件
  */
  ellipsis: function (event) {
    let value;
    // console.log(event);
    let type = event.currentTarget.dataset.type;
    if(type === 'intro'){
    value = !this.data.ellipsisIntro;   
    this.setData({
        ellipsisIntro: value
      })
    }else if(type === 'comment'){
    value = !this.data.ellipsisIntro;
      value = !this.data.ellipsisComment;
      this.setData({
        ellipsisComment: value
      })
    }
    
  },
})