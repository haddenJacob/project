<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/complain" exact><i class="fa fa-tag"></i>消息发布</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="height: 600px;overflow: auto;">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>投诉</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>
				  <div class="text item" style="width: 500px;">
					<el-form  status-icon  label-width="100px" class="demo-ruleForm">
					  <el-form-item label="学号" prop="num">
					    <el-input type="text" v-model="form.num" auto-complete="off"></el-input>
					</el-form-item>	
					  <el-form-item label="姓名" prop="name">
					    <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>						
					  <el-form-item label="投诉账号" prop="tnum">
					    <el-input type="text" v-model="form.tnum" auto-complete="off"></el-input>
					</el-form-item>						
					  <el-form-item label="投诉姓名" prop="tname">
					    <el-input type="text" v-model="form.tname" auto-complete="off"></el-input>
					</el-form-item>						
					<el-form-item label="投诉内容描述" prop="desc">
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
			  	</el-card >	
			<el-card class="box-card" >
			  <div slot="header" class="clearfix" style="text-align: left;">
			    <span>可投诉维修人员信息</span>
			  </div>				
					<div style="width: 100%;text-align: left;height: 400px;overflow: auto;">
					<el-table
					    :data="data"
					    style="width: 100%;text-align: left;"
					    max-height="600">
					    <el-table-column
					      prop="updatmanname"
					      label="姓名"
					      width="150">
					    </el-table-column>
					    <el-table-column
					      prop="updatmannum"
					      label="账号"
					      width="150">
					    </el-table-column>				    
					    <el-table-column
					      prop="updatmansex"
					      label="性别"
					      width="220">
					    </el-table-column>	
					    <el-table-column
					      prop="updatmantel"
					      label="联系电话"
					      width="150">
					    </el-table-column>					    
					    <el-table-column
					      prop="updatmanqq"
					      label="QQ号码"
					      width="200">
					    </el-table-column>					    
					    <el-table-column
					      prop="updatmanpassword"
					      label="密码"
					      width="150">
					    </el-table-column>					    
					  </el-table>					
					</div>				
					</el-card> 			  	
			</div>
	</div>
</template>

<script>
const flag = 3
  export default {
    data() {
      return {
      		form:[
      		{
      			num:'',
      			name:'',
      			tnum:'',
      			tname:'',      			
      			desc:''
      			}
      		],
      		data:[]
      }
    },
  created(){
    		this.$api.admin.findbyuserall(flag).then(response=>{			
			for(let i=0;i<response.length;i++){
				this.data.push(response[i])
			}
		});  	
  },    
    methods: {
		submitForm(){
			this.$api.user.insertcom(
				this.form.num,
				this.form.name,
				this.form.tnum,
				this.form.tname,
				this.form.desc
			).then(response=>{
				if(response){
		  	        this.$notify.open({
		          content: '投诉成功，管理员将会尽快给您回复',
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
			})
		}
     }
  }
</script>

<style>
</style>