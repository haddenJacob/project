<template>
	<div class="container">
		<el-container style="padding: 0;margin: -7px;">
		  <el-header style="padding: 0;">
		  	<div class="header"style="width: 100%;">
				<pr-header/>
			</div>		  	
		  </el-header>
		  <el-container style="margin-left: 300px;margin-right: 300px;">
		    <el-aside width="200px">
			    <el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>个人信息</span>
			        </template>
			        <el-menu-item-group>
			          <template slot="title">分组一</template>
			          <el-menu-item index="1-1">个人信息修改</el-menu-item>
			          <el-menu-item index="1-2">选项2</el-menu-item>
			        </el-menu-item-group>
			        <el-menu-item-group title="分组2">
			          <el-menu-item index="1-3">选项3</el-menu-item>
			        </el-menu-item-group>
			        <el-submenu index="1-4">
			          <template slot="title">选项4</template>
			          <el-menu-item index="1-4-1">选项1</el-menu-item>
			        </el-submenu>
			      </el-submenu>
			      <el-menu-item index="2">
			        <i class="el-icon-menu"></i>
			        <span slot="title">导航二</span>
			      </el-menu-item>
			      <el-menu-item index="3" disabled>
			        <i class="el-icon-document"></i>
			        <span slot="title">导航三</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>
			        <span slot="title">导航四</span>
			      </el-menu-item>
			    </el-menu>
		    </el-aside>
		    <el-main>
		    	<div>
		    		<router-view/>
		    	</div>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import Header from '@/components/header'
export default{
	components:{
		'pr-header': Header,
	}
}
</script>

<style scoped>
body{
	overflow-x: hidden;
}.html{
	padding: 0;
}

</style>