<template>
  <!-- <div id="app">
    <login @Chomedisable="Phomedisable" v-show="loginshow"></login>
     <div class="wrapper" v-show="homeshow">
       <vheader></vheader>
       <vaside></vaside>
      <router-view></router-view>
     </div>
  </div> -->


  <div id="app">
     <div class="wrapper">
       <vheader></vheader>
       <vaside></vaside>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>

// import login from './components/login/login'
import vheader from './components/header/header'
import vaside from './components/aside/aside'
export default {
  name: 'app',
  components: {
    // login,
    vheader,
    vaside
  },
  // data(){
  //   return{
  //     homeshow:false,
  //     loginshow:true
  //   }
  // },
  // methods: {
  //   Phomedisable(show,hide) {
  //     console.log(this.$router);
  //     // this.$router.push({
  //     //   path:'/home'
  //     // });
  //     this.homeshow=show;
  //     this.loginshow=hide;
  //   }
  // }
}
</script>

<style>
#app{
  height:100%;
}
</style>
