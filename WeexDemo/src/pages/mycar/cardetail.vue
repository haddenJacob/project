<template>
	<div>
		<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
			<div>
			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left">车牌类型</span>
			            <span slot="right">{{cardata.cartype}}</span>
			        </yd-cell-item>
			        <yd-cell-item >
			            <span slot="left">车牌号码</span>
			            <span slot="right">{{cardata.carcode}}</span>
			        </yd-cell-item>	        
			    </yd-cell-group>
			</div>
			<div>
			    <yd-cell-group>
			        <yd-cell-item arrow @click.native="selectTypeClick">
			            <span slot="left">车牌品牌</span>
			            <span slot="right">{{cardata.type}}</span>
			        </yd-cell-item>
			        <yd-cell-item arrow @click.native="selectCodeClick">
			            <span slot="left">车牌型号</span>
			            <span slot="right">{{cardata.code}}</span>
			        </yd-cell-item>
			        <yd-cell-item arrow>
			            <span slot="left">车牌年份</span>
			            <span slot="right"><yd-datetime 
			            	type="month" 
			            	v-model="cardata.datetime" 
			            	slot="right"></yd-datetime></span>
			        </yd-cell-item>
			        <yd-cell-item arrow @click.native="selectColorClick">
			            <span slot="left">车身颜色</span>
			            <span slot="right">{{cardata.colordata}}</span>	
			        </yd-cell-item>
			        <yd-cell-item arrow>
			            <span slot="left">是否自动扣费</span>
			            <span slot="right"><yd-switch v-model="cardata.autoflag"></yd-switch></span>	
			        </yd-cell-item>			        
			    </yd-cell-group>		
	        	<yd-popup v-model="show_color" position="bottom" height="40%">
		            <ul v-for="(items,index) in colorlist">
		            	<li class="menu-list"			            		
		            		@click="distanceClick(index,items)">{{items.color}}</li>
		            	<span class="line"></span>
		           	</ul>		      			
	       		 </yd-popup>
	       		 <!--品牌-->
		        	<yd-popup v-model="show_type" position="bottom" height="92%">
		        		
		        		<yd-search v-model="cardata.value1" :on-submit="submitHandler"></yd-search>	      			
		       		 </yd-popup>
		        	<yd-popup v-model="show_code" position="bottom" height="60%">    			
	       		 </yd-popup>
			    <div>
		        	<yd-button-group>
				        <yd-button 
				        	size="large" 
				        	@click.native="seveClick"
				        	type="primary">保存</yd-button>
				    </yd-button-group>			    	
			    </div>
			</div>
	</div>
</template>

<script>
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime'
export default{
	data(){
		return{
			title:"添加车辆",
			pre:"",
			cardata:{
				cartype:this.$route.query.type.type,
				carcode:this.$route.query.type.carcode,
				colordata:"白色",
				type:"北京现代",
				code:"JSC",
				autoflag:false,
				datetime:'2018-05-2',				
			},			
			backLink:"/addcar",
			show_color:false,
			show_photo:false,
			show_type:false,
			show_code:false,
			colorlist:[
			{id:1,color:"白色"},{id:2,color:"黑色"},
			{id:3,color:"金色"},{id:4,color:"红色"},
			{id:3,color:"金色"},{id:4,color:"红色"},
			]
		}
		},
	methods:{
		selectColorClick(){
			this.show_color=true;
		},
		selectPhotoClick(){
			this.show_photo=true
		},
		selectTypeClick(){
			this.show_type=true
		},
		selectCodeClick(){
			this.show_code = true
		},
        submitHandler(value) {
            this.$dialog.toast({mes: `搜索：${value}`});
        },
		distanceClick(index,items){
			this.colordata=items.color;
		},
		/*保存*/
		seveClick(){
		    this.$api.carinfo.addCarNumber(this.cardata).then(response=>{
		    	this.$dialog.confirm({
                title: '强力提醒你',
                mes: "是否再次确认保存，保存后不可修改",
                opts: () => {
                    this.$dialog.toast({
	                    mes: '保存成功',
	                    timeout: 1500,
	                    icon: 'success'
	                });
                }
			});
		})
		}
	}
}
</script>

<style scoped>
    .menu-list{
    	width: 100%;
    	height: 60px;
    	margin-bottom: 2px;
    	text-align: center;
    	line-height: 60px;
    	font-size: 20px;
    }
    .line{
    	display: block;
    	width: 500%;
    	height: 1px;
    	background-color: darkgrey;
    }
    .menu-potho{
    	width: 100%;
    	height: 60px;
    	margin-bottom: 2px;
    	text-align: center;
    	line-height: 60px;
    	font-size: 20px;    	
    }
    .yd-datetime-input{
    	text-align: right;
    }
</style>