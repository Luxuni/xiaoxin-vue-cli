<script setup lang="ts">
import { useDark } from '@vueuse/core'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { darkTheme } from 'naive-ui'
const isDark = useDark()
provide('isDark', isDark)
</script>

<template>
  <main>
    <ElConfigProvider :locale="zhCn">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <el-backtop :right="20" :bottom="100">
            <div style="
                  height: 100%;
                  width: 100%;
                  background-color: none !important;
                  box-shadow: none !important;
                  text-align: center;
                  line-height: 40px;
                  color: #1989fa;
                ">
              <icon-up-square theme="filled" size="40" fill="#e66767" />
            </div>
          </el-backtop>
          <Suspense>
            <n-config-provider :theme="isDark ? darkTheme : undefined">
              <component :is="Component"></component>
            </n-config-provider>
          </Suspense>
        </template>
      </RouterView>
    </ElConfigProvider>
  </main>
</template>

<style lang="scss">
.el-backtop {
  box-shadow: none !important;
  --el-backtop-bg-color: none !important;

  &:hover {
    box-shadow: none !important;
    --el-backtop-bg-color: none !important;
  }
}
</style>
