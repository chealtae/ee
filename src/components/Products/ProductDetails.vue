<template>
  <div class="product-details">
    <my-header></my-header>
    <my-menu></my-menu>
    <div id="main">
      <div id="sidebar">
        <h3>宝贝分类</h3>
            <ul class="sidebar_menu">
              <li><a href="#">新品热卖</a></li>
              <li><a href="#">当季热卖</a></li>	
                <ul>
				<li><a href="#">面霜</a></li>
				<li><a href="#">护手霜</a></li>
				<li><a href="#">唇膏</a></li>
				<li><a href="#">身体乳</a></li>
				<li><a href="#">BB霜</a></li>
        </ul>		
                <li><a href="#">iope雪花秀</a><a href="#"></a></li>
                <li><a href="#">laneige兰芝</a><a href="#"></a></li>				
                <li><a href="#">espoir</a><a href="#"></a></li>
              <li><a href="#">悦诗风吟</a><a href="#"></a></li>     
                <li><a href="#">爱丽小屋</a></li>				
            </ul>
            <h3>热销宝贝</h3>
            <table width="100%" border="0">
              <tr>
                <td><a href="#" ><img src="../../../public/images/gallery/01.jpg" width="60" height="60" align="left" />正品 tonymoly 魔法森林蜗牛面膜贴 美白保湿 祛<br />
                ¥25.00<br />
                已收藏7672笔</a></td>
              </tr>
              <tr>
                <td><a href="#"></a> </td>
              </tr>
              <tr>
                <td><img src="../../../public/images/gallery/02.jpg" width="60" height="60" align="left" /><a href="#">现货 正品 LANEIGE兰芝新概念BB水凝霜 气垫粉<br />
¥120.00<br />
已收藏5287笔</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><img src="../../../public/images/gallery/04.jpg" width="60" height="60" align="left" /><a href="#">现货 韩国代购正品 雪花秀 滋阴水 乳液125ml两<br />
                ¥579.00<br />
                已收藏3388笔</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><img src="../../../public/images/gallery/05.jpg" width="60" height="60" align="left" /><a href="#">韩国代购正品 missha 谜尚迷尚 幻金凝彩完美抗<br />
                ¥148.00<br />
                已收藏2743笔</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><img src="../../../public/images/gallery/06.jpg" width="60" height="60" align="left" /><a href="#">5片包邮 韩国Tonymoly魔法森林 蛇毒精华抗皱保<br />
¥27.00<br />
已收藏2103笔</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><img src="../../../public/images/gallery/07.jpg" width="60" height="60" align="left" />
                  <p><a href="#">3只包邮 代购正品 peripera 猫女染色液体<br />
                  ¥45.00<br />
                已收藏1858笔</a></p>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
            </table>
            <h3>搜索宝贝</h3>
            <div id="newsletter">
                <form action="products.html" method="get">
                  <input type="text" value="输入宝贝名称" name="email_newsletter" id="email_newsletter" title="email_newsletter" onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                  <input type="submit" name="subscribe" value="搜索" alt="Subscribe" id="subscribebtn" title="Subscribe" class="subscribebtn"  />
              </form>
                <div class="cleaner"></div>
            </div>
      </div> 
        
        <div id="content">
          <table width="100%" border="0" align="center" cellpadding="10" cellspacing="1" bgcolor="#CCCCCC">
            <tr>
              <td width="52%" bgcolor="#FFFFFF"><div id="preview">
                <div id="spec-n5">
                    <div class="control" id="spec-left"> <img :src="product.img" width="95%" height="100%" /> </div>
                  <div id="spec-list">
                    <div style="position:relative;overflow:hidden;z-index:1;width:300px;height:56px;">
                      <ul class="list-h" style="width: 350px; overflow: hidden; position: absolute; left: 0px; top: 0px; margin-top: 0px; margin-left: 10px;">
                      </ul>
                    </div>
                  </div>
                </div>
              </div></td>
              <td width="48%" valign="top" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td height="35" colspan="2" align="left"><strong>{{product.goodsName}}</strong></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">{{product.price}}</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">会员价：<span class="STYLE5">{{product.price-20}}
                        <label>元</label>
                    </span>                      <strong>
                    <label></label>
                    </strong>                    <label></label></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">深圳 |至 首尔华 快递: 25 </td>
                    <td rowspan="2">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">30天售出：<span class="STYLE3">304</span>件</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">产品颜色：
                      <select name="select3">
                          <option value="1">粉色</option>
                          <option value="3">红色</option>
                          <option value="2">黑色</option>
                          <option value="4">蓝色</option>
                      </select></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2">评价：4.8分|449条评价</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35"></td>
                    <td>
                        购买数量：
                        <label>
                        <input name="textarea" type="text" value="" size="5" />
                        件</label></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="35" colspan="2"><label><button  class="button" > 点击购买</button>
                    <!-- 在这里加入购物车连接 -->
                    <!-- <product-button :product="product" :isShow=true ></product-button> -->
                    <button  class="button" @click="addToCart"> 加入购物车</button></label></td>
                    <td>&nbsp;</td>
                  </tr>
              </table></td>
            </tr>
          </table>
          <p>&nbsp;</p>
          <table width="100%" border="0" cellpadding="10" cellspacing="1" bgcolor="#CCCCCC">
            <tr>
              <td width="33%" align="center" bgcolor="#EEEEEE">宝贝详情</td>
              <td width="33%" align="center" bgcolor="#EEEEEE">宝贝评价</td>
              <td width="33%" align="center" bgcolor="#EEEEEE">宝贝成交</td>
            </tr>
            <tr>
              <td colspan="3" bgcolor="#FFFFFF">
                <div>{{product.introduce}}</div>
              </td>
            </tr>
          </table>
          <p>&nbsp;</p>       	
      </div> <!-- END of content -->
        <div class="cleaner"></div>
  </div> <!-- END of main -->
  </div>
</template>

<script>
import Header from '../Header'
import Menu from '../Menu'
// import ProductButton from './ProductButton'
  export default {
    props: ['product'],
    components: {
      'my-header':Header,
      'my-menu':Menu,
      // 'product-button': ProductButton,
    },
     methods: {
      addToCart () {
        // this.$store.commit(ADD_TO_CART, this.product)
        console.log(this.product)
        this.$store.commit('p/saveCart',this.product)
      },
     }
  }
</script>
<style scoped>
  /* #content{float: left;} */
</style>