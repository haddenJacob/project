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
	        <yd-cell-item>
	            <span slot="left">新密码：</span>
	            <yd-input slot="right" 
	            	type="password" 
	            	v-model="form.password1" placeholder="请输入新密码"></yd-input>
	        </yd-cell-item>   
	        <yd-cell-item>
	            <span slot="left">新密码：</span>
	            <yd-input slot="right" 
	            	type="password" 
	            	v-model="form.password2" placeholder="再输入新密码"></yd-input>
	        </yd-cell-item>  
	    </yd-cell-group>
	    <yd-button size="large" 
	    	@click.native="handlePasswordClick"
	    	type="primary">确认</yd-button>
    </div>
</template>

<script>
export default{
	data() {
        return {
        	start1: false,
            form:{
            	acount: '',
            	password1: '',
            	password1:'',
            	start:''
            }
        }
   },
    methods:{
    	routerGo(router){
    		this.$router.push(router)
    	},
    	/*注册*/
    	handlePasswordClick(){
    		if(this.form.acount!=''
    		   || this.form.password!=''
    		   || this.form.start!=''){
    			this.$api.test.setNewPassword(this.form).then(response=>{
    				this.$dialog.toast({mes: '修改成功，请返回登陆'});
    			})
    		}else{
    			this.$dialog.toast({mes: '修改失败！'});
    		}    		
    	},
        sendCode1() {           
            if(this.form.acount!=''){
            	this.$dialog.loading.open('发送中...');
	             this.$api.test.setNewPassword(this.form.acount).then(response=>{
		            setTimeout(() => {
		
		                this.start1 = true;
		                this.$dialog.loading.close();
		
		                this.$dialog.toast({
		                    mes: '已发送',
		                    icon: 'success',
		                    timeout: 1500
		                });
		
		            }, 1000);
	            })           	
            }else{
            		
                this.$dialog.toast({
                    mes: '请输入手机号',
                });
            }

        }
         	
    }
	
}   
</script>

<style lang="" scoped>
   
</style>