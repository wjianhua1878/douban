// components/searchBar/searchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isNavigator:{
      type:Boolean,
      value:false
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
    onInputEvent:function(event){
      // console.log(event);
      let value = event.detail.value;
      let data = {
        value
      }
      this.triggerEvent('searchInput', value);
    }
  }
})
