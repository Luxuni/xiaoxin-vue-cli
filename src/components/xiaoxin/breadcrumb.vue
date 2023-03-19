<script setup lang="ts">
import router from '@/router'
const route = router.currentRoute
</script>

<template>
  <main>
    <div class="flex items-center text-xx-tcolor">
      <router-link :to="{ name: 'home' }">首页</router-link>
      <div class="flex items-center" v-for="(r, index) of route?.matched" :key="index" v-show="r.meta.title">
        <i class="box-border py-2 opacity-80">/</i>
        <router-link :to="{ path: r.path }">
          {{ r.meta.title }}
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
a {
  @apply mx-2 flex items-center;
}
</style>
