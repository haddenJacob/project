import {fetch} from '@/common/config/fetch'


/**
 * 页面主要接口
 */
export function notice(number,classname){
	return fetch('/seenotice',{number:number,classname:classname},'GET')
}
/**
 * 发布公告
 */
export function releasenotice(username,classname,desc){
	return fetch('/releasenotice',{username:username,classname:classname,desc:desc},'GET')
}
/**
 * 上传资源
 */
export function uploadfile(classname,username,type){
	return fetch('/uploadfile',{classname:classname,username:username,type:type},'GET')
}
/**
 * 资源获取
 */
export function seefile(number,classname,pagesize,pagenow ){
	return fetch('/seefile',{number:number,classname:classname,pagesize:pagesize,pagenow:pagenow},'GET')
}
/**
 * 资源下载
 */
export function downfile(path,filename){
	return fetch('/downfile',{path:path,filename:filename},'GET')
}
/*
 * 删除资源
 */
export function deleteFile(id,path){
	return fetch('/deletefile',{id:id,path:path},'GET')
}
/**
 * 作业发布
 */
export function taskrelease(username,coursename,classname,taskname,endtime,techer){
	return fetch('/taskrelease ',{username:username,coursename:coursename,classname:classname,taskname:taskname,endtime:endtime,techer:techer},'GET')
}
/**
 * 作业获取
 */
export function showtask(username,classname){
	return fetch('/showtask ',{username:username,classname:classname},'GET')
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
	return fetch('/finduserall ',{flag:flag},'GET')
}
/**
 *修改信息：
   地址：/update
   请求参数：
          请求参数：
          如果标志为1，参数为学生信息的所有字段。
          如果标志为2，参数为教师信息的所有字段。
          如果标志为3，参数为管理员信息的所有字段。
   返回值：返回false表示修改失败，返回true则修改成功
 */
export function updateStu(
	flag,
	classname,
	pwd,
	qq,
	sex,
	stdnumber,
	telephone,
	username
){
	return fetch('/update ',{
		flag:flag,
		classname:classname,
		pwd:pwd,
		qq:qq,
		sex:sex,
		stdnumber:stdnumber,
		telephone:telephone,
		username:username
	},'GET')
}
export function updateTeach(
	flag,
	techerdesc,
	pwd,
	qq,
	sex,
	technumber,
	telephone,
	username
){
	return fetch('/update ',{
		flag:flag,
		techerdesc:techerdesc,
		pwd:pwd,
		qq:qq,
		sex:sex,
		technumber:technumber,
		telephone:telephone,
		username:username
	},'GET')
}
/**
删除信息：
     地址：/delete
     请求参数：
          如果标志为1，参数为学生账号
          如果标志为2，参数为教师账号。
     返回值：返回false表示修改失败，返回true则修改成功
 */
export function deletemsg(flag,stdnumber,technumber){
	return fetch('/delete ',{flag:flag,stdnumber:stdnumber,technumber:technumber},'GET')
}
/**
     查询所有申请信息
        请求地址：/findall
         请求参数：无
         返回值：
           申请信息集合类：List<applyPojo>
 */
export function findall(){
	return fetch('/findall ','GET')
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
     查询你所有班级信息：
          请求地址：/findclassall
          请求参数：无
          返回值：班级实体类集合
 */
export function findclassall(){
	return fetch('/findclassall','GET')
}
/**
     修改班级信息：
          请求地址：/updateClass
          请求参数：
              班级信息表里的参数
          返回值：成功返回true，失败返回false
 */

export function updateClass(classid,classname,peoplenum,technumber){
	return fetch('/updateClass',{
		classid:classid,
		classname:classname,
		peoplenum:peoplenum,
		technumber:technumber},'GET')
}
/**
     删除班级信息：
          请求地址：/deleteclass
          请求参数：
                班级id：classid
          返回值：成功返回true，失败返回false
 */
export function deleteclass(classid){
	return fetch('/deleteclass',{
		classid:classid},'GET')
}