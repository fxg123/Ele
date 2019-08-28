import Vue from 'vue';


import VueRouter from 'vue-router'
Vue.use(VueRouter);

let router = new VueRouter({
   routes:[
       {path:'/',component:()=>import('../views/Home.vue')},
       {path:'/businessInfo:id',component:()=>import('../views/businessInfo.vue')},
       {path:'/Address',component:()=>import('../views/Address.vue')},
       {path:'/shippingAddress',component:()=>import('../views/shippingAddress.vue')},
       {path:'/find',component:()=>import('../views/find.vue')},
       {path:'/order',component:()=>import('../views/order.vue')},
       {path:'/me',component:()=>import('../views/me.vue')},
       {path:'/me/login',component:()=>import('../views/login.vue')},
       {path:'/me/userinfo',component:()=>import('../views/userinfo.vue')},
   ]
});


export default router;