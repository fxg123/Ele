import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import address from './adress' ;
import login from './login';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home,
        address,
        login,
    }
})