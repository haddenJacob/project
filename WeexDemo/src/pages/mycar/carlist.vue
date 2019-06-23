<template>
    <div>
    	<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
    	 <yd-list theme="4" 
    	 	v-for="item, key in type" 
    	 	style="border-radius: 10px;margin-bottom: 10px;">
	        <yd-list-item 
	        	
	        	:key="key" 
	        	style="height: 80px;">
	            <img slot="img" :src="item.photo">
	            <span slot="title">{{item.carNumber}}</span>
	            <yd-list-other slot="other">
	                <div>
	                    <span class="demo-list-price"><em style="color:#CDCDCD">车身颜色:
	                     <yd-badge type="hollow" shape="square">{{item.carColor}}</yd-badge>
	                     </em>
	                    </span><br>
	                </div>
	            </yd-list-other>
	            
	        </yd-list-item>
	        <div style="display: flex;flex-direction: row;padding: 4px;">
	        	<div style="flex: 1;text-align: left;line-height: 30px;">{{auottrue}}</div>
	        	<div style="width:50px;text-align: right;color:#CDCDCD">
	        		<!--<yd-switch v-model="autoflag"></yd-switch>-->
	        	</div>
	        </div>
	    </yd-list>
    </div>
</template>

<script>
export default{
	data(){
		return{
			type: [
			],
			title:"我的车辆",
			pre:" ",
			backLink:"index/user/index",
			auottrue:"已开启自动扣费",
			autofalse:"已关闭自动扣费"
		}

	},
	created(){
		this.$api.carinfo.get().then(response=>{
			this.type=response.data
		})
	},
	watch:{

	},
	methods:{
		photo(photoStr){
			if(photoStr=='')return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
			if(ps.length>0)
				return ps[0]
			return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
		},
	}
}   
</script>

<style lang="" scoped>
    .menu{
    	display: flex;
    	flex-direction: row;
    }
    .content-menu{
    	flex: 1;
    }
    .menu-list{
    	width: 100%;
    	height: 60px;
    	text-align: center;
    	line-height: 60px;
    	font-size: 20px;
    }
    .line{
    	display: block;
    	width: 500px;
    	height: 1px;
    	background-color: darkseagreen;
    }
</style>