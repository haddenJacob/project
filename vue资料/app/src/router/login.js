import {app} from 'common/config/env'
//项目首页
const Login = r => require.ensure([], () => r(require('pages/login')), 'login')

export default [
	{
	    path: '/login',
	    component: Login,
	}
]