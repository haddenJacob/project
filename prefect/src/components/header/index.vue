<template>
	<div class="container" :class="colorBg">
		<div style="line-height: 60px;">
		 	<span style="margin-left: 100px;font-size: 20px;">
		 		<router-link :to="routerLingkLogin">{{login}}</router-link></span>
		 		/
		 		<span style="font-size: 20px;">
		 			<router-link :to="routerLingkSelf">{{unlogin}}</router-link></span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		title:{
			type:String,
			default:'登录',
		},
		flag:{
			type:Boolean,
			default:true
		},
		routerlink:{
			type:String,
		},
		colorBg:{
			type:String,
			default:"red"
		},
	},
	data(){
		return{
			login:this.title,
			routerLingk:"",
			routerLingkSelf:"",
			routerLingkLogin:"",
			unlogin:"",
		}
	},
	created(){
			if(this.flag == false){
				this.unlogin=""
			}else{
				this.unlogin="退出"
			}		
	},
	method:{
//		HandleClickRouter(){
//			if(this.flag == false){
//				this.routerLingkLogin=this.routerlink
//				this.login = this.title
//			}else{
//				this.routerLingkLogin=this.routerlink
//			}
//		}
	}
}
</script>

<style scoped>
	.container{
		height: 60px;
	}
	.red{background-color: red;}.black{background-color: black;color: white;}.blue{background-color: deepskyblue;}.white{background-color: white;}

</style>