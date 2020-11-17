<template>
  <product-form
    @update-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true" ></product-form>
</template>

<script>
  import ProductFrom from '@/components/Products/ProductForm'
  export default {
    created () {
    //   if (!this.model.name) {
    //     console.log('dispatched')
    //     this.$store.dispatch('productById', this.$route.params['id'])
    //   }
    //   if (this.manufacturers.length === 0) {
    //     this.$store.dispatch('allManufacturers')
    //   }
    },
    computed: {
      manufacturers () {
        return this.$store.getters['p/allManufacturers']
      },
      model () {
        const productById = this.$store.getters['p/productById'](parseInt(this.$route.params['id']))
        //console.log(productById)
        return Object.assign({}, productById)
      }
    },
    methods: {
      updateProduct (model) {
        console.log('model', model)
        this.$store.commit('p/updateProduct', model)

        //this.$store.dispatch('updateProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>

<style>
</style>