/**
 * 地址接口
 */

import {fetch} from '@/utils/fetch'

/**
 * 获取地址
 * @param  {Number} page  当前页数，默认为1
 * @param  {Number} limit 每页数据条数,默认20
 * @param  {Object} address 地址对象
 *                          {
 *                          	provice:省,
 *                          	city:市,
 *                          	country:县,
 *                          	village:村，
 *                          	desc:详细描述,
 *                          	citycode:街道编号,
 *                          	neighborhood:'',
 *                          	street:街,
 *                          	township:道,
 *                          	
 *                          	
 *                          }
 * @return {[type]}       地址数组
 */
export function get(address={},page=1,limit=20){
	return fetch('v1/address/get',{address:address,page:page,limit:limit},'GET')
}

