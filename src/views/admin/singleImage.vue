<script setup lang="ts">
import { ref } from 'vue'
const file = ref('')
</script>

<template>
  <XiaoxinUploadSingleImage v-model="file" />
</template>
