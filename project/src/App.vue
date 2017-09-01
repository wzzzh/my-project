<template>
  <div id="app">
     <div class="wrapper">
       <vheader :pData = "user"></vheader>
       <vaside></vaside>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>

import vheader from './components/header/header'
import vaside from './components/aside/aside'
export default {
  name: 'app',
  components: {
    vheader,
    vaside
  },
  computed:{
    user(){
        let userData=null;
        if(this.$store.state.login.name){
          userData = this.$store.state.login.name;
        }else{
          userData = JSON.parse(localStorage.getItem('userData'));
        }
        // console.log(userData);
        return userData;
    }
  }
}
</script>

<style>
#app{
  height:100%;
}
</style>
