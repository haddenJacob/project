<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>班级作业</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="border: 1 solid black;width:1100px;height: 600px;margin: 20px;overflow: hidden;padding: 30px;">
				<el-table
				    :data="tableData4"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      fixed
				      prop="createtime"
				      label="发布日期"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="publisher"
				      label="发布人"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="endtime"
				      label="截至日期"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="taskid"
				      label="编号"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="taskname"
				      label="作业"
				      width="200">
				      
				    </el-table-column>
				    <el-table-column
				      prop="countnum"
				      label="已交人数"
				      width="100">
				      
				    </el-table-column>				    
				    <el-table-column
				      prop="coursename"
				      label="所属课程"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="120">
				      <template slot-scope="scope">
						<el-upload
						  class="upload-demo"
						  :action="address"
						  :show-file-list="false"
						  :on-change="handleChange"
						  :file-list="fileList3">
						  <el-button size="small" type="primary">点击上传</el-button>
						</el-upload>
				      </template>
				    </el-table-column>
				  </el-table>				
				
				
			</div>
		</div>
</template>

<script>
	import {formatDate} from '@/common/config/data'	
  export default {
  	created(){
  		
        this.$api.home.showtask(localStorage.getItem("username"),localStorage.getItem("class")).then(response=>{
        	console.log(response)
        	for(let i=0;i<response.length;i++){
        		this.tableData4.push(response[i])
        		this.tableData4[i].createtime=formatDate(new Date(this.tableData4[i].createtime), 'yyyy-MM-dd hh:mm')
        		this.tableData4[i].endtime=formatDate(new Date(this.tableData4[i].endtime), 'yyyy-MM-dd hh:mm')
        	}
			
	        this.$message({
	          message: localStorage.getItem("username")+localStorage.getItem("class"),
	          type: 'success'
	        });	
		});    		
  	},
    methods: {    
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);   
        console.log(file)
        console.log(file.response)
        if(file.status=="success"){
        	
        	this.data=file
	        this.$notify({
	          title: '上传成功',
	          message: file.name+"上传成功",
	          type: 'success'
	        });        	
        }else{
	        this.$notify.error({
	          title: '错误',
	          message: file.name+"失败！重新上传",
	        });        		
        }
      } 
    },
    data() {
      return {
      	classname:localStorage.getItem("class"),
        fileList3: [],  
        address:"http://localhost:8080/ssmproject/onefile",
        data:[],
        tableData4: []
      }
    }
  }
</script>

<style>
</style>