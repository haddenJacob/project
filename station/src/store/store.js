import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
state:{
    isLogin:0,          //初始时候给一个  isLogin=0  表示用户未登录
},

mutations:{
    changeLogin(state,data){
        state.isLogin = data;
    }

} 
  
})