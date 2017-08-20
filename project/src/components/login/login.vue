<template>
  <div id="login">
    <body class="overflow-hidden light-background">
    <div class="wrapper no-navigation preload">
      <div class="sign-in-wrapper">
        <div class="sign-in-inner">
          <div class="login-brand ">
            <i class="fa fa-database m-right-xs"></i><strong class="text-skin">网页后台管理系统</strong>
          </div>

          <form>
            <div class="form-group m-bottom-md signgroup">
              <input type="text" class="form-control user" placeholder="请输入管理员名称">
            </div>
            <div class="form-group signgroup">
              <input type="password" class="form-control password" placeholder="请输入密码">
            </div>

            <div class="form-group signgroup">
              <div class="custom-checkbox">
                <input type="checkbox" id="chkRemember">
                <label for="chkRemember"></label>
              </div>记住密码</div>

            <div class="m-top-md p-top-sm">
              <a href="index.html" class="btn btn-success block" id="signin">登录</a>
            </div>
          </form>
        </div><!-- ./sign-in-inner -->
      </div><!-- ./sign-in-wrapper -->
    </div><!-- /wrapper -->
  </body>
  </div>
</template>
<script>
export default {
  name: "login",
}
</script>
<style  scoped>
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
</style>
