<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/share" exact><i class="fa fa-universal-access"></i>个人操作</router-link>
				  </breadcrumb-item>				  
				  <breadcrumb-item>
				    <router-link to="/share" exact><i class="fa fa-tag"></i>寝室共享</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div>
				<div style="font-size: 20px;margin-bottom: 20px; text-align: left;">
					<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>寝室环境共享</span>
					  </div>
					  <div class="text item">
							{{textdesc}}
					  </div>
					</el-card>				
				</div>
				
					<div>
					<el-upload
						  class="upload-demo"
						  drag
						  ref="upload"
						  :action="address"
						  :data="upLoadData"
						  multiple
					      :onError="uploadError"
					      :onSuccess="uploadSuccess"
					      :before-upload="beforeUpload"
						  :auto-upload="false">
						  <i class="el-icon-upload"></i>
						  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					</el-upload>	
					
					
					<div style="margin-top: 10px;margin-bottom: 10px;">
					<el-form :inline="true" class="demo-form-inline">
					  <el-form-item label="文件类型">
						  <el-select v-model="upLoadData.sharetype" placeholder="请选择文件类型">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					   </el-form-item >
					</el-form>
					</div>
					<el-button 
						style="margin-left: 10px;padding: 10px;" 
						size="small" 
						type="success" 
						@click="submitUpload"round>点击上传</el-button>	
						
					</div>
			</div>
	</div>
</template>

<script>
import {api_baseUrl} from '@/common/base/baseUrl/env'
//文件地址
const adr='uploadfile'
const uid=localStorage.getItem("uid")
const name=localStorage.getItem("name")
  export default {
    data() {
      return {
         options: [{
          value: '图片',
          label: '图片'
        }, {
          value: '视频',
          label: '视频'
        }, {
          value: '其他',
          label: '其他'
        }],
        address:api_baseUrl+adr,
        upLoadData:{
			studentnum:uid,
			studentname:name,
        	sharetype:''
        },
        value: '',
        textdesc:'上传寝室维修、建设环境效果，让更多人知道吧'
      };
    },
  watch: {
        value:{
          handler(){
            this.address=api_baseUrl+adr
          }
        }
  },
    methods: {
    	//上传之前
		beforeUpload(file){
		console.log(file)
		},

      submitUpload() {       
        this.$refs.upload.submit();
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
	          content: '上传成功',
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
	  },
	  // 上传错误
	  uploadError (response, file, fileList) {
			if(response){
		         this.$notify.open({
		          content: '上传失败！！！！重新尝试',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });				
			}
	  },      
    }
  }
</script>

<style>
</style>