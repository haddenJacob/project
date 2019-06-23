<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/allottask" exact><i class="fa fa-tag"></i>维修任务分配</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	维修任务分配
			    </span>
			  </div>
				<div style="">
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="studentname"
				      label="报修人"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="studentcode"
				      label="楼栋号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="studenthouse"
				      label="寝室号"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="studentnum"
				      label="账号"
				      width="150">
				    </el-table-column>	
				    <el-table-column
				      prop="fixtime"
				      label="可维修时间段"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="fixdesc"
				      label="报修描述"
				      width="200">
				    </el-table-column>		
				    <el-table-column
				      prop="fiximage"
				      label="图片路径"
				      width="200">
				    </el-table-column>					    
				    <el-table-column
				      prop="fixflag"
				      label="状态"
				      width="150">
				    </el-table-column>					    					    
				    <el-table-column
				      label="操作"
				      width="400">	
						      <template slot-scope="scope">
								<el-popover
								  placement="right"
								  width="400"
								  trigger="click">
									<div>
										<el-form ref="form" :model="scope.row" label-width="80px">
											<el-form-item label="维修人">
													<!--<label class="label" style="text-align: left;"></label>-->
												  <el-select v-model="form.value1" placeholder="请选择">
												    <el-option
												      v-for="item in data"
												      :key="item.updatmannum"
												      :label="item.updatmanname"
												      :value="item.updatmanname">
												    </el-option>
												  </el-select>	
											</el-form-item>
										  <el-form-item label="（0预约1紧急）" style="width: 300px;">
										    <el-input v-model="form.value2"></el-input>
										  </el-form-item>
										  <el-button @click="saveClick(scope.row,form.value1,form.value2)" type="success">分配给他维修</el-button>	
										  </el-form >
																		
									</div>
								  <el-button
						          size="mini"							  	
								  slot="reference">分配维修人</el-button>	
								</el-popover>	
								<el-popover
								  placement="right"
								  width="800"
								  trigger="click">
								  <div>
								  	<div>报修名字：{{scope.row.studentname}}</div>
								  	<div>报修描述：{{scope.row.fixdesc}}</div>
								  	<div>查看图片：根据图片路径选择图片查看
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
								  	</div>
								  </div>
							        <el-button
							          size="mini"
							          type="info"
							          slot="reference"
							          @click="">详情</el-button>		
						          </el-popover>
						        <el-button
						          size="mini"
						          type="danger"
						          @click="handleDelete(scope.$index, scope.row,form)">删除</el-button>								
						      </template>	 
				    </el-table-column>
				  </el-table>					
				</div>
				
				<div>
					<div style="margin-top: 10px;text-align: center;">
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
			  	</el-card >	
			</div>
	</div>
</template>

<script>
const flagnum = 3
import {formatDate} from '@/common/config/data'	
  export default {
    data() {
      return {
       	currentPage:1,
        pagesize:5,
        total:10, 
      	form:[],
      	data:[],
        imageUrl: "",
        dialogVisible: false      	
      }
    },
 	created(){    	
		this.$api.admin.findfixbystaut().then(response=>{
			for(let i =0;i<response.length;i++){
				this.form.push(response[i])
				this.form[i].fixtime=formatDate(new Date(this.form[i].fixtime), 'yyyy-MM-dd hh:mm:ss');
			}
		}); 
    	this.$api.admin.findbyuserall(flagnum).then(response=>{
			
			for(let i=0;i<response.length;i++){
				this.data.push(response[i])
			}console.log(this.form)
		}); 		
 	},
    methods: {
  	change(value){
  		this.currentPage=value
  		console.log(value)
  	},
  	sizeChange(value){
  		this.pagesize=value
  		console.log(value)
  		//this.username= localStorage.getItem("username")
  	},
  	//保存	
  	saveClick(val,vals,valss){
  		console.log(val,vals,valss)
  		let fixflag = '1'
	    this.$api.admin.updatefix(val.fixid,1).then(response=>{  		
		this.$api.admin.addtask(
			val.fixdesc,
			vals,
			val.studentcode+"栋:"+val.studenthouse+"寝室",
			val.fixtime,
			valss
		).then(response=>{
			if(response){
	  	        this.$notify.open({
	          content: '分配成功',
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
		}); 
	        	
	        });		
  	},
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },     
    handleEdit(index, row) {
        console.log(row);
    },
    handleDelete(index, row,rows) {
		if(rows!=''&&row!=''){
		this.$api.admin.updatefix(row.fixid).then(response=>{
			if(response){
	  	        this.$notify.open({
	          content: '删除成功',
	          icon: 'smile-o',
	          placement: 'top-center',
	          transition: 'bounce',
	          type: 'success',
	        });	
	        rows.splice(index, 1)
			}else{
		         this.$notify.open({
		          content: '失败！！！！重新尝试',
		          placement: 'top-center',
		          transition: 'bounce',
		          type: 'danger',
		        });				
			}
		});			 			
        				
		}else{
			this.$message.error('失败');
		}
      },
     }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 800px;
    height: 500px;
    line-height: 100%;
    text-align: center;
  }
  .avatar {
    width: 800px;
    height: 500px;
    display: block;
  }
</style>