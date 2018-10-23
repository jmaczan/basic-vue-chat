import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import './assets/scss/main.scss'

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
