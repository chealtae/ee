<template>
  <div>
      <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '../components/Products/ProductList'
  export default {
    name: 'home',
    components: {
      'product-list': ProductList
    }
    
  }
</script>
