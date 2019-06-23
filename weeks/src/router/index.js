import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages'
import Home from '@/pages/main'

import UserIndex from '@/pages/user'//用户中心
import Login from '@/pages/user/login'//登陆
import Register from '@/pages/user/register'//登陆
import Updatapassword from '@/pages/user/updatapassword'//忘记密码
import UserInfo from '@/pages/user/info'//用户账号信息

import Neibor from '@/pages/map'//附近
import StationList from '@/pages/map/list'//搜索停车场
import StationNav from '@/pages/map/nav'//导航
import FindResult from '@/pages/map/result'//查询结果
import NavGo from '@/pages/map/navgo'//导航

import QRCode from '@/pages/main/qrcode'//生成二维码

import Recharge from '@/pages/main/recharge'//用户充值
import Dope from '@/pages/dope/index'//用户消息
import DopeContent from '@/pages/dope/dope'//用户消息内容
import Journey from '@/pages/main/journey'//用户行程
import Borrow from '@/pages/main/borrow'//用户出借
import Bill from '@/pages/main/bill'//用户账单
import About from '@/pages/main/about'//用户账单

import Carlist from '@/pages/mycar/carlist'//我的车辆
import Addcar from '@/pages/mycar/addcar'//添加车辆
import Cardetail from '@/pages/mycar/cardetail'//保存

//二维码界面
import Qrscan from '@/pages/qrscan'
//二维码扫描结果页
import QrscanInfo from '@/pages/qrscan/info'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },    
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {path:'/',component:Home},
        {path:'user/index',component:UserIndex},//用户中心
        {path:'map/neigbor',component:Neibor},//附近
        {path:'dope/index',component:Dope},//消息
      ]
    },
    {
      path:'/user/info',
      name:'userinfo',
      component:UserInfo,
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/register',
      name:'register',
      component:Register,
    },
    {
      path:'/password',
      name:'Updatapassword',
      component:Updatapassword,
    },
    //搜索停车场
    {
      path:'/map/find',
      name:'mapfind',
      component:StationList,
//    meta:{keepAlive: true}
    },//停车场导航
    {
      path:'/map/nav',
      name:'mapfind',
      component:StationNav,
    },
    {
      path:'/qrcode',
      name:'qrcode',
      component:QRCode,
    },
    {
      path:'/result',
      name:'stationfind',
      component:FindResult,
    },
    {
      path:'/nav/go',
      name:'navgo',
      component:NavGo,
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge,
    },
    {
      path:'/dope/index/dopeContent',
      name:'DopeContent',
      component:DopeContent,
    },
    {
      path:'/carlist',
      name:'Carlist',
      component:Carlist,
    },
    {
      path:'/addcar',
      name:'Addcar',
      component:Addcar,
    },
    {
      path:'/cardetail',
      name:'Cardetail',
      component:Cardetail,
    },
    {
      path:'/journey',
      name:'Journey',
      component:Journey,
    },
    {
      path:'/borrow',
      name:'Borrow',
      component:Borrow,
    },
    {
      path:'/bill',
      name:'Bill',
      component:Bill,
    },
    {
      path:'/about',
      name:'About',
      component:About,
    },
    {
      path:'/qrscan',
      name:'qrscan',
      component:Qrscan,
    },
    ,
    {
      path:'/qrscan/info',
      name:'qrscan_info',
      component:QrscanInfo,
    },    
  ]
})

