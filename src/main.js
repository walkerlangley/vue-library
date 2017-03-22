import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
//import { routes } from './routes.js';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/api';

Vue.use(VueMaterial);




// Apparently Chrome doens't allow CORS from localhost?
//Vue.http.options.headers = {
  //"Content-Type": "application/json",
  //"Access-Control-Allow-Origin": "true"
//}

// Don't think I need a router...
//Vue.use(VueRouter);
//const router = new VueRouter({ routes });

// Not really doing anything here, just seeing how
// interceptors can be implemented
Vue.http.interceptors.push((request, next) => {
  console.log('Intercepted Request', request);
  next(response => {
    console.log('Intercepted Response: ', response);
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
