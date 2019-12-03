import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import './styles/index.scss'
import $ from 'jquery'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


import common from "./common/common.js"


import axios from "axios";
Vue.prototype.$axios = axios;

axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


Vue.use(ViewUI);
Vue.use(common);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
