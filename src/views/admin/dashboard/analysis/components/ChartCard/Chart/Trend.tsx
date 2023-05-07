import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons-vue'

const TrendProps = {
  flag: {
    type: String as () => 'up' | 'down',
    default: () => ''
  }
}
const Trend = defineComponent({
  name: 'Trend',
  props: TrendProps,
  setup() {},
  render() {
    return (
      <div class={'inline-block mr-2'}>
        <span class={'mr-2'}>{this.$slots.default?.()}</span>
        {this.$props.flag && (
          <span
            class={`${
              this.$props.flag === 'up' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {this.$props.flag === 'up' ? (
              <CaretUpOutlined />
            ) : (
              <CaretDownOutlined />
            )}
          </span>
        )}
      </div>
    )
  }
})
export default Trend
