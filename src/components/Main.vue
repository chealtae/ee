<template>
    <div id="main">
        
        <div id="sidebar">
            <h3>宝贝分类</h3>
            <ul class="sidebar_menu">
                <li><a href="html/products.html">新品热卖</a></li>
                <li><a href="#">当季热卖</a></li>	
				<ul>
				<li><a href="#">面霜</a></li>
				<li><a href="#">护手霜</a></li>
				<li><a href="#">唇膏</a></li>
				<li><a href="#">身体乳</a></li>
				<li><a href="#">BB霜</a></li>
				
				</ul>			
                <li><a href="#">iope雪花秀</a></li>
                <li><a href="#">laneige兰芝</a></li>
                <li><a href="#">espoir</a></li>
                <li><a href="#">悦诗风吟</a></li>     
                <li><a href="#">爱丽小屋</a></li>				
            </ul>
            <table width="100%" border="0">
              <tr>
                <td><h3>热销宝贝</h3>                  <a href="html/p0.html" ><img src="images/gallery/01.jpg" width="60" height="60" align="left" />正品 tonymoly 魔法森林蜗牛面膜贴 美白保湿 祛<br />
                  ¥25.00<br />
                  已收藏7672笔</a></td>
              </tr>
              <tr>
                <td><a href="#"></a> </td>
              </tr>
              <tr>
                <td><img src="images/gallery/02.jpg" width="60" height="60" align="left" /><a href="html/p0.html">现货 正品 LANEIGE兰芝新概念BB水凝霜 气垫粉<br />
                  ¥120.00<br />
                  已收藏5287笔</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><img src="images/gallery/03.jpg" width="60" height="50" align="left" /><a href="html/p0.html">现货 HOT&amp;FACE 小V脸瘦脸提拉紧致去水肿面膜<br />
                  ¥48.00<br />
                  已收藏4581笔<br />
                </a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
             
            </table>
            <h3>搜索宝贝</h3>
            <div id="newsletter"> <form action="html/products.html" method="get">
                  <input type="text" value="输入宝贝名称" name="email_newsletter" id="email_newsletter" title="email_newsletter" onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                  <input type="submit" name="subscribe" value="搜索" alt="Subscribe" id="subscribebtn" title="Subscribe" class="subscribebtn"  />
                </form>
                <div class="cleaner"></div>
            </div>
        </div> 
        <div id="content">
            <product-list></product-list>   
        </div>
      
     <!-- END of content -->
        <div class="cleaner"></div>
    </div> <!-- END of main -->
</template>
<script>
import ProductList from '../components/Products/ProductList'
export default {
    name:'main',
    components: {
      'product-list': ProductList
    }
}

</script>
<style >
 #main{margin: 0 auto; }

</style>