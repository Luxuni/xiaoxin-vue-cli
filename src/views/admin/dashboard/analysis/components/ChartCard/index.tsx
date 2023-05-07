import { Divider } from 'ant-design-vue'
import { PropType } from 'vue'
const ChartCardProps = {}
const ChartCard = defineComponent({
  name: 'ChartCard',
  // props: ChartCardProps,
  setup() {},
  render() {
    return (
      <div class={'bg-xx-bgcolor pt-5 pr-6 pl-6 pb-2'}>
        <div>
          <div class={'flex justify-between'}>
            <span class={'text-gray-500'}>{this.$slots.title?.()}</span>
            <span class={''}>{this.$slots.action?.()}</span>
          </div>
          <div class={'text-3xl text-gray-800 mt-1'}>
            {this.$slots.total?.()}
          </div>
          <div class={'h-12 flex items-end'}>{this.$slots.default?.()}</div>
          <Divider />
          <div>{this.$slots.footer?.()}</div>
        </div>
      </div>
    )
  }
})
export default ChartCard
