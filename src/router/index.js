import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'
Vue.use(Router)

const Home = () => import('../../pages/home.vue')
const detail = () => import('../../pages/detail.vue')
const content = () => import('../../pages/content.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/content',
      component: content
    }
  ]
})
