import wxRequest from './request.js'
const BASE_URL = 'https://m.douban.com/rexxar/api/v2/subject_collection/';
/**
 * https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items
 * https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items
 */
//获取首页电影列表
export const getMovies = (count=10) => wxRequest(BASE_URL + 'movie_showing/items?count='+count);

//获取首页即将上映的电影列表
export const getMoviesSoon = (count=10) => wxRequest(BASE_URL + 'movie_soon/items?count='+count);

//获取首页电视剧列表
export const getTv = (count = 10) => wxRequest(BASE_URL + 'tv_hot/items?count=' + count);

//获取首页综艺列表
export const getVarietyShow = (count = 10) => wxRequest(BASE_URL + 'tv_variety_show/items?count=' + count);

//获取首页近期热门电影列表
export const getHotMovies = (count = 10) => wxRequest(BASE_URL + 'movie_hot/items?count=' + count);

//获取电影详情
export const getInfoById = (type,id) => wxRequest('https://m.douban.com/rexxar/api/v2/'+type+'/' + id);

//获取电影详情页标签
export const getTags = (type,id,count = 8) => wxRequest('https://m.douban.com/rexxar/api/v2/'+type+'/'+id+'/tags?count='+count);

//获取短评
export const getComments = (type,id,star,count) => wxRequest('https://m.douban.com/rexxar/api/v2/'+type+'/'+id+'/interests?start='+star+'&count='+count);

//搜索电影
export const getMoviesByInfo = (info) => wxRequest('https://m.douban.com/rexxar/api/v2/search?type=movie&q=' + info);