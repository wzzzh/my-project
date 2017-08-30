import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    loginState:false,
    loginMess:[{
      userName:'admin',
      passWord:'admin'
    }],
    login:{
      userName:'',
      passWord:''
    }
  }
})

export default store;
