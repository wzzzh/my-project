<template>
  <div id="vaside">
    <!--缩小后sidebar-mini-->
    <aside class="sidebar-menu fixed">
      <div class="sidebar-inner scrollable-sidebar">
        <div class="main-menu">
          <ul class="accordion">
            <li class="menu-header">
              <span class="menu-icon"><i class="icon iconfont icon-barrage"></i></span>
              菜单列表
            </li>
            <li class="bg-palette1 active">
              <a href="javascript:;">
                <span class="menu-content block">
                  <span class="menu-icon"><i class="icon iconfont icon-shouye"></i></span>
                  <span class="text m-left-sm">首页</span>
                </span>
                <span class="menu-content-hover block">
                  首页
                </span>
              </a>
            </li>
            <li class="openable bg-palette3" @click="baseTab1">
              <a href="javascript:;">
                <span class="menu-content block">
                  <span class="menu-icon"><i class="icon iconfont icon-danju-xianxing"></i></span>
                  <span class="text m-left-sm">基本设置</span>
                </span>
                <span class="menu-content-hover block">
                  基本设置
                </span>
              </a>
              <ul class="submenu bg-palette4 " v-show="baseshow">
                <li><a href="webPage.html" target="right"><span class="submenu-label">网站设置</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
                <li><a href="singlePage.html"><span class="submenu-label">单页管理</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
                <li><a href="homeTab.html"><span class="submenu-label">首页轮播</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
                <li><a href="brog.html"><span class="submenu-label">留言管理</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
              </ul>
            </li>
            <li class="openable bg-palette2" @click="baseTab2">
              <a href="javascript:;">
                <span class="menu-content block">
                  <span class="menu-icon"><i class="icon iconfont icon-wodedingdan"></i></span>
                  <span class="text m-left-sm">栏目管理</span>
                  <span class="submenu-icon"></span>
                </span>
                <span class="menu-content-hover block">
                  栏目设置
                </span>
              </a>
              <ul class="submenu" v-show="colwnshow">
                <li><a href="ui_element.html"><span class="submenu-label">内容管理</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
                <li><a href="button.html"><span class="submenu-label">添加内容</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
                <li><a href="widget.html"><span class="submenu-label">分类管理</span><span class="submenu-icon"><i class="icon iconfont icon-enter"></i></span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div><!-- aside-inner -->
    </aside>
  </div>
</template>
<script>
export default {
  name:'vaside',
  data:()=>({
    baseshow:false,
    colwnshow:false
  }),
  methods:{
    baseTab1(){
      this.baseshow = !this.baseshow
    },
    baseTab2(){
      this.colwnshow = !this.colwnshow
    }
  }
}
</script>
<style  scoped>
.sidebar-menu .main-menu ul li.menu-header{
	border-left: 0;
	display: block;
	text-align: center;
	font-size: 16px;
}
.sidebar-menu .main-menu ul li .submenu li a .submenu-label{
	padding-left:40px;
}
.design{
	padding:20px 20px;
}
label{
	width: 100px;
	padding-top:7px;
	padding-right: 10px;
	text-align: right;
	float: left;
}
.form-control{
	width: 80%;
	float: left;
}
#inputSuccess2{
	width:50%;
}
#btn-chat1{
	width:80px;
	height: 34px;
	margin-left: 20px;
	font-size:14px;
}
.smart-widget.widget-dark-blue .smart-widget-header{
	margin-bottom: 15px;
}
.btn.btn-success{
	width:200px;
	height: 50px;
	margin-left: 30%;
	font-size:18px;
}
.sidebar-menu .main-menu ul li a .submenu-icon:before{
	content: '';
}
.iconfont {
	line-height: 16px;
}
</style>
