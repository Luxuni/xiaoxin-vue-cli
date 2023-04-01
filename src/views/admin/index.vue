<script setup lang="ts">
import * as echarts from 'echarts'
import { ref } from 'vue'
import { echart1, echart2, echart3, echart4 } from './echart'
import chalk from '../../../public/theme/chalk.json'
import { useDark } from '@vueuse/core'

interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}
const cards = ref<ICard[]>([
  {
    title: '总人数',
    price: 23343,
    iconColor: 'text-violet-500',
    icon: 'fas fa-address-card',
    total: 2892982,
    totalTitle: '总人数',
  },
  {
    title: '销售额',
    price: 18393,
    iconColor: 'text-green-600',
    icon: 'fas fa-apple-alt',
    total: 9783212,
    totalTitle: '总销售额',
  },
  {
    title: '订单数',
    price: 63803,
    iconColor: 'text-blue-500',
    icon: 'fas fa-award',
    total: 83493,
    totalTitle: '总订单数',
  },
  {
    title: '评论数',
    price: 528994,
    iconColor: 'text-red-500',
    icon: 'fas fa-baseball-ball',
    total: 48920,
    totalTitle: '总评论',
  },
])

const tt1 = () => {
  chart1?.resize()
}
const tt2 = () => {
  chart2?.resize()
}
const tt3 = () => {
  chart3?.resize()
}
const tt4 = () => {
  chart4?.resize()
}

let chart1: echarts.ECharts | null = null
let chart2: echarts.ECharts | null = null
let chart3: echarts.ECharts | null = null
let chart4: echarts.ECharts | null = null
echarts.registerTheme('chalk', chalk)
const isDark = inject('isDark', useDark())
onMounted(() => {
  chart1 = echarts.init(document.getElementById('echart1') as HTMLDivElement, isDark.value ? 'chalk' : 'default')
  chart1.setOption(echart1)
  chart2 = echarts.init(document.getElementById('echart2') as HTMLDivElement, isDark.value ? 'chalk' : 'default')
  chart2.setOption(echart2)
  chart3 = echarts.init(document.getElementById('echart3') as HTMLDivElement, isDark.value ? 'chalk' : 'default')
  chart3.setOption(echart3)
  chart4 = echarts.init(document.getElementById('echart4') as HTMLDivElement, isDark.value ? 'chalk' : 'default')
  chart4.setOption(echart4)
})
watch(isDark, (val) => {
  chart1?.dispose()
  chart2?.dispose()
  chart3?.dispose()
  chart4?.dispose()
  chart1 = echarts.init(document.getElementById('echart1') as HTMLDivElement, val ? 'chalk' : 'default')
  chart1.setOption(echart1)
  chart2 = echarts.init(document.getElementById('echart2') as HTMLDivElement, val ? 'chalk' : 'default')
  chart2.setOption(echart2)
  chart3 = echarts.init(document.getElementById('echart3') as HTMLDivElement, val ? 'chalk' : 'default')
  chart3.setOption(echart3)
  chart4 = echarts.init(document.getElementById('echart4') as HTMLDivElement, val ? 'chalk' : 'default')
  chart4.setOption(echart4)
})
</script>

<template>
  <div>
    <div v-appearance="{ from: { y: -200, duration: 1 } }" class="grid gap-3 md:grid-cols-4">
      <n-card hoverable bordered v-for="(card, index) of cards" :key="index">
        <template #header>
          <div class="flex items-center justify-between">
            {{ card.title }}
            <n-tag type="error"> 月 </n-tag>
          </div>
        </template>
        <section class="flex items-center justify-between mt-3">
          <span class="text-3xl">{{ card.total }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
        </section>
        <section class="flex justify-between mt-6 text-base">
          {{ card.totalTitle }}
          <span class>{{ card.total }}</span>
        </section>
      </n-card>
    </div>
    <div v-appearance="{ from: { y: 200, duration: 1 } }" class="grid gap-3 mt-5 md:grid-cols-2">
      <n-card hoverable bordered title="用户统计">
        <div v-wh="tt1" id="echart1" class="w-full h-72"></div>
      </n-card>
      <n-card hoverable bordered title="销售额">
        <div v-wh="tt2" id="echart2" class="w-full h-72"></div>
      </n-card>
      <n-card hoverable bordered title="用户统计">
        <div v-wh="tt3" id="echart3" class="w-full h-72"></div>
      </n-card>
      <n-card hoverable bordered title="销售额">
        <div v-wh="tt4" id="echart4" class="w-full h-72"></div>
      </n-card>
    </div>
  </div>
</template>

<style lang="scss"></style>
