<template>
  <div id="app">
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href=" ">我的网站</a>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/cart">购物车</router-link></li>
        <li><router-link to="/admin">管理员</router-link></li>
        <li><router-link to="/vuex">vuex</router-link></li>
        </ul>
      </div>
    </nav>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  //...
};
</script>
