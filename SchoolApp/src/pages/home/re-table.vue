<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>资源共享</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="border: 1 solid black;width:1100px;max-height：600px;margin: 20px;padding: 30px;">
	<el-row>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	文件:
		  				  <el-select v-model="value" placeholder="请选择文件类型">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>		
		  	
		  	
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light">
		  	班级：
		  				  <el-select v-model="value1" placeholder="请选择班级">
						    <el-option
						      v-for="item in options1"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>	  	
		  	
		  </div></el-col>
		  <el-col :span="6">
		  					
						<div style="text-align: left;">				
								<el-upload
								  class="upload-demo"
								  :action="address"
								  :on-change="handleChange"
								  multiple>
								  <el-button size="small" type="primary">文件上传</el-button>
								</el-upload>
								</div>
		  </el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>				
				
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
				      prop="uploader"
				      label="发布人"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="filename"
				      label="资源名字"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="classname"
				      label="所属班级"
				      width="290">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="120">
				      <template slot-scope="scope">
						  <el-button size="small" 
						  	@click="downClick(scope.$index)"
						  	type="primary">下载</el-button>
				      </template>
				    </el-table-column>
				  </el-table>				
				<div>
					<div style="margin-top: 10px;">
					<el-pagination
					  background
					  @current-change="change"
					  @size-change="sizeChange"
					  layout="prev, pager, next"
					  :page-size="pagesize"
					  :total="total">
					</el-pagination>	
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  data() {
    return {
    	add:localStorage.getItem("username"),
    	number:localStorage.getItem("uid"),
    	classname:localStorage.getItem("class"),
        options: [{
          value: '图片',
          label: '图片'
        }, {
          value: '文本',
          label: '文本'
        }, {
          value: '其他',
          label: '其他'
        }],
        value: '',   
        options1: [{
          value: '物联网1511',
          label: '物联网1511'
        }, {
          value: '软工1511',
          label: '软工1511'
        }, {
          value: '其他',
          label: '其他'
        }],
        value1: '',         
        currentPage:1,
        pagesize:10,
        total:10,
       input: '',
       tableData4: [],
        address:'',
    }
  },
      watch: {
    currentPage:{
      handler(){
        this.$api.home.seefile(this.number,this.classname,this.pagesize,this.currentPage).then(response=>{
        	
        	for(let i=0;i<response.length;i++){
        		this.tableData.push(response[i])
        	}
		}); 
      }
    }
  },
  created(){
        this.$api.home.seefile(this.number,this.classname,this.pagesize,this.currentPage).then(response=>{
        	
        	for(let i=0;i<response.length;i++){
        		this.tableData4.push(response[i])
        		console.log(this.tableData4)
        	}
		});     	
  },

      watch: {
        value1:{
          handler(){
            this.valu=this.value1
            this.address="http://localhost:8080/ssmproject/uploadfile?username="+this.add+"&classname="+this.valu+"&type="+this.value
          }
        }
  },
  methods:{
  	change(value){
  		this.currentPage=value
  		console.log(value)
  	},
  	sizeChange(value){
  		this.pagesize=value
  		console.log(value)
  	},
       handleChange(file, fileList) {
       	const username=localStorage.getItem("username");   	
        this.fileList3 = fileList.slice(-3);   
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
      },
      downClick(val){
        	for(let i=0;i<this.tableData4.length;i++){
        		if(val==i){
         		let fileAdd=this.tableData4[i].filepath
         		let fileName=this.tableData4[i].realname
         			this.$api.home.downfile(fileAdd,fileName).then(response=>{
         			this.$message({
			          showClose: true,
			          message: '恭喜你，下载成功资源位置:'+fileAdd+'名字为:'+fileName,
			          type: 'success'
			        });	
         				
         			});
        		}

        	}
      }
  }
}
</script>

<style>
</style>