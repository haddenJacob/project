$(function(){
	
	
	layer.load(2);
	deviceFun.findAll(deviceallurl,'',type='GET').then(res =>{
      layer.closeAll('loading');
      console.log(res)
            if(res.code == '0'){
                layer.msg("获取成功");
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
		                	deviceFun.textaddmsg(thisData[i])
		                }
//				      console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
// 					  console.log(obj.limit); //得到每页显示的条数
   					  console.log(thisData); //得到每页显示的条数
   					  
				    }
				  });
				  })
                
                return;
            }else{
                layer.msg("获取失败，刷新");return;
            }
        }).catch(err =>{
            layer.msg(err.msg);return;
        })
})

var deviceFun={
	findAll:function(url,params,type){
		return fetch(url,{},type)
	},
	textaddmsg:function(param){
		let msgText = ''
		let msgcontain = $('.textmsg')
//		msgcontain.empty()
		let textwork = '正常使用'
		if(param.mineDeviceWorkflag =='0'){
			textwork = '正常使用'
		}else{
			textwork = '<span>需要维修</span>'
		}
		msgText+='<tr>'
		msgText+='<td>'+param.mineDeviceId+'</td>'
		msgText+='<td>'+param.mineDeviceName+'</td>'
		msgText+='<td>'+param.mineDeviceCode+'</td>'
		msgText+='<td>'+param.mineDeviceCompany+'</td>'
		msgText+='<td>'+param.mineDevicePrice+'元</td>'
		msgText+='<td>'+param.mineDeviceData+'</td>'
		msgText+='<td>'+textwork+'</td>'
		msgText+='<td>'+param.mineDeviceWxname+'</td>'
		msgText+='<td>'+param.mineDeviceWxtel+'</td>'
		msgText+='<td>'+param.mineDeviceWxcount+'</td>'
		msgText+='</tr>'
		msgcontain.append(msgText)
	}
}
