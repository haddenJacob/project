<template>
    <div>
		<div>
			筛选条件
		</div>

    	<yd-list theme="4"> 
	        <yd-list-item v-for="item, key in list" :key="key" @click.native="routerGo('/map/nav',key)">
	            <img slot="img" :src="item.img">
	            <span slot="title">{{item.name}}</span>
	            <yd-list-other slot="other">
	                <div>
	                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
	                    <span class="demo-list-del-price">¥{{item.w_price}}</span>
	                </div>
	                <div>content</div>
	            </yd-list-other>
	        </yd-list-item>
	    </yd-list>

	    
    </div>
</template>

<script>


export default{
	data(){
		return{
			list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
            ],

		}
	},
	created(){
		
		// this.websocket()
	},
	methods:{
		routerGo(router,id){
			this.$router.push({path:router,query:{id:id}})
		},
		websocket () {
		     let ws = new WebSocket('ws://localhost:8088/station/websoket')
		     ws.onopen = () => {
		        // Web Socket 已连接上，使用 send() 方法发送数据
		        var address = {
					lat:5,//经度
					lng:5,//纬度
					distance:1000,//覆盖范围
					page:1,//
					limit:20,
				}
		          ws.send(JSON.stringify(address))
		          console.log('数据发送中...')
		      }
		      ws.onmessage = evt => {
		        // console.log('数据已接收...')
		        console.log(evt)
		      }
		      ws.onclose = function () {
		        // 关闭 websocket
		        console.log('连接已关闭...')
		      }
		      // 路由跳转时结束websocket链接
		      this.$router.afterEach(function () {
		        ws.close()
		      })
		    }
	}
}   
</script>

<style lang="" scoped>
    
</style>