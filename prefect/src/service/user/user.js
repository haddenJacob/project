import http from '@/common/axios/http'

/**
 *登录方法 
 */
export function login(mobile,password){
	return http.post('/user/login.do',{mobile:mobile,password:password})
}
/*
 *QQ登录 
 */
export function qqLogin(){
	return http.get('/user/qqlogin.do')
}
