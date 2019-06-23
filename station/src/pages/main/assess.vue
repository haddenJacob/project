<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/assess" exact><i class="fa fa-tag"></i>维修评价</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div class="bcc">
				<el-card class="box-card" style='text-align: left;'>
				  <div slot="header" class="clearfix">
				    <span>寝室维修评价</span>
				    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
				  </div>
				  <div class="text item" style="width: 500px;">
					<el-form  status-icon  label-width="100px" class="demo-ruleForm">
					  <el-form-item label="学号" prop="num">
					    <el-input type="text" v-model="form.num" auto-complete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="评价人" prop="name">
					    <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="任务编号" prop="id">
					    <el-input type="text" v-model="form.id" auto-complete="off"></el-input>
					  </el-form-item>					  
					   <!--<el-form-item label="报修时间" prop="time">
					    <el-date-picker
					      v-model="form.time"
					      type="date"
					      @change="getTime"
					      value-format="yyyy-MM-dd 00:00:00"
					      placeholder="选择日期">
					    </el-date-picker>					    
					    
					  </el-form-item>{{form.time}}-->
					  <el-form-item label="星级">
					  <el-rate
					  	style="line-height: 50px;"
					    v-model="form.count"
					    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
					  </el-rate>
					  </el-form-item>					  
					  
					<el-form-item label="服务描述" prop="desc">
						<el-input
						  type="textarea"
						  :rows="5"
						  placeholder="请输入内容"
						  v-model="form.desc">
						</el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm()">提交</el-button>
					  </el-form-item>
					</el-form>
				    
				  </div>
				</el-card>
			<el-card class="box-card" >
			  <div slot="header" class="clearfix" style="text-align: left;">
			    <span>你最近报修任务</span>
			  </div>				
					<div style="">
					<el-table
					    :data="data"
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
					  </el-table>					
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
        form: {
          num: '',
          name: '',
          id:'',
          time: '',
          count:null,
          desc:''
        },
        data:[],
        
      }
    },
 	created(){    	
		this.$api.admin.findtaskall().then(response=>{
			for(let i =0;i<response.length;i++){
				this.data.push(response[i])
				this.data[i].fixtime=formatDate(new Date(this.data[i].fixtime), 'yyyy-MM-dd hh:mm:ss');
			}
		}); 		
 	},
    methods: {
		submitForm(){
		this.$api.user.insertassess(
			this.form.num,
			this.form.name,
			this.form.id,
			this.form.count,
			this.form.desc
		).then(response=>{
				if(response){
		  	        this.$notify.open({
		          content: '评价成功',
		          icon: 'smile-o',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'success',
		        });			
				}else{
			         this.$notify.open({
			          content: '失败！！！！重新尝试',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'danger',
			        });				
				}
		}); 
		},
		getTime(date){
			this.form.time=date
			console.log(this.form.time)
		}		
     }
  }
</script>

<style scoped>
	.bcc{
		height: 700px;overflow: auto;
	}
	.bcc::-webkit-scrollbar {
	    display: none;
	}
</style>