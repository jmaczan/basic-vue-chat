import Vue from 'vue'
import BasicVueChat from './BasicVueChat.vue'
import store from '@/store/index'
import './assets/scss/main.scss'

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(BasicVueChat)
}).$mount('#basic-vue-chat--wrapper')
