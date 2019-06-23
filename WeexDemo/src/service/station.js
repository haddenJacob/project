/**
 * 停车场模块
 */

import {fetch} from '@/utils/fetch'


/**
 * 分页查询停车场信息
 * @param  {Number} page  当前页码，默认为1
 * @param  {Number} limit 每页数据条数，默认20
 * @return {[type]}       数组
 */
export function get(page=1,limit=20){
	return fetch('v1/station/list/address',{page:page,limit:limit},'GET')
}

/**
 * 根据经纬度查询
 * @param  {[type]} param 对象
 *                        {
 *                        	lat:经度,
 *                        	lng:纬度，
 *                        	len：范围
 *                        	step：步进数,
 *                        	page:当前页数，
 *                        	limit：每页条数
 *                        }
 * @return {[type]}     数组
 */
export function getByLngAndLat(param){
	return fetch('v1/station/get/position',param,'GET')
}