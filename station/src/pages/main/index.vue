<template>
	<div>
		<div class="columns" style="margin-top: -60px;overflow: auto;height: 120px;overflow: hidden;">
		  <div class="column is-12 "
		  	style="padding: 0;background: #232332;height: 60px;margin-top: 0;color: white;">
				<div class="columns is-gapless" style="font-size:20px;">
				  	<div class="column is-1 has-text-centered" 
				  		style="font-size: 40px;text-align: center;margin-left: 20px;line-height:60px;">
				  		<i class="fa fa-hotel" style="font-size: 40px;text-align: center;margin-left: 20px;line-height:60px;"></i>
				  	</div>
				  	<div  class="column is-3 has-text-centered" 
				  		style="text-align: left;line-height: 60px;"> 寝室报修管理系统</div>
				    <!--<p class="notification is-primary">First column</p>-->
				  <div class="column">
				    <!--<p class="notification is-success">Second column</p>-->
				  </div>
				  <div class="column">
				    <!--<p class="notification is-warning">Third column</p>-->
				  </div>
				  <div class="column">
					<i class="fa fa-user-circle-o" style="line-height: 60px;font-size: 15px;margin-right: 5px;"></i>
					<span style="line-height: 60px;font-size: 15px;margin-right: 5px;color: skyblue;">{{uid}}</span>
				  </div>
				</div>
	  <div class="column is-12" style="margin-top: -35px;text-align: left;">
			<div class="columns is-gapless">
			  <div class="column">
			    <p style="font-size: 20px;color: black;line-height: 60px;text-align: center;font-family: elephant;">WELCONME TO HERE</p>
			  </div>
			  <div class="column">
			    <div class="columns is-gapless">
					  <div class="column">
					    <p class=""></p>
					  </div>	  
					  <div class="column">
					    <p class=""></p>
					  </div>			    	
			    </div>
			  </div>
			  <div class="column">
			    <div class="columns is-gapless">
					  <div class="column">
					    <p class="is-info" style="line-height: 60px;">
					    	<a href="http://jwc.hbuas.edu.cn/content/index">
						        <i class="fa fa-fort-awesome" 
						        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
						        <span>校园在线教务系统</span>
					        </a>					    	
					    </p>
					  </div>	  
					  <div class="column">
					    <p class="is-info" style="line-height: 60px;">
					    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
						        <i class="fa fa-windows" 
						        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
						        <span>计算机等级</span>
					        </a>					    	
					    </p>
					  </div>			    	
			    </div>
			  </div>	  
			  <div class="column">
			    <div class="columns is-gapless">
					  <div class="column">
					    <p class="is-info" style="line-height: 60px;">
				    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
					        <i class="fa fa-newspaper-o" 
					        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
					        <span>普通话</span>
				        </a>					    	
					    </p>
					  </div>	  
					  <div class="column">
					     <p class="is-info" style="line-height: 60px;">
					    	<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
						        <i class="fa fa-life-buoy" 
						        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
						        <span>CET等级</span>
					        </a>					    	
					    	
					    </p>
					  </div>			    	
			    </div>
			  </div>
			  <div class="column">
			    <div class="columns is-gapless">
					  <div class="column">
					    <p class="is-info" style="line-height: 60px;">
					    	<router-link to="/notice">
						        <i class="fa fa-facebook" style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
						        <span>公告信息</span>
					        </router-link>				    	
					    </p>
					  </div>	  
					  <div class="column">
					    <p class="is-info" style="line-height: 60px;">
						<a href="http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300">
					        <i class="fa fa-server" 
					        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
					        <span>其他</span>
				        </a>
					    </p>
					  </div>			    	
			    </div>
			  </div>
			  <div class="column">
			    <div class="columns is-gapless">
					  <div class="column">
					   <p class="is-info" style="line-height: 60px;">
				    	<router-link to="/user/alter">
					        <i class="fa fa-unlock-alt" 
					        	style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
					        <span>修改密码</span>
				        </router-link>					    	
					    </p>
					  </div>	  
					  <div class="column">
					  	<p class="is-info" style="line-height: 60px;">
					    	<router-link to="/">
						        <i class="fa fa-user-circle-o" style="line-height: 60px;font-size: 20px;margin-right: 5px;"></i>
						        <span>退出登录</span>
					        </router-link></p>
					  </div>			    	
			    </div>
			  </div>	  
			</div>
	  </div>			
		  </div>
		</div>
		<div class="columns is-gapless">
		  <div 
		  	class="column is-12 is-primary has-text-centered" 
		  	style="padding: 0;background: white;height: 750px;">
		<div class="columns is-gapless">
		  <div class="column is-2 newclass" style="overflow: auto;height: 750px;">
				<!--菜单-->
		    <div class="menu" >
		      <menus label="菜单操作">
		   <div style="text-align: left;" >
<!--管理员-->	<div v-show="show_admin">     		
		        <menu-item icon="server">
		        	
		          <span>数据管理</span>
		          <menus slot="sub">
		          	<div>		          		
			           <div style="margin-left: 20px;">
			           	<router-link to="/student">				           		
			           		<i class="fa fa-vcard"></i>
			            	<span>学生管理</span>
			           		</router-link>
			           </div>
			           <div style="margin-left: 20px;">
			           	<router-link to="/houseman">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>宿管管理</span>
			           	</router-link>
			           </div>			           
			           <div style="margin-left: 20px;">
			           	<router-link to="/updatman">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>维修管理</span>
			           	</router-link>
			           </div>			           
			           <!--<div style="margin-left: 20px;">
			           	<router-link to="/house">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>楼栋管理</span>
			           	</router-link>
			           </div>-->
			           <div style="margin-left: 20px;">
			           	<router-link to="/resource">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>资源管理</span>
			           	</router-link>
			           </div>			           
			           <div style="margin-left: 20px;">
			           	<router-link to="/allottask">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>维修任务分配</span>
			           	</router-link>
			           </div>
			           <div style="margin-left: 20px;">
			           	<router-link to="/power">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>身份识别和权限管理</span>
			           	</router-link>
			           </div>	
			           <div style="margin-left: 20px;">
			           	<router-link to="/reply">				           		
			           		 <i class="fa fa-vcard"></i>
			           		 <el-badge :value="count" :max="99" class="item">
			            	<span>投诉反馈</span>
			            	</el-badge>
			           	</router-link>
			           </div>				           
			           <div style="margin-left: 20px;">
			           	<router-link to="/service">				           		
			           		 <i class="fa fa-vcard"></i>
			            	<span>服务评价统计</span>
			           	</router-link>
			           </div>			           
			           
			           
		             </div>
		          </menus>
		         
		        </menu-item>
		       </div>
		      	<div class="divider"></div>	
		      		
		      		
		      		
		        <menu-item icon="universal-access">
		        	
		          <span>个人操作</span>
		          <menus slot="sub">
		          	<div>		          		
			           <div style="margin-left: 20px;">
			           	<router-link to="/selfmsg">				           		
			           		<i class="fa fa-edit"></i>
			            	<span>修改信息</span>
			           		</router-link>
			           </div>
			           <div v-show="show_student" style="margin-left: 20px;">
			           	<router-link to="/share">				           		
			           		 <i class="fa fa-external-link"></i>
			            	<span>寝室共享</span>
			           	</router-link>
			           </div>			           
			           
			           
			           
			           
			           
		             </div>
		          </menus>
		         
		        </menu-item>
		        <div  v-show="show_studentq">
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/fix">	
			        	<i class="fa fa-gavel"></i>
			        	<span>寝室报修</span>
			          </router-link>
			       </div>
			    </div>
			     <div v-show="show_update">
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/task">	
			        	<i class="fa fa-map-signs"></i>
			        	 <el-badge :value="200" :max="99" class="item">
			        	<span>查看维修任务</span>
			        	</el-badge >
			          </router-link>
			       </div>				       
			      </div> 
				<div  v-show="show_studentq">
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/fix">	
			        	<i class="fa fa-meh-o"></i>
			        	<span>维修反馈</span>
			          </router-link>
			       </div>						
					
				</div>			       
			       
			       
			       
			       
			     <div v-show="show_house"> 
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/newmsg">	
			        <i class="fa fa-comments-o"></i>
			        	<span>消息发布</span>
			          </router-link>
			       </div>
			     </div>			       
			     <div> 
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/notice">	
			        <i class="fa fa-facebook"></i>
			        	<span>公告信息</span>
			          </router-link>
			       </div>
			     </div>
			     <div v-show="show_student">
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/assess">	
			        <i class="fa fa-calendar-check-o"></i>
			        	<span>维修评价</span>
			          </router-link>
			       </div>
			    </div>
			    <div v-show="show_student">
		        <div class="divider"></div>
		        	<div style="margin: 0;">
			           <router-link to="/complain">	
			        <i class="fa fa-exclamation-circle"></i>
			        	<span>投诉</span>
			          </router-link>
			       </div>				       
			     </div>
			    <div v-show="show_student">
		        <div class="divider"></div>
		        	<div style="margin: 0;" @click="badgemsg">		        		
			           <router-link to="/msg">
					        <i class="fa fa-commenting"></i>
					        <el-badge :value="countmsg" :max="99" class="item" :hidden="hid">
					        	<span>回馈消息</span>					        	
					        	</el-badge>
					         </router-link>			          
			       </div>				       
			     </div>			     
		      	</div>
		      </menus>
		    </div>  
				  		  
		  
		  
		  
		  
		  </div>
		  <div class="column" style="height: 800px;overflow: auto;">
	
				<div style="padding: 20px;margin-top: -10px;overflow: auto;">
						<router-view/>
				</div>			
			
		  </div>

		</div>
					
		<div>		

		
		
		</div>				
					
		  </div>
		</div>
		<div class="columns" style="">
		  <div class="column is-12 "
		  	style="padding: 0;background: #232332;height: 200px;margin-top: 0;color: white;">
					<p>欢迎使用本系统</p>
					<div style="text-align: right;position：flex;bottom:-60px;z-index: 1000;">
						<affix :offset="10" style="z-index: 1000;">
						  <button class="button is-info is-outlined" 
						  	 @click="backLogin"
						  	style="height: 40px;margin-right: 20px;">
						  	<i class="fa fa-user-circle"></i>
						  	<p>退出</p>
						  </button>
						</affix>		
						<affix :offset="50">
						  <button class="button is-info is-outlined" style="height: 40px;margin-right: 20px;">
						  	<i class="fa fa-send"></i>
						  	<p>其他</p>
						  </button>
						</affix>						
					</div>					
		  </div>
		  
		</div>		
		
</div>
</template>

<script>
const uid=''
const flag=''
import {delCookie} from '@/common/config/cookie'
  export default {
    data() {   	
      return {   	
			show_admin:false,
			show_student:false,
			show_studentq:false,
			show_house:false,
			show_update:false,
			hid:false,
			user:[],
			name:localStorage.getItem("username"),
			uid:localStorage.getItem("uid"),
			count:'',
			countmsg:'',
      };
    },
    created(){
    	this.$api.user.findtaskall().then(response=>{  	   		
    		for(let i=0;i<response.length;i++){
    			if(response[i].taskman==localStorage.getItem("username")){
 					this.count++
    			}
    		}
    	})
     		this.$api.user.findcomplainId(localStorage.getItem("uid")).then(response=>{	
			for(let i=0;i<response.length;i++){
				this.countmsg++
			}
		});  	
   	
    },  
    mounted(){ 
		this.flag = localStorage.getItem("flag")
		if(this.flag==1){
			this.show_student=true
			this.show_studentq=true
		}
		if(this.flag==2){
			this.show_house=true
			this.show_studentq=true
		}
		if(this.flag==3){
			this.show_update=true
			this.show_studentq=false
		}		
		if(this.flag==4){
			this.show_student=true
			this.show_admin=true
			this.show_house=true
			this.show_update=true
			this.show_studentq=true
		}

    },   
    methods: {
		backLogin(){
			this.$store.commit('changeLogin','0') 
			this.$router.push("/")
			delCookie("user")
			delCookie("password")
		},
		badgemsg(){
			this.hid=true
		}
     }
  }	
	
	

</script>

<style>
	body{
		overflow-x: hidden;
	}
	body::-webkit-scrollbar {
	    display: none;
	}	
	.newclass::-webkit-scrollbar {
	    display: none;
	}	
</style>