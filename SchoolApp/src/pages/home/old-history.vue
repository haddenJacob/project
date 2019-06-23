<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>历史记录</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
			<div style="border: 1 solid black;width:1100px;max-height：600px;margin: 20px;padding: 30px;">
				
				
				<div v-show="show_a">
				班级：
			  <el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>	
			  <el-button icon="el-icon-search" circle @click="sreach"></el-button>
				</div>				
				
				
				
				<div style="margin-top: 0px;margin-bottom: 20px;">
					<el-card class="box-card">
					<div style="text-align: left;margin-bottom: 20px;">上一次公告：</div>						
				  <div style="text-align: left;">
					  	<p>发布时间：{{this.time}}</p>
					    <p>内容：{{this.data.noticedesc}}</p>
					    <p>发布人：{{this.data.publisher}}</p>
					  </div>
					</el-card>				  
				</div>				
				<div style="text-align: left;">
				
					
					<el-button type="primary"
						@click="dialogFormVisible = true">查看历史</el-button>
					
				<el-dialog title="历史公告记录：" :visible.sync="dialogFormVisible">	
			     <el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>历史公告：</span>
				  </div>
				  <div v-for="o in 4" :key="o" class="text item" style="max-height: 500px;">
				    {{'列表内容 ' + o }}
				  </div>
				 </el-card>		
				 
				   <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
<!--				    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
				  </div>
					</el-dialog>
				</div>				
			
			</div>
		</div>
</template>

<script>
import {formatDate} from '@/common/config/data'	
	const classname=''
export default {
  data() {
    return {
         options: [{
          value: '物联网1511',
          label: '物联网1511'
        }],
        value: '', 
        show_a:false,
    	dialogFormVisible:false,
		time:'',  	
		data:[{noticedesc:'',publisher:'',time:''}],
        currentPage:1,
        pagesize:5,
        total:10,
       input: '',
        tableData1: [{
          workName: '课程设计',
          wstudent: '林俊杰',
          fsum:33,
          id: 1,
          wzip: 0,
        }] ,
    }
  },
  created(){
  	this.classname= localStorage.getItem("class")
  	if(this.classname!='undefined'){
  		
    	this.$api.home.notice(localStorage.getItem("uid"),this.classname).then(response=>{
      		for(let i=0;i<response.length;i++){
       		console.log(response[i])
    		this.data.noticedesc=response[i].noticedesc    		
    		this.data.time = response[i].createtime
    		this.data.publisher = response[i].publisher
    		 this.time=formatDate(new Date(this.data.time ), 'yyyy-MM-dd hh:mm'); 	     			
      		}
		});   		  		
  		
  	}else{
  		this.show_a=true
        this.$notify({
          title: '警告',
          message: '管理员选择查看班级',
          type: 'warning'
        });		
  		
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
  	oldHistory(){
  		
  		
  		
  	},
  	sreach(){
      	this.$api.home.notice(localStorage.getItem("uid"),this.value).then(response=>{
      		for(let i=0;i<response.length;i++){
       		console.log(response[i])
    		this.data.noticedesc=response[i].noticedesc   		
    		this.data.time = response[i].createtime
    		this.data.publisher = response[i].publisher
    		 this.time=formatDate(new Date(this.data.time ), 'yyyy-MM-dd hh:mm'); 	     			
      		}
		});  		
  	}  	
  }
}
</script>

<style>
</style>