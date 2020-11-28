import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Cart from '@/page/Cart'
import Details from '@/page/Details'
import Login from '../page/Login'
import Logon from '../page/Logon'



Vue.use(Router)

const router =  new Router({
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

router.beforeEach((to, from, next) => {
    let getFlag = localStorage.getItem("Flag");
	if(getFlag ==="islogin"){//如果登录状态是登录，无需拦截
		next();
	}else{
		if(to.meta.isLogin ){//如果需要先登录 跳转到登录界面
			next({path:'/login'})
		}else{
			next()
		}
	}

});

export default router