<template>
<!-- 这里可选1/2/3/4/5五种样式 -->
    <div>
        <div class="img-wapper">
        	<div style="position: absolute;top:0;left: 0;width: 100px;height: 50px;"
        		@click="callBackClick"></div>
            <img src="@/assets/ad.png" alt="" >
        </div>
    	<yd-cell-group>
            <yd-cell-item>
                <span slot="left" @click="selectCity" v-if="errinfo==0">               	
                    {{addr.provice&&data.provice}}<br>
                    {{addr.city}}/{{addr.country}}
                </span>
                <span slot="left" @click="selectCity" v-if="errinfo==1">
                    定位失败,请手动选择
                </span>
                <span slot="right" @click="getLocation">当前位置</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button size="large" bgcolor="#1CB2FF" color="#fff" @click.native="routerGo('/map/nav')">查询</yd-button>
        <yd-button size="large" bgcolor="#1CB2FF" color="#fff" @click.native="routerGo('/result')">查询(列表)</yd-button>

        <yd-cityselect
                v-model="addressShow"
                ref="cityselectDemo"
                :callback="select"
                :items="district"
                
        ></yd-cityselect>
    	
    </div>
</template>

<script type="text/babel">
const STORAGE_KEY = 'todos-vuejs'
import District from 'ydui-district/dist/jd_province_city_area_id'
export default {
    data() {
        let self = this;
        return {
            show1: false,
            show4: false,
//          show2:false,
            addressShow:false,

            district: District,

            addr:{
                provice:'',//省
                city:'',//市
                country:'',//县
                lat:0,
                lng:0,
            },
            data:{
                provice:'',//省
                city:'',//市
                country:'',//县            	
                lat:0,
                lng:0,                
            },
            errinfo:0,
            position:{
                lat:0,
                lng:0,
            }
            
        }
    },
    created(){       
    	this.getLocation()
		this.data = window.JSON.parse(window.localStorage.getItem(STORAGE_KEY))

        this.addr = this.data
        if(this.addr.lat==0||this.addr.lng==0){
        	this.$dialog.loading.open('很快加载好了');
        	setTimeout(() => {
                    this.$dialog.loading.close();
                }, 5000);
        }
//      console.log(this.data)
        
    },
    methods:{
        getLatAndLng(address){
            const that = this
            AMap.service('AMap.Geocoder',function(){//回调函数
                //实例化Geocoder
                let geocoder = new AMap.Geocoder()
                 //地理编码
                geocoder.getLocation(address, function(status, result) {

                    if (status === 'complete' && result.info === 'OK') {
                        //TODO:获得了有效经纬度，可以做一些展示工作
                        //比如在获得的经纬度上打上一个Marker
//                      console.log(result)
                        that.position.lat = result.geocodes[0].location.lat
                        that.position.lng = result.geocodes[0].location.lng
                        that.addr.lat = that.position.lat
                        that.addr.lng = that.position.lng
                        that.errinfo = 0
//                      console.log(that.position.lat +that.position.lng)
                    }else{
                        //获取经纬度失败
                        that.$utils.toast.toast(that,'查询失败')
                        that.errinfo = 1
                    }
                });
            })
           
        },
        getLocation(){
            const that = this
            let  geolocation,selectName,localAddress,localCity,selectAddress;
            let map = new AMap.Map("container", {
                resizeEnable: true
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
                  that.position.lat = data.position.lat
                  that.position.lng = data.position.lng
                  that.addr.provice = data.addressComponent.province
                  that.addr.city = data.addressComponent.city
                  that.addr.country = data.addressComponent.district
                });//返回定位信息
                AMap.event.addListener(geolocation, 'error', function(err){
                    console.log(err,"err")
                    that.errinfo = 1
                    that.$utils.toast.toast(that,'定位失败')
                });      //返回定位出错信息
            });
        },
        routerGo(router){
        	this.getLatAndLng(this.addr.province+this.addr.city+this.addr.country)
        	this.$router.push({path:router,query:{lat:this.addr.lat,lng:this.addr.lng}})
        },
        selectCity(){
            this.show4 = !this.show4
            this.addressShow = !this.addressShow
        },
        select(ret) {
            this.addr.provice = ret.itemName1
            this.addr.city = ret.itemName2
            this.addr.country = ret.itemName3            
            this.getLatAndLng(this.addr.province+this.addr.city+this.addr.country)
            this.addr.lat = this.position.lat
            this.addr.lng = this.position.lng
			window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(this.addr))
        },
        /*返回*/
       callBackClick(){
       	this.$router.push("/")
       }
    }
}
</script>

<style >
.img-wapper{
    width: 100%;
    height: 150px;
}
.img-wapper img{
    width: 100%;
    height: 100%;
}    
</style>