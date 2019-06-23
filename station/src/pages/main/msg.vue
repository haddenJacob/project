<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/msg" exact><i class="fa fa-tag"></i>消息发布</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	投诉消息
			    </span>
			  </div>
				  <div class="text item" v-for="item in form">
					<el-collapse accordion>
					  <el-collapse-item :title="title">
							<p style="margin-left: 20px;">{{item.feedbackdesc}}</p>
					  </el-collapse-item>	
					 </el-collapse>
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
      		count:0,
      		title:'',
      }
    },
    created(){
     		this.$api.user.findcomplainId(localStorage.getItem("uid")).then(response=>{	
			for(let i=0;i<response.length;i++){
				this.form.push(response[i])
				this.count++
				this.title="你有"+this.count+"条回馈消息"
			}
		});  	
    },      
    methods: {
		submitForm(){

		}
     }
  }
</script>

<style>
</style>