// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import APIService from '@/service'
import Vuex from 'vuex'
import store from '@/store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(Vuex)
Vue.prototype.$api = APIService
Vue.prototype.$store = store
Vue.use(VueBlu)
Vue.config.productionTip = false

/* eslint-disable no-new */
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