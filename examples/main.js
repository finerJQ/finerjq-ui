import Vue from 'vue'
import App from './App.vue'
import jqUI from './../packages'

Vue.use(jqUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
