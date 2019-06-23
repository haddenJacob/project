<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>作业发布</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="padding: 60px;width: 500px;">
			
		<el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="班级名称：：" prop="classname">
		    <el-input v-model.number="ruleForm2.classname" size="medium"></el-input>
		  </el-form-item>	
		  <el-form-item label="发布人：" prop="username">
		    <el-input v-model.number="ruleForm2.username" size="medium"></el-input>
		  </el-form-item>	
		  <el-form-item label="教师：" prop="teachername">
		    <el-input v-model.number="ruleForm2.teachername" size="medium"></el-input>
		  </el-form-item>			  
			<el-form-item label="截至日期：" prop="dataValue2" style="text-align: left;">
		    <el-date-picker
		      v-model="ruleForm2.dataValue2"
		      type="date"
		      @change="getTime"
		      value-format="yyyy-MM-dd hh:mm:ss"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>		  
		 		  
		  <el-form-item label="作业名字：" prop="workName">
		    <el-input v-model.number="ruleForm2.workName" size="medium"></el-input>
		  </el-form-item>
		  <el-form-item label="所属课程：" prop="workClass">
		    <el-input v-model="ruleForm2.workClass"  size="medium"></el-input>
		  </el-form-item>	
		  
		  <el-form-item style="text-align:left;">
		    <el-button type="primary" size="medium" @click="submitForm(ruleForm2)">发布作业</el-button>
		  </el-form-item>
		 	  
		  
		</el-form>
			<div style="text-align: left;">
				发布公告：
			<!--<div style="text-align: left;">-->
				 	  <el-select v-model="value" placeholder="请选择班级">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>	
			<!--</div>-->				
				<el-input
				  type="textarea"
				  :rows="10"
				  placeholder="请输入内容"
				  v-model="textarea">
				</el-input>				
			</div>	
			<div style="text-align: left;">
				 <el-button type="primary" size="medium" @click="submit(textarea,value)">公告</el-button>
			</div>
			
			</div>

	</div>
</template>

<script>
import {formatDate} from '@/common/config/data'	
	const username=''
  export default {
    data() {
      return {
        ruleForm2: {
          username:'',
          dataValue2: '',
          workName:'',
          workClass:'',
          classname:'',
          teachername:''
        },
        value:'',
        textarea:'',
 
        options: [{
          value: '物联网1511',
          label: '物联网1511'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],//this.username= localStorage.getItem("username")        
      };
    },
    methods: {
      submitForm(formName) {
		if(formName.dataValue1!=''&&
		formName.dataValue2!=''&&
		formName.classname!=''&&
		formName.teachername!=''&&
		formName.workName!=''&&
		formName.workClass!=''
		){
			let time=formatDate(new Date(formName.dataValue2), 'yyyy-MM-dd hh:mm:ss')
        this.$api.home.taskrelease(this.ruleForm2.username,
        	this.ruleForm2.workClass,
        	this.ruleForm2.classname,
        	this.ruleForm2.workName,
        	time,
        	this.ruleForm2.teachername,).then(response=>{
			if(response){
		        this.$message({
		          message: '发布成功',
		          type: 'success'
		        });	
		       }else{
			  this.$message.error('失败~重新发布');
		}	
				});  				
	
		}else{
			  this.$message.error('失败~重新发布');
		}
      },
      submit(val,sval){
		if(
			val!=''&&sval!=''
		){
			

		this.$api.home.releasenotice(localStorage.getItem("username"),this.value,this.textarea).then(response=>{
			console.log(response);
		});			
			
			
        this.$message({
          message: '公告发布成功',
          type: 'success'
        });			
		}else{
			  this.$message.error('重新发布');
		}      	
     },
     //时间格式化发送后台
		getTime(date){
          this.ruleForm2.dataValue2 = date;
          console.log(this.ruleForm2.dataValue2);
		 }     
    }
  }
</script>

<style scoped>

  
</style>