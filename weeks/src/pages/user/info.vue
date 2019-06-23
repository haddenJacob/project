<template>
    <div>
    	<c-header :pre="pre"/><br><br><br><br>
    	
    	<yd-cell-group>
    		<yd-cell-item  type="label">
	            <span slot="left">真实姓名</span>
	            <span slot="right">{{info.realname}}</span>
	        </yd-cell-item>

	        <yd-cell-item >
	            <span slot="left">昵称</span>
	            <span slot="right">
	            	<yd-input slot="right" v-model="info.nickname" placeholder="请输入昵称"></yd-input>
	            </span>
	        </yd-cell-item>
	        <yd-cell-item arrow type="link" href="#">
	            <span slot="left">性别</span>
	            <span slot="right" v-if="info.sex==0">女</span>
	            <span slot="right" v-if="info.sex==1">男</span>
	            <span slot="right" v-if="info.sex==-1 || info.sex==undefined">保密</span>
	        </yd-cell-item>
	        <yd-cell-item arrow type="label">
	            <span slot="left">手机号码</span>
	            <span slot="right">{{info.account}}</span>
	        </yd-cell-item>

	       
	        
	    </yd-cell-group>
	    <yd-button size="large" type="primary">完成</yd-button>
    </div>
</template>

<script>
export default{
	data(){
		return{
			info:{
				account:'',//用户名
				sex:-1,
				email:'',
				realname:'',//真实姓名
				nickname:'',//昵称
			},
			pre:''
		}
	},
	created(){
		if(!this.$api.user.isLogin())
			this.$router.push('/login')
		this.$api.user.info().then(response=>{
			this.info = response.data
			console.log(response)
		})
	}
}   
</script>

<style lang="" scoped>
    
</style>