// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import vue-function-api
import { plugin as VueFunctionApiPlugin } from 'vue-function-api'

import App from './App.vue'
// import Landing from './Landing'
import router from './router'
import './assets/docs.scss'
// 不关心打包体积时一次引入全部图标
import 'vue-awesome/icons'
/* 任选一种注册组件的方式 */
// import Icon from 'vue-awesome/components/Icon'
import * as moment from 'moment'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
/* 动效 */
import 'animate.css'

// vue-function-api
Vue.use(VueFunctionApiPlugin)
// 给Vue的prototpye注入新属性和方法的话，直接用Vue.prototype.xxx = xxx ts校验是不通过的。需要通过declare声明一下
// 在main.ts中用window对象需要写成(window as any)这种方式
// 给vue对象添加自定义方法
declare module 'vue/types/vue' {
  interface Vue {
    $moment: Function
  }
}

Vue.prototype.$moment = moment
Vue.use(iView)

// 全局注册（在 `main .js` 文件中）
// Vue.component('awesome-icon', Icon)
Vue.config.productionTip = false
/* tslint-disable no-new */
;(window as any).vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
