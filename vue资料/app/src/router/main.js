import {app} from 'common/config/env'
//项目首页
const MainIndex = r => require.ensure([], () => r(require('pages')), 'main')

//404页面  --  路由找不到时加载
const Error404 = r => require.ensure([], () => r(require('pages/error/404')), 'error')
export default [
	{
	    path: '/',
	    redirect: '/index',
	},
	{
	    path: '/index',
	    component: MainIndex,
	},
	{//404配置
      path: "*",
      name:app.name_404,
      component: Error404,
    }
]