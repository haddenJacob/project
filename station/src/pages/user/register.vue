<template>
	<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: #232332;overflow: auto;" >
		<div style="width: 500px;background: white;border-radius: 10px;margin:200px auto;">
			<div 
				style="height: 100px;background: #13A89E;border-radius: 10 0;color: white;font-size: 30px;text-align: center;line-height: 100px;">
			用户注册
			</div>
			<div style="padding: 40px;">
			
			<div>
				<radio-group v-model="flag">
				  <radio val="1">学生</radio>
				  <radio val="2">宿管</radio>
				  <radio val="3">维修</radio>
				</radio-group>			
			</div>			  	
					<label class="label" style="text-align: left;">账号：</label>
						<p class="control">
					 	 <input class="input is-success is-medium" type="number" v-model="form.number">
						</p>
					<label class="label" style="text-align: left;">姓名：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.name">
						</p>
					<label class="label" style="text-align: left;">性别：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.sex">
						</p>				
					<label class="label" style="text-align: left;">电话：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="tel"  v-model="form.tel">
						</p>	
					<div v-show="show_update">
					<label class="label" style="text-align: left;">年龄：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="number"  v-model="form.age">
						</p>						
					</div>	
					<div v-show="show_house">
						<label class="label" style="text-align: left;">楼栋号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="number"  v-model="form.value1">
						</p>					  
					 </div>					
					<div v-show="show_student">
						<label class="label" style="text-align: left;">楼栋号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.value1">
						</p>
					 </div>
					 <div v-show="show_student">
					<label class="label" style="text-align: left;">寝室号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.value2">
						</p>					  
					 </div>
					 <div v-show="show_student">
					<label class="label" style="text-align: left;">班级：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.classname">
						</p>	
					</div>
					<label class="label" style="text-align: left;">qq号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.qq">
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
							
						<label class="label" style="text-align: left;">确认密码：</label>
						<p class="control has-icon">
							<input 
								class="input is-rounded is-medium is-success" 
								type="password" 
								placeholder="请输入密码"
								v-model="form.newpassword">
							<i class="fa fa-lock"></i>			
			
			<div class="columns" style="background: white;">
			  <div class="column" style="background: white;">
			    <p class="control notification" style="text-align: right;background: white;">			    	
				<button 
					class="button is-success is-large"
					@click="registerClick">
			  		  注册
			   </button>    	
			    </p>
			  </div>
			  <div class="column">
			    <p class="control notification has-text-centered" style="text-align: left;background: white;">			    	
				<button class="button is-large" @click="backLogin">
			        返回登录
			   </button>    	
			    </p>
			  </div>	
			</div>
						
			</div>
		
		</div>
	</div>
</template>

<script>
  export default {
    data() {   	
      return { 
			show_student:true,
			show_house:false,
			show_update:false, 
	        options: [{
	          value: 15,
	          label: 15
	        }],	
			form:{
				number:'',
				name:'',
				sex:'',
				tel:'',
	            value1: '',
	            value2: '',
	            classname:'',
	            qq:'',
	     		password:'',
	     		newpassword:'',	            
			},	        
	     		flag:'1',	     	
      };
    },
    watch: {
	    flag:{
	          handler(){
	          	let flags = this.flag
	           this.flagChange(flags)
	           console.log(this.flag)
	          }
	    }
 	 },     
    mounted(){ 

    },    
    methods: {
    	registerClick(){
    		if(this.form.number!=''
    		&&this.form.name!=''
    		&&this.form.sex!=''
    		&&this.form.tel!=''
    		&&this.form.qq!=''
    		&&this.form.password!=''
    		&&this.form.newpassword!=''){
    			
				if(this.form.password==this.form.newpassword){
					if(this.flag==1){
						this.$api.user.studentRegistre(
							this.form.number,
							this.form.name,
							this.form.tel,
							this.form.sex,
							this.form.value1,
							this.form.value2,
							this.form.classname,
							this.form.qq,
							this.form.password,
							this.flag
						).then(response=>{
							console.log(response);
							if(response){
					  	        this.$notify.open({
					          content: '学生注册成功',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '注册失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}						
						
						});					
					}
					if(this.flag==2){
						this.$api.user.houseRegistre(
							this.form.number,
							this.form.name,
							this.form.tel,
							this.form.sex,
							this.form.value1,
							this.form.qq,
							this.form.password,
							this.flag
						).then(response=>{
							console.log(response);
							if(response){
					  	        this.$notify.open({
					          content: '宿管员注册成功！等待管理员确认',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '注册失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}						
						
						});					
					}
					if(this.flag==3){
						this.$api.user.updatRegistre(
							this.form.number,
							this.form.name,
							this.form.tel,
							this.form.sex,
							this.form.qq,
							this.form.password,
							this.flag
						).then(response=>{
							console.log(response);
							if(response){
					  	        this.$notify.open({
					          content: '维修员注册成功！等待管理员确认',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '注册失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}
						});			
						
					
					}					
				}else{
			         this.$notify.open({
			          content: '密码不一致',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'danger',
			        }); 										
					this.form.newpassword=''
				}
 			
    		}else{
		         this.$notify.open({
		          content: '信息不能为空',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });   			
    		}

    	},
		backLogin(){
			this.$router.push("/")
		},
		
		
		
		
		
		
		
		
		
    	flagChange(flags){
			if(flags==1){
				this.show_student=true
				this.show_house=false
				this.show_update=false
			}
			if(flags==2){
				this.show_house=true
				this.show_update=true
				this.show_student=false
			}
			if(flags==3){
				this.show_update=true
				this.show_student=false
				this.show_house=false
			}		
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

//           this.$ajax({
//			      method: 'post',
//			      url: 'http://localhost:8080/cloud_note/user/login.do',
//			      params: {
//			      	name:formName.pass,password:formName.checkPass
//			      },
//			   })
//			   //请求成功后执行then          如果直接在里面访问 this，无法访问到 Vue 实例，this指向发生了变化。建议使用箭头函数,下面有讲
//			   .then(function (response) {
//			        console.log(response);   //处理后台返回的数据
//			     }) 
//			   //请求失败后执行catch
//			   .catch(function(err){
//			        console.log(err)
//			     }) 


//		this.$api.user.userLogin(formName.pass,formName.checkPass).then(response=>{
//			console.log(response.data);
//		});