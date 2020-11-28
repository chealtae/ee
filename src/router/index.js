import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Cart from '@/page/Cart'
import Details from '@/page/Details'
import Login from '../page/Login'
import Logon from '../page/Logon'



Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/logon',
		name: 'Logon',
		component: Logon,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
		meta: {
			isLogin: true
		}
	},
	{
		path:'/details/:id',
		name: 'Details',
		component: Details,
	}
  ]
});

