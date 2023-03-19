<script setup lang="ts">
import HistoryMenu from '@/layouts/admin/historyMenu.vue'
import MenuComponet from '@/layouts/admin/menu.vue'
import Navbar from '@/layouts/admin/navbar.vue'
</script>

<template>
  <main class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <MenuComponet />
    <section class="content bg-gray-100 grid grid-rows-[auto_1fr] overflow-hidden">
      <div>
        <Navbar />
        <HistoryMenu />
      </div>
      <div class="pb-32 overflow-y-auto bg-xx-bgcolor">
        <router-view #default="{ Component, route }">
            <component :is="Component" class="m-5" :key="route.fullPath" />
        </router-view>
      </div>
    </section>
  </main>
</template>
