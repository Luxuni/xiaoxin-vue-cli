<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
const isDark = useDark()
provide('isDark', isDark)
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <n-config-provider
            :theme="isDark ? darkTheme : undefined"
            preflight-style-disabled
          >
            <n-message-provider>
              <component :is="Component"></component>
            </n-message-provider>
          </n-config-provider>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>

<style lang="scss"></style>
