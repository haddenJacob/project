import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入项目配置
import {app} from 'common/config/env'

//导入模块路由文件
import MainIndex from './main' //主路由配置

import Login from './login' //登陆路由配置

const router =  new Router({
  routes: [
    ...MainIndex,
    ...Login,
  ]
})

export default router

// afterEach钩子函数
router.afterEach((to, from, next) => {
  let app_name = to.name //获取当前路由页面的name属性
  if(app_name==undefined){//如果name属性不存在的话也是undefined，这里不需要再判断
     app_name = app.name//如果name属性没有定义，使用env中配置的名称
  }

  document.title = app_name//设置当前路由的名称
})