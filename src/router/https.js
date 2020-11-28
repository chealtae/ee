import { get } from 'core-js/fn/dict';
import router from './index';

router.beforeEach((to, from, next) => {
    let getFlag = localStorage.getItem("Flag");
    console.log("经过守卫了")
	if(getFlag ==="islogin"){
        console.log("经过守卫了1")
		next();
	}else{
		if(to.meta.isLogin){
			next({path:'/login'})
		}else{
			next()
		}
	}

})