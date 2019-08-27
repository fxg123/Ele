import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';

import router from './routes'
import store from './store'
import './config/font'

Vue.prototype.axios = axios;

Vue.use(Vant);
Vue.config.productionTip = false
Vue.filter('imgs',function(val){
  if(val.slice(val.length-4,val.length)=='jpeg'){
    return (
          "https://cube.elemecdn.com/" +
          val.slice(0, 1) +
          "/" +
          val.slice(1, 3) +
          "/" +
          val.slice(3, val.length) +
          ".jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
        );
        }else{
            return (
          "https://cube.elemecdn.com/" +
          val.slice(0, 1) +
          "/" +
          val.slice(1, 3) +
          "/" +
          val.slice(3, val.length) +
          ".png?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
        );
        }
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
