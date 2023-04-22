<script setup lang="ts">
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component"></component>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>

<style lang="scss"></style>
