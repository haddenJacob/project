import {api_baseUrl} from '@/common/base/baseUrl/env'
//import {axios} from 'axios'
/*
简化ajax请求
 */
export function fetch(url,param={},type='GET',async=false,header){
	return new Promise((resolve,reject) => {
		ajax({
			method:type,
			url:url,
			data:param,
			async:async,
			contentType:header,
			succss:function(res){//成功回调
				let responseJSON = JSON.parse(res)
			    resolve(responseJSON)
			 },
			failed:function(code){
				//自定义网络异常值  js ajax返回值
				reject(1)//网络异常回调
				resolve(1)
			}
		})	
	})
}
/*
封装ajax请求
 */
export  function ajax(options){//options =  {url:'',method:'',data:'',callback:'',async:''}
    //默认参数
    options.url = encodeURI(encodeURI(options.url)) || ''
    options.method = options.method || 'get'
    options.data = options.data || ''
    options.async = options.async || true
    options.baseUrl = options.baseUrl || api_baseUrl
    options.contentType = options.contentType || 'application/x-www-form-urlencoded'
    options.scriptCharset='UTF-8' 

    //函数回调
    options.callback = options.callback || ''

    //参数拼接
    var paramStr = '';
    for (let p in options.data) {
        if (options.data.hasOwnProperty(p)) {
            if (typeof(options.data[p]) == " function ") {
                options.data[p]();
            }
            else {
                paramStr += p + '=' + encodeURIComponent(options.data[p]) + "&";
            }
        }
    }
    //构造完整的url = 前缀+url+参数
    options.url =  options.baseUrl + options.url + '?' + paramStr 
    // options.url =  options.baseUrl + options.url
    //get请求-拼接url
    // if(options.method.toLowerCase() == 'get'){
    //     if(typeof options.data == 'object'){
    //         options.data = [];
    //         for (var k in options.data){
    //             options.data.push(k+'='+options.data[k]);
    //             options.data.join('&');
    //         }
    //     }
    //     options.url += (options.url.indexOf('?' == -1) ? '?' : '') + options.data;
    // }
    
    //post请求-转换字符串
       if(options.method.toLowerCase() == 'post'){
           if(typeof options.data == 'object'){
               var arrs = [];
               for (var k in options.data){
                   arrs.push(k+'='+options.data[k]);
               }
               options.data = arrs.join('&');
           }
       }
    //创建发送请求
    var xhr = window.XMLHttpRequest ?  new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); //兼容ie
    xhr.open(options.method,options.url,options.async);
    if(options.method == 'post'){
        xhr.setRequestHeader('Content-Type',options.contentType);
        xhr.setHeader("Content-type", "text/html;charset=UTF-8");
        xhr.send(options.data);
        // xhr.send(options.data);
    }else{
        xhr.send(null);
    }
    //异步请求
    if(options.async == true){
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
              callcall();
          }
        }
    }
    // xhr.abort(); // 取消异步请求
    //同步请求
    if(options.async == false){
        callcall();
    }
    //返回状态判断
    function callcall(){
        if(xhr.status == 200){
            options.succss(xhr.responseText)
        }else if(xhr.status == 404){//请求失败
        	if(options.error)
        		options.error(xhr.status + xhr.statusText)
        }else if(xhr.status==0){
        	if(options.failed)//网络原因错误
        		options.failed(xhr.status)
        }else{
        	options.callback('error:' + xhr.status + xhr.statusText)
        }
    }
};
//请求方式

//           this.$ajax({
//			      method: 'post',
//			      url: 'http://localhost:8080/cloud_note/user/login.do',
//			      params: {
//			      	name:formName.pass,password:formName.checkPass
//			      },
//			   })
//			   //请求成功后执行then          如果直接在里面访问 this，无法访问到 Vue 实例，this指向发生了变化。建议使用箭头函数,下面有讲
//			   .then(function (response) {
//			        console.log(response);   //处理后台返回的数据
//			     }) 
//			   //请求失败后执行catch
//			   .catch(function(err){
//			        console.log(err)
//			     }) 


//		this.$api.user.userLogin(formName.pass,formName.checkPass).then(response=>{
//			console.log(response.data);
//		});