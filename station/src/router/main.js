export default[
        {
          path: '/home',
          name: 'Home',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/main/index')), 'home'),
	    children: [  //这里就是二级路由的配置
	        {
	          path: '/home',
	          name: 'Home',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/home')), 'Home'),
	        },    
	        {
	          path: '/selfmsg',
	          name: 'Selfmsg',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/selfmsg')), 'Selfmsg'),
	        },
	        {
	          path: '/share',
	          name: 'Share',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/share')), 'Share'),
	        },        
	        {
	          path: '/fix',
	          name: 'Fix',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/fix')), 'Fix'),
	        },  
	        {
	          path: '/assess',
	          name: 'Assess',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/assess')), 'Assess'),
	        },  
	        {
	          path: '/notice',
	          name: 'Notice',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/notice')), 'Notice'),
	        }, 
	        //管理员
	        {
	          path: '/student',
	          name: 'Student',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/student')), 'Student'),
	        },   
	        {
	          path: '/houseman',
	          name: 'Houseman',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/houseman')), 'Houseman'),
	        },    
	        {
	          path: '/updatman',
	          name: 'Updatman',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/updatman')), 'Updatman'),
	        },     
	        {
	          path: '/newmsg',
	          name: 'Newmsg',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/newmsg')), 'Newmsg'),
	        },  
	        {
	          path: '/complain',
	          name: 'Complain',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/complain')), 'Complain'),
	        },         
	         {
	          path: '/msg',
	          name: 'Msg',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/msg')), 'Msg'),
	        },      
	         {
	          path: '/task',
	          name: 'Task',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/main/task')), 'Task'),
	        },         
	          {
	          path: '/house',
	          name: 'House',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/house')), 'House'),
	        },         
	          {
	          path: '/allottask',
	          name: 'Allottask',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/allottask')), 'Allottask'),
	        },         
	          {
	          path: '/power',
	          name: 'Power',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/power')), 'Power'),
	        },                           
	          {
	          path: '/reply',
	          name: 'Reply',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/reply')), 'Reply'),
	        },  
	          {
	          path: '/service',
	          name: 'Service',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/service')), 'Service'),
	        },  
	          {
	          path: '/resource',
	          name: 'Resource',
	          meta:{auth:true},
	          component: r => require.ensure([], () => r(require('@/pages/admin/resource')), 'Resource'),
	        },        
	 		   {
			    path: '/user/alter',
			    name: 'Alter',
			    meta:{auth:true},
			    component: r => require.ensure([], () => r(require('@/pages/user/alter')), 'Alter')
			}        
	        
	          ]
        }, 


]
