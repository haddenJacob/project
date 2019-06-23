export default [
        {
          path: '/',
          name: 'Login',
          component: r => require.ensure([], () => r(require('@/pages/user/index')), 'Login'),
        }, 
		   {
		    path: '/user/register',
		    name: 'Register',
		    component: r => require.ensure([], () => r(require('@/pages/user/register')), 'Register')
		},              
]