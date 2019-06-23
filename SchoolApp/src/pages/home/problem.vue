<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>我的提问</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
	<div style="padding: 60px;width: 1100px;text-align: left;">
	    <div>
			<el-input
			  type="textarea"
			  :rows="5"
			  placeholder="请输入内容"
			  v-model="form.textarea">
			</el-input>	
			<br />
			
			<span>选择你想提问老师：</span>
		  <el-select v-model="form.value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :label="item.username"
		      :value="item.technumber">
		    </el-option>
		  </el-select>			
	    </div>
	    <br />
	    <div><el-button @click="msgProblemClick()" size="small">提问</el-button></div>	
	<div style="margin-top: 20px;">
	<div v-for="item in data">	
	<el-collapse accordion @change="handleChange()">
	  <el-collapse-item name="1">
	    <template slot="title">
	    	来至{{item.pojo.technumber}}消息
			  <el-button size="small">查看</el-button>
	    </template>
	    
	    <div>我的问题：</div>
	    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.pojo.problemdesc}}
	    </div>
	    <div>老师回复：</div>
	    <div v-for="i in item.answer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{i.answerdesc}}
	    </div>	    
	    <div>
				<el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="textarea">
				</el-input>	    		    		    	
	    </div>
	    <div><el-button @click="ResultClick(item)" size="small">回复</el-button></div>
	    
	  </el-collapse-item>
	</el-collapse>			
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
      	d:1,
      	form:{
      		textarea: '',
            value: ''     		
      	},
      	textarea:'',
      	teachData:[],
        options: [],
		data:[],
      	
      };
    },   
    created(){
		this.$api.user.finduserall(
			flag
			).then(response=>{
				this.teachData=response
				this.options=this.teachData
		});  
		this.$api.user.stdfindproblem(
			localStorage.getItem("uid")
			).then(response=>{
			this.data=response
			console.log(response)
		}); 		
    },
    methods: {
     handleChange(val){
    		console.log(2)
    		this.d=''
    	},   	
      msgProblemClick() {
		this.$api.user.ask(
			localStorage.getItem("class"),
			this.form.value,
			localStorage.getItem("uid"),
			localStorage.getItem("username"),
			this.form.textarea
			).then(response=>{
			if(response){
		        this.$message({
	          message: '恭喜你，问题已经提问，老师会尽快处理的',
	          type: 'success'
	        }); 					
			}else{
				this.$message.error('失败，重新提问');
			}
		});
      },
      ResultClick(val){
		if(val==''){
      		this.$message.error('添加回复内容');
      	}else{
				this.$api.user.answer(
						val.pojo.problemid,
						localStorage.getItem("uid"),
						localStorage.getItem("username"),
						this.textarea,
						0
					).then(response=>{
						if(response){
				      		this.$message({
					          message: '恭喜你，这是一条成功消息',
					          type: 'success'
					        }); 							
						}

				});       		

        }       	
      }

    }
  }
</script>

<style>
</style>