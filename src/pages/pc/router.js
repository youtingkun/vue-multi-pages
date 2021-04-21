import Vue from 'vue'
import Router from 'vue-router'
import home from './views/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/pc/',
  routes: [
    {
      path: '/index',
      name: 'home',
      component: home
    }
  ]
})