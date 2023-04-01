<script setup lang="ts">
import HistoryMenu from '@/layouts/admin/historyMenu.vue'
import MenuComponet from '@/layouts/admin/Menu'
import Navbar from '@/layouts/admin/navbar.vue'
import { LayoutInst } from 'naive-ui'
const collapsed = ref(false)
const contentRef = ref<LayoutInst | null>(null)
</script>

<template>
  <n-layout has-sider embedded content-style="width:100vw;height:100vh;">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      :native-scrollbar="false"
      @collapse="collapsed = true"
      @expand="collapsed = false">
      <MenuComponet :collapsed="collapsed" :contentRef="contentRef" />
    </n-layout-sider>
    <n-layout :native-scrollbar="false" ref="contentRef">
      <n-layout-header class="!sticky top-0 z-20">
        <div>
          <Navbar />
          <HistoryMenu :contentRef="contentRef"/>
        </div>
      </n-layout-header>
      <n-layout-content content-style="overflow-y: hidden; padding: 24px;">
        <router-view #default="{ Component, route }">
          <component :is="Component" class="m-5" :key="route.fullPath" />
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
