<script setup lang="ts">
import UserAvatarMenu from '@/components/userAvatarMenu.vue'
import useMenuStore from '@/layouts/admin/useMenuStore'
import { MenuFoldOne, MenuUnfoldOne } from '@icon-park/vue-next'
const menuStore = useMenuStore()
</script>

<template>
  <div class="relative z-50 flex items-center justify-between p-2 px-5 shadow-sm border-b-1 bg-xx-bgcolor">
    <div class="flex items-center">
      <div class="mr-2" @click.stop="menuStore.toggleMenu">
        <MenuUnfoldOne
          theme="filled"
          size="24"
          fill="#10ad57"
          class="duration-300 cursor-pointer"
          v-if="menuStore.menuState" />
        <MenuFoldOne theme="filled" size="24" fill="#10ad57" class="duration-300 cursor-pointer" v-else />
      </div>
      <XiaoxinBreadcrumb class="hidden md:block" />
    </div>
    <div class="relative flex items-center justify-center cursor-pointer">
      <UserAvatarMenu />
    </div>
  </div>
</template>
