<template>
    <div>
    	车牌:{{carnum}}<br>
    	type:{{type}}<br>
    	<div v-if="errinfo.code">
    		{{errinfo.info}}
    	</div>

    </div>
</template>

<script>
export default{
	data(){
		return{
			carnum:'暂无',//内容
			type:'',//type
			errinfo:{//错误信息
				code:0,//获取失败时为1
				info:'',
			}
		}
	},
	created(){
		this.content = this.$route.query.content
		this.carnum = this.getKeyValue(this.content,'carnum')
		this.type = this.getKeyValue(this.content,'type')
		if(this.content==undefined){
			this.errinfo.code = 1
			this.errinfo.info = '获取结果失败!'
		}
		console.log(this.content)
	},
	methods:{
		//从url参数中获得指定key的值
		getKeyValue(content,key){
			let strs = content.split(",")
			for(let i = 0;i<strs.length;i++){
				let tmp = strs[i]
				let key_ = tmp.substring(0,tmp.indexOf(":"))
				let value = tmp.substring(tmp.indexOf(":")+1)
				if(key_==key)
					return value
			}
			return ""
		}
	}
}   
</script>

<style lang="" scoped>
    
</style>