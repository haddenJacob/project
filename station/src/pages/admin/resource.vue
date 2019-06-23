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
				    <router-link to="/resource" exact><i class="fa fa-tag"></i>资源管理</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" >
			  <div slot="header" class="clearfix" style="text-align: left;">
			    <span>最新公告</span>
			    <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			  </div>					
					<div style="">
					<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="shareid"
				      label="编号"
				      width="200">
				    </el-table-column>					    
				    <el-table-column
				      prop="studentname"
				      label="姓名"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="studentnum"
				      label="账号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="sharetype"
				      label="类型"
				      width="150">
				    </el-table-column>

				    </el-table-column>	
				    <el-table-column
				      prop="sharepath"
				      label="地址"
				      width="220">
				    </el-table-column>					  				    				    
				    <el-table-column
				      label="操作"
				      width="200">	
						      <template slot-scope="scope">						          						          
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
const flag = 2
  export default {
    data() {
      return {
      	form:[],
      	
      	currentPage:1,
        pagesize:5,
        total:10,
      }
      
    },
  created(){
    		this.$api.admin.seefile().then(response=>{
			
			for(let i=0;i<response.length;i++){
				this.form.push(response[i])
			}
//			console.log(this.form);
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
		this.$api.admin.deletefile(row.shareid).then(response=>{
			if(response){
	  	        this.$notify.open({
	          content: '删除成功',
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
		}else{
			this.$message.error('失败');
		}
      },
  }
  }
</script>

<style>
</style>