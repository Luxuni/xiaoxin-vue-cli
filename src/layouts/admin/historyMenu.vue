<script setup lang="ts">
import router from '@/router'
import { LayoutInst } from 'naive-ui'
// const storage = useStorage()
defineProps<{
  contentRef: LayoutInst | null
}>()
const routes = ref<{ title: string; name: string }[]>([])
router.beforeResolve(async (to) => {
  if (Object.keys(to.query).length > 0 || Object.keys(to.params).length > 0) return
  if (!to.meta.menu?.title || routes.value.find((r) => r.name == to.name)) return

  if (routes.value.length > 10) {
    routes.value.splice(0, 10)
  }
  routes.value.unshift({ name: to.name as string, title: to.meta.menu?.title })
  // storage.set('admin-history-menu', routes.value)
})
const closeTag = (route: { title: string; name: string }) => {
  const index = routes.value.findIndex((r) => r.name == route.name)
  routes.value.splice(index, 1)
  // storage.set('admin-history-menu', routes.value)
}
</script>

<template>
  <div class="p-2 px-5 shadow-sm bg-xx-bgcolor relative z-20 overflow-auto h-[50px]" v-show="routes.length">
    <div class="absolute flex gap-2 overflow-x-auto whitespace-pre">
      <n-tag
        v-for="route of routes"
        :key="route.name"
        :type="$route.name == route.name ? 'error' : 'success'"
        :bordered="$route.name == route.name"
        closable
        @close="closeTag(route)">
        <router-link
          @click="$props.contentRef?.scrollTo({ top: 0, behavior: 'smooth' })"
          class="inline-block w-full h-full duration-300 hover:text-[#AA77FF]"
          :to="{ name: route.name }"
          >{{ route.title }}</router-link
        >
      </n-tag>
    </div>
  </div>
</template>
