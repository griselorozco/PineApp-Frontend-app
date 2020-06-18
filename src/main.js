// =========================================================
// * Vuetify Material Dashboard PRO - v2.0.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueLoading from 'vuejs-loading-plugin'
import VAvatarUploader from 'vuetify-avatar-uploader'
import '../src/assets/global.scss'

import VueSweetalert2 from 'vue-sweetalert2'
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.use(VueLoading)
Vue.use(VAvatarUploader)
Vue.use(VueSweetalert2)

console.log(process.env.VUE_APP_API_URL_BACKEND)

export const EventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
