import router from '@/router'
import userStore from '@/store/xiaoxin/useUserStore'
import { Config, Moon, SunOne } from '@icon-park/vue-next'
import { useDark, useToggle } from '@vueuse/core'
import {
  Divider,
  Drawer,
  Dropdown,
  Image,
  Menu,
  MenuItem,
  Switch
} from 'ant-design-vue'
import dayjs from 'dayjs'
import ProFullScreen from './xiaoxin/ProFullScreen'

const ProUserMenu = defineComponent({
  name: 'ProUserMenu',
  setup() {
    const storeUser = userStore()
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const onThemeChange = () => {
      toggleDark()
    }
    const options = [
      {
        label: '后台管理',
        key: 'Backstage management'
      },
      {
        label: '网站首页',
        key: 'Home page'
      },
      {
        label: '退出登录',
        key: 'logout'
      }
    ]
    const { logout } = useAuth()
    const handleSelect = (key: string | number) => {
      switch (key) {
        case 'Backstage management':
          router.push({ name: 'dashboard' })
          break
        case 'Home page':
          router.push({ name: 'home' })
          break
        case 'logout':
          logout()
          break
      }
    }
    const visible = ref(false)
    return {
      storeUser,
      options,
      handleSelect,
      visible,
      isDark,
      onThemeChange
    }
  },
  render() {
    return (
      <div class={'flex items-center'}>
        <div class={'mr-2'}>
          <ProFullScreen />
        </div>
        <div>
          <Dropdown>
            {{
              default: () => (
                <span class={'flex items-center'}>
                  <Image
                    src={this.storeUser.user?.avatar}
                    width={50}
                    height={50}
                  />
                  <div class="flex flex-col ml-2 text-sm font-light">
                    {this.storeUser.user?.name}
                    <span>
                      注册于 {dayjs(this.storeUser.user?.created_at).fromNow()}{' '}
                    </span>
                  </div>
                </span>
              ),
              overlay: () => (
                <Menu
                  onClick={({ key }: { key: string }) => {
                    this.handleSelect(key)
                  }}
                >
                  {this.options.map((v) => {
                    return (
                      <MenuItem key={v.key}>
                        {{
                          default: () => <span>{v.label}</span>
                        }}
                      </MenuItem>
                    )
                  })}
                </Menu>
              )
            }}
          </Dropdown>
        </div>
        <div
          class="ml-4 cursor-pointer"
          onClick={() => {
            this.visible = true
          }}
        >
          <Config theme="outline" size="24" class="text-xx-tcolor" />
        </div>
        <Drawer
          visible={this.visible}
          title="项目配置"
          onClose={() => {
            this.visible = false
          }}
        >
          <Divider>主题</Divider>
          <div class="flex items-center justify-center">
            <Switch
              checked={this.isDark}
              checkedChildren={<Moon />}
              unCheckedChildren={<SunOne />}
              onChange={() => {
                this.onThemeChange()
              }}
            ></Switch>
          </div>
        </Drawer>
      </div>
    )
  }
})
export default ProUserMenu
