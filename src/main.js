// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'
import './assets/css/style_all.css'

Vue.config.productionTip = false;
window.axios = require("axios");

/* eslint-disable no-new*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
