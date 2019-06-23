<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>资源管理</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="border: 1 solid black;width:1100px;max-height：600px;margin: 20px;padding: 30px;">
				<div style="margin-top: 0px;margin-bottom: 20px;">
					
			<el-row>
			  <el-col :span="6"> 	 	
			  	<div style="text-align: right;line-height: 30px;">选择班级：</div>
			  </el-col>
			  <el-col :span="6">
			 	  <el-select v-model="value" placeholder="请选择班级">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>	  	
			  </el-col>
			  <el-col :span="6">
			   	
			  <el-button
			    type="primary"
			    @click="search()" 
			    icon="el-icon-search">
			  搜索
			  </el-button>   	
			  	
			  </el-col>
			  <el-col :sp  
			  <el-col :span="6"><div class="grid-content bg-purple" style="text-align: left;margin-left: 10px;">
				
			  	
			  </div></el-col>
			</el-row>
				</div>
				<el-table
				    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      fixed
				      prop="resourcesid"
				      label="编号"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="filename"
				      label="资源名字"
				      width="220">
				    </el-table-column>				    
				    <el-table-column
				      prop="uploader"
				      label="上传人"
				      width="200">
				    </el-table-column>
				    <el-table-column
				      prop="uploader"
				      label="下载次数"
				      width="200">
				    </el-table-column>				    
				    <el-table-column
				      label="操作"
				      width="300">	
						      <template slot-scope="scope">
								<el-popover
								  placement="right"
								  width="400"
								  trigger="click">
									<div>
										<el-form ref="form" :model="scope.row" label-width="80px">
										  <el-form-item label="姓名">
										    <el-input v-model="scope.row.filename"></el-input>
										  </el-form-item>
										   <el-form-item label="学号">
										    <el-input v-model="scope.row.uploader"></el-input>
										  </el-form-item>
										  <el-form-item label="编号">
										    <el-input v-model="scope.row.resourcesid"></el-input>
										  </el-form-item>
										  <el-button @click="saveClick(scope.row.name,scope.row.code,scope.row.className)" type="success">编辑保存</el-button>	
										  </el-form >
																		
									</div>
								  <el-button
						          size="mini"
						          @click="handleEdit(scope.$index, scope.row)"								  	
								  slot="reference">编辑</el-button>
								</el-popover>						          
						          
						        <el-button
						          size="mini"
						          type="danger"
						          @click="handleDelete(scope.$index, scope.row,tableData)">删除</el-button>
						      </template>	 
				    </el-table-column>
				  </el-table>	
				  			  
                <br />

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
const username=''
export default {
  data() {
    return {  
     
        options: [{
          value: '物联网1511',
          label: '物联网1511'
        }],
        value: '',	
    	
    	add:localStorage.getItem("username"),
    	number:localStorage.getItem("uid"),
    	classname:localStorage.getItem("class"),    	
        currentPage:1,
        pagesize:10,
        total:10,
        tableData: [],      
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
        		this.tableData.push(response[i])
        	}
		});    	
  },
  methods:{
  	change(value){
  		this.currentPage=value
  	},
  	sizeChange(value){
  		this.pagesize=value
  	},
      handleEdit(index, row) {
        console.log(row);
      },
      handleDelete(index, row,rows) {
		if(rows!=''&&row!=''){
        	for(let i=0;i<this.tableData.length;i++){
        		let id = this.tableData[i].resourcesid
        		let path = this.tableData[i].filepath
        		if(index==i){
		   	        this.$api.home.deleteFile(id,path).then(response=>{		      		
			        this.$message({
			          message: '恭喜你，删除成功',
			          type: 'success'
			        }); 			
		        	rows.splice(index, 1)							
							});      			
        		}else{
        			this.$message.error('失败');
        		}
        	}
      		
		
		}else{
			this.$message.error('失败');
		}
      },
      search(){
        this.$api.home.seefile(this.number,this.value,this.pagesize,this.currentPage).then(response=>{       	
        	for(let i=0;i<response.length;i++){
        		this.tableData.push(response[i])
        	}
		});        	
      },
      
      saveClick(val,sval,ssval){
      	if(val!=''&&sval!=''&&ssval!=''){
      		
      		
      		
	        this.$api.home.seefile(this.number,this.classname,this.pagesize,this.currentPage).then(response=>{
	        	
	        	for(let i=0;i<response.length;i++){
	        		this.tableData.push(response[i])
	        	}
			});       		
	      		
      		
	        this.$message({
	          message: '恭喜你，编辑成功',
	          type: 'success'
	        });      		
      	}else{
      		this.$message.error('失败');
      	}
      	
      	
      	
      	console.log(val,sval)
      }
  }
}
</script>

<style>
</style>