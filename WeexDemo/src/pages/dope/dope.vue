<template>
	<div>
		<c-header 
			 :backLink="backLink"
			:title="title"
			:pre="pre"/>
			<br />
			<div>
			<yd-list theme="5"> 
		        <yd-list-item v-for="item, key in list" :key="key">
		            <img slot="img" :src="item.photo">
		            <span slot="title">{{item.title}}</span>
		            <yd-list-other slot="other">
		                <div>
		                    <span class="demo-list-price">{{item.tip}}</span>
		                    <br>
		                    <span class="demo-list-del-price">{{item.dece}}</span>
		                </div>
		            </yd-list-other>
		        </yd-list-item>
		    </yd-list>
			</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
        	list:[{title:'bfjsbfdj',photo:'https://i04piccdn.sogoucdn.com/d7e8ebca2718fb53',tip:'分公司分公司北师大版',dece:"北京上班v绝对不v觉得v并定居北京"},
        	{title:'bfjsbfdj',photo:'https://i04piccdn.sogoucdn.com/d7e8ebca2718fb53',tip:'分公司分公司北师大版',dece:"北京上班v绝对不v觉得v并定居北京"},
        	{title:'bfjsbfdj',photo:'https://i04piccdn.sogoucdn.com/d7e8ebca2718fb53',tip:'分公司分公司北师大版',dece:"北京上班v绝对不v觉得v并定居北京"},
        	{title:'bfjsbfdj',photo:'https://i04piccdn.sogoucdn.com/d7e8ebca2718fb53',tip:'分公司分公司北师大版',dece:"北京上班v绝对不v觉得v并定居北京"},
        	{title:'bfjsbfdj',photo:'https://i04piccdn.sogoucdn.com/d7e8ebca2718fb53',tip:'分公司分公司北师大版',dece:"北京上班v绝对不v觉得v并定居北京"}],
        	backLink:"/index/dope/index",
            title:"最近消息",
            pre:" ",
        }
    },
    created(){
    	this.$api.test.setDope().then(response=>{
    		this.list=response.data
    	})
    }
}
</script>

<style>
</style>