$(function () {
	//当前时间
	function getNowFormatDate() {//获取当前时间
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
		var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
		var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
				
		return currentdate;
	}
	var kk = getNowFormatDate()
	let params = {
		mineStaffFaceInUserCode:'',
		mineStaffFaceInUserDate:kk
	}
	layer.load(2);
	userData.todayUaerDatafun(searchinfaceurl,params,type='GET').then(res =>{
      layer.closeAll('loading');
      console.log(res)
            if(res.code == '0'){
                layer.msg("获取成功");
				let tatoll = $('.tatoll span')
				tatoll.empty()
				tatoll.append('<span>'+res.data.length+'</span>')
			//调用分页
			layui.use(['laypage', 'layer'], function(){
			  var laypage = layui.laypage
			  ,layer = layui.layer;
				  laypage.render({
				    elem: 'demo20'
				    ,count: res.data.length
				    ,limit: 30
				    ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
				    ,jump: function(obj){
				    let msgcontain = $('.textmsg')
					msgcontain.empty()
				      //模拟渲染
				      let thisData = res.data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
				      for(let i=0;i<thisData.length;i++){
		                	userData.textaddmsg(thisData[i])
		                }
//				      console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
// 					  console.log(obj.limit); //得到每页显示的条数
   					  console.log(thisData); //得到每页显示的条数
   					  
				    }
				  });
				  })
                
                return;
            }else{
                layer.msg("暂无当天数据");return;
            }
        }).catch(err =>{
            layer.msg(err.msg);return;
        })
//	console.log(22)
	console.log(kk)
})

var userData = {
	todayUaerDatafun:function(url,params,type){
		return fetch(url,{mineStaffFaceInUserCode:params.mineStaffFaceInUserCode,mineStaffFaceInUserDate:params.mineStaffFaceInUserDate},type)
	},
	textaddmsg:function(param){
		let msgText = ''
		let msgcontain = $('.textmsg')
//		msgcontain.empty()
		msgText+='<tr>'
		msgText+='<td>'+param.mineStaffFaceInUserId+'</td>'
		msgText+='<td>'+param.mineStaffFaceInUserName+'</td>'
		msgText+='<td>'+param.mineStaffFaceInUserSex+'</td>'
		msgText+='<td>'+param.mineStaffFaceInUserDate+'</td>'
		msgText+='<td>'+param.mineStaffFaceInUserCode+'</td>'
		msgText+='<td>'+param.mineStaffFaceInUserTel+'</td>'
		msgText+='</tr>'
		msgcontain.append(msgText)
	}
}
