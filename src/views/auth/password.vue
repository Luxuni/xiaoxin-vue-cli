<script setup lang="ts">
import { Wechat } from '@icon-park/vue-next'
import { reactive } from 'vue'
import Footer from './components/footer.vue'

const form = reactive({
  mobile: '',
  password: '',
  password_confirmation: '',
  code: '',
})

//Please improve the logic yourself
const onSubmit = async () => {}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-4 text-lg">
      <XiaoxinFormInput v-model="form.mobile" placeholder="请输入手机号" v-clearError="'account'" />
      <XiaoxinError name="account" />
    </div>
    <div class="mb-4 text-lg">
      <XiaoxinFormInput v-model="form.password" class="mt-3" type="password" placeholder="请输入新密码" />
      <XiaoxinError name="password" />
    </div>
    <div class="mb-4 text-lg">
      <XiaoxinFormInput v-model="form.password_confirmation" class="mt-3" type="password" placeholder="再次输入密码" />
    </div>
    <div class="flex justify-center mt-8 text-lg text-black">
      <XiaoxinFormButton> Revise </XiaoxinFormButton>
    </div>
    <div class="flex justify-center mt-3">
      <wechat
        theme="outline"
        size="24"
        fill="#fff"
        class="p-1 text-white bg-green-600 rounded-full cursor-pointer fab fa-weixin" />
    </div>
    <Footer />
  </form>
</template>

<style lang="scss" scoped></style>
