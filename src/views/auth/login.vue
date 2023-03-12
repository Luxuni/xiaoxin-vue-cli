<script setup lang="ts">
import useStorage from '@/composables/hooks/useStorage'
import useUtil from '@/composables/hooks/useUtil'
import { CacheKey } from '@/enum/CacheKey'
import { Wechat } from '@icon-park/vue-next'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import Footer from './components/footer.vue'
import UserApi from '@/api/user'
const storage = useStorage()
const { request } = useUtil()
const form = reactive({ mobile: '', password: '' })

const res = await UserApi.getUser()
console.log(res)

//Please improve the logic yourself
const onSubmit = request(async () => {
  if (!form.mobile || !form.password) return ElMessage.error('帐号和密码不能为空')
  storage.set(CacheKey.TOKEN_NAME, 'xiaoxin')
  location.href = '/'
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-4 text-lg">
      <XiaoxinFormInput  v-model="form.mobile" placeholder="请输入手机号" />
      <XiaoxinError name="mobile" />
    </div>
    <div class="mb-4 text-lg">
      <XiaoxinFormInput class="mt-3" v-model="form.password" placeholder="请输入密码" />
      <XiaoxinError name="password" />
    </div>
    <div class="flex justify-center mt-8 text-lg text-black">
      <XiaoxinFormButton> Login </XiaoxinFormButton>
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
