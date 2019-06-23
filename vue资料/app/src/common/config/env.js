/*
项目配置
	1.配置项目默认名称
 */
export const app = {
	/*
	  项目主项目名称
	  说明：当访问某个路由时路由没有设置name属性，或者name属性为null或undefined时使用
	 */
	name:'WEB云桌面平台',
	name_404:'页面不存在',//默认404页面名称
	login_style:'primary',//登陆页面风格,配置显示的登陆界面风格，通过该配置可以指定不同风格的登陆界面访问
}

//api接口配置
export const api = {
	baseUrl:'http://47.94.167.18:8089/app/', //接口请求地址
	baseUrl_loc:'http://localhost:8080/app/v1',//本地模拟接口配置模拟
	version:'v1', //当前使用api默认版本，可以被覆盖
}

export const plugin = {
	appToken:'os123agkljfadioudfjalkwerdae234' //默认的统一插件的appToken[站内]
}