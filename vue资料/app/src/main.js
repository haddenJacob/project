// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

import Vuex from 'vuex'
//导入组件
import 'components'
//导入视图组件
import 'views'

//引入样式
import 'common/base/style/index.scss'

// import store from 'store'

Vue.config.productionTip = false
Vue.use(Vuex)

window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
