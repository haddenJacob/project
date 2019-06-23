<template>
	<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">
		<el-container>
		<div>
		  <el-header>
		  	<div style="background: black;width: 100%;line-height: 60px;color: white;font-size: 24px;">
		  		<div style="position:absolute;left:10px;width: 100px;height: 60px;"><img src="../../assets/fdm.png" style="width: 100%;height: 100%;" /></div>
		  		<div style="position:absolute;left: 120px;font-size: 20px;">班级管理</div>
		  		<div style="position:absolute;right: 300px;font-size: 15px;color: skyblue;">欢迎 {{name}} 登录</div>
		  		<div style="position:absolute;right: 20px;font-size: 15px;cursor: pointer;">签到&nbsp;<el-button type="primary" icon="el-icon-edit" circle></el-button></div>
			    <div @click="Position" class="jx">
			    	<a href="http://jwc.hbuas.edu.cn/content/index">				  

					教务系统				  	
				   </a></div>  
			    <div @click="back" class="jx" style="position:absolute;right: 200px;font-size: 15px;cursor: pointer;">			  
					退出
			    </div>  				   
				   
				   
		  	</div>
		  </el-header>
		 </div>
		  <el-main style="overflow: hidden;">
		  	<el-row :gutter="20">
			  <el-col :span="3">
		  	<div style="margin-left:-20px;width: 250px;margin-top: -10px;overflow: auto;background: whit;height: 800px;">
			    <el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#ffd04b"
			      style="width:250px;">
			      <el-submenu index="1" v-show="show_g">
			        <template slot="title">
			          <i class="el-icon-menu"></i>
			          <span>管理员管理</span>
			        </template>
			        <el-menu-item-group>
			
					   <div v-show="show_g"><router-link to="/managetacher">				  
						  <el-menu-item index="10">
						    <i class="el-icon-printer"></i>
						    <span slot="title">教师管理</span>
						  </el-menu-item>							  	
						   </router-link>
					   </div>          					 					 					 
					   <div v-show="show_g"><router-link to="/managestudent">				  
					  <el-menu-item index="11">
					    <i class="el-icon-printer"></i>
					    <span slot="title">学生管理</span>
					  </el-menu-item>	
					  </router-link>
					  </div>					 					 
					   <div v-show="show_g"><router-link to="/resource">				  
					  <el-menu-item index="12">
					    <i class="el-icon-printer"></i>
					    <span slot="title">资源管理</span>
					  </el-menu-item>	
					  	
					   </router-link>
					   </div>	
				   <div v-show="show_g"><router-link to="/manage">				  
				  <el-menu-item index="14">
				    <i class="el-icon-printer"></i>
				    <span slot="title">权限管理</span>
				  </el-menu-item>	
				  	
				   </router-link>
				  </div>	
				   <div v-show="show_g"><router-link to="/class">				  
				  <el-menu-item index="15">
				    <i class="el-icon-printer"></i>
				    <span slot="title">班级管理</span>
				  </el-menu-item>	
				  	
				   </router-link>
				  </div>					   
			        </el-menu-item-group>
			      </el-submenu>
				  
				 <div v-show="show_s"><router-link to="/input">
				  	<el-menu-item index="1">
					    <i class="el-icon-edit-outline"></i>				    
					    <span slot="title">学生录入</span>
				  	</el-menu-item>
				  	
				   </router-link>
				   </div>
				   <div  v-show="show_t"><router-link to="/Tinput">
				  	<el-menu-item index="2">
					    <i class="el-icon-edit-outline"></i>				    
					    <span slot="title">老师录入</span>
				  	</el-menu-item>
				  	
				   </router-link>
				   </div>
				    <div><router-link to="/work">	
				  <el-menu-item index="3">
				    <i class="el-icon-printer"></i>
				    <span slot="title">班级作业</span>
				  </el-menu-item>
				  </router-link>
				   </div>
				   <div  v-show="show_t"><router-link to="/msg">	
				  <el-menu-item index="4">
				    <i class="el-icon-printer"></i>				    
				    <span slot="title"><el-badge 
				    	value="new" 
				    	style="margin-top: 10px;line-height: 10px;">我的消息</el-badge></span>
				  </el-menu-item>
				  </router-link>
				   </div>
				  <div v-show="show_s"><router-link to="/problem">	
				  <el-menu-item index="5">
				    <i class="el-icon-question"></i>
				    <span slot="title">学生提问</span>
				  </el-menu-item>
				  </router-link>
				   </div>				   
				  <div v-show="show_c"><router-link to="/release">	
				  <el-menu-item index="6">
				    <i class="el-icon-printer"></i>
				    <span slot="title">作业发布</span>
				  </el-menu-item>
				  </router-link>
				   </div>
				   <div><router-link to="/Rtable">				  
				  <el-menu-item index="7">
				    <i class="el-icon-star-on"></i>
				    <span slot="title">资源共享</span>
				  </el-menu-item>	
				  	
				   </router-link>
				   </div>	
				   <div><router-link to="/history">				  
				  <el-menu-item index="8">
				    <i class="el-icon-printer"></i>
				    <span slot="title">历史作业</span>
				  </el-menu-item>	
				  	
				   </router-link>
				   </div>	
				   <div><router-link to="/Wmsg">				  
				  <el-menu-item index="9">
				    <i class="el-icon-news"></i>
				    <span slot="title">最新公告</span>
				  </el-menu-item>	
				  	
				   </router-link>
				   </div>				   
				   <div><router-link to="/oldhistory">				  
				  <el-menu-item index="13">
				    <i class="el-icon-edit"></i>
				    <span slot="title">历史记录</span>
				  </el-menu-item>	
				  	
				   </router-link>
				   </div>
				   <!--<div><router-link to="/user/alter">				  
				  <el-menu-item index="14">
				    <i class="el-icon-view"></i>
				    <span slot="title">密码修改</span>
				  </el-menu-item>	
				  	
				   </router-link>
				   </div>				   -->
    		</el-menu>		  		
		  	</div>			  	
			  	
			  	
			  </el-col>
			  <el-col :span="21" style="background: white;margin-top: -10px;overflow: auto">
				  	<div style="background: white;margin-top: -10px;overflow: auto;max-height: 800px;">
				  		<router-view/>
				  	</div>			  	
			  </el-col>
			</el-row>


		  </el-main>
		  <el-footer>Footer</el-footer>
		</el-container>

	</div>
</template>

<script>
	const number=''
  export default {
    data() {
      return {
      	show_g:false,
      	show_:false,
      	show_t:false,
      	show_s:false,
      	show_c:false,
        isCollapse: true,
        name:localStorage.getItem("username")
      };
    },
    mounted(){ 
    	let flag=localStorage.getItem("flag");
    	if(localStorage.getItem("flagc")!=0){
    		this.show_c=true
    	}
        if(flag==2){
        	this.show_t=true
        	this.show_=true
        	this.show_c=true
        	console.log(this.flag)
        }
        if(flag==1){
        	this.show_s=true
        }
        if(flag==3){
        	this.show_s=true
        	this.show_t=true
        	this.show_g=true
        	this.show_c=true
        }
    }, 
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      Position(){
      	console.log(1)
      },
      back(){
      	this.number = localStorage.getItem("uid")
      	console.log(this.number)
    	this.$api.user.loginout(this.number).then(response=>{
		});       	      	
      	this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
	body,html{
		margin: 0;
		padding: 0;
	}
	.el-header{
    background-color: black;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
   .el-footer {
    background-color: black;
    color: white;
    text-align: center;
    height: 180px!important;  	
   }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
	height: 800px;
    text-align: center;
  }
  /*main*/
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } 
  .el-radio-group{
  	height: 10px;
  	padding: 10px;
  	line-height: 10px;
  }
  
  .jx a{
  	position:absolute;
  	color: white;
  	font-size: 15px;
  	right: 120px;
  }
  .jx a:hover{
  	color: skyblue;
  	cursor: pointer;
  }
</style>