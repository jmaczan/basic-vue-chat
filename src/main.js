import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
