<template>
	<div>
		<c-header 
			:title="title"
			:pre="pre"/>
			<br />
		<div>
			<yd-cell-group>
		        <yd-cell-item arrow href="#" 
		        	@click.native="routerGo('/dope/index/dopeContent')"
		        	type="link">
		            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
		            <span slot="left">系统消息</span>
		            <span slot="right">查看</span>
		            <yd-badge type="danger" slot="left" class="tip">{{count}}</yd-badge>
		        </yd-cell-item>
		    </yd-cell-group>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            title:"最近消息",
            pre:" ",
            show_1:true,
            count:99,
        }
    },
	methods:{
		routerGo(router){
			if(this.count>0){
				this.$router.push(router)
			}else{
	            this.$dialog.toast({
                mes: '暂时没有最新消息',
                timeout: 1500,
                icon: 'success'
            	});
			}
		},


	}
}
</script>

<style scoped>
.tip{
	position: absolute;
	left: 95px;
	top: 10px;
}
</style>