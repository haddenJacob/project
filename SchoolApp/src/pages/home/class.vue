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
				      prop="classid"
				      label="班级编号"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="classname"
				      label="班级名字"
				      width="250">
				    </el-table-column>
				    <el-table-column
				      prop="technumber"
				      label="老师人数"
				      width="100">
				    </el-table-column>	
				    <el-table-column
				      prop="peoplenum"
				      label="学生人数"
				      width="100">
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
										  <el-form-item label="班级编号">
										    <el-input v-model="scope.row.classid"></el-input>
										  </el-form-item>
										   <el-form-item label="班级名字">
										    <el-input v-model="scope.row.classname"></el-input>
										  </el-form-item>
										   <el-form-item label="学生人数">
										    <el-input v-model="scope.row.peoplenum"></el-input>
										  </el-form-item>
										  	<el-form-item label="教师人数">
										    <el-input type="number" v-model="scope.row.technumber"></el-input>
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
const flag=2
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
       tableData: [],      
    }
  },
  created(){

		this.$api.home.findclassall().then(response=>{
			console.log(response);
			this.tableData=response
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
  		if(this.value!=''){
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
      handleEdit(index, row) {
        console.log(row);
      },
      handleDelete(index, row,rows) {
		if(rows!=''&&row!=''){
		this.$api.home.deleteclass(row.classid).then(response=>{
			if(response){
		        this.$message({
	          message: '恭喜你，删除成功',
	          type: 'success'
	        }); 			
        	rows.splice(index, 1)			
			}else{
				this.$message.error('删除失败');
			}
		}); 			
		}else{
			this.$message.error('失败');
		}
      },
      saveClick(row){
      	console.log(row)
 		this.$api.home.updateClass(
			row.classid,
			row.classname,
			row.peoplenum,
			row.technumber
		).then(response=>{
			if(response){
	        this.$message({
	          message: '恭喜你，编辑成功',
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

<style>
</style>