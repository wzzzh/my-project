import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import home from '@/components/content/home/home'
import mainbox from '@/components/content/mainbox/mainbox'
import webpage from '@/components/content/webpage/webpage'
import singlepage from '@/components/content/singlepage/singlepage'
import hometab from '@/components/content/hometab/hometab'
import brog from '@/components/content/brog/brog'
import conpage from '@/components/content/conpage/conpage'
import addcon from '@/components/content/addcon/addcon'
import classify from '@/components/content/classify/classify'
import addClassify from '@/components/content/classify/addClassify'
import setlogin from '@/components/login/setlogin'
// import useredit from '@/components/header/edit'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'login',
      component:login,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/webpage',
      name: 'webpage',
      component: webpage
    },
    {
      path: '/singlepage',
      name: 'singlepage',
      component: singlepage
    },
    {
      path: '/hometab',
      name: 'hometab',
      component: hometab
    },
    {
      path: '/conpage',
      name: 'conpage',
      component: conpage
    },
    {
      path: '/addcon',
      name: 'addcon',
      component: addcon
    },
    {
      path: '/brog',
      name: 'brog',
      component: brog
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path:'/addClassify',
      name:'addClassify',
      component:addClassify
    },
    {
      path:'/setlogin',
      name:'setlogin',
      component:setlogin
    },
    // {
    //   path:'/useredit',
    //   name:'useredit',
    //   component:useredit
    // }
  ]
})
