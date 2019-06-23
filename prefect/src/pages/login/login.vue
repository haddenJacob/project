<template>
	<div class="container">
		<div style="margin-top: -10px;">
		<el-row type="flex" justify="center">
		  	<el-col :span="24"><div 
		  		style="background-color: skyblue;line-height: 200px;height: 150px;">
		  	</div></el-col>
		</el-row></div>
		<div style="background-color: orange;padding: 0;">
		<el-row type="flex" justify="center">
		  <el-col :span="16">
		  	<div class="grid-content bg-purple">
  			
		  </div>
		  </el-col>
		  <el-col :span="8"><div class="grid-content bg-purple">
		  	<div  style="background-color: white;height: 400px;width: 400px;padding: 20px;">
		  	<div style="height: 50px;text-align: center;font-size: 20px;"><p>用户登录</p></div>
			  	<div style="width: 400px;margin-right: 20px;">
			  		  <el-input placeholder="用户账号" v-model="form.username">
					    <template slot="prepend">
			  			<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-user1"></use>
						</svg>						    	
					    </template>
					  </el-input>
					  <span style="height: 20px;display: block;"></span>
			  		  <el-input type="password" placeholder="密码" v-model="form.password">
					    <template slot="prepend">					    	
			  			<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-password"></use>
						</svg>						    	
					    </template>
					  </el-input>
					  <span style="height: 20px;display: block;"></span>
					  <el-button type="primary" style="width:100%" 
					  	@click="HandleClickLogin">登录</el-button>
			  	</div>
			  	<div style="margin-top: 10px;color: deepskyblue;"><span>
			  		<router-link to="#" style="color: deepskyblue;">忘记密码</router-link>
			  	</span>/<span>
			  		<router-link to="#" style="color: deepskyblue;">注册</router-link>
			  	</span>
			  	</div>
			  	<div style="margin-top: 20px;font-size: 12px;text-align: center;"><span>其他方式登录</span></div>
			  	<div style="margin-top: 10px;text-align: center;font-size: 24px;">
			  		<span class="font-san" @click="QQClick">
			  			<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-social-qq"></use>
						</svg>
			  		</span>
			  		<span class="font-san">
			  			<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-weixin"></use>
						</svg>			  			
			  		</span>
			  		<span class="font-san">
			  			<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-weibojierumoban"></use>
						</svg>			  			
			  		</span>
			  	</div>
			 </div>
		  </div></el-col>
		</el-row>	
		</div>
	</div>
</template>

<script>
import Header from '@/components/header/index.vue'
export default{
	data(){
		return{
			form:{
				username:'',
				password:''
			}
		}
	},
	methods:{
		HandleClickLogin(){
			if(this.form.username !=''&&
			this.form.password !=''){
				this.$http.user.login(
					this.form.username,
					this.form.password
				).then(response=>{
					console.log(response)
				})
			}
		},
		QQClick(){
			this.$http.user.qqLogin().then(response=>{
				console.log(response)
			})
		}
	}
}
</script>

<style scoped>
.body{
	overflow: hidden;
	overflow-x: hidden;
}
.bg{
	width: 100%;
	background: url(../../assets/bg.jpg) no-repeat center;  /*背景图不重复，并在div居中*/
}
.el-row {
	margin: 0;
	padding: 0;
}
.a {
	text-decoraction: none;
	
}
.router-link-active {
    text-decoration: none;
}

/*
 第三方登录样式
 * */
.font-san{
	text-align: center;
	font-size: 24px;
	cursor: pointer;
	margin: 10px;
}
</style>