import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//导入模块路由文件
//import MainIndex from './main' //主路由配置
//
//import Login from './login' //登陆路由配置

//const router =  new Router({
//routes: [
//  ...MainIndex,
//  ...Login,
//]
//})
export default new Router({
routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
]
})
