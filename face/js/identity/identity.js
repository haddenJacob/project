$(function(){
	/*
	 
	 * 
	 * 摄像头
	 * */
//  	var saveArray = {};//存储人脸位置
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var tracker = new tracking.ObjectTracker('face');
      	tracker.setInitialScale(4);
      	tracker.setStepSize(2);
      	tracker.setEdgesDensity(0.1);
        tracking.track('#video', tracker, {camera: true});
        tracker.on('track', function (event) {
            context.clearRect(0, 0, canvas.width, canvas.height);
		    var canvas2 = document.getElementById('canvas2');
		    var context2 = canvas1.getContext('2d');         
			if(event.data.length == 0){
		        context2.font = '15px Helvetica';
		        context2.fillStyle = "#00FFFF";
		        context2.fillText("请将脸部置于摄像头中心框内",450/3,190/2);
		        context2.stroke();
			}else{
	            event.data.forEach(function (rect) {
	                context.strokeStyle = "#66F1C8";
	                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
	                context.font = '11px Helvetica';
	                context.fillStyle = "#66F1C8";
	                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
	                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);				
					
					let can = document.getElementById("canvas2")
					var context2 = can.getContext('2d');
           			context2.drawImage(video, 0, 0, 510, 510, 0, 0, 500, 500); 	          
	        		let faceInUserBase = getBase64(can);
	        		let param = {faceInUserBase:faceInUserBase}
					layer.load(2);
					//此处演示关闭
					setTimeout(function(){
						layer.msg("加载服务器失败，重新尝试");return;
					}, 5000);
	        		FaceInBtn.findFace(findfaceurl,param,type='post').then(res => {
						layer.closeAll('loading');
						console.log(res.data)
	        			if(res.status == '1'){       				
	        				let param = {
	        					locationImg:baseurl,
	        					img:res.data.mineStaffUserImg,
	        					name:res.data.mineStaffUserName,
	        					age:res.data.mineStaffUserAge,
	        					sex:res.data.mineStaffUserSex,
	        					address:res.data.mineStaffUserAddress,
	        					detail:res.data.mineStaffUserDetail,
	        					code:res.data.mineStaffUserCode,
	        					tel:res.data.mineStaffUserTel,
	        				}
	        				WebSpeech.server = 'http://120.24.87.124/cgi-bin/ekho2.pl';
     						WebSpeech.speak('识别成功，姓名'+res.data.mineStaffUserName);			
//	        				setTimeout(function(){
//							    WebSpeech.server = 'http://120.24.87.124/cgi-bin/ekho2.pl';
//   							WebSpeech.speak('识别成功，姓名'+res.data.mineStaffUserName+'工号'+res.data.mineStaffUserCode);
//							}, 500);	
							let newdate = getNowFormatDate()
							console.log(newdate)
							let params = {
								mineStaffFaceInUserCode:res.data.mineStaffUserCode,
								mineStaffFaceInUserName:res.data.mineStaffUserName,
								mineStaffFaceInUserTel:res.data.mineStaffUserTel,
								mineStaffFaceInUserSex:res.data.mineStaffUserSex,
								mineStaffFaceInUserDetail:res.data.mineStaffUserDetail,
								mineStaffFaceInUserAddress:res.data.mineStaffUserAddress,
								mineStaffFaceInUserImg:res.data.mineStaffUserImg,
								mineStaffFaceInUserDate:newdate
							}
	        				FaceInBtn.inUserMsg(param)
							layer.load(2);
							//此处演示关闭
//							setTimeout(function(){
//								layer.msg("加载服务器失败，重新尝试");return;
//							}, 5000);
				           FaceInBtn.insertCGUserFace(insertfaceuserurl,params,type='post').then(res => {
//									layer.closeAll('loading');
								if(res.status == '1'){
									layer.msg("识别数据已经上传");return;
								}else{
									layer.msg("识别数据上传失败");return;
								}
	        				}
	        				)        
	        				
	        			}else{
	        				layer.msg(res.msg+'刷新重新识别');return;
	        			}        			
	        		}).catch(err =>{
	        			console.log(err.msg)
	        		})

			//console.log(faceInUserBase)
	            });
	           }
	        });
	        //当前时间
			function getNowFormatDate() {//获取当前时间
				var date = new Date();
				var seperator1 = "-";
				var seperator2 = ":";
				var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
				var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
				var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
						+ " "  + date.getHours()  + seperator2  + date.getMinutes();
				return currentdate;
			}
			function getNowAllFormatDate() {//获取当前时间
				var date = new Date();
				var seperator1 = "-";
				var seperator2 = ":";
				var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
				var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
				var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
					+ " "  + date.getHours()  + seperator2  + date.getMinutes()
					+ seperator2 + date.getSeconds();
				return currentdate;
			}
  			//生成base64数据
			function getBase64(canvas) {
			var imgSrc = canvas.toDataURL(
					"image/png");
			//			alert(imgSrc);
			return imgSrc.split("base64,")[1];
			};
	        
	         //将canvas转化为图片
	        function convertCanvasToImage(canvas) {
	            var image = new Image();
	            image.src = canvas.toDataURL("image/png");
	            return image;
	        }  		
			var img = document.getElementById("img")
//			let can = document.getElementById("canvas2")
//			var context2 = can.getContext('2d');
//			console.log(context2)
//          context2.drawImage(video, 0, 0, 510, 510, 0, 0, 500, 500); 
			
//	        let faceInUserBase = getBase64(can);
//	        let param = {faceInUserBase:faceInUserBase}
//          var photoImg = document.createElement("img");
////          console.log(photoImg)
////          photoImg2 = convertCanvasToImage(can); 
//          photoImg.src = convertCanvasToImage(can).src;
//          img.appendChild(photoImg);
//          console.log(photoImg.src)	        
	        //识别请求
//	        FaceInBtn.findFace(findfaceurl,param,type='post')
			//绘制方框

	        var canvas1 = document.getElementById('canvas1');
	        var context1 = canvas1.getContext('2d');
	        context1.strokeStyle = "#00FFFF";
	        context1.moveTo(100, 100);
	        context1.lineTo(400, 100);
	        context1.lineTo(400, 400);
	        context1.lineTo(100, 400);
	        context1.lineTo(100, 100);
	        context1.stroke();	

	        
		        
})
var FaceInBtn = {
	findFace:function(url,param,type){
		return fetch(url,{faceInUserBase:param.faceInUserBase},type);
	},
	inUserMsg:function(param){
		let msgText = ''
		let msgcontain = $('.msg-contain')
		msgcontain.empty()
		msgText +='<div class="user-msg">'
		msgText +='<div class="msg-img"><img alt=" " src="'+param.locationImg+'/'+param.img+'"/></div>'
		msgText +='<div class="msg-detail">'
		msgText +='<div class="detail">姓名：'+param.name+'</div>'
		msgText +='<div class="detail">年龄：'+param.age+'</div>'
		msgText +='<div class="detail">工号：'+param.code+'</div>'
		msgText +='<div class="detail">性别：'+param.sex+'</div>	'
		msgText +='</div></div>'
		msgText +='<div class="detail">联系方式：'+param.tel+'</div>'
		msgText +='<div class="detail">家庭住址：'+param.address+'</div>'
		msgText +='<div class="detail">详细描述：'+param.detail+'</div></div>'	
		msgcontain.append(msgText)
	},
	insertCGUserFace:function(url,param,type){
		return fetch(url,{
			mineStaffFaceInUserCode:param.mineStaffFaceInUserCode,
			mineStaffFaceInUserName:param.mineStaffFaceInUserName,
			mineStaffFaceInUserTel:param.mineStaffFaceInUserTel,
			mineStaffFaceInUserSex:param.mineStaffFaceInUserSex,
			mineStaffFaceInUserDetail:param.mineStaffFaceInUserDetail,
			mineStaffFaceInUserAddress:param.mineStaffFaceInUserAddress,
			mineStaffFaceInUserImg:param.mineStaffFaceInUserImg,
			mineStaffFaceInUserDate:param.mineStaffFaceInUserDate
		},type);
	}
}


				
	
	
		
			
			
											
		
	
	
	
	


