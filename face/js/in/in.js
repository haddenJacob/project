$(function(){
	/*
	 
	 * 
	 * 摄像头
	 * */
    	var saveArray = {};
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

            event.data.forEach(function (rect) {
                context.strokeStyle = "#66F1C8";
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#66F1C8";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                context.fillText('请将脸部置于摄像头中心框内', (rect.x+rect.width)/2 - 10, rect.y + 100);
//              console.log(rect.x, rect.width, rect.y, rect.height);
                saveArray.x = rect.x;
                saveArray.y = rect.y;
                saveArray.width = rect.width;
                saveArray.height = rect.height;
	            });
	        });

	        var canvas1 = document.getElementById('canvas1');
	        var context1 = canvas1.getContext('2d');
	        context1.strokeStyle = "#00FFFF";
	        context1.moveTo(100, 100);
	        context1.lineTo(400, 100);
	        context1.lineTo(400, 400);
	        context1.lineTo(100, 400);
	        context1.lineTo(100, 100);
	        context1.stroke();
	        
	//var 是定义变量
//	var video = document.getElementById("video"); //获取video标签
////	var context = canvas.getContext("2d");
//	var con  ={
//		audio:false,
//		video:true
//	};		  			
//		//导航 获取用户媒体对象
//		navigator.mediaDevices.getUserMedia(con)
//		.then(function(stream){
//			try{
//				video.src = window.URL.createObjectURL(stream);
//			}
//			catch(e){
//				video.srcObject = stream;
//			}
//			video.onloadmetadate = function(e){
//				video.play();
//			}
//
//		});
	
	let $list = $(".file-list")
	let $file = $(".fileId")
	let limg = $(".limg")
    //声明变量
    var $button = $('.btn-ti')
    var $buttonFace = $('.btn-face')
    fileList = [];//img文件
    //当前选择上传的文件
    var curFile;
    
        // 选择按钮change事件，实例化fileReader,调它的readAsDataURL并把原生File对象传给它，
        // 监听它的onload事件，load完读取的结果就在它的result属性里了。它是一个base64格式的，可直接赋值给一个img的src.
        $file.on('change', function (e) {
            //上传过图片后再次上传时限值数量
            var numold = $('.file-list li').length;
            $('.file-list li').css({"width":"100%","height":"100%"})
            if(numold > 1){
                layer.msg('最多允许上传1张图片');
                return;
            }
            //限制单次批量上传的数量
            var num = e.target.files.length;
            var numall = numold + num;
            if(num >1 ){
               layer.msg('最多允许上传1张图片');
               return;
            }else if(numall > 1){
                layer.msg('最多允许上传1张图片');
                return;
            }
            //原生的文件对象，相当于$file.get(0).files;//files[0]为第一张图片的信息;
            curFile = this.files;
            //curFile = $file.get(0).files;
            //console.log(curFile);
            //将FileList对象变成数组
            fileList = fileList.concat(Array.from(curFile));
            //console.log(fileList);
            for (var i = 0, len = curFile.length; i < len; i++) {
                reviewFile(curFile[i])
            }
            $('.userimg').fadeIn(2500);
        })

		//渲染
        function reviewFile(file) {
            //实例化fileReader,
            var fd = new FileReader();
            //获取当前选择文件的类型
            var fileType = file.type;
            //调它的readAsDataURL并把原生File对象传给它，
            fd.readAsDataURL(file);//base64
            //监听它的onload事件，load完读取的结果就在它的result属性里了
            fd.onload = function () {
                if (/^image\/[jpeg|png|jpg|gif]/.test(fileType)) {
                    $list.append('<li style="border:solid red px; margin:5px 5px;" class="file-item"><img src="' + this.result + '" alt="" height="70"><span style="cursor: pointer;" class="file-del">删除</span></li>').children(':last').hide().fadeIn(2500);
                } else {
                    $list.append('<li class="file-item"><span class="file-name">' + file.name + '</span><span style="cursor: pointer;" class="file-del">删除</span></li>')
                }

            }
        }
        //点击删除按钮事件：
        $(".file-list").on('click', '.file-del', function () {
            let $parent = $(this).parent();
            console.log($parent);
            let index = $parent.index();
            fileList.splice(index, 1);
            $parent.fadeOut(850, function () {
                $parent.remove()
            });
            //$parent.remove()
        }); 
  		//生成base64数据
		function getBase64(canvas) {
			var imgSrc = canvas.toDataURL(
					"image/png");
//			alert(imgSrc);
			return imgSrc.split("base64,")[1];

		}; 	  			
		//提交数据
        $button.on('click', function () {
        	
        	let mineStaffUserName = $('#username').val().trim()
        	let mineStaffUserTel = $('#tel').val().trim()
        	let mineStaffUserCode = $('#code').val().trim()       	
        	let mineStaffUserSex = $('#sex').val().trim()
        	let mineStaffUserAge = $('#age').val().trim()
        	let mineStaffUserAddress = $('#address').val().trim()
        	let mineStaffUserDetail = $('#detail').val().trim()
        	var fileObj = document.getElementById("fileId").files[0]; // js 获取文件对象
        	let mineStaffUserImg = fileList[0]
			
			function show(){
			   var mydate = new Date();
			   var str = "" + mydate.getFullYear() + "-";
			   str += (mydate.getMonth()+1) + "-";
			   str += mydate.getDate();
			   return str;
			  }       	
        	let newdatetime = show()
        	let newage = newdatetime.split('-')[0]-mineStaffUserAge.split('-')[0]
        	if(mineStaffUserName!=''&&
        	mineStaffUserTel!=''&&
        	mineStaffUserCode!=''&&
        	mineStaffUserSex!=''&&
        	mineStaffUserAddress!=''&&
        	mineStaffUserDetail!=''&&fileList.length <= 1){
    		let formfile = new FormData();
    		formfile.append("mineStaffUserName",mineStaffUserName)
    		formfile.append("mineStaffUserTel",mineStaffUserTel)
    		formfile.append("mineStaffUserCode",mineStaffUserCode)
    		formfile.append("mineStaffUserSex",mineStaffUserSex)
    		formfile.append("mineStaffUserAge",newage)
    		formfile.append("mineStaffUserAddress",mineStaffUserAddress)
    		formfile.append("mineStaffUserDetail",mineStaffUserDetail)
    		formfile.append("mineStaffUserTel",mineStaffUserTel)
    		formfile.append("file",fileList[0])
//      		console.log(mineStaffUserName)
				layer.load(2);
				//此处演示关闭
				setTimeout(function(){
					layer.msg("加载服务器失败，重新尝试");return;
				}, 5000);
			InFun.btnUser(
				userurl,
				formfile,
				type = 'POST',
				async = false,
				header = 'application/json;charset:utf-8',
				datatype = 'json',
				processData = false,
				contentType = false).then(res => {
				layer.closeAll('loading');
//						console.log(res)
					if(res.status == '1'){
						layer.msg(res.msg, {icon: 5});return;
					}else{
						layer.msg(res.msg, {icon: 5});return;
					}
				}).catch(err => {
					layer.alert("请求出错,请重新加载");return;
				})

        		
        }else{
                layer.msg('输入框不可为空');return;
        	}
            if(fileList.length > 1){
                    layer.msg('最多允许上传1张图片');return;
            } 
        })
         //将canvas转化为图片
        function convertCanvasToImage(canvas) {
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            return image;
        }       
        //提交头部特征
        $buttonFace.on('click',function(){
	 	  	//生成头部特征数据 				
			//把流媒体数据画到convas画布上去
			let mineStaffUserCode = $('#code').val().trim() 
//			var img = document.getElementById("img")
			let can = document.getElementById("canvas2")
			var context2 = can.getContext('2d');

            context2.drawImage(video, 0, 0, 500, 500, 0, 0, 500, 500); //将video对象内指定的区域捕捉绘制到画布上指定的区域，实现拍照。
			let base = getBase64(can);	
//			console.log(base)
						 
//          var photoImg = document.createElement("img");
//          console.log(photoImg)
//          photoImg2 = convertCanvasToImage(can); 
//          photoImg.src = convertCanvasToImage(can).src;
//          img.appendChild(photoImg);
//          console.log(can.toDataURL("image/png").split("base64,")[1])
			
			
			
			
			
			if(mineStaffUserCode==''){
				layer.msg('工号不能为空');return;
			}if(base==''){
				layer.msg('特征数据获取失败，重新获取特征数据');return;
			}if(mineStaffUserCode != ''&& base != ''){
				let param = {
					mineStaffFaceCode:mineStaffUserCode,
					mineStaffFaceFace:base
				}
				layer.load(2);
				//此处演示关闭
				setTimeout(function(){
					layer.msg("加载服务器失败，重新尝试");return;
				}, 5000);
				InFun.btnFace(faceurl,param,type="post").then(res => {
					layer.closeAll('loading');
					if(res.status == '1'){
						layer.msg(res.msg);return;
					}else{
						layer.msg(res.msg);return;
					}
				}).catch(err => {
						layer.msg(res.msg);return;
					})
			}
	        //console.log(base);        	
        })




})
var InFun = {
	btnUser:function(
		url,
		formfile,
		type,
		async,
		header,
		datatype,
		processData,
		contentType){
//			console.log(params.mineStaffUserTel)
		return fetch(url,formfile,type,async,
		header,
		datatype,
		processData,
		contentType);
	},
	btnFace:function(
		url,
		param,
		type){
		return fetch(
		url,
		{mineStaffFaceCode:param.mineStaffFaceCode,
		mineStaffFaceFace:param.mineStaffFaceFace},
		type
		);
	}
}


/*
  * 
  {
			mineStaffUserName:params.mineStaffUserName,
			mineStaffUserTel:params.mineStaffUserTel,
			mineStaffUserCode:params.mineStaffUserCode,
			mineStaffUserSex:params.mineStaffUserSex,
			mineStaffUserAge:params.mineStaffUserAge,
			mineStaffUserAddress:params.mineStaffUserAddress,
			mineStaffUserDetail:params.mineStaffUserDetail,
			file:params.file,
		}
  
  **/