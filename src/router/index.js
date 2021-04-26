import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import SiteSearch from '../index/SiteSearch.vue'
import Yughk from '../yugh/Yughk.vue'
import YughDraftBox from '../yugh/YughDraftBox.vue'
import Yghk from '../dsgh/Yghk.vue'
import Dsgh from '../dsgh/Dsgh.vue'
import TodoDsgh from '../dsgh/TodoDsgh.vue'
import DoneDsgh from '../dsgh/DoneDsgh.vue'
import Lxk from '../lxsq/Lxk.vue'
import Lxsq from '../lxsq/Lxsq.vue'
import TodoLxsq from '../lxsq/TodoLxsq.vue'
import DoneLxsq from '../lxsq/DoneLxsq.vue'
import Login from '../Login.vue'
import Registration from '../Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { keepAlive: true },
    children: [{
      path: '/sitesearch',
      name: 'SiteSearch',
      component: SiteSearch,
      meta: { keepAlive: true }
    }, {
      path: '/yughk',
      name: 'Yughk',
      component: Yughk,
      meta: { keepAlive: true }
    }, {
      path: '/yughdraftbox',
      name: 'YughDraftBox',
      component: YughDraftBox,
      meta: { keepAlive: true }
    }, {
      path: '/yghk',
      name: 'Yghk',
      component: Yghk,
      meta: { keepAlive: true }
    }, {
      path: '/dsgh',
      name: 'Dsgh',
      component: Dsgh,
      meta: { keepAlive: true }
    }, {
      path: '/tododsgh',
      name: 'TodoDsgh',
      component: TodoDsgh,
      meta: { keepAlive: true }
    }, {
      path: '/donedsgh',
      name: 'DoneDsgh',
      component: DoneDsgh,
      meta: { keepAlive: true }
    }, {
      path: '/lxk',
      name: 'Lxk',
      component: Lxk,
      meta: { keepAlive: true }
    }, {
      path: '/lxsq',
      name: 'Lxsq',
      component: Lxsq,
      meta: { keepAlive: true }
    }, {
      path: '/todolxsq',
      name: 'TodoLxsq',
      component: TodoLxsq,
      meta: { keepAlive: true }
    }, {
      path: '/donelxsq',
      name: 'DoneLxsq',
      component: DoneLxsq,
      meta: { keepAlive: true }
    },]
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/reg',
    name: 'Registration',
    component: Registration,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
