<script setup lang="ts">
import useAuth from '@/composables/useAuth'
import { RouteName } from '@/enum/RouteName'
const { isLogin, logout } = useAuth()
</script>

<template>
  <div
    class="h-screen !w-screen bg-gray-700 flex flex-col justify-center items-center !-mt-0 bg-no-repeat bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80');
    ">
    <div v-appearance="{ from: { y: 300, duration: 1 } }" class="flex items-center justify-center flex-col">
      <img src="/images/xiaoxin.png" class="object-cover w-40 h-40 mb-5 border-8 border-white rounded-full" />
      <div>
        <XiaoxinFormButton @click="$router.push({ name: 'admin' })" class="ml-2 danger"> 访问后台 </XiaoxinFormButton>
        <XiaoxinFormButton v-if="!isLogin()" class="ml-2 primary" @click="$router.push({ name: RouteName.LOGIN })">
          用户登录
        </XiaoxinFormButton>
        <XiaoxinFormButton v-if="isLogin()" class="ml-2 text-white bg-orange-600" @click="logout">
          退出登录
        </XiaoxinFormButton>
      </div>
      <h1 class="mt-6 font-mono text-lg text-gray-300 drop-shadow-md">欢迎使用lu-xun-vue-cli</h1>
    </div>
  </div>
</template>
