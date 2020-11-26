<template>
    <div id="logon">
        <my-header></my-header>
        <my-menu></my-menu>
        <div id="main_top"></div>
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
            <h3>搜索宝贝</h3>
            <div id="newsletter"> <form action="products.html" method="get">
                  <input type="text" value="输入宝贝名称" name="email_newsletter" id="email_newsletter" title="email_newsletter" onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                  <input type="submit" name="subscribe" value="搜索" alt="Subscribe" id="subscribebtn" title="Subscribe" class="subscribebtn"  />
                </form>
                <div class="cleaner"></div>
            </div>
      </div> 
        
        <div id="content">
          <h2>注册</h2>
          <h5><strong>填写账户信息</strong></h5>
          <div class="col col_13 checkout"> 
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td>会员名：</td>
                <td colspan="2"><input name="text4" type="text"  style="width:300px;" /></td>
              </tr>
              <tr>
                <td>
登陆密码：</td>
                <td colspan="2"><input name="text5" type="password"  style="width:300px;" /></td>
              </tr>
              <tr>
                <td height="69">确认密码
            ：</td>
                <td colspan="2"><input name="text6" type="password"  style="width:300px;" /></td>
              </tr>
              <tr>
                <td>验证码：</td>
                <td><input name="text7" type="text"  style="width:100px;" /></td>
                <td><img src="../../public/images/yz.jpg" width="150" height="36" /></td>
              </tr>
              <tr>
                <td colspan="3">&nbsp;</td>
              </tr>
            </table>
          </div>
          <table width="100%" align="right">
            <tr>
              <td height="80"><a href="#" class="more">同意协议并注册</a></td>
            </tr>
          </table>
        </div>
        <!-- END of content -->
        <div class="cleaner"></div>
  </div> 
  <my-footer></my-footer>
    </div>
</template>
<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
export default {
    name: 'Login',
    components: {
    'my-header' : Header,
    'my-menu': Menu,
    'my-footer':Footer
    
  }
}
</script>
<style lang="stylus">

</style>