<template>
	<div >
		<div style="text-align: left;margin-bottom: 20px;">
				<breadcrumb>
				  <breadcrumb-item>
				    <router-link to="/home" exact><i class="fa fa-home"></i>首页</router-link>
				  </breadcrumb-item>
				  <breadcrumb-item>
				    <router-link to="/service" exact><i class="fa fa-tag"></i>服务评价统计</router-link>
				  </breadcrumb-item>

				</breadcrumb>			
			</div>
			<div style="">
			<el-card class="box-card" style="text-align: left;">
			  <div slot="header" class="clearfix">
			    <span>
			    	服务评价统计表
								  <el-button
						          size="mini"
						          @click="chartClick()"								  	
								  slot="reference">点击查看</el-button>			    	
			    </span>
			  </div>
				  <div class="text item" style="width: 500px;height: 500px;" ref="echart">
				  </div>
			  	</el-card >	
			</div>
	</div>
</template>

<script>
import echarts from 'echarts'
  export default {
    data() {
      return {
		chart: null,
		form:[],
		data:[{data1:0,data2:0,data3:0,data4:0,data5:0}],
		count:0,
      }
    },
    created(){
  		this.$api.user.findassessall().then(response=>{
  			this.form=response
  		})
    },
    methods: {
		submitForm(){

		},
    initChart() {
      this.chart = echarts.init(this.$refs.echart);
      // 把配置和数据放这里
      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
	    title: {
	        text: '学生评星分值表'
	    },        
        xAxis: [{
        	title:"顶顶顶",
          type: 'category',
          data: ['0—1', '1-2', '2-3','3-4','4-5'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '10%',
          data: [this.data[0].data1,this.data[0].data2,this.data[0].data3,this.data[0].data4,this.data[0].data5]
        }]
      })
    },
    formFun(){
  			for(let i=0;i<this.form.length;i++){
	   			if(this.form[i].assesscode<=1){
	   				this.count++
	  				this.data[0].data1=(this.data[0].data1+this.form[i].assesscode)/this.count

	  			} 	
	   			if(this.form[i].assesscode>1&&this.form[i].assesscode<=2){
	   				this.count++
	  				this.data[0].data2=(this.data[0].data2+this.form[i].assesscode)/this.count

	  			} 
	   			if(this.form[i].assesscode>2&&this.form[i].assesscode<=3){
	   				this.count++
	  				this.data[0].data3=(this.data[0].data3+this.form[i].assesscode)/this.count

	  			}
	   			if(this.form[i].assesscode>3&&this.form[i].assesscode<=4){
	   				this.count++
	  				this.data[0].data4=(this.data[0].data4+this.form[i].assesscode)/this.count

	  			}
	   			if(this.form[i].assesscode>4&&this.form[i].assesscode<=5){
	   				this.count++
	  				this.data[0].data5=(this.data[0].data5+this.form[i].assesscode)/this.count
	  			}
  			}    	
    },
    chartClick(){
	  	this.formFun()
	    this.initChart();    	
    }
     }
  }
</script>

<style>
</style>