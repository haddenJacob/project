<template>
	<div>
		<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
			<div>
		        <yd-cell-group>
		            <yd-cell-item v-for="(items,index) in list" >
		                <span slot="left">{{"位置："+items.name}}<br>{{"价格："+items.price+"元"}}</span>
		                <span slot="right">{{"时间："+items.time}}</span>
		            </yd-cell-item>
	            </yd-cell-group>				
			</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			list:[{name:"宝石精华部分的技术",price:155,time:"2015-8"},
			{name:"宝石精华部分的技术",price:155,time:"2015-8"},
			{name:"宝石精华部分的技术",price:155,time:"2015-8"},
			{name:"宝石精华部分的技术",price:155,time:"2015-8"}],
			backLink:"/",
			title:'账单',
			pre:''
		}
	},
	created(){
		this.$api.test.carBill().then(response=>{
			this.list=response.data
		})
	}
}
</script>

<style>
</style>