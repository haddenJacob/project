<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>学生录入</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="padding: 60px;width: 500px;">
			
		<el-form status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="学号：">
		    <el-input v-model="ruleForm2.stdnumber" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="名字：">
		    <el-input v-model="ruleForm2.username" size="medium"></el-input>
		  </el-form-item>		  
		  <el-form-item label="所在班级：">
		    <el-input v-model="ruleForm2.classname" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="性别：">
		    <el-input v-model="ruleForm2.sex"  size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="联系电话：">
		    <el-input v-model="ruleForm2.telephone"  size="medium"></el-input>
		  </el-form-item>  
		  <el-form-item label="QQ号码：">
		    <el-input v-model="ruleForm2.qq" auto-complete="off" size="medium"></el-input>
		  </el-form-item>  
		  <el-form-item label="旧密码：">
		    <el-input 
		    	type="text" 
		    	v-model="ruleForm2.pwd" 
		    	auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="新密码：">
		    <el-input 
		    	type="text" 
		    	v-model="ruleForm2.newpwd" 
		    	auto-complete="off"></el-input>
		  </el-form-item>			  
		  <el-form-item>
		    <el-button type="primary" size="medium" @click="submitForm()">提交</el-button>
		  </el-form-item>
		</el-form>
			</div>
	</div>
</template>

<script>
const flag = 1
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
      submitForm() {
      	if(this.ruleForm2.number!=''
      &&this.ruleForm2.pwd!=''){
      	if(this.ruleForm2.pwd==this.ruleForm2.newpwd){
      		console.log(1)
		 		this.$api.user.update(
					this.ruleForm2.stdnumber,
					this.ruleForm2.username,
					this.ruleForm2.newpwd,
					this.ruleForm2.classname,
					this.ruleForm2.sex,
					this.ruleForm2.telephone,
					this.ruleForm2.qq,
					localStorage.getItem("flag")
				).then(response=>{
					if(response){
				      this.$message({
			          showClose: true,
			          message: '恭喜你，修改成功',
			          type: 'success'
			        });							
					}else{
						this.$message.error('修改失败');
					}
				
				}); 
			}else{
				this.$message.error('密码不相同');
			}
      	}else{
      		this.$message.error('错了哦');
      	}

      },
//    resetForm(formName) {
//      this.$router.push(formName)
//    }
    }
  }
</script>

<style scoped>

  
</style>