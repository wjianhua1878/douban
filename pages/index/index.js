//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:[],//电影列表
    tv:[],//电视
    varietyShow:[]//综艺

  },
  onLoad: function() {
    wx.request({//电影
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
      success: res => {
        console.log(res);
        console.log(res.data.subject_collection_items);
        let movieArr = res.data.subject_collection_items;//[{},{}]
        this.setData({
          movies: movieArr
        })
      }
    });
    wx.request({//电视剧
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
      success: res => {
        console.log(res);
        console.log(res.data.subject_collection_items);
        let tvArr = res.data.subject_collection_items;//[{},{}]
        this.setData({
          tv: tvArr
        })
      }
    }); 
    wx.request({//综艺
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
      success: res => {
        console.log(res);
        console.log(res.data.subject_collection_items);
        let varietyShowArr = res.data.subject_collection_items;//[{},{}]
        this.setData({
          varietyShow: varietyShowArr
        })
      }
    });
    console.log(this.data);
  }
})