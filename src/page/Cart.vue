<template>
    <div id="cart">
        <my-header></my-header>
        <my-menu></my-menu>
                    <div id="content1">
          <table width="100%" cellspacing="0" cellpadding="5">
            <tr bgcolor="#CCCCCC">
              <th width="220" align="left">宝贝图片</th>
              <th width="180" align="left">宝贝详情</th>
              <th width="100" align="center">数量</th>
              <th width="60" align="right">单价 </th>
              <th width="60" align="right">共计</th>
              <th width="90"> </th>
            </tr>
          </table>
          
        <template v-for="product in cart">
                <product-cart :product="product" :key="product.id" ></product-cart>
                </template>
            <table>
                <tr>
              <td colspan="3" align="right"  height="40px">&nbsp;</td>
              <td align="right" style="background:#ccc; font-weight:bold"> 总计 </td>
              <td align="right" style="background:#ccc; font-weight:bold"><span class="product_price">{{sum}}</span></td>
              <td style="background:#ccc; font-weight:bold"></td>   

                </tr>
            </table>
        <div style="float:right; width: 100px; margin-top: 20px;">
            <div class="checkout"><a href="#" class="more"> 结算</a></div>
            <div class="cleaner h20"></div>
            <div class="continueshopping"><a href="javascript:history.back()" class="more">继续购物</a></div>
          </div>
        </div>
        <!-- <my-footer></my-footer> -->
    </div>
</template>
<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
// import Footer from '../components/Footer'
import ProductCart from '../components/Products/ProductCart'

export default {
  name: 'Cart',
  components: {
    'my-header' : Header,
    'my-menu': Menu,
    // 'my-footer':Footer,
    'product-cart':ProductCart,
  },
  created () {
      if (this.cart.length === 0) {
        this.$store.dispatch('p/allCart')
      }
    },
    computed:{
      cart(){
        return this.$store.getters['p/allCart']
      },
      sum(){
          var sum = 0;
          for(var i in this.cart){
              sum+= this.cart[i].price;
          }
          return sum;
      }
    }
    

  
}
</script>
<style>
#content1{margin: 0 auto ; width: 1000px;}
</style>