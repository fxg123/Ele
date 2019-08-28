import axios from 'axios';

export default {
    state: {
        address:{},
        cityInfor:{},
        lat:'',
        long:'',
    },
    getters: {
        address: state => state.address,
        cityInfor:state => state.cityInfor,
        lat:state => state.lat,
        long:state => state.lon,
    },
    mutations: {
        setAddress(state, addresslist) {
            state.address = addresslist;
        },
        setCityInfor(state, cityInfor){
            state.cityInfor = cityInfor;
            // console.log(state.cityInfor);
            
        },
        SET_LATI(state,data){
            state.lat = data;
        },
        SET_LONGIN(state,data){
            state.long = data;
        }
        
    },
    actions:{
        // async addres({state,commit }) {
            
        //     let res = await axios.get(`/el/restapi/bgs/poi/reverse_geo_coding?latitude=${state.lat}&longitude=${state.long}`, {
           
        //     });
        //     if (res.status == 200) {
        //         commit('setAddress','SET_LATI','SET_LONGIN', res.data);
        //         console.log(res.data);
        //         console.log(res.data.latitude);
                
        //     }
        // },
        async addres({state,commit }) {
            
            let res = await axios.get(`/el/restapi/bgs/poi/reverse_geo_coding?latitude=31.934154&longitude=118.642775`, {
           
            });
            if (res.status == 200) {
                commit('setAddress',res.data);
                console.log(res.data);
                console.log(res.data.latitude);
                
            }
        },
        async getCityInfor({state,commit}){
            let res = await axios.get('/position/lib/city-list@0.0.3/city_list.json')
            if(res){

                commit('setCityInfor',res.data)
                // console.log(res.data)
            }
            // axios.get('/position/lib/city-list@0.0.3/city_list.json').then(res=>               
            //     {
            //         console.log(res);
            //         commit('setCityInfor',res.data)
            //     }).catch(err=>{
            //         console.log(err);
            //     })

        },


    }
}