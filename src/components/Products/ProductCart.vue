<template>
            <div id="cart1">
                <table width="100%" cellspacing="0" cellpadding="5">
            <tr bgcolor="#CCCCCC">
              <th width="220" align="left"></th>
              <th width="180" align="left"></th>
              <th width="100" align="center"></th>
              <th width="60" align="right"> </th>
              <th width="60" align="right"></th>
              <th width="90"> </th>
            </tr>
            <tr>
                <td>
                    <img :src="product.img" alt="image 01" />
                </td>
                <td>
                    {{product.goodsName}}
                </td>
                <td>
                    <input name="text" type="text" style="width: 20px; text-align: right ;" value="1" />
                </td>
                <td>
                    <span class="product_price">{{product.price}}</span>
                </td>
                <td>
                    <span class="product_price">{{product.price}}</span>
                </td>
                <td>
                    <button @click="removeFromCart(product._id)"><i class="fa fa-trash"></i> 删除</button>
                </td>
            </tr>
          </table>
              
        </div>
</template>
<script>
export default {
    name:'ProductCart',
    props:['product'],
    components:{

    },
    methods: {
      removeFromCart () {
         this.$store.commit('p/removeCart', this.product.id)
      }
    }
}
</script>
<style>
#cart1{width: 100%;}

</style>