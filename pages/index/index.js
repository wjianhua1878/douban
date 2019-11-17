//index.js
//获取应用实例
import {
  getMovies,
  getMoviesSoon,
  getHotMovies,
  getTv,
  getVarietyShow
} from '../../service/api/index.js'
const app = getApp()

Page({
  data: {
    movies: [], //电影列表
    tv: [], //电视
    varietyShow: [], //综艺
    hotMovies: [], //热门电影
    movieSoon: []
  },
  onLoad: function() {

    //电影
    getMovies().then(res => {
      let movies = res.data.subject_collection_items; //[{},{}]
      this.setData({
        movies,
      })
    }).catch(err => {
      console.log(err);
    });

    //即将上映
    getMoviesSoon().then(res => {
      let movieSoon = res.data.subject_collection_items; //[{},{}      
      this.setData({
        movieSoon,
      })
    }).catch(err => {
      console.log(err);
    });
    //电视剧
    getTv().then(res => {
      let tv = res.data.subject_collection_items; //[{},{}      
      this.setData({
        tv,
      })
    }).catch(err => {
      console.log(err);
    });
    //综艺
    getVarietyShow().then(res => {
      let varietyShow = res.data.subject_collection_items; //[{},{}      
      this.setData({
        varietyShow,
      })
    }).catch(err => {
      console.log(err);
    });

    //近期热门电影
    getHotMovies().then(res => {
      let hotMovies = res.data.subject_collection_items; //[{},{}      
      this.setData({
        hotMovies,
      })
    }).catch(err => {
      console.log(err);
    });
    
  }
  
})