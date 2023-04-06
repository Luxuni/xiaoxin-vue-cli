import { NSelect, selectProps } from 'naive-ui'
import useInitialization from './hooks/useInitialization'

const ProFormSelectProps = {
  ...selectProps
}

const ProFormSelect = defineComponent({
  name: 'ProFormSelect',
  props: ProFormSelectProps,
  setup(props, context) {
    const { attrs, slots, emit, expose } = context
    const { path, modelData, DATATYPE, value } = useInitialization()
    return () => (
      <NSelect
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
      ></NSelect>
    )
  }
})

export default ProFormSelect
