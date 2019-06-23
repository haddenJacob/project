<template>
	<div >
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>密码修改</span>
			  </div>
				  <div class="text item" style="width: 500px;">
					<el-form  status-icon  
						label-width="100px" 
						class="demo-ruleForm">
					  <el-form-item label="旧密码：" prop="oldpwd">
					    <el-input 
					    	type="text" 
					    	v-model="form.name" 
					    	auto-complete="off"></el-input>
					  </el-form-item>						
					  <el-form-item label="新密码：" prop="pwd">
					    <el-input 
					    	type="text" 
					    	v-model="form.name" 
					    	auto-complete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="确认密码：" prop="newpwd">
					    <el-input 
					    	type="text" 
					    	v-model="form.name" 
					    	auto-complete="off"></el-input>
					  </el-form-item>					  
					  <el-form-item>
					    <el-button type="primary" @click="submitForm()">提交</el-button>
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
      		{oldpwd:'',pwd:'',newpwd:''}
      		]
      }
    },
    methods: {
		submitForm(){

		},
     }
  }
</script>

<style>
</style>