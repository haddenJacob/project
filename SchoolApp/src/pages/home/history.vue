<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>最新历史</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="border: 1 solid black;width:1100px;max-height：600px;margin: 20px;padding: 30px;">
				<p style="text-align: left;">以交历史作业情况</p>
				<el-table
				    :data="tableData4.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      fixed
				      prop="date"
				      label="发布日期"
				      width="260">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="发布人"
				      width="250">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="作业"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="所属课程"
				      width="290">
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
				<p style="text-align: left;">老师发布作业历史情况</p>
				<el-table
				    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
				    style="width: 100%;text-align: left;"
				    max-height="600">
				    <el-table-column
				      fixed
				      prop="date"
				      label="发布日期"
				      width="260">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="发布人"
				      width="250">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="作业"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="所属课程"
				      width="290">
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
        currentPage:1,
        pagesize:5,
        total:10,
       tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          code: 1,
         id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
       tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          code: 1,
         id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
         code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          code: 2,
          id: 1,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]        
    }
  },
  created(){

		this.$api.user.findallhistory(localStorage.getItem("uid")).then(response=>{
			console.log(response);
			this.tableData4=response
		});  

		this.$api.user.findalltask(localStorage.getItem("username")).then(response=>{
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
  }
}
</script>

<style>
</style>