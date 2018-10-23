import Vue from 'vue'
import Vuex from 'vuex'
import general from './modules/general'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    general
  }
})

export default store
