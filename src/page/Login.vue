<template>
    <div id="login">
        <my-header></my-header>
        <my-menu></my-menu>
        <div id="main_top"></div>
        <div id="main">
            <div class="cleaner">
            <table width="500" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                <td height="50">登陆名：</td>
                <td><input name="text4" type="text"  v-model="user.name" style="width:200px; height:25px" /></td>
                </tr>
                <tr>
                <td height="50">登陆密码：</td>
                <td><input name="text42" type="password" v-model="user.password" style="width:200px; height:25px" /></td>
                </tr>
                <tr>
                <td height="50" colspan="2" align="left"><input name="checkbox2" type="checkbox" />
                    安全控件登陆</td>
                </tr>
                <tr>
                <td height="50" colspan="2" align="center"><button @click="login">登录</button></td>
                </tr>
                <tr>
                <td height="50">&nbsp;</td>
                <td>&nbsp;</td>
                </tr>
            </table>
            </div>
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
    },
    data(){
        return {
            user:{name:'',password:''}
        }
    },
    methods:{
        login(){
            this.$store.dispatch('p/login',this.user)
        }
    },

    }

</script>
<style  scoped>
    #main_top{margin: 0 auto}
</style>