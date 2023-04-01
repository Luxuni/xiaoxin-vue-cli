import router from '@/router'
import { ApplicationOne } from '@icon-park/vue-next'
import { LayoutInst, MenuOption, NMenu } from 'naive-ui'
import { RouteRecordNormalized, RouteRecordRaw, useRoute } from 'vue-router'

type MenuProps = {
  collapsed: boolean
  contentRef: LayoutInst | null
}

const Menu = (props: MenuProps) => {
  const $route = useRoute()
  const go = (route: RouteRecordRaw) => {
    router.push(route)
    props.contentRef?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const routes = router
    .getRoutes()
    .filter((r) => r.children.length)
    .filter((r) => r.meta.menu)
    .sort((a, b) => {
      return (b.meta.menu?.order ?? 0) - (a.meta.menu?.order ?? 0)
    })
  const handleRoutesToMenuOptions = (routes: RouteRecordNormalized[] | RouteRecordRaw[]) => {
    const menuOptions: MenuOption[] = []
    routes.forEach((r, index) => {
      const menuOption: MenuOption = {
        label: () => (
          <div
            class=" before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-20"
            onClick={() => {
              !r.meta?.menu?.lock && go(r)
            }}>
            {r.meta?.menu?.title}
          </div>
        ),
        key: (r.name as string) ?? Math.random(),
        icon: () => h(r.meta?.menu?.icon ?? ApplicationOne),
      }
      if (r.children?.length) {
        menuOption.children = handleRoutesToMenuOptions(r.children)
      }
      menuOptions.push(menuOption)
    })
    return menuOptions
  }
  const menuOptions: MenuOption[] = handleRoutesToMenuOptions(routes)

  return (
    <div v-appearance={{ from: { x: -200, duration: 1 } }}>
      <NMenu options={menuOptions} value={$route.name as string} collapsed={props.collapsed} />
    </div>
  )
}

export default Menu
