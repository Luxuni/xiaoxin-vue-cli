<script setup lang="ts">
import ProForm from '@/components/proNative/ProForm'
import ProFormItem from '@/components/proNative/ProForm/ProFormItem'
import ProFormText from '@/components/proNative/ProForm/ProFormText'
import ProFormSelect from '@/components/proNative/ProForm/ProFormSelect'
import { yup } from '@/plugins/validate'
import { FormInst, useMessage } from 'naive-ui'

const message = useMessage()

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const defaultData = {
  input: 'Pro-Native',
  select: '2'
}

const rules = {
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  age: {
    required: true,
    validator: (rule: any, value: any) => {
      if (!value) {
        return Promise.reject('请输入年龄')
      } else {
        return yup.number().integer().validate(value) as Promise<void>
      }
    },
    trigger: 'blur'
  }
}

const formRef = ref<{ current: FormInst } | null>()

const onFinish = async (e: SubmitEvent, value: typeof defaultData) => {
  await waitTime(2000)
  console.log(value)
  formRef.value?.current.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}

const request = async () => {
  await waitTime(1500)
  return {
    input: 'Pro-Native',
    select: '2'
  }
}

const selectOptions = [
  {
    label: 'ProComponents',
    value: '1'
  },
  {
    label: 'ProNative',
    value: '2'
  }
]
</script>

<template>
  <div>
    <ProForm
      class="w-1/2"
      :label-width="160"
      ref="formRef"
      :default-data="defaultData"
      :request="request"
      @onFinish="onFinish"
      :rules="rules"
      label-align="right"
      label-placement="left"
    >
      <ProFormItem label="input" path="input">
        <ProFormText :autofocus="true" />
      </ProFormItem>
      <ProFormItem label="select" path="select">
        <ProFormSelect :options="selectOptions" />
      </ProFormItem>
      <template #footer>
        <n-button type="primary" attr-type="submit">Submit</n-button>
      </template>
    </ProForm>
  </div>
</template>

<style scoped></style>
