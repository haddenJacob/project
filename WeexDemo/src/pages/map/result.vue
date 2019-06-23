<template>
    <div>
    	<c-header :backLink="backLink" :title="title" :pre="pre"/><br><br><br><br>
    		<div class="menu">
		        <div class="content-menu">
		        	<yd-accordion>
			            <yd-accordion-item 
			            	:title="title1" 
			            	@click.native="openOneClick" 
			            	ref="accordion" 
			            	:auto="false">
			            </yd-accordion-item>
		      		</yd-accordion>
		      		<yd-popup v-model="show1" position="bottom" height="40%">
			            <ul v-for="(items,index) in datalist">
			            	<li class="menu-list"			            		
			            		@click="priceClick(index)">{{items.price+"$"}}</li>
			            	<span class="line"></span>
			            </ul>
			        </yd-popup>
		        </div>
		        <div class="content-menu">
		        	<yd-accordion>
			            <yd-accordion-item 
			            	:title="title2"
			            	@click.native="openTwoClick"
			            	ref="accordionOne" 
			            	:auto="false">
			            </yd-accordion-item>
		      		</yd-accordion>
		      		<yd-popup v-model="show2" position="bottom" height="40%">
			            <ul v-for="(items,index) in datasearchlist">
			            	<li class="menu-list"			            		
			            		@click="distanceClick(index)">{{items.name+"米内"}}</li>
			            	<span class="line"></span>
			            </ul>		      			
			        </yd-popup>		      		
		        </div>
		        <div class="content-menu">
		        	<yd-accordion>
			            <yd-accordion-item 
			            	:title="title3"
			            	@click.native="openThreeClick"
			            	ref="accordionTwo" 
			            	:auto="false">
			            </yd-accordion-item>
			            <yd-popup v-model="show3" position="bottom" height="40%">
			            <ul v-for="(items,index) in other">
			            	<li class="menu-list"			            		
			            		@click="ticketClick(index)">{{items.Yes+"票"}}</li>
			            	<span class="line"></span>
			            </ul>			            	
			       		 </yd-popup>	
		      		</yd-accordion>
		        </div>
    		</div>
    	 <yd-list theme="4">
	        <yd-list-item v-for="item, key in list" :key="key" @click.native="routerGo('/nav/go',item.latitude,item.longitude)">
	            <img slot="img" :src="photo(item.photo)">
	            <span slot="title">{{item.name}}</span>
	            <yd-list-other slot="other">
	                <div>
	                    <span class="demo-list-price"><em style="color:red">车位数:
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
</template>

<script>
export default{
	data(){
		return{
			list: [],
			backLink:"/map/find",
			title:"查询",
			pre:"",			
			show1: false,
			show2: false,
			show3:false,
			title1:"价格范围",
			title2:"搜索范围",
			title3:"是否有票",
			/*价格范围*/
			datalist:[
			{id:0,price:10},
			{id:1,price:20},
			{id:2,price:30},
			{id:3,price:100}
			],
			/*导航停车场范围*/
			datasearchlist:[
			{id:0,name:200},
			{id:1,name:800},
			{id:2,name:1000},
			{id:3,name:2000},
			],
			/*是否有车位*/
			other:[{Yes:"有"},{Yes:"无"}]
		}
	},
	created(){
		let param = {
			lat:this.$route.query.lat,
			lng:this.$route.query.lng,
			len:1000,
			step:100,
			page:1,
			limit:10,
		}
		console.log(this.$route.query.lat)
		this.$api.station.getByLngAndLat(param).then(response=>{
			console.log(response)
			this.list = response.data
		})
	},
	watch:{
		show1:{  
            handler: function() {  
				if(this.show1 == false){
                	this.$refs.accordion.closeItem();
                }
            }, 
            deep: true 
           },
        show2:{
        	handler: function() {  
				if(this.show2 == false){
                	this.$refs.accordionOne.closeItem();
                }
            }, 
            deep: true 
       		},
       	show3:{
        	handler: function() {  
				if(this.show3 == false){
                	this.$refs.accordionTwo.closeItem();
                }
            }, 
            deep: true 
       		},
		
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
        /*导航一*/
        openOneClick() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.show1 = true;
                this.$refs.accordion.openItem();
            } else {
                this.show1 = false;
                this.$refs.accordion.closeItem();
            }
        },
        openTwoClick() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.show2 = true;
                this.$refs.accordionOne.openItem();
            } else {
                this.show2 = false;
                this.$refs.accordionOne.closeItem();
            }
        },
        openThreeClick() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.show3 = true;
                this.$refs.accordionTwo.openItem();
            } else {
                this.show3 = false;
                this.$refs.accordionTwo.closeItem();
            }
        },
        /*
         
         * menu菜单数据处理
         * 
         * */
        priceClick(index){
        	for(let i=0;i<this.datalist.length;i++){
        		if(index==i){
        			this.title1 = this.datalist[index].price.toString()
        			this.show1 = false;
        		}
        	}
        },
        distanceClick(index){
        	for(let i=0;i<this.datasearchlist.length;i++){
        		if(index==i){
        			this.title2 = this.datasearchlist[index].name.toString()
        			this.show2 = false;
        		}
        	}        	
        },
        ticketClick(index){
        	for(let i=0;i<this.other.length;i++){
        		if(index==i){
        			this.title3 = this.other[index].Yes.toString()
        			this.show3 = false;
        		}
        	}         	
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