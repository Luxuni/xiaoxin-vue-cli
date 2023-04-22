
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider
} from 'ant-design-vue'
import { RendererElement, RendererNode, VNode } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router'
import ProNavBar from './ProNavBar'
import ProMenu from './ProMenu'

const AdminLayout = defineComponent({
  name: 'AdminLayout',
  setup() {
    const collapsed = ref(true)
    return {
      collapsed
    }
  },
  render() {
    return (
      <Layout class={'h-screen'}>
        <LayoutSider collapsed={this.collapsed} trigger={null} collapsible>
          <div class={'w-full h-12 p-2'}>
            <div class={'bg-gray-400 h-full w-full'}></div>
          </div>
          <ProMenu ProMenuProps={{ theme: 'dark', mode: 'inline' }} />
        </LayoutSider>
        <Layout>
          <LayoutHeader style={{ background: '#fff', padding: 0 }}>
            <ProNavBar
              collapsed={this.collapsed}
              onCollapsed={(collapsed: boolean) => {
                this.collapsed = collapsed
              }}
            />
          </LayoutHeader>
          <LayoutContent
            style={{
              margin: '24px 16px',
              padding: '24px',
              background: '#fff',
              minHeight: '280px'
            }}
          >
            <RouterView>
              {{
                default: ({
                  Component,
                  route
                }: {
                  Component: VNode<
                    RendererNode,
                    RendererElement,
                    {
                      [key: string]: any
                    }
                  >
                  route: RouteLocationNormalizedLoaded
                }) => h(Component, { key: route.fullPath })
              }}
            </RouterView>
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
})
export default AdminLayout
