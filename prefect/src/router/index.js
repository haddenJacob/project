import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/login'
import home from '@/router/home'

Vue.use(Router)

export default new Router({
  routes: [
			...login,
			...home,
  ]
})
