<template>
  <div>
    <div class="title">
      <template v-for="product in cart">
      <product-details :product="product" :key="product.id" :isAdding=false></product-details>
      
      </template>
    </div>
  </div>
</template>

<script>
import ProductDetails from './Products/ProductDetails'

  export default {
    name: 'home',
    created () {
      if (this.cart.length === 0) {
        this.$store.dispatch('p/allProducts')
      }
    },
    computed:{
      cart(){
        return this.$store.getters['p/allcart']
      }
    },
    components: {
      productDetails: ProductDetails,
    }
  }
  
</script>