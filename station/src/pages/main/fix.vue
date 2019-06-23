<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/fix" exact><i class="fa fa-tag"></i>寝室报修</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
				
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>寝室报修</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>	
			  <div style="width: 500px;">
				<el-form  status-icon ref="form" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="学号：" prop="studentnum">
				    <el-input type="number" v-model="form.studentnum" auto-complete="off"></el-input>
				  </el-form-item>					
				  <!--<el-form-item label="维修时间段：" prop="fixtime">
				    <el-input type="text" v-model="form.fixtime" auto-complete="off"></el-input>
				  </el-form-item>-->
					   <el-form-item label="发布时间" prop="fixtime">
					    <el-date-picker
					      v-model="form.fixtime"
					      type="date"
					      @change="getTime"
					      value-format="yyyy-MM-dd hh:mm:ss"
					      placeholder="选择日期">
					    </el-date-picker>					    
					    
					  </el-form-item>					  
				  <el-form-item label="报修人：" prop="studentname">
				    <el-input type="text" v-model="form.studentname" auto-complete="off"></el-input>
				  </el-form-item>				  
				  <el-form-item label="报修图片：" style="text-align: left;">
				    <el-upload
					  class="upload-demo"
					  ref="upload"
					  :action="address"
						  :data="form"
						  multiple
					      :onError="uploadError"
					      :onSuccess="uploadSuccess"
					      :before-upload="beforeUpload"
						  :auto-upload="false"
					  list-type="picture">
					  <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
					</el-upload>
				  </el-form-item>
					  <el-form-item label="楼栋：" style="text-align: left;">
						<el-input type="text" v-model="form.studentcode" auto-complete="off"></el-input>
					   </el-form-item >
					  <el-form-item label="寝室号：" style="text-align: left;">
							<el-input type="text" v-model="form.studenthouse" auto-complete="off"></el-input>
					   </el-form-item >				  
				    <el-form-item label="损坏描述：" prop="desc">
					    <el-input type="textarea" 
					    	:rows="5"
					    	v-model="form.fixdesc"></el-input>
					  </el-form-item>
					  <!--<el-form-item label="模式：" prop="type" style="text-align: left;">
					    <el-radio-group v-model="form.type">
					      <el-radio label="预约"></el-radio>
					      <el-radio label="立即"></el-radio>
					    </el-radio-group>
					  </el-form-item>					  -->
				  <el-form-item style="text-align: left;">
				    <el-button type="primary" @click="submitUpload">提交报修</el-button>
				  </el-form-item>
				  
				  
				</el-form>
			 </div>
			</el-card>				
			</div>
	</div>
</template>

<script>
import {api_baseUrl} from '@/common/base/baseUrl/env'
//文件地址
const adr='insertfix'
  export default {
    data() {
      return {
//      form: {
//        num:'',
//        createtime:'',
//        name: '',
//        img: '',
//        value: '', 
//        value1: '', 
//        desc:'',
//        type:'0'
//      },

        address:api_baseUrl+adr,
        form:{
			studentnum:'',
			studentname:'',
			fixtime:'',
			studentcode:'',
			studenthouse:'',
			fixdesc:'',
			fixflag:'0'
        },               
       }

    },
    methods: {
      submitUpload() {
			this.$refs.upload.submit();
//		this.$api.user.insertfix(
//			this.form.num,
//			this.form.name,
//			this.form.createtime,
//			this.form.value,
//			this.form.value1,
//			this.form.desc,
//			this.form.type).then(response=>{
//			console.log(response)
//		}); 			
      },
    	//上传之前
		beforeUpload(file){
		console.log(file)
		},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
	  // 上传成功后的回调
	  uploadSuccess (response, file, fileList) {
			if(response){
	  	        this.$notify.open({
	          content: '报修成功，请等待受理',
	          icon: 'smile-o',
	          placement: 'top-center',
	          transition: 'bounce',
	          type: 'success',
	        });			
			}else{
		         this.$notify.open({
		          content: '报修失败！！！！重新尝试',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });				
			}
	  },
	  // 上传错误
	  uploadError (response, file, fileList) {
			if(response){
		         this.$notify.open({
		          content: '报修失败！！！！重新尝试',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });				
			}
	  },
		getTime(date){
			this.form.time=date
		}
    }
  }
</script>

<style>
</style>