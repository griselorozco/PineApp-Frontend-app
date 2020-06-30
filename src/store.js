import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

import { loginApi } from '@/api/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    drawer: null,
    token: '',
    usuario: '',
    perfil: '',
    rol: '',
    logueado: false,
  },
  mutations: {
    obtener_usuario (state, payload) {
      state.token = payload
      if (payload === '') {
        state.usuario = ''
        state.perfil = ''
        state.rol = ''
        state.token = ''
        state.logueado = false
      } else {
        state.logueado = true
        state.token = payload.token
        state.usuario = payload.user
        state.perfil = payload.perfil
        state.rol = payload.rol
      }
    },

    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_SCRIM (state, payload) {
      state.barColor = payload
    },
  },
  actions: {
    async login_action ({ commit }, payload) {
      console.log(payload)
      const serviceResponse = await loginApi(payload)
      console.log(serviceResponse)
      if (serviceResponse.ok) {
        commit('obtener_usuario', serviceResponse)
        localStorage.setItem('token', serviceResponse.token)
        localStorage.setItem('rol', JSON.stringify(serviceResponse.rol))
        localStorage.setItem('perfil', JSON.stringify(serviceResponse.perfil))
        localStorage.setItem('logueado', true)
        router.push('/app')
        return serviceResponse
      } else {
        return serviceResponse
      }
    },
    logout_action ({ commit }) {
      localStorage.clear()
      commit('obtener_usuario', '')
      router.push('/')
      return true
    },
    leer_token ({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        const token = localStorage.getItem('token')
        const rol = JSON.parse(localStorage.getItem('rol'))
        // eslint-disable-next-line camelcase
        const perfil = JSON.parse(localStorage.getItem('perfil'))
        const payload = {
          rol: rol,
          perfil: perfil,
          token: token,
        }
        commit('obtener_usuario', payload)
      } else {
        commit('obtener_usuario', '')
        router.push({ name: 'Login' })
      }
    },
  },
})
