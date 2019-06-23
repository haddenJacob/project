/**
 * 用户模块
 */

import {fetch} from '@/utils/fetch'
/**
 * 用户登陆
 * @param  {[type]} username 电话号码
 * @param  {[type]} password 密码
 * @return {[type]} 回调返回用户的ID，需要存储在本地缓存中，存储key最好为uid
 */
export function login(username='',password=''){
	return fetch('v1/user/login',{account:username,pwd:password},'POST')
}

/**
 * 用户注册
 * @param  {Object} param 对象
 *                        {
 *                        	account:电话号码(账号),
 *                        	tel:电话号码,
 *                        	face:头像,
 *                        	idCard:生分证号码,
 *                        	pwd:密码，
 *                        }
 * @return {[type]}       
 */
export function register(param={}){
	return fetch('v1/user/reg',param,'POST')
}

/**
 * 获取短信验证码
 * @param  {[type]} tel 电话号码
 * @return {[type]}     返回验证码
 */
export function getCode(tel){
	return fetch('v1/msg/code',param,'GET')
}

/**
 * 根据用户ID查询用户的账号信息
 * @param  {String} uid 用户ID,如果uid为空则从本地存储中读取uid的key值
 * @return {[type]}  用户信息
 */
export function info(uid=''){
	if(uid=='')
		uid=localStorage.getItem('uid')
	return fetch('v1/user/info',{uid:uid},'GET')
}

/**
 * 判断是否登陆
 * @return {Boolean} true:登陆 false:未登陆
 */
export function isLogin(){
	let uid = localStorage.getItem('uid')
	if(uid==null || uid==undefined || uid=='')
		return false
	return true
}
/**
 * 退出登陆
 * @return {[type]}
 */
export function logout(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
}

