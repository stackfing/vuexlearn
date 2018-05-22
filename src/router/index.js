import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A',
      component: A
    },
    {
      path: '/B',
      component: B
    },
    {
      path: '/C',
      component: C
    },
    {
      path: '/D',
      component: D
    }
  ]
})
