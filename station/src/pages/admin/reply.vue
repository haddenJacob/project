<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/reply" exact><i class="fa fa-tag"></i>投诉反馈</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	当前收到的投诉
			    </span>
			  </div>
				  <div class="text item"  v-for="(item,index) in form">
					<el-collapse @change="handleChange(index)">
					  <el-collapse-item>
					  	<template slot="title">
					      <i class="fa fa-exclamation-triangle" style="line-height: 48px;color: red;margin-left: 10px;"></i>
					      	来至账号: {{item.studentnum}} 投诉内容
					    </template>
					    <div>投诉人：{{item.studentname}}</div>
					    <div>被投诉人：{{item.username}}</div>
					    <div>投诉内容：{{item.complaindesc}}</div>
					  </el-collapse-item>
					</el-collapse>	
							<el-input
						  type="textarea"
						  :rows="2"
						  placeholder="请输入内容"
						  v-model="item.textarea">
						</el-input>				
						<el-button type="success" round @click="replyClick(index,item)">反馈投诉</el-button>					
				  </div>
			  	</el-card >	
			</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
			form:[],
			textarea:'',
      }
    },
    created(){
     		this.$api.admin.finfcomall().then(response=>{	
			for(let i=0;i<response.length;i++){
				this.form.push(response[i])
			}
		});  	
    },     
    methods: {
      handleChange(val) {
      },
      replyClick(index,val){
     		this.$api.admin.insertfeedback(
     			val.complaindescid,
     			val.textarea,
     			val.studentnum,
     			val.studentname
     		).then(response=>{
				if(response){
		     		this.$api.admin.deletecom(val.complaindescid).then(response=>{	
			  	        this.$notify.open({
				          content: '本条消息反馈成功',
				          icon: 'smile-o',
				          placement: 'top-center',
				          transition: 'bounce',
				          type: 'success',
				        });	
			     		this.$api.admin.finfcomall().then(response=>{	
							for(let i=0;i<response.length;i++){
								this.form.push(response[i])
							}
						}); 				        
					});					
				}else{
			         this.$notify.open({
			          content: '回复失败',
			          placement: 'top-center',
			          transition: 'bounce',
			          type: 'danger',
			        });						
				}
			});      	

      }
    }
  }
</script>

<style>
</style>