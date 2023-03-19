<script setup lang="ts">
import userStore from '@/store/xiaoxin/useUserStore'
import dayjs from 'dayjs'
import { Config, SunOne, Moon } from '@icon-park/vue-next'
import { DrawerPlacement } from 'naive-ui'
import { CSSProperties } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const { logout } = useAuth()
const storeUser = userStore()
const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const theme = ref('light')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const style: CSSProperties = {}
  if (checked) {
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
const isDark = useDark()
const toggleDark = useToggle(isDark)
const onThemeChange = (value: string) => {
  toggleDark()
  value === 'light' ? (theme.value = 'light') : (theme.value = 'dark')
}
</script>

<template>
  <main class="flex items-center">
    <XiaoxinFullscreen class="hidden mr-3 text-gray-600 2xl:flex" />
    <section v-if="!!storeUser.user" class="flex items-center">
      <el-dropdown trigger="click">
        <span class="flex items-center el-dropdown-link">
          <ElImage :src="storeUser.user.avatar" fit="cover" class="w-10 h-10 rounded-md" />
          <div class="flex flex-col ml-2 text-sm font-light text-gray-600">
            {{ storeUser.user?.name }}
            <span>注册于 {{ dayjs(storeUser.user?.created_at).fromNow() }} </span>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link :to="{ name: 'admin' }"> 后台管理 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{ name: 'home' }" #default="{ href }" custom>
                <a :href="href"> 网站首页</a>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
      <config theme="outline" size="24" fill="#333" @click="activate('right')" />
    </div>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="项目配置">
        <n-divider> 主题 </n-divider>
        <div class="flex items-center justify-center">
          <n-switch
            v-model:value="theme"
            size="large"
            checked-value="light"
            default-value="light"
            unchecked-value="dark"
            :rail-style="railStyle"
            :on-update:value="onThemeChange">
            <template #checked-icon>
              <n-icon :component="SunOne" />
            </template>
            <template #unchecked-icon>
              <n-icon :component="Moon" />
            </template>
          </n-switch>
        </div>
      </n-drawer-content>
    </n-drawer>
  </main>
</template>
