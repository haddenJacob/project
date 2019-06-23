<template>
    <div style="position:absolute;top:0;bottom:0;left:0;right:0">
    	<c-header :backLink="backLink" :title="title" :pre="pre"/><br><br><br><br>
    	<div id="container" ref="container"></div>
    	<div class="info" v-if="info!=''" style="display: flex;flex-direction: row;">
    		<div style="width: 100px;"><img style="width: 100%;height:100%" 
    			:src="info.photo=''?icon:photo(info.photo)" /></div>
    		<div style="flex: 1;margin-left: 10px;font-size: 15px;">
    			{{info.name}}<br>
    		目前车位数:<span style="color: red;">{{info.stationNum}}</span><br>
    		地址:{{info.address}}<br>
    		<span    			
    			style="display:block;margin-right:10px;color: #019FFF;text-align: right;font-weight: bold;" 
    			@click="routerGo('/nav/go')"><i class="iconfont icon-map"></i></i>去这里</span>
    		</div>
    	</div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			zoom: 12,
			backLink:"/map/find",
			title:"查询",
			pre:"",
			center: [121.59996, 31.197646],
			list:[],
			info:'',
			icon:"https://i01picsos.sogoucdn.com/6895e59f9829c8fd",
		}
	},
	created(){
		
	},
	methods:{
		routerGo(router){
			this.$router.push({path:router,query:{lat:this.info.latitude,lng:this.info.longitude}})
		},
		photo(photoStr){
			if(photoStr=='')return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
			let ps = photoStr.split(",")
			if(ps.length>0)
				return ps[0]
			return "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2387980336,2845344378&fm=27&gp=0.jpg"
		},
	},
	mounted(){
		let param = {
			lat:this.$route.query.lat,
			lng:this.$route.query.lng,
			len:1000,
			step:100,
			page:1,
			limit:10,
		}
		//创建地图控件
		var map = new AMap.Map(this.$refs.container, {
		        resizeEnable: true,
		        center: [param.lng,param.lat],
		        zoom: 13,
		        draggable: true,  //是否可拖动
		    }); 
		//请求数据
		this.$api.station.getByLngAndLat(param).then(response=>{
			this.list = response.data
			let data = response.data

				const that = this
			  data.forEach(function(data) {
	
			  	var content= '"<div class="taiwan" style="background:url(http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png);width:19px;height:31px;color:#fff;text-align:center;">'+data.stationNum+'</div>"';

			  	

		        var marker = new AMap.Marker({
		        	position:[data.longitude,data.latitude],
//		        	icon : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3153035475,1760754534&fm=27&gp=0.jpg',
		        	offset : new AMap.Pixel(-12,-12),
		        	zIndex:data.stationNum,
		        	clickable:true,
		        });
//		        marker.icon(BitmapDescriptorFactory.fromAsset("../../assets/GUID.jpg"));
    			marker.setMap(map);
    			//绑定点击事件
    			AMap.event.addListener(marker, 'click', function(e){
    				that.info = data
    				
    			});

		    });


		})
		 
	}
}   
</script>

<style lang="" scoped>
@import url("../../assets/common_style.css");
.amapDemo{
	height: 900px;
	width: 100%;
}  
#container{
	width: 100%;
	height: 100%;
}  
.info{
	position: absolute;
	background: #fff;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100px;
}
</style>