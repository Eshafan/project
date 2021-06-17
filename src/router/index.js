import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import universe from '@/components/universe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        // 中心简介路由配置
        {
          path: 'myHeader/introduction',
          component: universe
        },
        // 中心动态路由配置
        {
          path: 'myHeader/dynamic',
          component: universe
        },
        // 专家团队路由配置
        {
          path: 'team',
          component: universe
        },
        // 县域论坛路由配置
        {
          path: 'forum',
          component: universe
        },
        // 县政改革路由配置
        {
          path: 'reform',
          component: universe
        },
        // 县域经济路由配置
        {
          path: 'economy',
          component: universe
        },
        // 特色县市路由配置
        {
          path: 'special',
          component: universe
        },
        // 三农问题路由配置
        {
          path: 'agriculture',
          component: universe
        },
        // 统计数据路由配置
        {
          path: 'data',
          component: universe
        },
        // 政策资讯路由配置
        {
          path: 'information',
          component: universe
        },
        // 县域书目路由配置
        {
          path: 'book',
          component: universe
        },
      ]
    }
  ]
})
