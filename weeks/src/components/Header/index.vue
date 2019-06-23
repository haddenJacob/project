<template>
    <div >
	    	<yd-navbar :title="title" fixed v-if="type=='default'" color="#fff">
		        <router-link :to="backLink" slot="left">
		        <yd-icon :name="back" size="25px" color="#fff"></yd-icon>
		        <span style="color:#fff;font-size:10px;" v-if="back=='location'">{{error}}</span>
		        </router-link>

		        <router-link to="#" slot="right" @click.native="HandlerRight">
		            <yd-icon :name="pre" size="25px" color="#fff" ></yd-icon>
		            <span style="color:#fff;font-size:10px;" v-if="back=='location'">{{righttext}}</span>
		        </router-link>
		    </yd-navbar>

		    <div class="search slider-bg" v-if="type=='search'">
		   		 
		    	<input type="text" placeholder="请输入关键字" @click="routerGo('/goods/search')">
		    	<span @click="routerGo('/goods/search')">搜索</span>
		    </div>
		    
    </div>
</template>

<script>
	const STORAGE_KEY = 'todos-vuejs'
export default{
	name:'c-header',
	props:{
		back:{
			type:String,
			default:'icon-left',
		},
		pre:{
			type:String,
			default:'icon-erweima',
		},
		backLink:{
			type:String,
			default:'/'
		},
		preLink:{
			type:String,
			default:'/qrscan'
		},
		title:[String],
		righttext:[String],
		type:{
			type:String,
			default:'default'
		}
	},
	data(){
		return{
			show:true,
			error:'定位失败',
			data:'',
		}
	},
	created(){
	this.data = window.JSON.parse(window.localStorage.getItem(STORAGE_KEY))
	this.error = this.data.city
	},
	methods:{
		routerGo(router){
			this.$router.push(router)
		},
		HandlerRight(){
			this.$emit('HandlerRight')
		},
	}
}   
</script>

<style lang="" scoped>
@import url("../../assets/common_style.css");
.search{
	position: fixed;
	top: 0;
	left: 0;
	height: 39px;
	right: 0;
	/*background: none;*/
	z-index: 10000;

}  
.search input{
	background: #fff;
	position: absolute;
	left: 10px;
	width: 83%;
	height: 30px;
	top:5px;
	border-radius: 20px;
	text-indent: 20px;
	outline: none;
    border: 1px;
} 
.search span{
	font-size: 13px;
	color: #fff;
	position: absolute;
	right: 12px;
	top: 10px;
}
.slider-bg {
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    background: -webkit-linear-gradient(#000, transparent);
    background: -o-linear-gradient(#000, transparent);
    background: -moz-linear-gradient(#000, transparent);
    background: linear-gradient(#000000,rgba(0,0,0,0));
} 

.yd-navbar{
	background-color: #019FFF !important;
}
</style>