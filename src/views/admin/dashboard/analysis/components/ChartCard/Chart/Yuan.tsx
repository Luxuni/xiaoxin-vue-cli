import numeral from 'numeral'
import { Fragment } from 'vue'
const YuanProps = {
  momany: {
    type: Number,
    default: () => 0
  }
}
const Yuan = defineComponent({
  name: 'Yuan',
  props: YuanProps,
  setup() {},
  render() {
    return <>{`¥ ${numeral(this.$props.momany).format('0,0')}`}</>
  }
})
export default Yuan
