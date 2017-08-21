<template>
  <div id="app">
    <div class="wrapper">
      <vheader></vheader>
      <vaside></vaside>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  }
}
</script>

<style>
#app{
  height:100%;
}
</style>
