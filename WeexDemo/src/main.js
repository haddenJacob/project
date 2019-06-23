import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.flexible.js'

import '@/config/xback.js'
import HeaderComponent from '@/components/Header/index.js'
import QRCodeComponent from '@/components/QRCode/index.js'

import ApiService from '@/service'

import Utils from '@/utils'

// import AMap from 'AMap'
// import AMapUI from 'AMapUI'

import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

Vue.use(HeaderComponent)
Vue.use(QRCodeComponent)
// 引入vue-amap
// import VueAMap from 'vue-amap';
// Vue.use(VueAMap);

// import './config/rem'
Vue.use(YDUI)

Vue.config.productionTip = false

Vue.prototype.$api = ApiService
Vue.prototype.$utils = Utils




// 解决点击事件延迟
document.addEventListener('DOMContentLoaded', function() {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false)

// // 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: '1dbc0774dc31889f71f03c3762466dd2',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 
//           'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 
//           'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',
//           'AMap.Geolocation'],
//   // 高德 sdk 版本，默认为 1.4.4
//   v: '1.4.4'
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
