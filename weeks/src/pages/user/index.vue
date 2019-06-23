<template>
    <div>
    	<br />
    	<yd-cell-group title="">
	        <yd-cell-item arrow href="/user/info" type="link">
	            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
	            <span slot="left">我的账号</span>
	            <span slot="right"></span>
	        </yd-cell-item>
	        <yd-cell-item arrow href="/carlist" type="link">
	            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
	            <span slot="left">我的车辆</span>
	        </yd-cell-item>
	    </yd-cell-group>
	    
	    <yd-cell-group title="">
	    	<yd-cell-item arrow href="/addcar" type="link">
	            <yd-icon slot="icon" name="discount" size=".42rem"></yd-icon>
	            <span slot="left">添加车辆</span>
	       </yd-cell-item>
	    </yd-cell-group>
	    <yd-button size="large" 
	    		   type="danger" 
	    		   @click.native="routerGo('/login')"
	    		   v-if="!$api.user.isLogin()">登陆</yd-button>
	    <yd-button size="large" 
	    		   type="danger" 
	    		   @click.native="logout"
	    		   v-if="$api.user.isLogin()">退出</yd-button>
    </div>
</template>

<script>
export default{
	methods:{
		routerGo(router){
			this.$router.push(router)
		},
		logout(){
			this.$api.user.logout()
			this.$router.push('/index/user/index')
		}


	}
}   
</script>

<style lang="" scoped>
    
</style>