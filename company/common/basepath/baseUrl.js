
var basePath = "";


function getParam(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
//		console.log(window.location.origin)
		if(r != null) return unescape(r[2]);
		return null;
}
/**
 *返回当前用户服务地址： basePath
 *
 */
//function getBasePath(){
//	var baseUrl = 
//}
//console.log(getParam("__hbt"))
