import {fetch} from '@/common/config/fetch'


//user登录接口
/*
 * 
 * 
 * 
 * */
export function userLogin(number,password,flag){
	return fetch('/login',{number:number,password:password,flag:flag},'GET')
}
/*
注册：
   地址：/register
   请求参数：
          如果标志为1，参数为学生信息的所有字段。
          如果标志为2，参数为教师信息的所有字段。
   返回值：学生注册成功返回false
            教师注册一直返回true，但并不是注册成功，需管理员同
            意才为成功，如果返回false,则说明注册失败
 * 注册
 * */
export function register(
	flag,
	stdnumber,
	username,
	pwd,
	classname,
	sex,
	telephone,
	qq){
	return fetch('/register',{
		flag:flag,
		stdnumber:stdnumber,
		username:username,
		pwd:pwd,
		classname:classname,
		sex:sex,
		telephone:telephone,
		qq:qq
		},'GET')
}
	export function registerTeach(
	flag,
	technumber,
	username,
	pwd,
	techerdesc,
	sex,
	telephone,
	qq){
	return fetch('/register',{
		flag:flag,
		technumber:technumber,
		username:username,
		pwd:pwd,
		techerdesc:techerdesc,
		sex:sex,
		telephone:telephone,
		qq:qq
		},'GET')
}
/**
 * 退出
 */
export function loginout(number){
	return fetch('/loginout',{number:number},'POST')
}
/**
     根据用户账号查询用户信息：
           请求地址：/findbyuserid
           请求参数：flag必传
              flag为1时：学生账号stdnumber
              flag为2时：教师账号technumber
           返回值：学生或教师实体类
 */
export function findbyuserid(flag,stdnumber,technumber){
	return fetch('/findbyuserid',{flag:flag,stdnumber:stdnumber,technumber:technumber},'POST')
}
/**
 * 修改信息
 */
export function update(stdnumber,username,pwd,classname,sex,telephone,qq,flag){
	return fetch('/update',{stdnumber:stdnumber,
	username:username,
		pwd:pwd,
	classname:classname,
	sex:sex,
	telephone:telephone,
	qq:qq,
	flag:flag},'GET')
}
/**
4.作业展示：
          请求地址：/manerger/showtask
          请求参数：
               用户名：username
               班级名称 :classname
                页面大小：pagesize（可选）
               当前页面：pagenow （可选）
          返回值：作业类集合
 */
export function showtask(username,classname,pagenow,pagesize){
	return fetch('/showtask ',{
		username:username,
		classname:classname,
		pagenow:pagenow,
		pagesize:pagesize
	},'POST')
}
/**
 作业统计：
      请求地址：/statistics
      请求参数：
          作业id：taskid
          班级名称：classname
      返回值：成功返回statisticsResult，统计失败返回空
       statisticsResult包含如下属性：
        number1:已交人数
        number2：未交人数
        number3：总人数
        yijiao:已交学生集合（包含学号和姓名两个属性）
        weijiao:未交学生集合（包含学号和姓名两个属性）
 */
export function statistics(taskid,classname){
	return fetch('/statistics',{taskid:taskid,classname:classname},'GET')
}
/**
学生查询已交作业的历史记录：
       请求地址：/findallhistory
       请求参数：
            学生学号：stdnumber
       返回值：作业历史记录类集合
 */
export function findallhistory(stdnumber){
	return fetch('/findallhistory',{stdnumber:stdnumber},'GET')
}
/**
教师查看已发布的历史作业：
       请求地址：/findalltask
       请求参数：
            教师姓名：username
        返回值：作业类集合
 */
export function findalltask(username){
	return fetch('/findalltask',{username:username},'GET')
}
/**
答疑模块：
      学生提问：
          请求地址：/ask
          请求参数：  
              所属班级 (classname)   
              提问的老师的账号：(technumber)这里得账号可以通过查询老师信息那个接口获得
              提问问题的学生账号（number）
              提问问题的学生姓名（username）
              问题描述 (problemdesc)
          返回值：成功返回true,失败返回false
 */
export function ask(
	classname,
	technumber,
	number,
	username,
	problemdesc){
	return fetch('/ask',{
		classname:classname,
		technumber:technumber,
		number:number,
		username:username,
		problemdesc:problemdesc
	},'GET')
}
/**
   查询所有用户信息：
            请求地址：/finduserall
            请求参数：
                flag为1时查询学生
                flag为2时查询教师
            返回值：学生或教师实体类集合
 */
export function finduserall(flag){
	return fetch('/finduserall',{flag:flag},'GET')
}
/**
  
       学生查看自己提的问题及问题所带的回复：
           请求地址：/stdfindproblem
           请求参数：
               学生账号：stdnumber
           返回值：成功返回List<AnserResult>，失败返回空
                   AnserResult包含两个属性，第一个是问题信息，也就是问题类，
                   第二个是回复信息类集合
 */
export function stdfindproblem(stdnumber){
	return fetch('/stdfindproblem',{stdnumber:stdnumber},'GET')
}
/**
      老师查看未解答的问题及问题所带的回复：
           请求地址：/techfindproblem
           请求参数：
               老师账号：technumber
           返回值：成功返回List<AnserResult>，失败返回空
                   AnserResult包含两个属性，第一个是问题信息，也就是问题类，
                   第二个是回复信息类集合
 */
export function techfindproblem(technumber){
	return fetch('/techfindproblem',{technumber:technumber},'GET')
}
/**
      老师或学生回复问题：
          请求地址：/answer
          请求参数：
               问题id：problemid
               回复人的账号：number
               回复人的姓名：username
               回复的信息：answerdesc
               身份标志：flag（0表示学生，1表示老师）
           返回值：成功返回true,失败返回false
 */
export function answer(problemid,number,username,answerdesc,flag){
	return fetch('/answer',{
		problemid:problemid,
		number:number,
		username:username,
		answerdesc:answerdesc,
		flag:flag
	},'GET')
}


