// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/Icon/iconfont.css'
import './assets/css/simplify.min.css'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
