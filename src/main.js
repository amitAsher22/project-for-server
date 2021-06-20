import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";
import {store} from './store'


Vue.use(VueRouter )


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
