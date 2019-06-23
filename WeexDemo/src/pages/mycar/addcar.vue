<template>
	<div>
		<c-header :backLink="backLink":title="title":pre="pre"/><br><br><br><br>
		<div class="img-wapper">
        	<div style="position: absolute;top:0;left: 0;width: 100px;height: 50px;"></div>
            <img src="https://i02picsos.sogoucdn.com/67e7bf213a263e73" alt="" >
        </div>
        <div style="background-color: white;">
        	<span style="text-align: center;line-height: 50px;display: block;width: 100%;font-size: 20px;">车牌信息</span>
        	<yd-cell-group>
		        <yd-cell-item arrow @click.native="handleTypeClick">
		            <span slot="left">车牌类型</span>
		            	<span slot="right">{{cartype}}</span>
		        </yd-cell-item>
		        <yd-popup v-model="show_" position="bottom" height="40%">
			            <ul v-for="(items,index) in datasearchlist">
			            	<li class="menu-list"			            		
			            		@click="distanceClick(items)">{{items.name}}</li>
			            	<span class="line"></span>
			            </ul>		      			
			        </yd-popup>	
    		</yd-cell-group>       
	        <div style="background-color: white;margin-left: 10px;">
	        	<yd-flexbox>
		            <yd-flexbox-item>
		            	<div class="wei" style="height: 27px;">
		            		<input
		            			type="button" 
		            			class="input" 
		            			@click="inputName"
		            			v-model="inputcarcode.areaName"/>
		            			<yd-popup 
		            				v-model="show" 
		            				position="bottom" 
		            				height="30%">
						           <yd-flexbox>
						           	<yd-flexbox-item 
						           		v-for="(items,index) in carTxt[0].name">
						           		<yd-button 
						           			type="hollow" 
						           			@click.native="buttonClickOne(items)"
						           			style="width:15px;overflow: hidden;margin-top: 10px;">
						           			{{items}}
						           		</yd-button>
						           	</yd-flexbox-item>
						            </yd-flexbox>
						           <yd-flexbox>
						           	<yd-flexbox-item 
						           		v-for="(items,index) in carTxt[1].name">
						           		<yd-button 
						           			type="hollow" 
						           			@click.native="buttonClickTwo(items)"
						           			style="width:15px;overflow: hidden;margin-top: 10px;">
						           			{{items}}
						           		</yd-button>
						           	</yd-flexbox-item>
						            </yd-flexbox>
						           <yd-flexbox>
						           	<yd-flexbox-item 
						           		v-for="(items,index) in carTxt[2].name">
						           		<yd-button 
						           			type="hollow" 
						           			@click.native="buttonClickThree(items)"
						           			style="width:15px;overflow: hidden;margin-top: 10px;">
						           			{{items}}
						           		</yd-button>
						           	</yd-flexbox-item>
						            </yd-flexbox>
						            <yd-flexbox>
						           	<yd-flexbox-item 
						           		v-for="(items,index) in carTxt[3].name">
						           		<yd-button 
						           			type="hollow" 
						           			@click.native="buttonClickFour(items)"
						           			style="width:15px;overflow: hidden;margin-top: 10px;">
						           			{{items}}
						           		</yd-button>
						           	</yd-flexbox-item>
						            </yd-flexbox>
						            
						        </yd-popup>
		            	</div>
		            </yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" 
		            			style="" 	
		            			maxlength="1"
		            			v-model="inputcarcode.numOne"/>
		            	</div>
					</yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" 
		            			maxlength="1"
		            			style="" 
		            			v-model="inputcarcode.numTwo" />
		            	</div>
					</yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" 
		            			style="" 
		            			maxlength="1"
		            			v-model="inputcarcode.numThree"/>
		            	</div>
					</yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" style=""
		            			maxlength="1"
		            			 v-model="inputcarcode.numFour"/>
		            	</div>
					</yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" style="" 
		            			maxlength="1"
		            			v-model="inputcarcode.numFive"/>
		            	</div>
					</yd-flexbox-item>
					<yd-flexbox-item>
						<div class="wei" style="">
		            		<input 
		            			class="input" 
		            			maxlength="1"
		            			style="" 
		            			v-model="inputcarcode.numSix"/>
		            	</div>
					</yd-flexbox-item>
	      		</yd-flexbox>
	        </div>
        </div>
        <div>
        	<yd-button-group>
		        <yd-button 
		        	size="large" 
		        	type="primary"
		        	@click.native="RouterGo('/cardetail',types)">下一步</yd-button>
		    </yd-button-group>
        </div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			list: [],
			types:{
				type:'',
				carcode:'',
			},
//			carcode:[],
			backLink:"/index/user/index",
			title:"添加车辆",
			pre:" ",
			inputcarcode:{
			   areaName: '',
		　　　　 numOne: '',
		　　　　 numTwo: '',
		　　　 　 numThree: '',
		　　　  　numFour: '',
		　　　  　numFive: '',
		　　　  　numSix: '',
			},
			show:false,
			show_:false,
			datasearchlist:[
			{name:"莹白色宝蓝"},
			{name:"莹白色宝蓝"},
			{name:"莹白色宝蓝"},
			{name:"莹白色宝蓝"},
			{name:"莹白色宝蓝"},
			],
			cartype:"",
			carTxt: [
　　　　　　{ name: ['粤', '京', '冀', '沪', '津', '晋', '蒙', '辽' ] },
　　　　　　{ name: ['苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂' ] },
　　　　　　{ name: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘'  ] },
			{ name: ['黑', '桂', '宁', '青', '吉', '湘'] }
　　　	　],
			}

	},
	created(){

	},
	watch:{
		//监听数据变化
		inputcarcode:{  
            handler: function() {  
				this.types.carcode =  this.inputcarcode.areaName+this.inputcarcode.numOne+this.inputcarcode.numTwo+this.inputcarcode.numThree+this.inputcarcode.numFour+this.inputcarcode.numFive+this.inputcarcode.numSix         	
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
		inputName(){
			this.show = true;
			console.log(2)
		},
		handleTypeClick(){
			this.show_ = true
		},
		distanceClick(items){
			this.cartype=items.name;
			this.types.type = items.name;
		},
		buttonClickOne(items){this.inputcarcode.areaName =items;},
		buttonClickTwo(items){this.inputcarcode.areaName =items;},
		buttonClickThree(items){this.inputcarcode.areaName =items;},
		buttonClickFour(items){this.inputcarcode.areaName =items;},
		buttonClickDel(items){this.inputcarcode.areaName =items;},
		buttonClickSix(items){this.inputcarcode.areaName =items;},
		RouterGo(router,types){
			let form = this.inputcarcode
			if(form.areaName!=''&&
			   form.numOne!=''&&
				form.numTwo!=''&&
				form.numThree!=''&&
			 	form.numFour!=''&&
				form.numFive!=''&&
				form.numSix!=''){
				this.$router.push({path:router,query:{type:types}})
			}else{
				this.$dialog.toast({mes: '输入不能为空'});
			}
			
		}
		
	}
} 
</script>

<style>
	.wei{
		background-color: #CDCDCD;width: 25px;margin-bottom: 10px;
		line-height: 25px;
	}
	.input{
		background-color: white;line-height: 25px;width: 23px;list-style-type: none;border: none;margin-left: 1px;margin-top: 1px;
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