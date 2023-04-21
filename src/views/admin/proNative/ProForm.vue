<script setup lang="ts">
import {
  ProForm,
  ProFormItem,
  ProFormText,
  ProFormSelect,
  ProFormAutoComplete,
  ProFormDynamicTags,
  ProFormSwitch,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormRadio,
  ProFormTreeSelect,
  ProFormCascader,
  ProFormDatePicker
} from 'pro-native'
import { FormInst, useMessage, NButton } from 'naive-ui'
import { ref, computed } from 'vue'

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
  select: '2',
  autoComplete: '',
  tags: ['教师', '程序员'],
  treeSelect: 'Drive My Car',
  cascader: null,
  datePicker: null,
  switch: false,
  checkbox: false,
  checkboxGroup: null,
  radio: false
}

const formRef = ref<{
  current: FormInst
  data: typeof defaultData
} | null>()

const finish = async (value: typeof defaultData) => {
  await waitTime(1000)
  console.log(value)
}

const request = async () => {
  await waitTime(1500)
  return {
    input: 'Pro-Native',
    select: '2',
    autoComplete: '',
    tags: ['教师', '程序员'],
    treeSelect: 'Drive My Car',
    cascader: null,
    datePicker: null,
    switch: false,
    checkbox: false,
    checkboxGroup: null,
    radio: false
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

const autoCompleteOptions = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = formRef.value?.data.autoComplete.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

const treeSelectOptions = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Drive My Car',
        key: 'Drive My Car'
      },
      {
        label: 'Michelle',
        key: 'Michelle'
      }
    ]
  }
]

function genOptions(depth = 2, iterator = 1, prefix = ''): any {
  const length = 12
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: genOptions(depth, iterator + 1, '' + i)
      })
    } else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: genOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const cascaderOptions = genOptions()
</script>

<template>
  <div class="flex items-center justify-center w-full h-full">
    <ProForm
      class="w-1/2"
      :label-width="160"
      :request="request"
      ref="formRef"
      :finish="finish"
      label-align="right"
      label-placement="left"
    >
      <ProFormItem label="input" path="input">
        <ProFormText :autofocus="true" />
      </ProFormItem>
      <ProFormItem label="select" path="select">
        <ProFormSelect :options="selectOptions" />
      </ProFormItem>
      <ProFormItem label="auto complete" path="autoComplete">
        <ProFormAutoComplete
          :options="autoCompleteOptions"
          placeholder="email"
        />
      </ProFormItem>
      <ProFormItem label="tags" path="tags">
        <ProFormDynamicTags />
      </ProFormItem>
      <ProFormItem label="tree select" path="treeSelect">
        <ProFormTreeSelect :options="treeSelectOptions" />
      </ProFormItem>
      <ProFormItem label="cascader" path="cascader">
        <ProFormCascader :options="cascaderOptions" />
      </ProFormItem>
      <ProFormItem label="date picker" path="datePicker">
        <ProFormDatePicker />
      </ProFormItem>
      <ProFormItem label="switch" path="switch">
        <ProFormSwitch />
      </ProFormItem>
      <ProFormItem label="checkbox" path="checkbox">
        <ProFormCheckbox label="Checkbox" />
      </ProFormItem>
      <ProFormItem label="checkbox group" path="checkboxGroup">
        <ProFormCheckboxGroup>
          <ProFormCheckbox label="options1" value="options1" />
          <ProFormCheckbox label="options2" value="options2" />
          <ProFormCheckbox label="options3" value="options3" />
        </ProFormCheckboxGroup>
      </ProFormItem>
      <ProFormItem label="radio" path="radio">
        <ProFormRadio label="Definitely Maybe" />
      </ProFormItem>
      <!-- <template #footer>
          <n-button type="primary" attr-type="submit">Submit</n-button>
        </template> -->
    </ProForm>
  </div>
</template>

<style scoped></style>
