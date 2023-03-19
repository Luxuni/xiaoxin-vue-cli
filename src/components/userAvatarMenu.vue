<script setup lang="ts">
import userStore from '@/store/xiaoxin/useUserStore'
import dayjs from 'dayjs'
import { Config, SunOne, Moon } from '@icon-park/vue-next'
import { DrawerPlacement } from 'naive-ui'
import { CSSProperties } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const { logout } = useAuth()
const storeUser = userStore()
const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const style: CSSProperties = {}
  if (!checked) {
    style.background = '#FFF4E0'
    if (focused) {
      style.boxShadow = '0 0 0 2px #FFF4E040'
    }
  } else {
    style.background = '#4D4D4D'
    if (focused) {
      style.boxShadow = '0 0 0 2px #4D4D4D40'
    }
  }
  return style
}
const isDark = inject('isDark', useDark())
const toggleDark = useToggle(isDark)
const onThemeChange = () => {
  toggleDark()
}
const options = [
  {
    label: '后台管理',
    key: 'Backstage management',
  },
  {
    label: '网站首页',
    key: 'Home page',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]
const handleSelect = (key: string | number) => {
  switch (key) {
    case 'Backstage management':
      router.push({ name: 'admin' })
      break
    case 'Home page':
      router.push({ name: 'home' })
      break
    case 'logout':
      logout()
      break
  }
}
</script>

<template>
  <main class="flex items-center">
    <XiaoxinFullscreen class="hidden mr-3 2xl:flex" />
    <section v-if="!!storeUser.user" class="flex items-center">
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <span class="flex items-center el-dropdown-link text-xx-tcolor">
          <n-image :src="storeUser.user.avatar" preview-disabled class="w-10 h-10 rounded-md" />
          <div class="flex flex-col ml-2 text-sm font-light">
            {{ storeUser.user?.name }}
            <span>注册于 {{ dayjs(storeUser.user?.created_at).fromNow() }} </span>
          </div>
        </span>
      </n-dropdown>
    </section>
    <section v-else class="flex items-stretch gap-2">
      <router-link
        to="/login"
        class="px-3 py-2 flex items-center border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        登录
      </router-link>
      <router-link
        to="/register"
        class="px-3 py-2 flex items-center border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        注册
      </router-link>
    </section>
    <div class="ml-4">
      <config theme="outline" size="24" class="text-xx-tcolor" @click="activate('right')" />
    </div>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="项目配置">
        <n-divider> 主题 </n-divider>
        <div class="flex items-center justify-center">
          <n-switch v-model:value="isDark" size="large" :rail-style="railStyle" :on-update:value="onThemeChange">
            <template #unchecked-icon>
              <n-icon :component="SunOne" />
            </template>
            <template #checked-icon>
              <n-icon :component="Moon" />
            </template>
          </n-switch>
        </div>
      </n-drawer-content>
    </n-drawer>
  </main>
</template>
