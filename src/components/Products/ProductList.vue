<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" :key="product._id" ></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('p/allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters['p/allProducts']
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>