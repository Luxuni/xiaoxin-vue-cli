import { DashboardOne, DocDetail, ImageFiles } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/admin'
import adminIndex from '@/views/admin/dashboard/index.vue'
import animateListVue from '@/views/admin/dashboard/animateList.vue'
import utilVue from '@/views/admin/dashboard/util.vue'
import wangeditorVue from '@/views/admin/editor/wangeditor.vue'
import markdownVue from '@/views/admin/editor/markdown.vue'

export default [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: AdminLayout,
    meta: {
      auth: true,
      menu: { title: 'Dashboard', icon: DashboardOne, order: 100, lock: true }
    },
    redirect: { name: 'dashboard.workbench' },
    children: [
      {
        name: 'dashboard.workbench',
        path: 'workbench',
        component: adminIndex,
        meta: { title: '工作台', menu: { title: '工作台' } }
      },
      {
        name: 'dashboard.animateList',
        path: 'animateList',
        component: animateListVue,
        meta: { title: '动态列表', menu: { title: '动态列表' } }
      },
      {
        name: 'admin.util',
        path: 'util',
        component: utilVue,
        meta: { title: '组合API', menu: { title: '组合API' } }
      }
    ]
  },
  {
    name: 'editor',
    path: '/editor',
    component: AdminLayout,
    meta: {
      auth: true,
      menu: { title: '编辑器', icon: DocDetail, lock: true }
    },
    redirect: { name: 'editor.wangEditor' },
    children: [
      {
        name: 'editor.wangEditor',
        path: 'wangeditor',
        component: wangeditorVue,
        meta: { title: '富文本编辑器', menu: { title: '富文本编辑器' } }
      },
      {
        name: 'editor.markdown',
        path: 'markdown',
        component: markdownVue,
        meta: { title: 'Markdown', menu: { title: 'Markdown' } }
      }
    ]
  },
  {
    name: 'upload',
    path: '/upload',
    component: AdminLayout,
    meta: {
      auth: true,
      menu: { title: '文件上传', icon: ImageFiles, lock: true }
    },
    redirect: { name: 'upload.singleImage' },
    children: [
      {
        name: 'upload.singleImage',
        path: 'singleimage',
        component: () => import('@/views/admin/singleImage.vue'),
        meta: { title: '图片上传', menu: { title: '图片上传' } }
      }
    ]
  },
  {
    name: 'ProNative',
    path: '/pronative',
    component: AdminLayout,
    meta: {
      auth: true,
      menu: { title: 'ProNative', icon: ImageFiles, lock: true }
    },
    redirect: { name: 'pronative.proForm' },
    children: [
      {
        name: 'pronative.proForm',
        path: 'proform',
        component: () => import('@/views/admin/proNative/ProForm.vue'),
        meta: { title: 'ProForm', menu: { title: 'ProForm' } }
      }
    ]
  }
] as RouteRecordRaw[]
