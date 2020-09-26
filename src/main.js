import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'


Axios.defaults.baseURL = '/api'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
