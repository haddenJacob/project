<template>
	<yd-layout>
			<c-header @HandlerRight="HandlerRight" back="location"/>
	        <div ><br><br><br>
	        	<router-view/>
	        </div>

	        <yd-tabbar slot="tabbar" :fixed="true">
	            <yd-tabbar-item title="首页" link="/" :active="true">
	            	<yd-icon name="icon-home" slot="icon"></yd-icon>
	            </yd-tabbar-item>
	            <yd-tabbar-item title="附近" link="/index/map/neigbor":active="false">
	                <yd-icon name="icon-map" slot="icon"></yd-icon>
	            </yd-tabbar-item>
	            <yd-tabbar-item title="消息" link="/index/dope/index":active="false">
	                <yd-icon name="icon-xiaoxi" slot="icon"></yd-icon>
	            </yd-tabbar-item>
	            <yd-tabbar-item title="我的" link="/index/user/index":active="false">
	                <yd-icon name="icon-user" slot="icon"></yd-icon>
	            </yd-tabbar-item>
	        </yd-tabbar>
			<yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
	    </yd-layout>

</template>

<script>
export default{
	data(){
		return{
			show1: false,
            myItems1: [
                    {
                        label: '扫码',
                        callback: () => {
                            this.$router.push('/qrscan')
                        }
                    },
                    {
                        label: '出借',
                        callback: () => {
                        	this.$router.push('/qrcode')
                        }
                    }
            ]
		}
	},
  methods:{
  	HandlerRight(){
  		this.show1 = true
  	}
  }
}   
</script>

<style lang="" scoped>
@import url("../assets/common_style.css")

</style>