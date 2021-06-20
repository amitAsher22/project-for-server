<template>
  <div class="basket">
    <div class="items">
      <div class="item" v-for="(itemProduct , index) in this.productsInBag" :key="index">
        <div class="remove">Remove item</div>
        <div class="photo">
          <img :src="itemProduct .image">
        </div>
        <div class="description">{{ itemProduct.title }}</div>
        <div class="price">
        <span class="area">
          <button disabled="" @click="itemProduct.quantity--">-</button>
          <span class="quantity">{{ itemProduct.quantity }}</span>
            <button @click="itemProduct.quantity++">+</button>
        </span>
          <span class="amount">US$ {{ (itemProduct.price * itemProduct.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <div class="grand-total">Grand Total: US$ 22.30</div>
    </div>
    <div>
      <button class="cheackOut" @click="checkout()">checkOut to server</button>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from "axios";

export default {
  name: "Basket",
  computed: mapState(['productsInBag']),
  data(){
    return{
      productsFromMyBag:this.productsInBag
    }
  },
  methods: {
  async checkout() {
    console.log("nir" ,this.productsInBag)
    const res = await axios.post('http://localhost:3000/checkout', {products:this.productsInBag});
     // res = {"total": 322.52}
    updateDisplay(res);
    },

  },

}
</script>

<style scoped>
.basket {
  padding: 60px 0;
}

.items {
  max-width: 800px;
  margin: auto;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid lightgrey;
  position: relative;
}

.remove {
  position: absolute;
  top: 8px;
  right: 0;
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
}

.area {
  margin: 8px auto;
  height: 14px;
}

botton {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.quantity {
  margin: 0 4px;
}

img {
  max-width: 80px;
}

.description {
  padding-left: 30px;
  box-sizing: border-box;
  max-width: 50%;
}

.grand-total {
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  margin-top: 8px;
}

.cheackOut {
  padding: 1.5em;
  font-size: 15px;
  border: none;
  border-radius: 30px;
  color: #7fcbef;
  background-color: black;;
}

.cheackOut:hover {
  background-color: #7fcbef;
  color: black;

}
</style>
