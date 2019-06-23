<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/task" exact><i class="fa fa-tag"></i>维修任务表</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	你的维修任务
			    </span>
			  </div>
				<div style="">
				<el-table
				    :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="taskid"
				      label="任务编号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="taskman"
				      label="维修处理人"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="taskaddress"
				      label="处理地址"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="taskcreatetime"
				      label="处理时间"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="taskdesc"
				      label="任务描述"
				      width="150">
				    </el-table-column>	
				    <el-table-column
				      prop="taskflag"
				      label="任务状态"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="taskfirst"
				      label="任务优先级"
				      width="200">
				    </el-table-column>					    					    
				    <el-table-column
				      label="操作"
				      width="200">	
						      <template slot-scope="scope">
						        <el-button
						          size="mini"
						          type="primary"
						          @click="handleDelete(scope.$index, scope.row,data)">任务维修完成</el-button>							          
						      </template>	 
				    </el-table-column>
				  </el-table>					
				</div>
				
				<div>
					<div style="margin-top: 10px;text-align: center;">
					<el-pagination
					  background
					  @current-change="change"
					  @size-change="sizeChange"
					  layout="prev, pager, next"
					  :page-size="pagesize"
					  :total="total">
					</el-pagination>	
					</div>
				</div>					
			  	</el-card >	
			</div>	
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	所有维修任务
			    </span>
			  </div>
				<div style="">
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="taskid"
				      label="任务编号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="taskman"
				      label="维修处理人"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="taskaddress"
				      label="处理地址"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="taskcreatetime"
				      label="处理时间"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="taskdesc"
				      label="任务描述"
				      width="150">
				    </el-table-column>	
				    <el-table-column
				      prop="taskflag"
				      label="任务状态"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="taskfirst"
				      label="任务优先级"
				      width="200">
				    </el-table-column>					    				    					    
				  </el-table>					
				</div>
				
				<div>
					<div style="margin-top: 10px;text-align: center;">
					<el-pagination
					  background
					  @current-change="change"
					  @size-change="sizeChange"
					  layout="prev, pager, next"
					  :page-size="pagesize"
					  :total="total">
					</el-pagination>	
					</div>
				</div>					
			  	</el-card >	
			</div>
		
			  	</el-card >	
			</div>
	</div>
</template>

<script>
import {formatDate} from '@/common/config/data'
const TASKFLAG=1
const FIXFLAG=2
  export default {
    data() {
      return {
		form:[],
		data:[],
       	currentPage:1,
        pagesize:5,
        total:10,         
      }
    },
    created(){
    	this.$api.user.findtaskall().then(response=>{  	
    		this.form = response
    		for(let i=0;i<response.length;i++){
    			this.form[i].taskcreatetime=formatDate(new Date(this.form[i].taskcreatetime), 'yyyy-MM-dd hh:mm:ss');
    		}    		
    		for(let i=0;i<response.length;i++){
    			if(response[i].taskman==localStorage.getItem("name")){
    				this.data.push(response[i])
    				this.data[i].taskcreatetime=formatDate(new Date(this.data[i].taskcreatetime), 'yyyy-MM-dd hh:mm:ss');
    			}
    		}
    		console.log(this.form)
    	})
    },
    methods: {
		submitForm(){

		},
	  	change(value){
	  		this.currentPage=value
	  		console.log(value)
	  	},
	  	sizeChange(value){
	  		this.pagesize=value
	  		console.log(value)
	  		//this.username= localStorage.getItem("username")
	  	},
	  	handleDelete(index,row,rows){
	  		this.$api.user.updatetaskstaut(row.taskid,TASKFLAG).then(response=>{  
	  			if(response){
	  				this.$api.admin.updatefix(row.taskid,FIXFLAG).then(response=>{	  				
				        this.$api.user.deletetask(row.taskid).then(response=>{
				        	if(response){
					  	        this.$notify.open({
						          content: '任务处理成功',
						          icon: 'smile-o',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'success',
						        });	
						        console.log(response,row.taskid)
						        rows.splice(index, 1)				        		
				        	}else{
						         this.$notify.open({
						          content: '请求失败！！稍后尝试',
						          placement: 'top-center',
						          transition: 'bounce',
						          type: 'danger',
						        });					        		
				        	}

				        })
	  				})
	  				
	  			}else{
		         this.$notify.open({
		          content: '请求失败！！稍后尝试',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });		  				
	  			}
	  		})
	  	}
  	
    }
  }
</script>

<style>
</style>