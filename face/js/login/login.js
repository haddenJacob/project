$(function(){
	$('.go').on('click',function(){
		let username = $(".username").val().trim()
		let password = $(".password").val().trim()
		let params = {username:username,password:password}
		if(username == ""){
			$.myAlert('输入账户不能为空');
		}
		if(username != ""&& password == ""){
			$.myAlert('输入密码不能为空');
		}
		if(username != "" && password != ""){
			layer.load(2);
			//此处演示关闭
			setTimeout(function(){
				layer.msg("加载服务器失败，重新尝试");return;
			}, 5000);
			logincommon.login(loginurl,params,type='POST')
			.then(res => {
				layer.closeAll('loading');
				// console.log(8)
				if(res.status == '1'){
					// console.log(cookieFun.addCookie()+"00")
					$.cookie('flag', res.status, { expires: 1, path: '/' });
					window.location.href = "../../pages/admin/admin.html"
				}else{
					$.myAlert('没有该用户');
				}
			})
		}
	})
  	$(document).keydown(function(e){
  		if( e.keyCode == 13 ){
		let username = $(".username").val().trim()
		let password = $(".password").val().trim()
		let params = {username:username,password:password}
		if(username == ""){
			$.myAlert('输入账户不能为空');
		}
		if(username != ""&& password == ""){
			$.myAlert('输入密码不能为空');
		}
		if(username != "" && password != ""){
			layer.load(2);
			//此处演示关闭
			setTimeout(function(){
				layer.msg("加载服务器失败，重新尝试");return;
			}, 5000);
			logincommon.login(loginurl,params,type='POST')
			.then(res => {
				layer.closeAll('loading');
//				console.log(res)
				if(res.status == '1'){
					$.cookie('flag', res.status, { expires: 0, path: '/' });
					window.location.href = "../../pages/admin/admin.html"
				}else{
					$.myAlert('没有该用户');
				}
			}).catch(err => {
//				if(res.status == '0'){
					$.myAlert('登录出错');
//				}				
			})
		}
  		}
  		
  	}); 
})

let logincommon = {
	login:function(loginurl,params,type){
		return fetch(loginurl,{username:params.username,password:params.password},type)
	},
	loginout:function(){}
}
