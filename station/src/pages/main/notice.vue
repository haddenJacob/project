<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/notice" exact><i class="fa fa-tag"></i>公告信息</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;max-height: 500px;overflow: auto;">
			  <div slot="header" class="clearfix">
			    <span>最新公告</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>
			  <div v-for="o in data" class="text item" style="text-align: left;margin-bottom: 10px;">
			    <p>发布时间：{{o.noticetime}}</p>
			    <p>发布人：{{o.housemanname}}</p>
			    <p>发布楼栋：{{o.noticehose}}栋</p>
			    <p>公告/通知：{{o.noticedesc}}</p>
			  </div>
			  
			</el-card>
			
				<el-card class="box-card" style='text-align: left;max-height: 500px;overflow: auto;'>
				  <div slot="header" class="clearfix">
				    <span>最近维修评价</span>
				  </div>
				  <div class="text item bcc">
				    <div v-for="item in items" style="margin-bottom: 20px;">
				    						<el-collapse>
					  <el-collapse-item>
					  	<template slot="title">
					      <i class="fa fa-exclamation-triangle" style="line-height: 48px;color: red;margin-left: 10px;"></i>
					      	来至账号: {{item.studentnum}} 姓名：{{item.studentname}} 评价
					    </template>
				    	<div><span>评价时间：{{item.assesstime}}</span></div>
				    	<div><span>评价人：{{item.studentname}}</span></div>
				    	<div><span>描述：{{item.assessdesc}}</span></div>
				    	<div><span>报修星级评分</span>	</div>
				    		
								<el-rate
								  v-model="item.assesscode"
								  disabled
								  show-score
								  text-color="#ff9900"
								  score-template="{value}"
								  >
								</el-rate>	
					  </el-collapse-item>
					</el-collapse>	
		    	
				    </div>
				    
				  </div>
				</el-card>			
			</div>
	</div>
</template>

<script>
import {formatDate} from '@/common/config/data'	
  export default {
    data() {
      return {
      	items:[], 
      	data:[]
      }
    },
    created(){
 		this.$api.user.findassessall().then(response=>{
			for(let i =0;i<response.length;i++){
				this.items.push(response[i])
				this.items[i].assesstime=formatDate(new Date(this.items[i].assesstime), 'yyyy-MM-dd hh:mm:ss');
			}
		});   
 		this.$api.user.findallnotice().then(response=>{
			for(let i =0;i<response.length;i++){
				this.data.push(response[i])
				this.data[i].noticetime=formatDate(new Date(this.data[i].noticetime), 'yyyy-MM-dd hh:mm:ss');
			}
		});  		
    },
    methods: {
     }
  }
</script>

<style scoped>
	.bcc{
		max-height: 340px;overflow: auto;
	}
	.bcc::-webkit-scrollbar {
	    display: none;
	}
</style>