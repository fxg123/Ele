import axios from 'axios';

export default {
    state: {
        pic_code: null,
        logs: [],
        sms_value: '',//令牌
        user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : 0,
        userInfo:{},
        logout:{},
    },
    getters: {
        user_id: state => state.user_id,
        pic_code: state => state.pic_code,
        islogin: state => state.user_id != 0,
        getuserInfo: sate => sate.userInfo,
        logout:state =>state.logout,
    },
    mutations: {
        setSMS(state, value) {
            state.sms_value = value;
        },
        setPic(state, value) {
            state.pic_code = value;
        },
        setLogs(state, loglist) {
            state.user_id = loglist;
            localStorage.setItem('user_id', loglist);
        },
        setUseInfo(sate,value){
            sate.userInfo = value;
        },
        setlogout(state,value){
            state.logout = value;

        }

    },
    actions: {
        //手机验证码
        async getSmscode({ commit, state }, { mobile, Gracode }) {

            console.log(state.pic_code,mobile,Gracode);

            let res = await axios.post('/el/restapi/eus/login/mobile_send_code', {
                captcha_hash: state.pic_code ? state.pic_code.captcha_hash : '',
                captcha_value: Gracode ? Gracode : '',
                mobile: mobile,
                scf:'ms'
            })

            // console.log(res);
            if (res) {
                // console.log(res);
                commit('setSMS', res.data.validate_token);
            }
        },
        //图形验证码
        async getGraphcode({ commit }, mobile) {
            let res = await axios.post('/el/restapi/eus/v3/captchas', {
                captcha_str: mobile,
            })
            // console.log(res);

            if (res) {
                // console.log(res);
                commit('setPic', res.data);
            }
        },

        async logss({ state, commit }, { mobile, Gracode }) {
            let res = await axios.post('/el/restapi/eus/login/login_by_mobile', {
                mobile: mobile,
                scf:'ms',
                validate_code: Gracode,
                validate_token: state.sms_value,
            });
            if (res.status == 200) {
                commit('setLogs', res.data.user_id);
                // console.log(res.data);
            }
        },
        async getUserInfo({state,commit}){
            let res = await axios.get('/el/restapi/eus/v3/users/' + state.user_id);
                commit('setUseInfo', res.data);
                // console.log(res.data);
           
        },
        async getlogout({state,commit}){
            console.log(11);
            await axios.post('/el/restapi/eus/login/logout').then(res=>{
                // localStorage.clear();
                // sessionStorage.removeItem('user_id');
                // sessionStorage.clear();
                // commit('setlogout',res);
                // this.router.push('/me/login')
                console.log(this);
                
            }).catch(err=>{
                console.log(err);
                
            });
        }
        
    }
}

