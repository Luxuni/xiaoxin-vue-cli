<script setup lang="ts">
import errorStore from '@/store/xiaoxin/useErrorStore'
const { name } = defineProps<{ name: string }>()
const store = errorStore()
</script>

<template>
  <div class="rounded-md text-[#d35400] text-sm mt-2 opacity-80" v-show="store.getError(name)">
    <el-alert
      :title="store.getError(name)"
      type="warning"
      effect="light"
      show-icon
      :closable="false"
      class="border border-gray-100" />
  </div>
</template>

<style lang="scss" scoped></style>
