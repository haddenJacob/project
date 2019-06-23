<template>
	
	<div class="note" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow: hidden;background-repeat:no-repeat;background-position: center;" >
		<img src="http://img1.imgtn.bdimg.com/it/u=3988939346,4146767415&fm=214&gp=0.jpg" style="width: 100%;height:100%" />
		<div style="width: 500px;background: white;border-radius: 10px;margin:200px auto;position: absolute;top: 0px;right: 200px;">
			<div 
				style="height: 100px;background: black;border-radius: 10 0;color: white;font-size: 30px;text-align: center;line-height: 100px;">
				班级管理系统
			</div>
			<div style="padding: 40px;">
		<el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="用户账号：" prop="number">
		    <el-input v-model="ruleForm2.number" auto-complete="off" size="medium"></el-input>
		  </el-form-item>
		  <br />
		  <el-form-item label="用户密码：" prop="password">
		    <el-input type="password" v-model="ruleForm2.password" auto-complete="off" size="medium"></el-input>
		  </el-form-item>
		  
		  <el-form-item>
		  	<el-radio v-model="ruleForm2.flag" label="2">老师</el-radio>
  			<el-radio v-model="ruleForm2.flag" label="1">学生</el-radio>
  			<el-radio v-model="ruleForm2.flag" label="3">管理员</el-radio>
		  	</el-form-item>
		  <el-form-item>
		  	
		    <el-button type="primary" size="medium" @click="loginForm(ruleForm2)">登录</el-button>
		    <el-button  size="medium"  @click="resetForm()">注册</el-button>
		  </el-form-item>
		</el-form>
		</div>
		
		
		
		</div>
	</div>
</template>

<script>
  export default {
    data() {   	
      return {   	
        ruleForm2: {
          number: '',
          password: '',
          flag: '',
            note: {
			  backgroundImage: "url(" + require("../../assets/fdmbg.jpg") + ")",
			  backgroundRepeat: "no-repeat",
			  backgroundSize: "25px auto",
			  marginTop: "5px",
			  },
        },      
      };
    },
    methods: {
      loginForm(formName) {      	
       if (formName.number!=''&&formName.password!=''&&formName.flag!='') {
       	let uid = localStorage.setItem("uid", formName.number)
       	let flag = localStorage.setItem("flag", formName.flag)  
		const that = this
   		this.$api.user.userLogin(formName.number,formName.password,formName.flag).then(response=>{
   			
   			if(response!=''){
	   			this.$store.commit('changeLogin','100') 
				console.log(response);
				let classname = localStorage.setItem("class", response.classname)
				let username = localStorage.setItem("username", response.username)
				let flagc = localStorage.setItem("flagc", response.flag)
				console.log(response.classname);
				this.$router.push("/index")
				        this.$message({
			          showClose: true,
			          message: '恭喜你，这是一条成功消息',
			          type: 'success'
			        });
			}else{
				
				this.$message.error('账号、密码错误');	
			}
		});      	
       
    } else {
        this.$message.error('请输入账号、密码、类型');
      }
  },
      resetForm(formName) {
        this.$router.push("/user/register");
      }
     }
  }
</script>

<style scoped>
body{
	background-image: url(../../assets/fdmbg.jpg);	
}
  
</style>

//           this.$ajax({
//			      method: 'post',
//			      url: 'http://localhost:8080/cloud_note/user/login.do',
//			      params: {
//			      	name:formName.pass,password:formName.checkPass
//			      },
//			   })
//			   //请求成功后执行then          如果直接在里面访问 this，无法访问到 Vue 实例，this指向发生了变化。建议使用箭头函数,下面有讲
//			   .then(function (response) {
//			        console.log(response);   //处理后台返回的数据
//			     }) 
//			   //请求失败后执行catch
//			   .catch(function(err){
//			        console.log(err)
//			     }) 


//		this.$api.user.userLogin(formName.pass,formName.checkPass).then(response=>{
//			console.log(response.data);
//		});