import { NFormItem, formItemProps } from 'naive-ui'

const ProFormItemProps = {
  ...formItemProps
}

const ProFormItem = defineComponent({
  name: 'ProFormItem',
  props: ProFormItemProps,
  setup(props, context) {
    const { attrs, slots, emit, expose } = context
    const { path } = props
    provide('path', path)
    return () => <NFormItem {...props}>{slots.default?.()}</NFormItem>
  }
})

export default ProFormItem
