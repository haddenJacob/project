import {fetch} from '@/common/config/fetch'


//user登录接口
/*
 
 * 
 * 
 * */
export function userLogin(number,password,flag){
	return fetch('/login',{number:number,password:password,flag:flag},'GET')
}
/**
 * 学生注册
 * 				number:'',
				name:'',
				sex:'',
				tel:'',
	            value1: '',
	            value2: '',
	            classname:'',
	            qq:'',
	     		password:'',
	     		newpassword:'',	
 */
export function studentRegistre(studentnum,studentname,studenttel,studentsex,studentcode,studenthouse,studentclass,studentqq,studentpassword,flag){
	return fetch('/registre',{
		studentnum:studentnum,
		studentname:studentname,
		studenttel:studenttel,
		studentsex:studentsex,
		studentcode:studentcode,
		studenthouse:studenthouse,
		studentclass:studentclass,
		studentqq:studentqq,
		studentpassword:studentpassword,
		flag:flag},'GET')
}
/**
 * 宿管注册
 * 				number:'',
				name:'',
				sex:'',
				tel:'',
	            value1: '',
	            value2: '',
	            classname:'',
	            qq:'',
	     		password:'',
	     		newpassword:'',	
 */
export function houseRegistre(housemannum,housemanname,housemantel,housemansex,housemancode,housemanqq,housemanpassword,flag){
	return fetch('/registre',{
		housemannum:housemannum,
		housemanname:housemanname,
		housemantel:housemantel,
		housemansex:housemansex,
		housemancode:housemancode,
		housemanqq:housemanqq,
		housemanpassword:housemanpassword,
		flag:flag},'GET')
}
/**
 * 维修注册
 * 				number:'',
				name:'',
				sex:'',
				tel:'',
	            value1: '',
	            value2: '',
	            classname:'',
	            qq:'',
	     		password:'',
	     		newpassword:'',	
 */
export function updatRegistre(updatmannum,updatmanname,updatmantel,updatmansex,updatmanqq,updatmanpassword,flag){
	return fetch('/registre',{
		updatmannum:updatmannum,
		updatmanname:updatmanname,
		updatmantel:updatmantel,
		updatmansex:updatmansex,
		updatmanqq:updatmanqq,
		updatmanpassword:updatmanpassword,
		flag:flag},'GET')
}
/**
   修改：
       请求地址：/update
       请求参数：
          如果标志为1，参数为学生信息的所有字段。
          如果标志为2，参数为宿管员信息的所有字段。
          如果标志为3，参数为管理员信息的所有字段。
       返回值：
           成功返回true,失败返回false
 */
export function studentupdate(
	flag,
	studentnum,
	studentname,
	studenttel,
	studentsex,
	studenthouse,
	studentcode,
	studentclass,
	studentqq,
	studentpassword){
	return fetch('/update',{
		flag:flag,
		studentnum:studentnum,
		studentname:studentname,
		studenttel:studenttel,
		studentsex:studentsex,
		studenthouse:studenthouse,
		studentcode:studentcode,		
		studentclass:studentclass,
		studentqq:studentqq,
		studentpassword:studentpassword},'GET')
}
export function updatupdate(
	flag,
	updatmanname,
	updatmannum,
	updatmanpassword,
	updatmanqq,
	updatmansex,
	updatmantel){
	return fetch('/update',{
		flag:flag,
		updatmanname:updatmanname,
		updatmannum:updatmannum,
		updatmanpassword:updatmanpassword,
		updatmanqq:updatmanqq,
		updatmansex:updatmansex,
		updatmantel:updatmantel},'GET')
}
	
	/**
	 * 查询用户数据信息

* */
export function findbyuserid(updatmannum,studentnum,housemannum,flag){
	return fetch('/findbyuserid',{updatmannum:updatmannum,studentnum:studentnum,housemannum:housemannum,flag:flag},'GET')
}
/**
     资源上传：
         请求地址:/uploadfile
         请求参数：
            学生学号：studentnum
            学生姓名：studentname
            文件类型：sharetype
          返回值：成功返回true,失败返回false
 */
export function uploadfile(studentnum,studentname,sharetype){
	return fetch('/uploadfile',{studentnum:studentnum,studentname:studentname,sharetype:sharetype},'GET')
}
/**
    添加报修任务：
          请求地址：/insertfix
          请求参数：
          维修表的全部字段（除fixid和fiximage以外）
          返回值：成功返回true,失败返回false
 */
export function insertfix(
	studentnum,
	studentname,
	fixtime,
	studentcode,
	studenthouse,
	fixdesc,
	fixflag){
	return fetch('/insertfix',{
		studentnum:studentnum,
		studentname:studentname,
		fixtime:fixtime,
		studentcode:studentcode,
		studenthouse:studenthouse,
		fixdesc:fixdesc,
		fixflag:fixflag
	},'GET')
}
/**
      查询所有维修任务：
            请求地址：/findtaskall
            请求参数：无
            返回值：维修任务集合类，失败返回空
 */
export function findtaskall(){
	return fetch('/findtaskall','GET')
}
/**
      修改维修任务状态：（此接口用于维修员，当维修员完成任务后就要将此任务标记为已处理）
            请求地址：/updatetaskstaut
            请求参数：
                任务状态 ：taskflag（0表示未处理，1表示已处理）
                维修任务id：taskid
            返回值：成功返回true,失败返回false;
 */
export function updatetaskstaut(taskid,taskflag){
	return fetch('/updatetaskstaut',{
		taskid:taskid,
		taskflag:taskflag
	},'GET')
}
/**
      根据维修任务id删除维修任务：
            请求地址：/deletetask
            请求参数：
                维修任务id：taskid 
            返回值：成功返回true,失败返回false;
 */
export function deletetask(taskid){
	return fetch('/deletetask',{
		taskid:taskid
	},'GET')
}
//投诉模块
/**
   添加投诉信息：
         请求地址：/insertcom     
         请求参数：
               studentnum：学号
               number：被投诉人账号
               username：背投诉人姓名
	       studentname：名字	
	       complaindesc：投诉描述
         返回值：成功返回true,失败返回false;
 */
export function insertcom(studentnum,studentname,number,username,complaindesc){
	return fetch('/insertcom',{
		studentnum:studentnum,
		studentname:studentname,
		number:number,
		username:username,
		complaindesc:complaindesc
	},'GET')
}
//评价模块
/**
     添加评价：
         请求地址：/insertassess
         请求参数：
              studentnum：学号
              studentname：名字
              assessdesc：评价描述
              assesscode：评价星级
              taskid：评价任务id
         返回值：成功返回true,失败返回false;
 */
export function insertassess(studentnum,studentname,taskid,assesscode,assessdesc){
	return fetch('/insertassess',{
		studentnum:studentnum,
		studentname:studentname,
		taskid:taskid,
		assesscode:assesscode,
		assessdesc:assessdesc
	},'GET')
}
/**
    查询所有评价：
         请求地址：/findassessall
         请求参数：无
         返回值：评价信息类集合
 */
export function findassessall(){
	return fetch('/findassessall','GET')
}
//通知
/**
       发布通知：
         请求地址：/releasenotice
         请求参数：
             通知实体类（除id，发布时间）
         返回值：成功返回true,失败返回false;
 */
export function releasenotice(
	housemannum,
	housemanname,
	noticedesc,
	noticehose
){
	return fetch('/releasenotice',{
		housemannum:housemannum,
		housemanname:housemanname,
		noticedesc:noticedesc,
		noticehose:noticehose
	},'GET')
}
/**
      查询所有通知：
         请求地址：/findallnotice
         请求参数：无
         返回值：成功返回通知类集合，失败返回null
 */
export function findallnotice(){
	return fetch('/findallnotice','GET')
}
/**
    根据投诉id查询投诉反馈信息：
            请求地址：/findcomplainId
            请求参数：
                 投诉id：complaindescid(改为通过账号获取number)
            返回值：投诉表信息集合
 */
export function findcomplainId(complaindescid){
	return fetch('/findcomplainId',{complaindescid:complaindescid},'GET')
}