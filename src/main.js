import Vue from 'vue'
import App from './App.vue'
import SisdaiComponentes from 'sisdai-componentes/src/index'
import SisdaiMapas from 'sisdai-mapas'

// Componentes y directivas de la biblioteca
Vue.use(SisdaiComponentes)
Vue.use(SisdaiMapas)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
