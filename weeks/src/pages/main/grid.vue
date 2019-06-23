<template>
    <div class="container">
        
        <yd-grids-group :rows="4">
            <yd-grids-item link="/map/find">
                <img slot="icon" src="@/assets/p.png">
                <span slot="text">我要停车</span>
            </yd-grids-item>
            <yd-grids-item  link="/recharge">
                <img slot="icon" src="@/assets/m.png">
                <span slot="text">充值</span>
            </yd-grids-item>
            <yd-grids-item link="/borrow">
                <img slot="icon" src="@/assets/b.png">
                <span slot="text">出借</span>
            </yd-grids-item>
            <yd-grids-item link="/journey">
                <img slot="icon" src="@/assets/x.png">
                <span slot="text">我的行程</span>
            </yd-grids-item>
            <yd-grids-item link="/bill">
                <img slot="icon" src="@/assets/z.png">
                <span slot="text">我的账单</span>
            </yd-grids-item>         
        </yd-grids-group>      
        <div>
        	<span style="margin-left: 10px;">实时关注车位</span>
     	 <yd-list theme="4">
	        <yd-list-item v-for="item, key in list" 
	        	:key="key" 
	        	@click.native="routerGo('/nav/go',item.latitude,item.longitude)">
	            <img slot="img" :src="photo(item.photo)">
	            <span slot="title">{{item.name}}</span>
	            <yd-list-other slot="other">
	                <div>
	                    <span class="demo-list-price"><em style="color:red">车位数:{{item.stationNum}}
	                     <yd-badge type="danger">{{item.stationNum>20?"有":"无"}}</yd-badge>
	                     </em>
	                     </span><br>
	                    <span class="demo-list-del-price">{{item.address}}</span>
	                    <span>{{item.desc}}</span>
	                </div>
	                <div>
	                	<!-- 内容右侧 -->
	                </div>
	            </yd-list-other>
	        </yd-list-item>
	    </yd-list>       	
        </div>
    </div>
</template>

<script>
const STORAGE_KEY = 'todos-vuejs'
export default{
	data(){
		return{
			data:'',
			list: [],
			position:{
				lat:'',
				lng:''
			}
		}
	},
	created(){
		this.data = window.JSON.parse(window.localStorage.getItem(STORAGE_KEY))
		this.position.lat=this.data.lat
		this.position.lng=this.data.lng
		let param = {
			lat:this.position.lat,
			lng:this.position.lng,
			len:1000,
			step:100,
			page:1,
			limit:3,
			
		}
		this.$api.station.getByLngAndLat(param).then(response=>{
			this.list = response.data	
			console.log(response.data)
		})
	},
	methods:{
		photo(photoStr){
			if(photoStr=='')return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
			let ps = photoStr.split(",")
			if(ps.length>0)
				return ps[0]
			return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
		},		
		routerGo(router,lat,lng){
			this.$router.push({path:router,query:{lat:lat,lng:lng}})
		},
	}
}   
</script>

<style lang="" scoped>
    
</style>