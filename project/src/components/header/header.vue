<template>
  <div id="vheader">
    <header class="top-nav">
      <div class="top-nav-inner">
        <div class="nav-header">
          <!--缩小页面后的button-->
          <button
            class="navbar-toggle pull-left sidebar-toggle"
            id="sidebarToggleSM"
            @click = "asideClick"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="javascript:;" class="brand">
            <i class="fa fa-database"></i><span class="brand-name">网页后台管理系统</span>
          </a>
        </div>
        <div class="nav-container">
          <!--放大版的button-->
          <button
            class="navbar-toggle pull-left sidebar-toggle"
            id="sidebarToggleLG"
            @click = "asideClick"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <ul class="nav-notification">
            <li class="search-list">
              <div class="search-input-wrapper">
                <div class="search-input">
                  <input type="text"
                    class="form-control
                    input-sm inline-block"
                    v-model="searchCon"
                    @keyup = "keyup"
                    @keyup.13 = "enterkeyup"
                  >
                  <a href="javascript:;" class="input-icon text-normal"><i class="ion-ios7-search-strong"></i></a>
                  <div class="searchList" v-show="searchstatus">
                    <ul >
                      <searchlist
                        v-for="(val,key) in searchData"
                        :pVal="val"
                        @changstatus = "pchangstatus"
                      ></searchlist>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="pull-right m-right-sm">
            <div class="user-block hidden-xs">
              <a href="javascript:;" id="userToggle" data-toggle="dropdown">
                <img src="./y.jpg" alt="" class="img-circle inline-block user-profile-pic">
                <div class="user-detail inline-block" @click="usershow">
                  {{pData.userName}}
                  <i class="icon iconfont icon-unfold"></i>
                </div>
              </a>
              <div class="panel border dropdown-menu user-panel" v-show="userStatus">
                <div class="panel-body paddingTB-sm">
                  <ul>
                    <li>
                      <a href="profile.html">
                        <i class="icon iconfont icon-wode"></i><span class="m-left-xs">我的信息</span>
                      </a>
                    </li>
                    <li>
                      <a  @click="edit">
                      <i class="icon iconfont icon-shezhi-xianxing"></i><span class="m-left-xs">设置</span>
                      </a>
                    </li>
                    <li>
                      <router-link to="/">
                        <i class="icon iconfont icon-zhuxiaoguanji"></i><span class="m-left-xs" @click="loginout">退出登录</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- ./top-nav-inner -->
    </header>
    <useredit @changedit='pchangedit' v-show="editStatus" :puserData = 'pData'></useredit>
  </div>
</template>

<script>
import $ from 'jquery'
import useredit from './edit'
import searchlist from './searchlist'
export default {
  name:'vheader',
  props: ['pData'],
  components: {
    useredit,
    searchlist
  },
  data(){
    return{
      asideshow:false,
      userStatus:false,
      editStatus:false,
      searchCon:'',
      searchData:[],
      searchstatus:false,
      searchurl:''
    }
  },
  methods:{
    asideClick(){
      let wraper = $('.wrapper')
      let aside = $('.sidebar-menu');
      let mainbox = $('.main-container');
      this.asideshow = !this.asideshow
      if(this.asideshow){
        aside.addClass('sidebar-mini')
        mainbox.addClass('sidebar-mini')
        wraper.addClass('display-left')
      }else{
        aside.removeClass('sidebar-mini')
        mainbox.removeClass('sidebar-mini')
        wraper.removeClass('display-left')
      }
    },
    usershow(){
      this.userStatus = !this.userStatus
    },
    loginout(){
      this.userStatus = false;
    },
    edit(){
      this.userStatus = false;
      this.editStatus = true;
      this.$router.push({path:'/useredit'});
    },
    pchangedit(){
      this.editStatus = false;
    },
    keyup(){
      let _this = this;
      this.searchstatus = true;
      $.ajax({
        dataType:'jsonp',
        url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?",
        data:{
          wd:_this.searchCon
        },
        success:function(data){
          _this.searchData = data.s.filter((e,i)=>i<4);
        }
      })
    },
    enterkeyup(){
      window.open("https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd="+this.searchCon+"&rsv_pq=e46af662000144de&rsv_t=05b5K0lgdbSwe3%2BQqeoROVFtJkgrU7K5RZxB91Ei751ROUdP15036F92MNU&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&prefixsug=s&rsp=0&inputT=4679&rsv_sug4=5258");
      this.searchstatus = false;
      this.searchCon = '';
    },
    pchangstatus(){
      alert(1)
      this.searchstatus = false;
      this.searchCon = '';
    }
  },
  computed:{
    nsearchData:function(){
      this.keyup();
      return this.searchData
    }
  }
}
</script>

<style scoped>
.search-input input:hover{
  width:250px;
}
.search-input input:focus{
  width:250px;
}
.searchList{
  position: absolute;
  top:30px;
  left:3px;
  height:auto;
  width:250px;
  background: rgba(230, 230, 250, 0.5);
  border:1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  transition:top 1s;
}

</style>
