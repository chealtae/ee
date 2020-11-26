<template>
  <div>
      <my-header></my-header>
      <my-menu></my-menu>
      <my-advert></my-advert>
      <my-main></my-main>
      <my-footer></my-footer>
      
  </div>
</template>

<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
import Advert from '../components/Advert'
import Main from '../components/Main'
import Footer from '../components/Footer'


  export default {
    name: 'home',
    components: {
      'my-header': Header,
      'my-menu': Menu,
      'my-advert':Advert,
      'my-main': Main,
      'my-footer': Footer,
    }
    
  }
</script>
