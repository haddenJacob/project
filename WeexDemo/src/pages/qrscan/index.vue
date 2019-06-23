<template>
    <div>
    	<!-- <input type='button' @click='startRecognize' value='扫码' /> -->
     <!--    <input type='button' @click='startScan' value='开始扫描' />
        <input type='button' @click='cancelScan' value='取消扫描' />
        <input type='button' @click='setFlash' value='开启闪光灯' /> -->
        
		<div id= "bcid" v-if="show"></div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			value:'',
			show:true
		}
	},
	mounted(){
		this.startRecognize()
	},
	methods:{
		 startRecognize() {
		 	const that = this
		    scan = new plus.barcode.Barcode('bcid');
		    this.startScan();
		    scan.onmarked = function(type,code,file){
			
			   //type=0：二维码
			    //type=1：条形码
			    
			    that.value = 'code:'+code+' type:'+type+' file:'+file
			    that.show = false
			   
			    that.cancelScan()
		
			    that.cancelScan()
			    that.close()
				that.$router.push({path:'/qrscan/info',query:{content:code}})
			}
		},
		 startScan() {
		    scan.start();
		},
		 cancelScan() {
		    scan.cancel();
		},
		 setFlash() {
		    scan.setFlash();
		},
		close(){
			scan.close()
		}
	}
}   
</script>

<style >
#bcid{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
 	background:#000;
}      
</style>