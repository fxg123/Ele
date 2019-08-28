import axios from 'axios';

export default {
    state: {
        smss: [],
    },
    getters: {
        smss: state => state.smss
    },
    mutations: {
        setSms(state, smslist) {
            state.smss = smslist
        }
    },
    actions: {
        async sms({ commit }) {
            let res = await axios.get('/el/restapi/eus/login/mobile_send_code', {
            });
            if (res.status == 200) {
                commit('setSms',res.data)
            }
        }
    }

}