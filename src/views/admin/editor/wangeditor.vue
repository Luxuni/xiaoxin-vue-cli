<script setup lang="ts">
import { ref } from 'vue'
const content = ref('Xiaoxin')
</script>

<template>
  <div>
    <XiaoxinWangEditor v-model="content" :height="300" />
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
      <template #header> 预览 </template>
      {{ content }}
    </el-card>
  </div>
</template>
