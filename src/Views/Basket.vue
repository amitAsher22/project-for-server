<template>
<div class="basket">
  <div class="items">
    <div class="item" v-for="(itemProduct , index) in this.productsInBag" :key="index">
      <div class="remove">Remove item </div>
      <div class="photo">
        <img :src="itemProduct .image">
      </div>
      <div class="description">{{itemProduct.title}}  </div>
      <div class="price">
        <span class="area">
          <button  disabled="" @click="itemProduct.quantity--">-</button>
          <span class="quantity">{{itemProduct.quantity}}</span>
            <button @click="itemProduct.quantity++" >+</button>
        </span>
        <span class="amount">US$ {{ (itemProduct.price * itemProduct.quantity).toFixed(2)}}</span>
      </div>
    </div>
    <div class="grand-total">Grand Total: US$ 22.30 </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Basket",
  computed: mapState(['productsInBag']),




}
</script>

<style scoped>
.basket{
  padding: 60px 0 ;
}
.items{
 max-width: 800px;
  margin:auto;
}
.item{
  display: flex;
  justify-content:space-between;
  padding: 40px 0;
  border-bottom: 1px solid lightgrey;
  position: relative;
}
.remove{
  position: absolute;
  top: 8px;
  right: 0;
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
}
.area{
  margin: 8px auto;
  height: 14px;
}
botton{
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.quantity{
  margin: 0 4px;
}
img{
  max-width: 80px;
}
.description{
  padding-left: 30px;
  box-sizing: border-box;
  max-width: 50%;
}
.grand-total{
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  margin-top: 8px;
}
</style>