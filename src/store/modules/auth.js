import { LOGIN_USER, LOGOUT_USER, UPDATE_PERSON, REFRESH_PERSON } from '../mutation-types'

import { loginApi } from '@/api/modules'

import router from '../../router'

const initialState = {
  user: {},
  logged: false,
  functions: [],
  token: '',
  organization: {},
}

const state = {
  ...initialState,
}

const getters = {
  user: state => state.user,
  typeUser: state => state.typeUser,
  logged: state => state.logged,
  organization: state => state.organization,
}

const mutations = {
  [LOGIN_USER]: (state, payload) => {
    // state.user = payload
    state.logged = true
    state.token = payload.token
    state.user = payload.user
    state.typeUser = payload.user.roleId
    state.functions = payload.functions
  },
  [REFRESH_PERSON]: (state, payload) => {
    // state.user = payload
    state.logged = true
    state.token = payload.token
    state.user = payload.user
    state.typeUser = payload.typeUser
    state.functions = payload.functions
  },
  [LOGOUT_USER]: state => {
    state.user = initialState.user
    state.logged = initialState.logged
    state.token = ''
  },
  [UPDATE_PERSON]: (state, payload) => {
    state.user.person = {
      ...state.user.person,
      ...payload,
    }
  },
}
const actions = {
  async loginAction ({ commit }, payload) {
    const serviceResponse = await loginApi(payload)
    console.log(serviceResponse)
    if (serviceResponse.ok) {
        commit(LOGIN_USER, serviceResponse)
        localStorage.setItem('type_user', serviceResponse.user.roleId)
        localStorage.setItem('token', serviceResponse.token)
        localStorage.setItem('logged', serviceResponse.ok)
        localStorage.setItem('functions', JSON.stringify(serviceResponse.functions))
        localStorage.setItem(
          'user',
          JSON.stringify(serviceResponse.user),
        )
        router.push({ name: 'Dashboard-666', params: { ok: true } })
    } else {
      const params = { text: serviceResponse.message }
      window.getApp.$emit('SHOW_ERROR', params)
      router.push({ name: 'Login' })
    }
  },
  initializer ({ commit }) {
    if (localStorage.getItem('token')) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      const typeUser = localStorage.getItem('type_user')
      const user = JSON.parse(localStorage.getItem('user'))
      const token = localStorage.getItem('token')
      const functions = JSON.parse(localStorage.getItem('functions'))
      const payload = { typeUser: typeUser, user: user, token: token, functions: functions }
      commit(REFRESH_PERSON, payload)
      // router.push({ name: 'Dashboard', params: { ok: true } })
    } else {
      router.push({ name: 'Login' })
    }
  },
  refreshData ({ commit }) {
    if (localStorage.getItem('token')) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      const typeUser = localStorage.getItem('type_user')
      const user = JSON.parse(localStorage.getItem('user'))
      const token = localStorage.getItem('token')
      const functions = JSON.parse(localStorage.getItem('functions'))
      const payload = { typeUser: typeUser, user: user, token: token, functions: functions }
      commit(REFRESH_PERSON, payload)
      console.log(router)

      if (router.history.current.name === 'Login') {
        console.log('XX')

        router.push({ name: 'Dashboard-666' })
      }
    }
  },
  logoutAction ({ commit, dispatch }) {
    localStorage.clear()
    commit(LOGOUT_USER)
    router.push({ name: 'Login' })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
