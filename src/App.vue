<template>
  <div id="nav">
    <div class="navBar">
      <router-link to="/" exact >Home</router-link> -
      <router-link to="/basket">Shopping bag ({{this.productsInBag.length}})</router-link>
    </div>
    <router-view/>
  </div>


</template>

<script>



export default {
  name: 'App',
  created() {
    this.$store.dispatch('getProducts1')

  },
  computed:{
    productsInBag() {
      return this.$store.state.productsInBag
    }
  }


}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family:'Raleway', sans-serif;
}
#nav{
 text-align: center;

}
.navBar{
  margin-bottom: 20px;
  background-color: black;
  padding: 10px 0;
  color: white;

}
a{
  color: white;
  text-decoration: none;
  cursor: pointer;
}
a.router-link-active{
  color: rgb(2, 83, 246);
  font-size: 18px;
}




</style>
