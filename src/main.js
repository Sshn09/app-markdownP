import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/index';


/* 
Ajouter un router
https://hackmd.io/ECF_-C5hSU6T7Ai3oRZR6w#Gestion-des-routes-de-l%E2%80%99application

Ajouetr un store
https://hackmd.io/ECF_-C5hSU6T7Ai3oRZR6w#Gestion-de-l%E2%80%99information-en-Vuejs
*/

Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
