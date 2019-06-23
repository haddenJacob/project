<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		  	<i class="fa fa-fort-awesome" 
			        	style="line-height: 30px;font-size: 30px;margin-right: 10px;"></i>
		    <span style="font-size: 24px;">我们的校园</span>
		  </div>			
		<div>
		  <el-carousel :interval="4000" type="card" height="300px">
		  	<div v-for="item in form">
			    <el-carousel-item>
			      <div><img :src="item.img" /></div>
			      <!--<h1>{{item.img}}</h1>-->
			      
			    </el-carousel-item>
		    </div>
		  </el-carousel>			
		</div>
		<div class="columns is-gapless">
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<a href="http://jwc.hbuas.edu.cn/content/index">
			        <i class="fa fa-fort-awesome" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>校园在线教务系统</span>
		        </a>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
			        <i class="fa fa-windows" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>计算机等级</span>
		        </a>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
			        <i class="fa fa-newspaper-o" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>普通话</span>
		        </a>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
			        <i class="fa fa-life-buoy" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>CET</span>
		        </a>
		    </el-card>
		    </div>
		  </div>
		</div>		
		<div class="columns is-gapless">
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<router-link to="/notice">
			        <i class="fa fa-facebook" style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>公告信息</span>
		        </router-link>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
			        <i class="fa fa-server" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>其他</span>
		        </a>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<router-link to="/user/alter">
			        <i class="fa fa-unlock-alt" 
			        	style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>修改密码</span>
		        </router-link>
		    </el-card>
		    </div>
		  </div>
		  <div class="column">
		  	<div class="newcard">
		    <el-card shadow="hover">
		    	<router-link to="/">
			        <i class="fa fa-user-circle-o" style="line-height: 20px;font-size: 30px;margin-right: 10px;"></i>
			        <span>退出登录</span>
		        </router-link>
		    </el-card>
		    </div>
		  </div>
		</div>
		</el-card >
	</div>
</template>

<script>
  export default {
    data() {   	
      return {   	
     	form:[
     	{img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1049238752,1099518948&fm=27&gp=0.jpg',id:0},
     	{img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3568325471,949016628&fm=27&gp=0.jpg",id:1},
     	{img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3561022367,1981579104&fm=27&gp=0.jpg",id:2},
     	{img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1967725943,463061552&fm=27&gp=0.jpg",id:3}
     	],
      };
    },
}
</script>

<style>
.newcard:hover{
	cursor: pointer;
}
</style>