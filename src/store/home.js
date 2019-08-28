import axios from 'axios';

export default {
    state: {
        swipes:[],
        business:[],
        businessinfo:[],
        shopID:''
    },
    getters: {
        swipes: state => state.swipes,
        business:state => state.business,
        businessinfo:state=>state.businessinfo,

    },
    mutations: {
        setSwipe(state, swipelist) {
            state.swipes = swipelist;
        },
        setbusiness(state, value){
            state.business = value;
        },
        setbusinessinfo(state,value){
            state.user_id = value;
            state.businessinfo=value;
        },
        SET_SHOPID(state,shopID){
            state.shopID=shopID
        }
    },
    actions: {
        //轮播
        async swipe({commit}) {
            let res = await axios.get('/el/restapi/shopping/v2/entries?latitude=32.0583&longitude=118.7964&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5', {
                params: {
                    
                }
            });
            if(res.status  == 200){
               commit('setSwipe',res.data[0].entries); 
            //    console.log(res.data);
            //    console.log(res.data[0].entries);
            }  
        },
        //商家列表
        async getbusiness_list({commit}){
            await axios.get('/el/restapi/shopping/v3/restaurants?latitude=31.934154&longitude=118.642775&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5').then(res=>{
                if(res.status == 200){
                    commit('setbusiness',res.data.items)
                    // console.log(res.data);
                    console.log(res.data.items);
                    // console.log(res.data.items[0].restaurant);
                    // console.log(res.data.items[0].restaurant.activities);
                }
            }).catch(err=>{
                console.log(err);  
            })
        },
        // 商家详情
        // /el/pizza/shopping/restaurants/E15713981523181264387/batch_shop?user_id=516552666
        async getbusiness_info({commit,state}){
            await axios.get(`/el/pizza/shopping/restaurants/${state.shopID}/batch_shop?user_id=${localStorage.user_id}&code=0.30510904836452735&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=31.84178&longitude=118.504669`)
            .then(res=>{
                
                    commit('setbusinessinfo',res.data)
                    console.log(res.data);
                
            }).catch(err=>{
                console.log(err);
                
            })
        }
    }
}