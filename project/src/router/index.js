import Vue from 'vue'
import Router from 'vue-router'
import mainbox from '@/components/content/mainbox/mainbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainbox',
      component: mainbox
    }
  ]
})
