import Vue from "vue";
import Router from 'vue-router'
import Home from "@/Views/Home";
import Basket from "@/Views/Basket";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/basket',
            name:'Basket',
            component:Basket
        },

    ]
})