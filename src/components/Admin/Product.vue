<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>名称</th>
              <th>价格</th>
              <th>生产商</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key='product._id'>
              <td>{{product.name}}</td>
              <td>${{product.price}}</td>
              <td>{{ manu_name_byid(product._id) }}</td>
              <td>
                  <router-link :to="'/admin/edit/'+product._id">
                    <i class="fa fa-pencil-square-o"></i>
                  </router-link>
              </td>
              <td>
      <a @click="deleteProduct(product._id)" ><i class="fa fa-trash"></i></a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.getters['p/allProducts']
      },
      manufacturers () {
        return this.$store.getters['p/allManufacturers']
      },
    },
    created () {
    //   if (this.products.length === 0) {
    //     this.$store.dispatch('allProducts')
    //   }
    },
    methods: {
      deleteProduct (id) {
        this.$store.commit('p/removeProduct', id)
        //this.$store.dispatch('removeProduct', id)
      },
      manu_name_byid(id){
        let manus = this.$store.getters['p/allManufacturers']
        // console.log(manus)
        return manus.filter(manu=>manu._id==id)['name']  //find和filter有区别
      }
    }
  }
</script>

<style>
</style>