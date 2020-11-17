import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
//import VeeValidate from 'vee-validate'

//Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
