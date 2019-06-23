export default [{
    path: '/index',
    meta:{auth:true},
    component: r => require.ensure([], () => r(require('@/pages/home/index')), 'Index'),
    children: [  //这里就是二级路由的配置
        {
          path: '/index',
          name: 'Home',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/main')), 'Home'),
        },    
        {
          path: '/work',
          name: 'Work',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/work-table')), 'Work'),
        },
        {
          path: '/input',
          name: 'Msginput',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/msg-input')), 'Input'),
        }, 
        {
          path: '/Tinput',
          name: 'Tcinput',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/tc-msg-input')), 'Tcinput'),
        },         
        {
          path: '/msg',
          name: 'Msg',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/msg')), 'Msg'),
        }, 
        {
          path: '/Rtable',
          name: 'Rtable',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/re-table')), 'Rtable'),
        },  
        {
          path: '/problem',
          name: 'Problem',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/problem')), 'Problem'),
        }, 
        {
          path: '/history',
          name: 'History',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/history')), 'History'),
        },  
        {
          path: '/release',
          name: 'Releasse',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/release')), 'Releasse'),
        },  
        {
          path: '/Wmsg',
          name: 'WorkMsg',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/work-msg')), 'WorkMsg'),
        },  
        {
          path: '/manage',
          name: 'Manage',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/manage-t')), 'Manage'),
        },  
        {
          path: '/managetacher',
          name: 'ManageT',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/manage-tacher')), 'ManageT'),
        },  
        {
          path: '/managestudent',
          name: 'ManageS',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/manage-student')), 'ManageS'),
        }, 
        {
          path: '/resource',
          name: 'Resource',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/manage-resource')), 'Resource'),
        },  
        {
          path: '/oldhistory',
          name: 'History',
          meta:{auth:true},
          component: r => require.ensure([], () => r(require('@/pages/home/old-history')), 'History'),
        }, 
 		   {
		    path: '/user/alter',
		    name: 'Alter',
		    meta:{auth:true},
		    component: r => require.ensure([], () => r(require('@/pages/user/alter')), 'Alter')
		},
 		   {
		    path: '/class',
		    name: 'Class',
		    meta:{auth:true},
		    component: r => require.ensure([], () => r(require('@/pages/home/class')), 'Class')
		} 
      ]
}]