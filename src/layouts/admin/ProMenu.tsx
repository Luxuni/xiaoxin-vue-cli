import router from '@/router'
import { ApplicationOne } from '@icon-park/vue-next'
import { Menu, MenuItem, MenuProps, SubMenu } from 'ant-design-vue'
import { MenuItemProps, SubMenuProps } from 'element-plus'
import { PropType } from 'vue'
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const ProMenuProps = {
  ProMenuProps: {
    type: Object as PropType<MenuProps>
  },
  ProSubMenuProps: {
    type: Object as PropType<SubMenuProps>
  },
  ProMenuItemProps: {
    type: Object as PropType<MenuItemProps>
  }
}

const ProMenu = defineComponent({
  name: 'ProMenu',
  props: ProMenuProps,
  setup() {
    const go = (route: RouteRecordRaw) => {
      router.push(route)
    }
    const routes = router
      .getRoutes()
      .filter((r) => r.children.length)
      .filter((r) => r.meta.menu)
      .sort((a, b) => {
        return (b.meta.menu?.order ?? 0) - (a.meta.menu?.order ?? 0)
      })

    return {
      routes,
      go
    }
  },
  render() {
    const handleRouters = (
      routers: RouteRecordNormalized[] | RouteRecordRaw[]
    ) => {
      return routers.map((r) => {
        if (r.children) {
          return (
            <SubMenu {...this.$props.ProSubMenuProps} key={r.name}>
              {{
                title: () => r.meta?.menu?.title,
                default: () => handleRouters(r.children!),
                icon: () => h(r.meta?.menu?.icon ?? ApplicationOne)
              }}
            </SubMenu>
          )
        } else {
          return (
            <MenuItem
              {...this.$props.ProMenuItemProps}
              key={r.name}
              onClick={() => {
                this.go(r)
              }}
            >
              {{
                default: () => r.meta?.menu?.title,
                icon: () => h(r.meta?.menu?.icon ?? ApplicationOne)
              }}
            </MenuItem>
          )
        }
      })
    }
    return (
      <Menu {...this.$props.ProMenuProps}>{handleRouters(this.routes)}</Menu>
    )
  }
})
export default ProMenu
