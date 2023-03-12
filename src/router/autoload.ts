import { RouteRecordRaw } from 'vue-router'

// 自动生成布局路由
const layouts: Record<string, { [key: string]: any }> = import.meta.globEager('../layouts/**/index.vue')

const views: Record<string, { [key: string]: any }> = import.meta.globEager('../views/**/index.vue')

const getRoutes = () => {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    console.log(route)

    layoutRoutes.push(route)
  })

  return layoutRoutes
}

const getRouteByModule = (file: string, module: { [key: string]: any }) => {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')

  const route = {
    name: name,
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw

  return route
}

const getChildrenRoutes = (layoutRoute: RouteRecordRaw) => {
  const routes = [] as RouteRecordRaw[]
  console.log(layoutRoute.name)

  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${String(layoutRoute.name)}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  return routes
}

export default getRoutes()
