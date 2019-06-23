<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
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
	<el-input v-model="input" placeholder="请输入学号"></el-input>  	
  </el-col>
  <el-col :sp  
  <el-col :span="6"><div class="grid-content bg-purple" style="text-align: left;margin-left: 10px;">
  	
  	<!--<el-button type="success" icon="el-icon-search" @click="search()"  circle></el-button>-->
  <el-button
    type="primary"
    @click="search()" 
    icon="el-icon-search">
  搜索
  </el-button>  	
  	
  </div></el-col>
</el-row>					
		  
				</div>
				<el-table
				    :data="form.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      fixed
				      prop="technumber"
				      label="账号"
				      width="260">
				    </el-table-column>
				    <el-table-column
				      prop="sex"
				      label="性别"
				      width="250">
				    </el-table-column>
				    <el-table-column
				      prop="telephone"
				      label="电话"
				      width="250">
				    </el-table-column>					    
				    <el-table-column
				      prop="qq"
				      label="qq"
				      width="250">
				    </el-table-column>					    
				    <el-table-column
				      prop="flag"
				      label="flag"
				      width="250">
				    </el-table-column>					    
				    <el-table-column
				      prop="pwd"
				      label="密码"
				      width="250">
				    </el-table-column>					    
				    <el-table-column
				      prop="techerdesc"
				      label="描述"
				      width="250">
				    </el-table-column>					    
				  </el-table>	
				  			  
                <br />
				<div style="overflow: auto;">
					<p>申请信息确认（同意后自动删除信息）</p>
				<el-table
				    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
import {formatDate} from '@/common/config/data'	
export default {
  data() {
    return {
    
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input:'',
    	
        currentPage:1,
        pagesize:5,
        total:10,
       input: '',
       form:[],
       tableData: [],      
    }
  },
  created(){
		this.$api.home.findall().then(response=>{
			for(let i=0;i<response.length;i++){				
				this.tableData.push(response[i])
				this.tableData[i].createtime = formatDate(new Date(this.tableData[i].createtime), 'yyyy-MM-dd hh:mm:ss')

					this.form.push(JSON.parse(this.tableData[i].applydesc))
				
			}
			
			console.log(this.tableData)
			console.log(this.form)
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
  	},
  	search(){
  		if(this.value!=''&&this.input!=''){
		       const loading = this.$loading({
		          lock: true,
		          text: 'Loading',
		          spinner: 'el-icon-loading',
		          background: 'rgba(0, 0, 0, 0.7)'
		        });
        setTimeout(() => {
			loading.close();
        }, 2000); 			
  		}
  	},
	  	//保存
	  	saveClick(val){
				this.$api.home.updateApply(
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
					this.$api.home.deletebyid(row.applyid).then(response=>{
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
	      	const that = this
			this.$api.home.agree(val.applyid).then(response=>{
				if(response){
					that.$api.home.deletebyid(val.applyid).then(response=>{
						if(response){
					        that.$message({
					          message: '同意了，已经自动删除',
					          type: 'success'
					        }); 				
						}else{
							that.$message.error('失败');
						}
					});
			        that.$message({
			          message: '恭喜你，同意',
			          type: 'success'
			        }); 					
				}else{
					that.$message.error('失败');
				}
			});
	      }, 	
	changeFlag(val,sum){
		const that = this
	        this.$confirm('是否控制该学生权限', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	that.tableData.flag=val
	        	console.log(that.tableData.flag=val)
	        	
	          this.$message({
	            type: 'success',
	            message: '成功!'
	          });
	        }).catch(() => {
	        	
	        	
	          this.$message({
	            type: 'info',
	            message: '取消'
	          });          
	        });
	},
  }
}
</script>

<style>
</style>