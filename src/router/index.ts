import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/layout/TabLayout.vue'),
        name: 'tab1',
        children: [
          {
            path: '',
            name: 'main',
            redirect: '/tabs/tab1/tab1-detail',
          },
          {
            path: 'tab1-detail',
            name: 'tab1-details',
            component: () => import('@/views/Tab1Page.vue')
          },
          {
            path: 'tab1-detail1',
            name: 'tab1-details1',
            component: () => import('@/views/NewPage.vue')
          },
          {
            path: 'tab1-detail2',
            name: 'tab1-details2',
            component: () => import('@/views/NewPage.vue')
          }
        ],
        beforeEnter: (to, from, next) => {
          const tabsToCheck = ['tab2', 'tab3']
          const childrenToCheck = [ 'tab1-details1', 'tab1-details2']
          if(tabsToCheck.includes(from.name as string) && childrenToCheck.includes(to.name as string)) {
            next('/tabs/tab1/tab1-detail')
          } else {
            next()
          }
        }
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
