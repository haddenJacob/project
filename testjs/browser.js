//判断用户使用的是什么浏览器，是什么终端设备
	(function getMobileDevice(window) {
	        var ua = navigator.userAgent;
	        //是否为移动端
	        var mobile = /AppleWebKit.*Mobile.*/.test(ua) || /AppleWebKit/.test(ua);
	        //ios终端
	        var ios = /\(i[^;]+;(U;)?CPU.+Mac OS X/.test(ua);
	        //android终端或者uc浏览器
	        var android = /(Android);?[\s\/]+([\d.]+)?/.test(ua);
	        //iphone
	        var iphone = /iphone/i.test(ua);
	        //ipad
	        var ipad = /iPad/i.test(ua);
		        //weixin
	        var weixin = /micromessenger/i.test(ua);
	        //Chrome
	        var chrome = /Chrome\/([\d.]+)/.test(ua) || /CriOS\/([\d.]+)/.test(ua);
	        //火狐内核
	        var mozilla = ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1;
	        //苹果，谷歌内核
	        var webkit = /AppleWebKit/i.test(ua);
	        //opera内核
	        var opera = /Presto/i.test(ua);
	        //苹果浏览器
	        var safari = /safari/i.test(ua)&&!/Chrome/i.test(ua);
	        //微软
	        var msie = /msie/i.test(ua);
	        window.device={
	            isMobile:mobile,
	            islos:ios,
	            isAndroid:android,
	            isIPhone:iphone,
	            isIPad:ipad,
	            isWeiXin:weixin,
	            isChrome:chrome,
	            isMozilla:mozilla,
	            isWebkit:webkit,
	            isOpera:opera,
	            isSafari:safari,
		        isMsie:msie
	        }
})(window);
//JavaScript检测浏览器
var LoginTools = {
	
	brower:function(){
	    var userAgent=navigator.userAgent.toLowerCase(), s, o = {};   
	    var browser={
	        version:(userAgent.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/))[1],
	        safari:/version.+safari/.test(userAgent),
	        chrome:/chrome/.test(userAgent),
	        firefox:/firefox/.test(userAgent),
	        ie:/msie/.test(userAgent),
	        opera: /opera/.test(userAgent ) 
	    } /* 获得浏览器的名称及版本信息 */

	    if (browser.ie && browser.version >= 6)
	    {
          alert(browser.version,browser.ie)
	    }
	    if (browser.safari) {}  /* 判断是否为safari */
	    if (browser.firefox) {} /* 判断是否为firefox */
	    if (browser.chrome) {}  /* 判断是否为chrome */
	    if (browser.opera) {}   /* 判断是否为opera */
	    if (browser.ie) {}      /* 判断是否为IE */
	},
	//获取浏览器名称和版本 
	getBrowserInfo:  function (){  
       var browser = {appname: 'unknown', version: 0},  
       userAgent = window.navigator.userAgent.toLowerCase();  //
       if ( /(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test( userAgent ) ){  
    	   browser.appname = RegExp.$1;  
    	   browser.version = RegExp.$2;  
       } else if ( /version\D+(\d[\d.]*).*safari/.test( userAgent ) ){
    	   browser.appname = 'safari';  
    	   browser.version = RegExp.$2;  
       }  
       return browser;  
	}
}
console.log(device);
console.log(LoginTools.brower);