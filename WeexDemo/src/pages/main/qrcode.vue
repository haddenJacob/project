<template>
    <div>
        <c-header back="home-outline" pre="" title="出借二维码"></c-header>
        <div style="display: flex;justify-content:center;margin-top: 150px;">
            <qrcode :url="content"/>
        </div>
    </div>
</template>

<script>
export default{
    data(){
    	return{
    		content:"carnum=carnum=AJ123&url=http://www.baidu.com"
    	}
    }
}  
</script>

<style lang="" scoped>
    
</style>