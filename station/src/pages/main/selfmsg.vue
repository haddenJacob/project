<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-universal-access"></i>个人操作</router-link>
				  </breadcrumb-item>				  
				  <breadcrumb-item>
				    <router-link to="/selfmsg" exact><i class="fa fa-tag"></i>修改信息</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="text-align: left;">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>修改个人信息</span>
			  </div>	
			  <div style="width: 500px;text-align: left;"class="bgc">
			  		<div v-show="show_student">
					<label class="label" style="text-align: left;">账号：</label>
						<p class="control">
					 	 <input class="input is-success is-medium" type="number" v-model="form.studentnum">
						</p>
					<label class="label" style="text-align: left;">姓名：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studentname">
						</p>
					<label class="label" style="text-align: left;">性别：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studentsex">
						</p>				
					<label class="label" style="text-align: left;">电话：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="tel"  v-model="form.studenttel">
						</p>	
					<div>
						<label class="label" style="text-align: left;">楼栋号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studentcode">
						</p>						  
					</div>					
					 <div>
					<label class="label" style="text-align: left;">寝室号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studenthouse">
						</p>					  
					 </div>
					 <div>
					<label class="label" style="text-align: left;">班级：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studentclass">
						</p>	
					</div>
					<label class="label" style="text-align: left;">qq号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.studentqq">
						</p>
					</div>
			  		<div  v-show="show_house">
					<label class="label" style="text-align: left;">账号：</label>
						<p class="control">
					 	 <input class="input is-success is-medium" type="number" v-model="form.housemannum">
						</p>
					<label class="label" style="text-align: left;">姓名：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.housemanname">
						</p>
					<label class="label" style="text-align: left;">性别：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.housemansex">
						</p>				
					<label class="label" style="text-align: left;">电话：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="tel"  v-model="form.housemantel">
						</p>	
					<div>
						<label class="label" style="text-align: left;">楼栋号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.housemancode">
						</p>
					</div>					
					<label class="label" style="text-align: left;">qq号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.housemanqq">
						</p>
					</div>
			  		<div v-show="show_update">
					<label class="label" style="text-align: left;">账号：</label>
						<p class="control">
					 	 <input class="input is-success is-medium" type="number" v-model="form.updatmannum">
						</p>
					<label class="label" style="text-align: left;">姓名：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.updatmanname">
						</p>
					<label class="label" style="text-align: left;">性别：</label>
						<p class="control has-icon has-icon-right">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.updatmansex">
						</p>				
					<label class="label" style="text-align: left;">电话：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="tel"  v-model="form.updatmantel">
						</p>						
					<label class="label" style="text-align: left;">qq号：</label>
						<p class="control has-icon has-icon-right ">
					 	 <input class="input is-success is-medium" type="text"  v-model="form.updatmanqq">
						</p>
					</div>					
					<div style="text-align: left;"><a 
						class="button is-primary" 
						@click="saveClick"
						style="padding: 20px;">保存</a></div>
				</div>
				
			</el-card>
			</div>
	</div>
</template>

<script>
const flag=''
import {getCookie} from '@/common/config/cookie'
  export default {
    data() {
      return {
			show_student:false,
			show_house:false,
			show_update:false,     	
			form:{},
			user:[],
			data:[],
	        options: [{
	          value: 15,
	          label: 15
	        }],
		
      };
    },
 	created(){    	
		this.$api.user.findbyuserid(localStorage.getItem("uid"),localStorage.getItem("uid"),localStorage.getItem("uid"),localStorage.getItem("flag")).then(response=>{
			this.form = response
			this.data = response
			console.log(this.form)
		}); 		
 	},
    mounted(){ 
		this.flag = localStorage.getItem("flag")
		if(this.flag==1){
			this.show_student=true
		}
		if(this.flag==2){
			this.show_house=true

		}
		if(this.flag==3){
			this.show_update=true
		}		

    },
    methods: {
	saveClick(){
		console.log(this.form)
		if(this.flag==1){
		this.$api.user.studentupdate(
			this.flag,
		this.form.studentnum,
		this.form.studentname,
		this.form.studenttel,
		this.form.studentsex,
		this.form.studenthouse,
		this.form.studentcode,		
		this.form.studentclass,
		this.form.studentqq,
		this.form.studentpassword	
		).then(response=>{
							if(response){
					  	        this.$notify.open({
					          content: '修改成功',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '修改失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}	
		}); 			
		}
		if(this.flag==2){
		this.$api.user.studentupdate(
		this.form.studentnum,
		this.form.studentname,
		this.form.studenttel,
		this.form.studentcode,
		this.form.studenthouse,
		this.form.studentclass,
		this.form.updatmanqq,
		this.form.updatmanpassword,
		localStorage.getItem("flag")
		).then(response=>{
							if(response){
					  	        this.$notify.open({
					          content: '修改成功',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '修改失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}
		}); 			
		}
		if(this.flag==3){
		this.$api.user.updatupdate(
		this.flag,
		this.form.updatmanname,
		this.form.updatmannum,
		this.form.updatmanpassword,
		this.form.updatmanqq,
		this.form.updatmansex,
		this.form.updatmantel
		).then(response=>{
							if(response){
					  	        this.$notify.open({
					          content: '修改成功',
					          icon: 'smile-o',
					          placement: 'top-center',
					          transition: 'bounce',
					          type: 'success',
					        });									
							}else{
						         this.$notify.open({
						          content: '修改失败',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        }); 								
							}
		}); 			
		}		
		
	}
    }
  }
</script>

<style>
	.bgc{
		height: 600px;overflow: auto;
	}
	.bgc::-webkit-scrollbar {
	    display: none;
	}
</style>