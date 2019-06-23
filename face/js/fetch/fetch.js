function fetch(
	url,
	param = {},
	type = 'GET',
	async = false,
	header = 'application/json;charset:utf-8',
	datatype = 'json',
	processData,
	contentType){
	return new Promise((resolve,reject) => {
//		console.log(param)
		$.ajax({
			method:type,
			url:url,
			data:param,
			async:async,
			header:header,
			dataType: datatype,
			processData:processData,   // 用于对参数进行序列化处理，
			contentType:contentType, // 必须			
            success:function(res){         //请求成功
				resolve(res)
            },
            error:function(){
                reject(0)
				resolve(0)                      //请求错误，弹出提示
            }			
		})	
	})
}