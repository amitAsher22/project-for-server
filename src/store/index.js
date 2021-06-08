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
        getProducts1({commit}) {
            axios.get('https://fakestoreapi.com/products')
                .then(res => {
                    commit('test', res.data)
                })
        },
        addToBag({commit}, product) {
            commit('addToBag', product)
        },
        removeFromBag({commit}, productId ) {
            if(confirm("are you sure you want to remove item from bag ?")){
                commit('removeBag', productId )
            }

        },
        checkout({commit}) {
            axios.post('http://localhost:3000/checkout', {})
                .then(res => {
                    commit('test', res.data)
                })
        },


    },

})

