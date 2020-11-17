import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'
import Index from '@/components/Admin/Index'
import Edit from '@/components/Admin/Edit'
import New from '@/components/Admin/New'
import Product from '@/components/Admin/Product'
import Vuex from '@/components/Vuex'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home
    },
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},
	{
		path:'/details/:id',
		name: 'Details',
		component: Details	
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Index,
		children:[
			{
				path: 'new',
				name: 'New',
				component: New
			},
			{
				path: '/',
				name: 'Product',
				component: Product
			},
			{
				path: 'edit/:id',
				name: 'Edit',
				component: Edit
			}
		]
	},
	{
		path: '/vuex',
		name: 'Vuex',
		component: Vuex
	},

  ]
});