import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)',
    drawer: null,
  },
  getters,
  mutations,
  actions,
  modules,
})
