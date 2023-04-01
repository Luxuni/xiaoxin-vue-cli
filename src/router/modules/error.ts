import AppVue from '@/App.vue'
import { RouteName } from '@/enum/RouteName'
import { RouteRecordRaw } from 'vue-router'
import Error403 from '@/views/errors/403.vue'
import Error404 from '@/views/errors/404.vue'
import Error500 from '@/views/errors/500.vue'

export default {
  path: '/error',
  component: AppVue,
  children: [
    {
      name: RouteName.NOT_FOUND,
      path: '404',
      component: Error404,
    },
    {
      name: RouteName.FORBIDDEN,
      path: '403',
      component: Error403,
    },
    {
      name: RouteName.INTERNAL_SERVER_ERROR,
      path: '500',
      component: Error500,
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: Error404,
    },
  ],
} as RouteRecordRaw
