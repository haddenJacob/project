export default [{
    path: '/',
    component: r => require.ensure([], () => r(require('@/pages/user/index')), 'Login')
},
{
    path: '/user/register',
    component: r => require.ensure([], () => r(require('@/pages/user/register')), 'Register')
}
]