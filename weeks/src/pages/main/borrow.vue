<template>
	<div>
		<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
			<div>
				 <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><i class="iconfont icon-user"></i>账号：</span>
			            <yd-input slot="right" 
			            	v-model="input" 
			            	regex="mobile" 
			            	placeholder="请输入号码"></yd-input>
			        </yd-cell-item>
		         </yd-cell-group>
			</div>
			<yd-button 
				size="large" 
				@click.native="handleClick"
				type="primary">确认</yd-button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			backLink:"/",
			title:'出借',
			pre:'',
			input:""
		}
	},
	methods:{
		handleClick(){
			if(this.input !=''){
				this.$api.test.setBorrow(this.input).then(response=>{
    				this.$dialog.toast({mes: '出借成功'});
    			})
			}else{
				this.$dialog.toast({mes: '清输入出借人账号'});
			}
		}
	}
}
</script>

<style>
</style>