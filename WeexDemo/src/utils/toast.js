
export function toast(that,msg,timeout=1000){
	that.$dialog.toast({mes: msg, timeout: timeout})
}

export function loading(that,timeout=2000,fun){
	that.$dialog.loading.open('很快加载好了');

	let closed = fun()
	if(closed==true)
		that.$dialog.loading.close()
    setTimeout(() => {
    	
       	that.$dialog.loading.close()
    }, timeout)
}