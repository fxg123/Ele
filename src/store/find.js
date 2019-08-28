import axios from "axios";

// https://h5.ele.me/restapi/member/gifts/suggest
export default{
    state:{
        finds:[],

    },
    getters: {
        finds: state => state.finds,
    },
    mutations: {
        setFinds(state, value) {
            state.finds = value;
        }
    },
    actions: {
        //轮播
        async swipe({commit}) {
            await axios.get('/el/restapi/member/gifts/suggest').then(res=>{
                if(res.status == 200){
                    commit('setFinds',res.data)
                        console.log(res.data); 
                }
            }).catch(err=>{
                console.log(err);
                
            })
        }
    }
}