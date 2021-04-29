import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Yughk from '../yugh/Yughk.vue'
import YughDraftBox from '../yugh/YughDraftBox.vue'
import Yghk from '../dsgh/Yghk.vue'
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
    }]
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
