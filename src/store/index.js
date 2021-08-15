import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: 'loading...',
        productsInBag: [],
    },
    mutations: {
        test(state, products) {
            state.products = products
        },
        addToBag(state, product) {
            state.productsInBag.push(product)
        },
        removeBag(state, productId ) {
                let update = state.productsInBag.filter(item => productId != item.id )
                state.productsInBag = update


        }

    },
    actions: {
        async getProducts1({commit}) {
            const res = await  axios.get('https://fakestoreapi.com/products');
            commit('test', res.data);
        },
        addToBag({commit}, product) {
            commit('addToBag', product)
        },
        removeFromBag({commit}, productId ) {
            if(confirm("are you sure you want to remove item from bag ?")){
                commit('removeBag', productId )
            }

        },



    },

})

