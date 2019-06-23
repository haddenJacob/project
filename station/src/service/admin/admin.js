import {fetch} from '@/common/config/fetch'


//admin申请表
/*
 
 * 
 * 
 * */
export function findall(){
	return fetch('/findall','GET')
}
/**
     
          申请同意：
          请求地址：/agree
          请求参数:
           申请信息id :applyid
          返回值：成功返回true，失败返回false;
 */
export function agree(applyid){
	return fetch('/agree',{applyid:applyid},'GET')
}
/**
         根据id删除申请信息:
         请求地址：/deletebyid
         请求参数：  
          申请信息id :applyid
          返回值:
         成功返回true，失败返回false
 */
export function deletebyid(applyid){
	return fetch('/deletebyid',{applyid:applyid},'GET')
}
/**
     修改申请信息
          请求地址：/updateApply
          请求参数:
             申请信息类
          返回值：成功返回true，失败返回false;
 */
export function updateApply(applyid,applydesc,createtime,flag,statu){
	return fetch('/updateApply',{applyid:applyid,applydesc:applydesc,createtime:createtime,flag:flag,statu:statu},'GET')
}
/**
      查询所有用户信息：
            请求地址：/findbyuserall
            请求参数：
                flag为1时查询学生
                flag为2时查询宿管员
                flag为3时查询维修员
            返回值：学生，宿管员，维修员实体类集合
 */
export function findbyuserall(flag){
	return fetch('/findbyuserall',{flag:flag},'GET')
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
export function update(flag,
	studentclass,
	studentcode,
	studenthouse,
	studentname,
	studentnum,
	studentpassword,
	studentqq,
	studentsex,
	studenttel){
	return fetch('/update',{
		flag:flag,
		studentclass:studentclass,
		studentcode:studentcode,
		studenthouse:studenthouse,
		studentname:studentname,
		studentnum:studentnum,
		studentpassword:studentpassword,
		studentqq:studentqq,
		studentsex:studentsex,
		studenttel:studenttel
	},'GET')
}
/**
    删除：
      请求地址：/delete
          如果标志为1，参数为学生账号。
          如果标志为2，参数为宿管员账号。
          如果标志为3，参数为管理员账号。
      返回值：
           成功返回true,失败返回false
 */
export function deleteMsg(flag,studentnum,housemannum,updatmannum){
	return fetch('/delete',{flag:flag,studentnum:studentnum,housemannum:housemannum,updatmannum:updatmannum},'GET')
}
//宿管接口
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

export function updateHouse(flag,
	housemanname,
	housemannum,
	housemancode,
	housemanpassword,
	housemanqq,
	housemansex,
	housemantel){
	return fetch('/update',{
		flag:flag,
		housemanname:housemanname,
		housemannum:housemannum,
		housemancode:housemancode,
		housemanpassword:housemanpassword,
		housemanqq:housemanqq,
		housemansex:housemansex,
		housemantel:housemantel
	},'GET')
}
	//维修接口
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

export function updateUpdate(flag,
	updatmanname,
	updatmannum,
	updatmanqq,
	updatmanpassword,
	updatmansex,
	updatmantel){
	return fetch('/update',{
		flag:flag,
		updatmanname:updatmanname,
		updatmannum:updatmannum,
		updatmanqq:updatmanqq,
		updatmanpassword:updatmanpassword,
		updatmansex:updatmansex,
		updatmantel:updatmantel
	},'GET')
}
/**
     查看未处理的报修任务：（这是管理员查看，不是维修人员的那个任务，那是另一个表）
          请求地址：/findfixbystaut
          请求参数：无
          返回值：维修表类集合
     
 */
export function findfixbystaut(){
	return fetch('/findfixbystaut','GET')
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
   改变报修任务状态：
          请求地址：/updatefix
          请求参数：
               报修任务id：fixid
               保修任务状态：fixflag(0是未受理，1是已受理，2是已处理)
          返回值：成功返回true,失败返回false
           
 */
export function updatefix(fixid,fixflag){
	return fetch('/updatefix',{fixid:fixid,fixflag:fixflag},'GET')
}
/**
     删除报修任务：
          请求地址：/deletefix
          请求参数：
               维修任务id：fixid
          返回值：成功返回true,失败返回false
 */
export function deletefix(fixid){
	return fetch('/deletefix',{fixid:fixid},'GET')
}
/**
      查看资源：
          请求地址：/seefile
          请求参数：无
          返回值：资源类集合
 */
export function seefile(){
	return fetch('/seefile','GET')
}/**
      删除资源：
          请求地址：/deletefile
          请求参数：
               资源id：shareid
          返回值：成功返回true,失败返回false
  */
export function deletefile(shareid){
	return fetch('/deletefile',{shareid:shareid},'GET')
}
/**
      维修任务分配：
           请求地址：/addtask
           请求参数：
               任务描述：taskdesc（也就是报修描述里得内容）
               任务处理人：taskman（通过查询维修人来选择得其中一个）
               任务地点：taskaddress（将报修得寝室号和楼栋号合起来）
               任务处理时间：tasktime
               任务优先级：taskfirst（0表示预约，1表示紧急报修任务）
           返回值：成功返回true,失败返回false;
 */
export function addtask(taskdesc,taskman,taskaddress,tasktime,taskfirst){
	return fetch('/addtask',{
		taskdesc:taskdesc,
		taskman:taskman,
		taskaddress:taskaddress,
		tasktime:tasktime,
		taskfirst:taskfirst
	},'GET')
}
//投诉
/**
   查询所有投诉信息：
         请求地址：/finfcomall      
         请求参数：无
         返回值：投诉信息类集合
 */
export function finfcomall(){
	return fetch('/finfcomall','GET')
}
/**
   删除投诉信息：
         请求地址：/deletecom     
         请求参数：
               complaindescid：投诉信息id
         返回值：成功返回true,失败返回false;
 */
export function deletecom(complaindescid){
	return fetch('/deletecom',{complaindescid:complaindescid},'GET')
}
/**
   添加投诉反馈信息： 
            请求地址：/insertfeedback
            请求参数：
                 投诉id：complaindescid
                 反馈描述：feedbackdesc
                 反馈人账号：number
                 反馈人姓名：username   
            返回值：成功返回true,失败返回false;
 */
export function insertfeedback(complaindescid,feedbackdesc,number,username){
	return fetch('/insertfeedback',{
		complaindescid:complaindescid,
		feedbackdesc:feedbackdesc,
		number:number,
		username:username
	},'GET')
}
