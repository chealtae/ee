<template>
  <div>
    <product-details :product="product"  ></product-details>
  </div>

</template>

<script>
  import ProductDetails from '../components/Products/ProductDetails'
  export default {
    created () {
      // if (!this.product.name) {
      //   this.$store.dispatch('p/productById', this.$route.params['id'])
      // }
    },
    computed: {
      product () {
        return this.$store.getters['p/productById'](parseInt(this.$route.params['id']))
      }
    },
    components: {
      'product-details': ProductDetails
    }
  }
</script>