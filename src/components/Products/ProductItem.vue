<template>
    <div class="product-item">
    <div class="product">
      <router-link :to="'/details/'+product.id" class="product-link">
       <div class="col col_8 product_gallery">
                <a><img :src="product.img" alt="" border="0" /></a>
                <h3>{{product.goodsName}}<br /></h3>
                <p class="product_price">{{product.price }}<br /></p>
          <a href="html/shoppingcart.html" class="add_to_cart"></a>
        </div>
      </router-link>
      <div class="product__action">
        <!-- <product-button :product="product" ></product-button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'product-item',
    props:['product'],
}
</script>
<style scoped>
.product-item{width:226px ; height: 310px; float: left;}
</style>