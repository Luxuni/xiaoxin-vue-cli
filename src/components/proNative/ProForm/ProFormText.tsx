import { inputProps, NInput } from 'naive-ui'
import useInitialization from './hooks/useInitialization'

const PorFormTextProps = {
  ...inputProps
}

const ProFormText = defineComponent({
  name: 'ProFormText',
  props: PorFormTextProps,
  setup(props, context) {
    const { attrs, slots, emit, expose } = context
    const { path, modelData, DATATYPE, value } = useInitialization()
    return () => (
      <NInput
        {...props}
        defaultValue={
          // The case for dealing with numbers
          typeof value === 'number' ? value.toString() : value
        }
        onUpdateValue={(v) => {
          // The case for dealing with numbers
          typeof value === 'number'
            ? (modelData.value[DATATYPE]![path] = Number(v))
            : (modelData.value[DATATYPE]![path] = v)
        }}
      />
    )
  }
})

export default ProFormText
