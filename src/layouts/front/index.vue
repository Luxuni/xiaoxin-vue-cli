<script lang="ts" setup></script>
<template>
  <main>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" class="w-full p-3 mx-auto 2xl:w-page lg:mt-5" />
      </template>
    </RouterView>
  </main>
</template>
