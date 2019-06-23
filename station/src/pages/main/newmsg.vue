<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/newmsg" exact><i class="fa fa-tag"></i>消息发布</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>发布最新公告</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>
				  <div class="text item" style="width: 500px;">
					<el-form  status-icon  label-width="100px" class="demo-ruleForm">
					  <el-form-item label="账号" prop="num">
					    <el-input type="text" v-model="form.num" auto-complete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="发布人" prop="name">
					    <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="发布楼栋" prop="code">
					    <el-input type="text" v-model="form.code" auto-complete="off"></el-input>
					  </el-form-item>					  
					   <el-form-item label="发布时间" prop="time">
					    <el-date-picker
					      v-model="form.time"
					      type="date"
					      @change="getTime"
					      value-format="yyyy-MM-dd"
					      placeholder="选择日期">
					    </el-date-picker>					    
					    
					  </el-form-item>				  				  
					<el-form-item label="公告描述（注明：楼栋号）" prop="desc">
						<el-input
						  type="textarea"
						  :rows="5"
						  placeholder="请输入描述内容（请注明：楼栋号）"
						  v-model="form.desc">
						</el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm()">提交发布</el-button>
					  </el-form-item>
					</el-form>
				    
				  </div>
			  	</el-card >	
			</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      		form:[
      		{
      			name:'',
      			num:'',
      			code:'',
      			time:'',
      			desc:''}
      		]
      }
    },
    methods: { 	
		submitForm(){
 		this.$api.user.releasenotice(
 			this.form.num,
 			this.form.name,
 			this.form.desc,
 			this.form.code
 		).then(response=>{
				if(response){
		  	        this.$notify.open({
		          content: '通知发布成功',
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
		}
     }
  }
</script>

<style>
</style>