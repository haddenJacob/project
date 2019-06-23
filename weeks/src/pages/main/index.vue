<template>
    <div class="wapper">
    	<s-slider/>
    	<s-grid/>
    </div>
</template>

<script>
import SliderList from './sliderList'
import Grid from './grid'
export default{
	components:{
		's-slider':SliderList,
		's-grid':Grid,
	}
}   
</script>

<style lang="" scoped>
.wapper{
	background:#fff;
}    
</style>