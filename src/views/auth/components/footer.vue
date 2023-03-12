<script setup lang="ts"></script>

<template>
  <div class="flex justify-center gap-2 mt-5 text-gray-300">
    <router-link v-if="$route.name != 'login'" to="/login" class="text-xs">用户登录</router-link>
    <router-link v-if="$route.name != 'register'" to="/register" class="text-xs">会员注册</router-link>
    <router-link v-if="$route.name != 'password'" :to="{ name: 'password' }" class="text-xs"> 找回密码 </router-link>
    <a href="/" class="text-xs">网站首页</a>
  </div>
</template>

<style lang="scss"></style>
