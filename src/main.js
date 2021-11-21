import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import "<%= BASE_URL %>favicon.ico"
// import 'http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600'

// import '@/assets/css/style.css'
// import '@/assets/css/plugins.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
