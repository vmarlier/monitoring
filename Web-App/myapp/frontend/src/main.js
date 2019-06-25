// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/style/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VuePaginate from 'vue-paginate'

import '@/permission' // permission control

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faCog, faUser)
Vue.use(VuePaginate)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})