<template>
  <div>
    <button v-if="isAdding==false" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="button button-danger" @click="removeFromCart(product._id)"><i class="fa fa-trash"></i> Remove from Cart</button>

  </div>
</template>

<script>

  export default {
    props: ['product'],
    computed: {
      isAdding () {
        //console.log('this',this.product.id)
        console.log('that',this.$store.getters['p/cartById'](parseInt(this.product.id))==this.product)
        return  this.$store.getters['p/cartById'](parseInt(this.product.id))==this.product
      }
    },
    methods: {
      addToCart () {
        // this.$store.commit(ADD_TO_CART, this.product)
        console.log(this.product)
        this.$store.commit('p/saveCart',this.product)
      },
      removeFromCart () {
         this.$store.commit('p/removeCart', this.product.id)
      }
    }
  }
</script>