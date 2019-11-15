// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    },
    starSize:{
      type:Number,
      value:25 //rpx
    },
    fontSize:{
      type:Number,
      value:25 //rpx
    },
    fontColor:{
      type:String,
      value:'#ccc'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() { // 在组件实例进入页面节点树时执行
      let _this = this;
      // console.log(_this.properties.score);
      let score = _this.properties.score;
      score =  score <=10 ? score : 10;
      // console.log(score);
      let scoreText = (score && (score>0)) ? score.toFixed(1) : "";
      
      let intScore = parseInt(score);
      //满星的星星数量
      let star1 = parseInt(intScore / 2);
      //半颗的星星数量
      let star2 = parseInt(intScore % 2);
      //灰色星星的数量
      let star3 = 5 - star1 - star2;
      // console.log(star1,star2,star3);
      _this.setData({
        star1,
        star2,
        star3,
        scoreText
      })
    }
  }
})