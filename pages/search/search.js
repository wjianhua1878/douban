// pages/search/search.js
import { getMoviesByInfo} from "../../service/api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    show:true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.setNavigationBarTitle({
      title: '搜索',
    });

    wx.getStorage({
      key: 'searchHistory',
      success: function(res) {
        console.log(res);
        let history = res.data;
        _this.setData({
          history
        })
      },
    })
  },
  searchInputEvent:function(event){
    let value = event.detail;
    getMoviesByInfo(value).then(res=>{
      // console.log(res);
      let movies = res.data.subjects;
      this.setData({
        movies: movies,
        show:false
      });
      // console.log(this.data.movies);
    }).catch(err=>{
      console.log(err);
    })
  },
/**
 * 点击搜索列表
 */
  onItemClick:function(event){
    // console.log(event);
    let type = event.currentTarget.dataset.type;
    let id = event.currentTarget.dataset.id;
    let title = event.currentTarget.dataset.title;
    let history = this.data.history;
    let isExcited = false;
    if(history){
      history.forEach(value => {
        if (value.id === id) {
          isExcited = true;
          return;
        }
      });
      if(!isExcited){
        history.unshift({
          title,
          id,
          type
        });
        wx.setStorage({
          key: 'searchHistory',
          data: history,
        })
      }
    }else{
      wx.setStorage({
        key: 'searchHistory',
        data: [{
          title,
          id,
          type
        }],
      })
    }
    wx.navigateTo({
      url: '/pages/movies_detail/movies_detail?type='+type+'&id='+id,
    })
  },
  /**
   * 点击清除
   */
  onClearEvent:function(){
    let _this = this;
    wx.removeStorage({
      key: 'searchHistory',
      success: function(res) {
        _this.setData({
          history:[]
        })
      },
    })
  },
  /**
   * 点击历史搜索
   */
  onClickHistoryEvent(event){
    let type = event.currentTarget.dataset.type;
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/movies_detail/movies_detail?type=' + type + '&id=' + id,
    })
  }
  
})