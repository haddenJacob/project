<template>
	<div>
		<c-header 
			:title="title"
			:pre="pre"/><br><br><br><br>
		<div class="input-tell">
			<yd-cell-group>
            <yd-cell-item>
                <span slot="left"><i 
                	class="iconfont icon-user1"
                	style="color: #358AFF;font-size: 20px;">
                	&nbsp;&nbsp;
                </i></span>
                	
                <yd-input 
                	slot="right" 
                	v-model="tell" 
                	ref="tell" 
                	required regex="mobile" 
                	placeholder="请输入充值手机号码"></yd-input>
            </yd-cell-item>
            <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
       		</yd-cell-group>
		</div>
		<div class="recharge-price">
			<yd-grids-group :rows="3" title="选择充值金额">
		        <yd-grids-item v-for="(items,index) in price">
		            <span 
		            	slot="text"
		            	@click="rechargePriceClick(index)"
		            	style="color: #358AFF;"
		            	>{{items.price+"元"}}</span>
		        </yd-grids-item>
		    </yd-grids-group>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            tell: '',
            result: '',
            title:"用户充值",
            pre:" ",
            price:[
            {id:0,price:10},
            {id:1,price:20},
            {id:2,price:50},
            {id:3,price:100},
            {id:4,price:200},
            {id:5,price:500},
            ]
        }
    },
    methods: {
    	rechargePriceClick(index){
    		if(this.tell!=''){
	    		for(let i=0;i<this.price.length;i++){
	    			if(i==index){
	    				this.$dialog.confirm({
		                    title: '提醒你',
		                    mes: "是否确定充值："+this.price[index].price+"元",
		                    opts: () => {
		                    	console.log(this.price[index].price)
		                    	this.$api.test.setRecharge(this.tell+this.price[index].price).then(response=>{
		                    		
		                    	})
		                        this.$dialog.toast({
				                    mes: '充值成功',
				                    timeout: 1500,
				                    icon: 'success'
				                });
		                    }
		               });
	    			}
	    		}
    		}else{
                this.$dialog.toast({
                    mes: '输入框不能为空',
                });    			
    		}
    	},
    }
}
</script>

<style>
</style>