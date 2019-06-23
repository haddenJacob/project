export default[{
    path: '/index',
    meta:{auth:true},
    component: r => require.ensure([], () => r(require('@/pages/home/index')), 'Index'),
    children: [  //这里就是二级路由的配置
    ]
}]