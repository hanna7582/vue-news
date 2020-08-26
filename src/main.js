import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import axios from 'axios'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$axios=axios

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
