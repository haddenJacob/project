export default[{
    path: '/login',
    meta:{auth:true},
    component: r => require.ensure([], () => r(require('@/pages/login/login')), 'Login'),
    children: [  //这里就是二级路由的配置
    ]
}]
