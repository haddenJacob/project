<template>
    <div style="position:absolute;top:0;bottom:0;left:0;right:0">
    	<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
    	<div id="container" ref="container"></div>
    	<div style="position: absolute;bottom:0px;padding: 10px;">
    	<div style="display: flex;flex-direction: column;">
    		<div class="del"     			
    			style="height:40px;background-color: #BBBBBB;text-align: center;margin-left: 0;">
    			<span>
    				<i class="iconfont "
    					style="font-size: 20px;color: #358AFF;"
    					@click="delCloseOpenCLick"
    					:class="show_==false?up:down">
    					
    				</i></span></div>    		
    	<div id="panel" 
			v-show="show_"
    		style="flex: 1;max-height: 400px;overflow: auto;">
    	</div>
		</div>
		</div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			position:{
				lat:'',
				lng:'',
				c_lat:0,//当前经度
				c_lng:0,//当前纬度
			},
			backLink:"/map/find",
			title:"列表",
			pre:"",			
			show_:false,
			up:"icon-xiangshangshouqi",
			down:"icon-xiangxiajixu"
		}
	},
	created(){
	},
	watch:{
		//监听数据变化
		position:{  
            handler: function() {  
				this.position.lat = this.$route.query.lat
				this.position.lng = this.$route.query.lng				
				var map = new AMap.Map("container", {
				        resizeEnable: true,
				        center: [this.position.lng,this.position.lat],
				        zoom: 13,
				        draggable: true,  //是否可拖动
				    }); 
		
				 //构造路线导航类
			    var driving = new AMap.Driving({
			        map: map,
			        panel: "panel"
			    })
			     // 根据起终点经纬度规划驾车导航路线
			     if(this.position.c_lat ==0||this.position.c_lng==0){
				    this.$dialog.loading.open('很快加载好了');
				    }else{	
				    	this.$dialog.loading.close();
				    	driving.search(
				    	new AMap.LngLat(this.position.c_lng, this.position.c_lat), 
				    	new AMap.LngLat(this.position.lng, this.position.lat));
				    }            	
            }, 
            deep: true 
           },
        },
	mounted(){		
		this.getLocation()
	    },

	methods:{
        getLocation(){
            const that = this
            that.position.lat = that.$route.query.lat
			that.position.lng = that.$route.query.lng
		
		
            let  geolocation,selectName,localAddress,localCity,selectAddress;
            let map = new AMap.Map("container", {
                resizeEnable: true,
 		        center: [that.position.lng,that.position.lat],
		        zoom: 13,
		        draggable: true,  //是否可拖动               
            });
            //定位
            map.plugin('AMap.Geolocation', function() {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition:'RB'
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', function(data){
                  that.position.c_lat = data.position.lat
                  that.position.c_lng = data.position.lng
//                console.log(data.position.lat)
                });//返回定位信息
                AMap.event.addListener(geolocation, 'error', function(err){
                    console.log(err,"err")
                    that.errinfo = 1
                    that.$utils.toast.toast(that,'定位失败')
                });      //返回定位出错信息
            });           
        },
        delCloseOpenCLick(){
        	this.show_ =!this.show_;
        },
	}
}   
</script>

<style lang="" scoped>
#container{
	width: 100%;
	height: 100%;
}  
.icon-xiangshangshouqi{
	font-size: 20px;color: #358AFF;
}
.icon-icon-xiangxiajixu{
	font-size: 20px;color: #358AFF;
} 
.del{
	border-radius: 0 10px;
} 

</style>