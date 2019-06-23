<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>老师录入</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="padding: 60px;width: 500px;">
			
		<el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="学号：" prop="number">
		    <el-input v-model.number="ruleForm2.number" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="名字：" prop="username">
		    <el-input v-model.number="ruleForm2.username" size="medium"></el-input>
		  </el-form-item>		  
		  <el-form-item label="性别：" prop="sex">
		    <el-input v-model="ruleForm2.sex"  size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="联系电话：" prop="telephone">
		    <el-input v-model="ruleForm2.telephone"  size="medium"></el-input>
		  </el-form-item>  
		  <el-form-item label="QQ号码：" prop="qq">
		    <el-input v-model="ruleForm2.qq" auto-complete="off" size="medium"></el-input>
		  </el-form-item> 
		  <el-form-item label="老师描述：" prop="qq">
		    <el-input type="textarea":rows="5" v-model="ruleForm2.desc" auto-complete="off" size="medium"></el-input>
		  </el-form-item>		  
		  
		  
		  <el-form-item style="text-align: left;">
		    <el-button type="primary" size="medium" @click="submitForm(ruleForm2)">提交</el-button>
		  </el-form-item>
		</el-form>
			</div>
	</div>
</template>

<script>
const flag = 2
  export default {
    data() {
      return {
        ruleForm2:[],
      };
    },
    created(){
		this.$api.user.findbyuserid(flag,localStorage.getItem("uid")).then(response=>{
				this.ruleForm2=response
		});    	
    },
    methods: {
      submitForm(formName) {
			
			
			
	        this.$message({
	          message: '提交成功',
	          type: 'success'
	        });		

      },
    }
  }
</script>

<style scoped>

  
</style>