import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from './main'
//user页面
import User from './user'

Vue.use(Router)

export default new Router({
  routes: [
  	...Index,
  	...User,
        {
          path: '/error',
          name: 'Error',
          component: r => require.ensure([], () => r(require('@/pages/err/index')), 'Error'),
        },   	
  ]
})
