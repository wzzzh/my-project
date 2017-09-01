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
                  <input type="text" class="form-control input-sm inline-block">
                  <a href="javascript:;" class="input-icon text-normal"><i class="ion-ios7-search-strong"></i></a>
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
export default {
  name:'vheader',
  props: ['pData'],
  components: {
    useredit
  },
  data(){
    return{
      asideshow:false,
      userStatus:false,
      editStatus:false,
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
    }
  },
}
</script>

<style scoped>

</style>
