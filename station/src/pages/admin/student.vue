<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>数据管理</router-link>
				  </breadcrumb-item>				  
				  <breadcrumb-item>
				    <router-link to="/student" exact><i class="fa fa-tag"></i>学生管理</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" >
			  <div slot="header" class="clearfix" style="text-align: left;">
			    <span>学生管理表</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>				
				<div style="">
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="studentname"
				      label="姓名"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="studentnum"
				      label="学号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="studentclass"
				      label="所在班级"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="studentsex"
				      label="性别"
				      width="100">
				    </el-table-column>	
				    <el-table-column
				      prop="studenttel"
				      label="联系电话"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="studentqq"
				      label="QQ号码"
				      width="200">
				    </el-table-column>					    
				    <el-table-column
				      prop="studentcode"
				      label="所在楼栋"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="studenthouse"
				      label="所在寝室"
				      width="150">
				    </el-table-column>	
				    <el-table-column
				      prop="studentpassword"
				      label="密码"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      label="操作"
				      width="200">	
						      <template slot-scope="scope">
								<el-popover
								  placement="right"
								  width="400"
								  trigger="click">
									<div>
										<el-form ref="form" :model="scope.row" label-width="80px">
										  <el-form-item label="姓名">
										    <el-input v-model="scope.row.studentname"></el-input>
										  </el-form-item>
										   <el-form-item label="学号">
										    <el-input v-model="scope.row.studentnum"></el-input>
										  </el-form-item>
										  <el-form-item label="性别">
										    <el-input v-model="scope.row.studentsex"></el-input>
										  </el-form-item>
										  <el-form-item label="班级">
										    <el-input v-model="scope.row.studentclass"></el-input>
										  </el-form-item>										  
										  <el-form-item label="电话">
										    <el-input v-model="scope.row.studenttel"></el-input>
										  </el-form-item>										  
										  <el-form-item label="qq">
										    <el-input v-model="scope.row.studentqq"></el-input>
										  </el-form-item>
										  <el-form-item label="楼栋">
										    <el-input v-model="scope.row.studentcode"></el-input>
										  </el-form-item>										  
										  <el-form-item label="寝室">
										    <el-input v-model="scope.row.studenthouse"></el-input>
										  </el-form-item>		
										  <el-form-item label="密码">
										    <el-input v-model="scope.row.studentpassword"></el-input>
										  </el-form-item>											  
										  <el-button @click="saveClick(scope.row)" type="success">编辑保存</el-button>	
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
						          @click="handleDelete(scope.$index, scope.row,form)">删除</el-button>
						      </template>	 
				    </el-table-column>
				  </el-table>					
				</div>

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
				</el-card> 					
			</div>
	</div>
</template>

<script>
const flag=1;
  export default {
    data() {
      return {
      	form:[],
      	
      	currentPage:1,
        pagesize:9,
        total:10,
      }
      
    },
    created(){
   		this.$api.admin.findbyuserall(flag).then(response=>{
			
			for(let i=0;i<response.length;i++){
				this.form.push(response[i])
			}
//			console.log(this.form);
		});   	
    },
  methods:{
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
  	saveClick(val){
//		console.log(val)
		this.$api.admin.update(
			flag,
			val.studentclass,
			val.studentcode,
			val.studenthouse,
			val.studentname,
			val.studentnum,
			val.studentpassword,
			val.studentqq,
			val.studentsex,
			val.studenttel
		).then(response=>{
			if(response){
	  	        this.$notify.open({
	          content: '编辑成功',
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
			
  	},
    handleEdit(index, row) {
//      console.log(row);
    },
    handleDelete(index, row,rows) {
		if(rows!=''&&row!=''){
		this.$api.admin.deleteMsg(flag,row.studentnum).then(response=>{
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

<style>
</style>