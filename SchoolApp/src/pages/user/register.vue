<template>
	<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: skyblue;overflow: hidden;">
		<div style="width: 400px;padding: 60px;background: white;border-radius: 10px;margin:200px auto;">
			<p>注：注册录入：</p>
			<br />
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户账号：" prop="login">
		    <el-input v-model.number="ruleForm2.login" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="你的名字：" prop="name">
		    <el-input v-model="ruleForm2.name" size="medium"></el-input>
		  </el-form-item>	
		  <el-form-item label="你的性别：" prop="sex">
		    <el-input v-model="ruleForm2.sex" size="medium"></el-input>
		  </el-form-item>	
		  <el-form-item label="你的qq：" prop="qq">
		    <el-input v-model="ruleForm2.qq" size="medium"></el-input>
		  </el-form-item>	
		  <el-form-item label="你的电话：" prop="tel">
		    <el-input v-model="ruleForm2.tel" size="medium"></el-input>
		  </el-form-item>
		  <p>注：学生输入班级/老师输入自我描述：</p>
		  <el-form-item  label="班级/描述：" prop="classname">
		    <el-input type="textarea" v-model="ruleForm2.classname" size="medium"></el-input>
		  </el-form-item>			  
		  <el-form-item label="用户密码：" prop="pass">
		    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码：" prop="checkPass">
		    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item>
		  	<el-radio v-model="ruleForm2.radio" label="1">学生</el-radio>
  			<el-radio v-model="ruleForm2.radio" label="2">老师</el-radio>
  			<el-radio v-model="ruleForm2.radio" label="3">管理员</el-radio>
		  </el-form-item>	  
		  <el-form-item>
		    <el-button type="primary" size="medium" @click="submitForm('ruleForm2')">注册</el-button>
		    <el-button  size="medium"  @click="resetForm('/')">返回登陆</el-button>
		  </el-form-item>
		</el-form>
		</div>

	</div>
</template>

<script>
  export default {
    data() {
      var check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入账号：'));
          } else {
              callback();
            
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          name:'',
          checkPass: '',
          login: '',
          radio:'',
          classname:'',
          sex:'',
          tel:'',
          qq:''
        },
        desc:"无",
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          login: [
            { validator: check, trigger: 'blur' }
          ],
          radio: [
            { validator: check, trigger: 'blur' }
          ]          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	if(this.ruleForm2.radio==1){
	 		this.$api.user.register(
				this.ruleForm2.radio,
				this.ruleForm2.login,
				this.ruleForm2.name,
				this.ruleForm2.pass,
				this.ruleForm2.classname,
				this.ruleForm2.sex,
				this.ruleForm2.tel,
				this.ruleForm2.qq,
			).then(response=>{
				if(response){
					this.$message({
				          showClose: true,
				          message: '恭喜你，注册成功',
				          type: 'success'
				        });
				}else{
					
					this.$message.error('账号、密码错误，注册失败');	
				}
			});         		
          	}
          	if(this.ruleForm2.radio==2){
	 		this.$api.user.registerTeach(
				this.ruleForm2.radio,
				this.ruleForm2.login,
				this.ruleForm2.name,
				this.ruleForm2.pass,
				this.ruleForm2.classname,
				this.ruleForm2.sex,
				this.ruleForm2.tel,
				this.ruleForm2.qq,
			).then(response=>{
				if(response){
					this.$message({
				          showClose: true,
				          message: '恭喜你，注册成功',
				          type: 'success'
				        });
				}else{
					
					this.$message.error('注册失败');	
				}
			});         		
          	}
         } else {
            this.$message.error('账号、密码错误，注册失败');	
          }
        });
      },
      resetForm(formName) {
        this.$router.push(formName)
      }
    }
  }
</script>

<style scoped>

  
</style>