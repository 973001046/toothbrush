import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/detail'
import Set from '@/components/set'
import Clean from '@/components/clean'
import Tooth from '@/components/tooth'
import Record from '@/components/record'
import ToothBrush from '@/components/toothBrush'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/set',
      name: 'Set',
      component: Set
    },
    {
      path: '/clean',
      name: 'Clean',
      component: Clean
    },
    {
      path: '/tooth',
      name: 'Tooth',
      component: Tooth
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/brush',
      name: 'ToothBrush',
      component: ToothBrush
    },
    {
      path: '*',
      redirect: '/detail'
    }
  ]
})
