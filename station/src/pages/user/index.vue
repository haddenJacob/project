<template>
	<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: #232332;" >
		<div style="width: 500px;background: white;border-radius: 10px;margin:200px auto;">
			<div 
				style="height: 100px;background: #13A89E;border-radius: 10 0;color: white;font-size: 30px;text-align: center;line-height: 100px;">
			<i class="fa fa-twitch" style="line-height: 100px;font-size: 40px;"></i>
			寝室报修管理系统
			</div>
			<div style="padding: 40px;">
			<label class="label" style="text-align: left;">账号：</label>
				<p class="control has-icon">
				  <input 
				  	class="input is-medium is-success" 
				  	type="tel" 
				  	placeholder="请输入账号"
				  	v-model="form.tel">
				  <i class="fa fa-user-circle-o"></i>
				</p>		
			<label class="label" style="text-align: left;">密码：</label>
			<p class="control has-icon">
				<input 
					class="input is-rounded is-medium is-success" 
					type="password" 
					placeholder="请输入密码"
					v-model="form.password">
				<i class="fa fa-lock"></i>
			</p>
			<div>
				<radio-group v-model="form.flag">
				  <radio val="1">学生</radio>
				  <radio val="2">宿管</radio>
				  <radio val="3">维修</radio>
				  <radio val="4">管理员</radio>
				</radio-group>			
			</div>			
			<div class="columns" style="background: white;">
			  <div class="column" style="background: white;">
			    <p class="control notification" style="text-align: right;background: white;">			    	
				<button 
					class="button is-success is-large"
					@click="loginClick">
			  		  登录
			   </button>    	
			    </p>
			  </div>
			  <div class="column">
			    <p class="control notification has-text-centered" style="text-align: left;background: white;">			    	
				<button class="button is-large" @click="registerClick">
			        注册
			   </button>    	
			    </p>
			  </div>	
			</div>
						
			</div>
		
		</div>
	</div>
</template>

<script>
import {setCookie} from '@/common/config/cookie'
import {delCookie} from '@/common/config/cookie'
  export default {
    data() {   	
      return {   	
     	form:{
     		tel:'',
     		password:'',
     		flag:''
     	},
     	user:[],
      };
    },
    methods: {
    	loginClick(){
    		if(this.form.tel!=''&&this.form.password!=''&&this.form.flag!=''){
//  			console.log(this.form)
//  	
		if(this.form.flag==1){
			let that = this
	   		this.$api.user.userLogin(this.form.tel,this.form.password,this.form.flag).then(response=>{
				console.log(response);
				if(that.form.password==response.studentpassword){
					this.user.push(response)
					
       				let uid = localStorage.setItem("uid", that.form.tel)
       				let flag = localStorage.setItem("flag", that.form.flag)		
       				let name = localStorage.setItem("name", response.studentname)	
    				that.$store.commit('changeLogin','100') 
	       				setCookie("user",that.form.tel,2) 
	       				setCookie("password",that.form.password,2)     				
		  	        that.$notify.open({
			          content: '登录成功',
			          icon: 'smile-o',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'success',
			        });	
			        this.$router.push("/home")
				} else{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });					
				}
			})
	   		.catch(err=>{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });
			})			
		}   			
		if(this.form.flag==2){
			let that = this
	   		this.$api.user.userLogin(this.form.tel,this.form.password,this.form.flag).then(response=>{
				console.log(response);
				this.user.push(response)
				if(that.form.password==response.housemanpassword){
					console.log(response);
					
       				let uid = localStorage.setItem("uid", that.form.tel)
       				let flag = localStorage.setItem("flag", that.form.flag)	
       				let name = localStorage.setItem("name", response.housemanname)	
    				that.$store.commit('changeLogin','100') 
		  	        that.$notify.open({
			          content: '登录成功',
			          icon: 'smile-o',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'success',
			        });	
			        this.$router.push("/home")
				}else{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });					
				}
			})
	   		.catch(err=>{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });
			})			
		} 
		if(this.form.flag==3){
			let that = this
	   		this.$api.user.userLogin(this.form.tel,this.form.password,this.form.flag).then(response=>{
				console.log(response);
				if(that.form.password==response.updatmanpassword){
					console.log(response);
					this.user.push(response)
					
    				that.$store.commit('changeLogin','100') 
        			let uid = localStorage.setItem("uid", that.form.tel)
       				let flag = localStorage.setItem("flag", that.form.flag) 
       				let name = localStorage.setItem("name", response.updatmanname)	
		  	        that.$notify.open({
			          content: '登录成功',
			          icon: 'smile-o',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'success',
			        });
			        this.$router.push("/home")
				} else{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });					
				}
			})
	   		.catch(err=>{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });
			})			
		}		
		if(this.form.flag==4){
			let that = this
	   		this.$api.user.userLogin(this.form.tel,this.form.password,this.form.flag).then(response=>{
//				console.log(response);
				if(that.form.password==response.superpwd){
//					console.log(response);
					this.user.push(response)
					if(response!=null){
						
	    				this.$store.commit('changeLogin','100') 
	        			let uid = localStorage.setItem("uid", that.form.tel)
	       				let flag = localStorage.setItem("flag", that.form.flag)  
	       				let name = localStorage.setItem("name", response.supername)	
	       				setCookie("user",that.form.tel,2) 
	       				setCookie("password",that.form.password,2) 
			  	        that.$notify.open({
				          content: '登录成功',
				          icon: 'smile-o',
				          placement: 'top-center',
				          transition: 'bounce',
				          type: 'success',
				        });
				        that.$router.push("/home")
					}else{
				         this.$notify.open({
				          content: '登录失败，请输入正确密码',
				          placement: 'top-center',
				          transition: 'bounce',
				          type: 'danger',
				        });						
					}
				}else{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });					
				}
			})
	   		.catch(err=>{
		         this.$notify.open({
		          content: '登录失败，请输入正确密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });
			})			
		}
  			
    		}else{
		         this.$notify.open({
		          content: '登录失败，请输入正确账号密码',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });   			
    		}

    	},
		registerClick(){
			this.$router.push("/user/register")
		}
     }
  }
</script>

<style scoped>
  .bg{
background-position: center;
  }
body{
	overflow: hidden;
}
</style>
