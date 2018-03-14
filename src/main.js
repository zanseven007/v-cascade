// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import cascade from './install.js'
import VueHighlightJS from 'vue-highlightjs'

// register of v-cascade
Vue.use(cascade)
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app)
})
