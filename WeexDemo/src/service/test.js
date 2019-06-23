/**
 * 模拟接口
 */

import {fetch} from '@/utils/fetch'
/**
 * 用户行程
 *  {
 * 	名字:
 * 公里:
 * 时间:
 * }
 * @return {[type]}
 */
export function getHistory(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'GET')
}
/**
 * 出借
 * 返回给后台出借人的账号:
 * @return {[type]}
 */
export function setBorrow(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'POST')
}
/**
 * 充值接口
 * 充值账号:
 * 金额:
 * @return {[type]}
 */
export function setRecharge(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'POST')
}

/**
 * 添加车牌
 * 车牌类型：
 * 车牌号码：
 * 车牌品牌：
 * 车牌型号：
 * 车牌年份：
 * 车牌颜色：
 * 是否添加自动扣费的一系列车数据：（boolean值）
 * 未实现
 * @param {[type]} param [description]
 */
export function addCarNumber(param){
	return fetch('v1/carinfo/addcn',param,'POST')
}
/**
 * 我的账单[非车主 需要车主授权]
 * 未实现
 * 返回{
 * 	停车场名字：
 * 多少钱：
 * 消费时间：
 * }
 * @param {[type]} param [description]
 */
export function carBill(param){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'POST')
}
/**
 * 最新消息
 * 返回的消息如下：{
 * 包括添加车牌信息：
 * 系统消息：
 * 充值成功消息：
 * 出借人消息：
 * }
 * @return {[type]}
 */
export function setDope(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'POST')
}
/**
 * 用户忘记密码修改密码提供的数据
 * 手机号获取后台数据后发送验证码
 * 对象{
 * 	手机号：
 *  验证码：
 *  新密码：
 * 再次输入密码：
 * }
 * @return {[type]}
 */
export function setNewPassword(){
	let uid = localStorage.getItem('uid')
	if(uid!=null)
		localStorage.removeItem('uid')
	return fetch('v1/user/history',{uid:uid},'POST')
}
