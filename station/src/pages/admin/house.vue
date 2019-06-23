<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/house" exact><i class="fa fa-tag"></i>楼栋管理</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	楼栋信息
			    </span>
			  </div>
				<div style="">
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="stu_id"
				      label="楼栋编号"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="stu_name"
				      label="宿管员"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="stu_sum"
				      label="寝室总数量"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="stu_use"
				      label="寝室空余"
				      width="100">
				    </el-table-column>	
				    <el-table-column
				      prop="stu_tel"
				      label="联系电话"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="stu_qq"
				      label="QQ号码"
				      width="200">
				    </el-table-column>					    
				    <el-table-column
				      prop="stu_flag"
				      label="状态"
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
										  <el-form-item label="楼栋编号">
										    <el-input v-model="scope.row.stu_id"></el-input>
										  </el-form-item>
										   <el-form-item label="宿管员">
										    <el-input v-model="scope.row.stu_name"></el-input>
										  </el-form-item>
										  <el-form-item label="寝室总数量">
										    <el-input v-model="scope.row.stu_sum"></el-input>
										  </el-form-item>
										  <el-form-item label="寝室空余">
										    <el-input v-model="scope.row.stu_use"></el-input>
										  </el-form-item>										  
										  <el-form-item label="联系电话">
										    <el-input v-model="scope.row.stu_tel"></el-input>
										  </el-form-item>										  
										  <el-form-item label="qq">
										    <el-input v-model="scope.row.stu_qq"></el-input>
										  </el-form-item>		
										  <el-form-item label="状态">
										    <el-input v-model="scope.row.stu_flag"></el-input>
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
  export default {
    data() {
      return {
       	currentPage:1,
        pagesize:5,
        total:10,     	
      	form:[
      	{stu_name:'蒋绪',
      	stu_sum:'322',
      	stu_use:'12',
      	stu_tel:'18827556018',
      	stu_qq:'546561554',
      	stu_id:'15',
      	stu_flag:'1'},
      	],
      }
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
  	saveClick(val){
  		console.log(val)
  	},
      handleEdit(index, row) {
        console.log(row);
      },
      handleDelete(index, row,rows) {
		if(rows!=''&&row!=''){
			
			
      		
	        this.$message({
	          message: '恭喜你，删除成功',
	          type: 'success'
	        }); 			
        	rows.splice(index, 1)			
		}else{
			this.$message.error('失败');
		}
      },
     }
  }
</script>

<style>
</style>