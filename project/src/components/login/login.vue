<template>
  <div id="login" v-show="state">
    <body class="overflow-hidden light-background">
    <div class="wrapper no-navigation preload">
      <div class="sign-in-wrapper">
        <div class="sign-in-inner">
          <div class="login-brand ">
            <strong class="text-skin">网页后台管理系统</strong>
          </div>
          <form>
            <div class="form-group m-bottom-md signgroup">
              <input
                type="text"
                class="form-control user"
                placeholder="admin"
                v-model="userName"
                @blur="userblur"
              >
            </div>
            <p>{{userNotice}}</p>
            <div class="form-group signgroup">
              <input
                type="password"
                class="form-control
                password"
                placeholder="admin"
                v-model="password"
                @blur="passblur"
              >
            </div>
            <p>{{passNotice}}</p>
            <div class="form-group ">
              <div class="custom-checkbox">
                <input type="checkbox" id="chkRemember">
                <label for="chkRemember"></label>
              </div>
              <span>记住密码</span>
              <span class="zc">
                <i class="el-icon-plus"></i><span @click="setlogin">注册</span>
              </span>
            </div>
            <div class="m-top-md p-top-sm">
                <button
                  type="button"
                  class="btn btn-success block"
                  id="signin"
                  @click="login"
                >登录</button>
            </div>
          </form>
        </div><!-- ./sign-in-inner -->
      </div><!-- ./sign-in-wrapper -->
    </div><!-- /wrapper -->
  </body>
  </div>
</template>
<script>
import setlogin from './setlogin'
export default {
  name: "login",
  data(){
    return{
      userNotice:'',
      passNotice:'',
      userName:'',
      password:'',
      state:true
    }
  },
  methods:{
    userblur(){
      if(this.userName==''){
        this.userNotice='*请输入用户名'
      }else{
        this.userNotice=''
      }
    },
    passblur(){
      if(this.password==''){
        this.passNotice='*请输入密码'
      }else{
        this.passNotice=''
      }
    },
    //登录
    login(){
      this.userblur();
      this.passblur();
      let loginMess = this.$store.state.loginMess;
      loginMess.forEach(e=>{
        // console.log(this.userName,e.userName);
        if(this.userName != '' && !(e.userName.includes(this.userName))){
          this.userNotice='*用户名不存在...注册一下带你飞'
        }else {
          this.userNotice = ''
          if(this.userName == e.userName){
            if(this.password == e.passWord){
              this.$store.state.login={
                userName:this.userName,
                passWord:this.password
              }
              localStorage.setItem('userData',JSON.stringify(this.$store.state.login));
              this.state=false;
              this.$router.push({path:'/home'})
            }
            if(this.password!= '' && this.password != e.passWord){
              this.passNotice='*密码不正确'
            }
          }
        }
      })
    },
    setlogin(){
      this.$router.push({path:'/setlogin'})
    }
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{name:'admin',pass:'admin'}];
}
</script>
<style  scoped>
body.light-background{
  width:100%;
  height:100%;
  position:absolute;
  z-index: 1000000;
  top:0;
}
.m-top-md{
  margin:0;
  padding:0;
}
.zc{
  margin-left:40%;
  cursor: pointer;
}
.zc:hover{
  background:#2baab1;
  color:#fff;
  border-radius: 2px;
}
.signgroup{
  height:40px;
}
.user,.password{
  height:45px;
}
#signin{
  margin-left:10%;
  line-height: 35px;
}
p{
  text-indent: 20px;
  color:red;
  font-size:12px;
}
</style>
