<template>
  <div class="home">
    <div class="products">
      <div class="product" :class="{inBag : IsInBag(item)}" v-for="(item ,index) in products" :key="index">
        <div class="product-imag">
          <img :src="item.image">
        </div>
        <h4>{{ item.title }}</h4>
        <div class="price1">US$ {{ item.price }}</div>
        <button class="buttonAdd" v-if="!IsInBag(item)" @click="AddToBag(item)">Add to bag</button>
        <div
            v-else
            class="remove1"
            @click="removeFromBag(item.id )"
            >remove from bag
        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      NumberItem:1
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    productsInBag() {
      return this.$store.state.productsInBag
    },
  },
  methods: {
    AddToBag(item) {
      item.quantity = this.NumberItem++
      this.$store.dispatch('addToBag', item)
    },
    IsInBag(item) {
      return this.productsInBag.find(itemFromAxios => itemFromAxios.id === item.id)
    },
    removeFromBag(item ){
      this.$store.dispatch('removeFromBag' , item )
    }

  }


}
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  flex: 0 0 30%;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 4px;
}

img {
  max-width: 40%;
}

.buttonAdd {
  background-color: rgb(2, 83, 246);
  color: white;
  padding: 10px;
  border-radius: 1.9em;

  font-size: medium;
  border: none;
  cursor: pointer;
}

.price1 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
}

h4 {
  font-weight: lighter;
}

.remove1 {
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
}

.inBag {
  border: 1px solid blue;
}
</style>