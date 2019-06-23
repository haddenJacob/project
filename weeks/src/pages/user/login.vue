<template>
    <div>
    	<c-header/><br><br><br><br>
    	<yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">手机号：</span>
	            <yd-input slot="right" v-model="form.acount" regex="mobile" placeholder="请输入手机号码"></yd-input>
	        </yd-cell-item>

	        <yd-cell-item>
	            <span slot="left">密码：</span>
	            <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
	        </yd-cell-item>
	    </yd-cell-group>
	    <yd-button size="large" type="primary" @click.native="login">登陆</yd-button>
        <span style="display: flex;flex-direction: row;">
            <span 
            	@click="routerGo('/password')"
            	style="flex:1;display:block;text-align: left;margin-left: 10px;color: skyblue;margin-top: 10px;" >
            	忘记密码
            </span><span 
            	@click="routerGo('/register')"
            	style="flex:1;display:block;text-align: right;margin-right: 10px;color: skyblue;margin-top: 10px;">
            	注册</span></span>
    </div>
</template>

<script>
export default{
	data() {
        return {
            form:{
            	acount: '',
            	password: '',
            }
        }
    },
    created(){
        if(this.$api.user.isLogin())//如果已经登陆过
            this.$router.go(-1)
    },
    methods:{
    	routerGo(router){
    		this.$router.push(router)
    	},
        login(){
            if(this.form.acount=='' || this.form.acount==''){
                this.$utils.toast.toast(this,'用户和密码不能为空')
                return
            }

            this.$api.user.login(this.form.acount,this.form.password).then(response=>{
                    //保存用户ID
                    localStorage.setItem('uid',response.data)
                   this.$router.go(-1)
                   this.$utils.toast.loading(this,3000,function(){
                        return true
                    }) 
                })
            
        },
        
    }
}   
</script>

<style lang="" scoped>
    
</style>