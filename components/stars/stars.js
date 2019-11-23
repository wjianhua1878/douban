// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0,
      observer(newVal,oldVal,changedPath){
        this.getRating();
      }
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
    getRating(){
      let _this = this;
      let score = _this.properties.score;
      let scoreText = score ? score : "未评分";
      let intScore = parseInt(score);
      //满星的星星数量
      let star1 = parseInt(intScore / 2);
      //半颗的星星数量
      let star2 = parseInt(intScore % 2);
      //灰色星星的数量
      let star3 = 5 - star1 - star2;
      _this.setData({
        star1,
        star2,
        star3,
        scoreText
      });
    }
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() { 
      this.getRating();    
    }
  }
})