<template>
    <div id="header">
        <div id="site_title"></div>
        <a name="top" id="top"></a>
        <div id="header_right">
            <ul id="language">
                <li><router-link to="/login">登录</router-link></li>
                <li><router-link to="/logon">注册</router-link></li>
                <li><router-link to="/cart">我的购物车</router-link></li>           
                <li><router-link to="/updatepw">修改密码</router-link></li>
            </ul>
            <div class="cleaner"></div>
            <div id="search">
                <form action="html/products.html" method="get">
                  <input type="text" value="搜索宝贝" name="keyword" id="keyword" title="keyword" onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                  <input type="submit" name="Search" value="" alt="Search" id="searchbutton" title="Search" class="sub_btn"  />
              </form>
            </div>
      </div> 
    </div>
</template>
<script>
export default {
  name: 'header',
  components: {
  }
}
</script>

<style scoped>
  #header{margin: 0 auto;}
</style>