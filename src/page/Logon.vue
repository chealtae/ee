<template>
    <div id="logon">
        <my-header></my-header>
        <my-menu></my-menu>
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
                <td colspan="2"><input name="text4" id="username" type="text" v-model="logon.username" style="width:300px; margin-top:10px" /></td>
              </tr>
              <tr>
                <td></td>
                <td><span id="username_span">6-18个字符，可使用字母数字下划线，需要以字母开头</span></td>
              </tr>
              <tr>
                <td>登陆密码：</td>
                <td colspan="2"><input name="text5" type="password" id="password" v-model="logon.password" style="width:300px; margin-top:10px" /></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div class="testCode">弱</div>
                  <div class="testCode">中</div>
                  <div class="testCode">强</div></td>
              </tr>
              <tr>
                <td height="69">确认密码
            ：</td>
                <td colspan="2"><input name="text6" type="password" id="password1" style="width:300px;margin-top:10px" /></td>
              </tr>
              <tr>
                <td></td>
                <td><span id="password_span"></span></td>
              </tr>
              <tr>
                <td colspan="3">&nbsp;</td>
              </tr>
            </table>
          </div>
          <table width="100%" align="right">
            <tr>
              <td height="80"><button @click="Logon"> 同意并注册</button></td>
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
    name: 'Logon',
    components: {
    'my-header' : Header,
    'my-menu': Menu,
    'my-footer':Footer
  },
  created(){
    
  },
  data(){
    return {
      logon:{username:'',password:''}}

  },
  methods:{
        Logon(){
          console.log(this.logon)
            this.$store.dispatch('p/logon',this.logon)
        }
    },
  
}
 window.onload = function(){
    var oUsername = document.getElementById("username");
    var oPassword = document.getElementById("password");
    var oPassword1 = document.getElementById("password1");
    var oUsername_span = document.getElementById("username_span");
    var oPassword_span = document.getElementById("password_span");
    var oDiv1 = document.getElementById("content");
    var oDivs = oDiv1.getElementsByClassName("testCode")

    oUsername.onblur = function(){
      var oValue = oUsername.value;
      //判断长度
      if(oValue.length <= 6 || oValue.length > 18 ){
        oUsername_span.innerHTML = '长度应该是6到18个字符';
        oUsername_span.style.color = 'red';
      } 
      //判断首字符
      else if(!/[a-zA-Z]/.test(oValue[0])){
        oUsername_span.innerHTML = '首字母应该是字母';
        oUsername_span.style.color = 'red';
      }
      else if (/\W/.test(oValue)){
        oUsername_span.innerHTML = '必须由字母数字下划线组成';
        oUsername_span.style.color = 'red';
      }
      else{
        oUsername_span.innerHTML = '该用户名可注册';
        oUsername_span.style.color = 'green';
      }
    }

    oPassword.onkeyup = function(){
        var oValue = this.value;
        for (var i =0; i < oDivs.length; i++){
            oDivs[i].style.backgroundColor = "grey";
        }  
        if(oValue.length >= 6 ){
          //开始强度验证
          if(/^\d+$/.test(oValue) || (/^[a-z]+$/).test(oValue) || (/^[A-Z]+ $/).test(oValue)){
              oDivs[0].style.backgroundColor = "orange";
          }else if(/\d+/.test(oValue) && (/[a-z]+/).test(oValue) && (/[A-Z]/).test(oValue)){
              oDivs[2].style.backgroundColor = "orange";
          }else{
              oDivs[1].style.backgroundColor = "orange";
          }
        }   
      }
      oPassword1.onblur = function(){
        var oValue = oPassword.value;
        var oValue1 = this.value;
        if(oValue!==oValue1){
          oPassword_span.innerHTML = "两次密码输入不一致";
          oPassword_span.style.color = 'red'
        }else{
          oPassword_span.innerHTML = ""
        }
      }
  }
  
</script>
<style >
.testCode{width: 70px; height: 30px; line-height: 30px; background-color:grey; color: wheat; float: left;
         margin-left: 10px; margin-top: 5px;}
</style>