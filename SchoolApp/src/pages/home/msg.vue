<template>
		<div style="width: 400px;background: white;">
			<div style="margin-top: 20px;margin-left: 20px;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>我的消息</el-breadcrumb-item>
				</el-breadcrumb>				
			</div>
	<div style="padding: 60px;width: 1100px;text-align: left;">
		<div v-for="item in data">
	<el-collapse accordion>
	  <el-collapse-item>
	    <template slot="title">
	    	来至{{item.pojo.username}}消息
			  <el-button size="small">查看</el-button>
	    </template>
	
	    <div>    问题内容:&nbsp;&nbsp;&nbsp;&nbsp;{{item.pojo.problemdesc}}
	    </div>
	    <div v-for="i in item.answer" style="margin-left: 40px;">
	    	<p><div>{{i.answerflag==0?"老师回复：":"学生回复："}}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{i.answerdesc}}</p>
	    </div>		    
	    <div>
				<el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="textarea">
				</el-input>	    		    		    	
	    </div>
	    <div><el-button @click="msgResultClick(item)" size="small">回复</el-button></div>
	  </el-collapse-item>
	</el-collapse>	
	</div>
	</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	textarea: '',
      	d:1,
      	data:[],
      	count:0
      };
    },
    created(){
		this.$api.user.techfindproblem(
			localStorage.getItem("uid")
			).then(response=>{
			for(let i=0;i<response.length;i++){
				this.count++
			}
			this.data=response
			console.log(response)
		}); 		
    },
    methods: {
    	handleChange(val){
    		console.log(2)
    		this.d=''
    	},
    	
      msgResultClick(val) {
		if(val==''){
      		this.$message.error('添加回复内容');
      	}else{
				this.$api.user.answer(
						val.pojo.problemid,
						localStorage.getItem("uid"),
						localStorage.getItem("username"),
						this.textarea,
						1
					).then(response=>{
						if(response){
				      		this.$message({
					          message: '恭喜你，这是一条成功消息',
					          type: 'success'
					        }); 							
						}
				});       		

        } 
      },

    }
  }
</script>

<style>
</style>