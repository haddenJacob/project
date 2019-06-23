<template>
   <div id="qrcode" ref="qrcode" :style="styleSheet"></div>
</template>

<script>
export default {
	name:'qrcode',
    props:{
    	url:[String],//url
    	height:{
    		type:String,
    		default:'200px',
    	},
    	width:{
    		type:String,
    		default:'200px',
    	}
    },
    mounted() {
        this.createQRCode(this.url)
    },
    computed:{
    	styleSheet:function(){
    		let style = {
    			// width:this.width,
    			// height:this.height,
    		}
    		return style
    	}
    },

    methods: {
        createQRCode (url) {
		    var $QR = document.querySelector('#qrcode')
		    var QR = qrcode(0, 'L')
		    url += '?_wx_tpl=' + url
		    $QR.setAttribute('href', url)
		    QR.addData(url)
		    QR.make()
		    $QR.innerHTML = QR.createImgTag(6, 12)
		}

    }
}

</script>

<style>
#qrcode{

}
</style>