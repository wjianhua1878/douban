//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:[],//电影列表
    tv:[],//电视
    varietyShow:[],//综艺
    comingSoon:[]//即将上映
   
   
  },
  onLoad: function() {
    wx.request({//电影
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=10',
      success: res => {
        // console.log(res);
        // console.log(res.data.subject_collection_items);
        let movieArr = res.data.subject_collection_items;//[{},{}]
        
        this.setData({
          movies: movieArr,
          
        })
      }
    });
    wx.request({//电视剧
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=10',
      success: res => {
        // console.log(res);
        // console.log(res.data.subject_collection_items);
        let tvArr = res.data.subject_collection_items;//[{},{}]
        this.setData({
          tv: tvArr,
        })
      }
    }); 
    wx.request({//综艺
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=10',
      success: res => {
        // console.log(res);
        // console.log(res.data.subject_collection_items);
        let varietyShowArr = res.data.subject_collection_items;//[{},{}
        this.setData({
          varietyShow: varietyShowArr
        })
      }
    });
    wx.request({//即将上映
      url: 'https://douban.uieee.com/v2/movie/coming_soon?count=10',
      header:{
        'content-type': 'json'
      },
      success: res => {
        console.log(res);
        // console.log(res.data.subject_collection_items);
        // let varietyShowArr = res.data.subject_collection_items;//[{},{}
        // this.setData({
        //   varietyShow: varietyShowArr
        // })
      }
    });
  },
  onClickNavigator(){
    wx.navigateTo({
      url: 'pages/movies_detail/movies_detail?image_url={{item.cover.url}}&title={{item.title}}&year={{item.year}}&original_title={{item.original_title}}&info={{item.info}}',
    })
  }
})