<template>
	<div style="position: absolute;bottom: 0;top: 0;">
		<el-row>
		  <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" style="margin: 10px;margin-top: 0;">
		    <el-card shadow="hover" :body-style="{ padding: '0px' }">
		      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1049238752,1099518948&fm=27&gp=0.jpg" class="image">
		      <div style="padding: 14px;">
		        <span>好吃的汉堡</span>
		        <div class="bottom clearfix">
		          <time class="time" >{{ currentDate }}</time>
		          <el-button type="text" class="button">操作按钮</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>		
		
		
	</div>
</template>

<script>
import {formatDate} from '@/common/config/data'	
export default {
  data() {
    return {
//  	dates:formatDate(new Date(currentDate )),
      currentDate: new Date()
      
    }
  }
}

</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>