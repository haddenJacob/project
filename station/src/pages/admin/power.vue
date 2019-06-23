<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/power" exact><i class="fa fa-tag"></i>身份识别和权限管理</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div class="bcc">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	身份和权限管理
			    </span>
			  </div>
				  <div class="text item"">
				<div style="">
					<p>维修人员申请表</p>
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="updatmanname"
				      label="姓名"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="updatmannum"
				      label="账号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="updatmansex"
				      label="性别"
				      width="100">
				    </el-table-column>	
				    <el-table-column
				      prop="updatmantel"
				      label="联系电话"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="updatmanqq"
				      label="QQ号码"
				      width="200">
				    </el-table-column>					    				    
				    <el-table-column
				      prop="updatmanpassword"
				      label="密码"
				      width="150">
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
				<div style="">
					<p>宿管申请表</p>
				<el-table
				    :data="form1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      prop="housemanname"
				      label="姓名"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="housemannum"
				      label="账号"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="housemansex"
				      label="性别"
				      width="100">
				    </el-table-column>	
				    <el-table-column
				      prop="housemantel"
				      label="联系电话"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="housemanqq"
				      label="QQ号码"
				      width="200">
				    </el-table-column>					    
				    <el-table-column
				      prop="housemancode"
				      label="所在楼栋"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      prop="housemanpassword"
				      label="密码"
				      width="150">
				    </el-table-column>					    
				    <el-table-column
				      label="操作"
				      width="200">	
						      <template slot-scope="scope">					          
						          
						        <el-button
						          size="mini"
						          type="danger"
						          @click="handleDelete(scope.$index, scope.row,form1)">删除</el-button>
						      </template>	 
				    </el-table-column>
				  </el-table>					
				</div>
				<div style="overflow: auto;">
					<p>申请信息确认</p>
				<el-table
				    :data="data.slice((newcurrentPage-1)*newpagesize,newcurrentPage*newpagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="400">
				    <el-table-column
				      prop="applyid"
				      label="编号"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="createtime"
				      label="创建时间"
				      value-format="yyyy-MM-dd hh:mm:ss"
				      width="150">
				    </el-table-column>				    
				    <el-table-column
				      prop="flag"
				      label="用户类型（1维修员2宿管）"
				      width="250">
				    </el-table-column>	
				    <el-table-column
				      prop="statu"
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
										<el-form ref="form" :model="scope.row" label-width="200px">
										  <el-form-item label="编号">
										    <el-input v-model="scope.row.applyid"></el-input>
										  </el-form-item>
										   <el-form-item label="创建时间">
										    <el-input v-model="scope.row.createtime"></el-input>
										  </el-form-item>
										  <el-form-item label="用户类型（1维修员2宿管）">
										    <el-input v-model="scope.row.flag"></el-input>
										  </el-form-item>									  
										  <el-form-item label="状态">
										    <el-input v-model="scope.row.statu"></el-input>
										  </el-form-item>										  											  
										  <el-button @click="saveClick(scope.row)" type="success">编辑保存</el-button>	
										  </el-form >
																		
									</div>
								  <el-button
						          size="mini"							  	
								  slot="reference">编辑</el-button>
								</el-popover>						          
						          
						        <el-button
						          size="mini"						          						          
						          type="danger"
						          @click="handleDelete(scope.$index, scope.row,data)">删除</el-button>
						        <el-button
						          size="mini"						          
						          type="success"
						          @click="switchchange(scope.row)">同意</el-button>
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
					  :page-size="newpagesize"
					  :total="total">
					</el-pagination>	
					</div>
				</div>	
				  </div>
			  	</el-card >	
			</div>
	</div>
</template>

<script>
import {formatDate} from '@/common/config/data'	
  export default {
    data() {
      return {
      	data:[],
      	form:[],
      	form1:[],
      	switchpower:false,
      	currentPage:1,
        pagesize:10,
      	newcurrentPage:1,
        newpagesize:10,        
        total:5,
      }
    },
    created(){
		this.$api.admin.findall().then(response=>{
			for(let i=0;i<response.length;i++){				
				this.data.push(response[i])
				this.data[i].createtime = formatDate(new Date(this.data[i].createtime), 'yyyy-MM-dd hh:mm')
				if(this.data[i].flag==3){
					this.form.push(JSON.parse(this.data[i].applydesc))
					//console.log(this.form)
				}else{
					this.form1.push(JSON.parse(this.data[i].applydesc))
				}
				
			}
			
			//console.log(this.data)
			//console.log(this.form)
		});    	
    },
    methods:{
	  	change(value){
	  		this.currentPage=value
	  		this.newcurrentPage=value
	  		console.log(value)
	  	},
	  	sizeChange(value){
	  		this.pagesize=value
	  		this.newpagesize=value
	  		console.log(value)
	  		//this.username= localStorage.getItem("username")
	  	},
	  	//保存
	  	saveClick(val){
				this.$api.admin.updateApply(
				val.applyid,
				val.applydesc,
				val.createtime,
				val.flag,
				val.statu
				).then(response=>{
						if(response){
					        this.$message({
					          message: '恭喜你，保存成功',
					          type: 'success'
					        }); 				
						}else{
							this.$message.error('失败');
						}
				});
	  	
	  	},
//	      handleEdit(index, row) {
//	        console.log(index,row);
//	      },
	      handleDelete(index, row,rows) {
			if(rows!=''&&row!=''){
					this.$api.admin.deletebyid(row.applyid).then(response=>{
						if(response){
					        this.$message({
					          message: '恭喜你，删除成功',
					          type: 'success'
					        }); 				
						}else{
							this.$message.error('失败');
						}
					});				
	      		
		        this.$message({
		          message: '恭喜你，删除成功',
		          type: 'success'
		        }); 			
	        	rows.splice(index, 1)			
			}else{
				this.$message.error('失败');
			}
	      },
	      //确认申请
	      switchchange(val){
			this.$api.admin.agree(val.applyid).then(response=>{
				if(response){
			        this.$message({
			          message: '恭喜你，删除成功',
			          type: 'success'
			        }); 				
				}else{
					this.$message.error('失败');
				}
			});
	      }
	  }
  }
</script>

<style scoped>
	.bcc{
		height: 700px;overflow: auto;
	}
	.bcc::-webkit-scrollbar {
	    display: none;
	}
</style>