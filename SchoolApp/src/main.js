// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Element from 'element-ui'
//ajax

//vuex路由问题
import Vuex from 'vuex'
import store from '@/store/store'

Vue.use(Vuex)
import axios from 'axios'
//服务service
import APIService from '@/service'
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ajax = axios
Vue.prototype.$api = APIService
Vue.prototype.$store = store

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//路由拦截
router.beforeEach((to,from,next) => {
    if(to.matched.some( m => m.meta.auth)){
        // 对路由进行验证
        if(store.state.isLogin=='100') { // 已经登陆
            next()     // 正常跳转到你设置好的页面
        }else{
            // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
　　 　　　　next({path:'/',query:{ Rurl: to.fullPath} })
 　　　　　} 
　　　　}else{ 
　　　　　　next() 
　　} 
})