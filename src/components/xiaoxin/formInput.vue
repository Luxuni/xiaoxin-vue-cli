<script setup lang="ts">
const props = defineProps<{
  modelValue: any
}>()

onMounted(() => {
  // 使用户只有在加载完成后才能输入
  setTimeout(() => {
    document.querySelectorAll('input').forEach((input) => input.removeAttribute('readonly'))
  }, 500)
})
</script>

<template>
  <input
    class="px-6 py-2 text-center duration-500 bg-yellow-400 bg-opacity-50 border-none shadow-lg outline-none rounded-3xl text-inherit backdrop-blur-md focus:ring-2 ring-offset-0 ring-violet-600 focus:border-white focus:shadow-2xl"
    type="text"
    readonly
    :value="props.modelValue"
    placeholder="phone nummber"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<style lang="scss" scoped></style>
