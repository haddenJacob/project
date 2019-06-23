<template>
	<div>
		<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
		<div style="background-color: white;">
			<span style="margin-left: 10px;">最新行程</span>
	        <yd-cell-group>
	            <yd-cell-item v-for="(items,index) in list" >
	                <span slot="left">{{"位置："+items.name}}<br>{{items.distance+"/公里"}}</span>
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
			list:[{name:"宝石精华部分的技术",distance:155,time:"2015-8"},
			{name:"宝石精华部分的技术",distance:155,time:"2015-8"},
			{name:"宝石精华部分的技术",distance:155,time:"2015-8"},
			{name:"宝石精华部分的技术",distance:155,time:"2015-8"}],
			backLink:"/",
			title:'我的行程',
			pre:''
		}
	},
	created(){
		this.$api.test.getHistory().then(response=>{
			this.list=response.data;
		})
	}
}
</script>

<style>
</style>