<template>
    <div>
    	<c-header/><br><br><br><br>
    	<yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">手机号：</span>
	            <yd-input slot="right" 
	            	v-model="form.acount" 
	            	regex="mobile" placeholder="请输入手机号码"></yd-input>
	        </yd-cell-item>

	        <yd-cell-item>
	            <span slot="left">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
	            <yd-input slot="right" 
	            	type="password" 
	            	v-model="form.password" placeholder="请输入密码"></yd-input>
	        </yd-cell-item>
        <yd-cell-item>
            <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
            <input 
            	type="text" 
            	slot="right" 
            	v-model="form.start"
            	placeholder="验证码">

            <!-- ↓↓关键代码是这里↓↓ -->
            <yd-sendcode slot="right" 
                         v-model="start1" 
                         @click.native="sendCode1" 
                         type="warning"
            ></yd-sendcode>
            <!-- ↑↑关键代码是这里↑↑ -->

        </yd-cell-item>
	    </yd-cell-group>
	    <yd-button size="large" 
	    	@click.native="handleRegisterClick"
	    	type="primary">注册</yd-button>
    </div>
</template>

<script>
export default{
	data() {
        return {
        	start1: false,
            form:{
            	acount: '',
            	password: '',
            	start:''
            }
        }
   },
    methods:{
    	routerGo(router){
    		this.$router.push(router)
    	},
    	/*注册*/
    	handleRegisterClick(){
    		if(this.form.acount!=''
    		   || this.form.password!=''
    		   || this.form.start!=''){
    			this.$api.user.login(this.form).then(response=>{
    				this.$dialog.toast({mes: '注册成功'});
    			})
    		}else{
    			this.$dialog.toast({mes: '注册失败！'});
    		}    		
    	},
        sendCode1() {
            this.$dialog.loading.open('发送中...');
            setTimeout(() => {

                this.start1 = true;
                this.$dialog.loading.close();

                this.$dialog.toast({
                    mes: '已发送',
                    icon: 'success',
                    timeout: 1500
                });

            }, 1000);
        }
         	
    }
	
}   
</script>

<style lang="" scoped>
   
</style>