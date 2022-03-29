import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import router from '@/common/router.js'


Vue.config.productionTip = false
Vue.use(VueRouter)


window.app = new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
