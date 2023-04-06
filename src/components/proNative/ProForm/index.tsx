import { FormInst, NForm, NSpin } from 'naive-ui'
import {
  FormRules,
  FormValidateMessages,
  LabelAlign,
  LabelPlacement,
  Size
} from 'naive-ui/es/form/src/interface'
import { PropType } from 'vue'
import { DataType } from './enum'

export const ProFormProps = {
  inline: Boolean,
  labelWidth: [Number, String] as PropType<number | string>,
  labelAlign: String as PropType<LabelAlign>,
  labelPlacement: {
    type: String as PropType<LabelPlacement>,
    default: 'top'
  },
  model: {
    type: Object as PropType<Record<string, any>>,
    default: () => {}
  },
  rules: Object as PropType<FormRules>,
  disabled: Boolean,
  size: String as PropType<Size>,
  showRequireMark: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  requireMarkPlacement: String as PropType<'left' | 'right' | 'right-hanging'>,
  showFeedback: {
    type: Boolean,
    default: true
  },
  showLabel: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  validateMessages: Object as PropType<Partial<FormValidateMessages>>,
  defaultData: {
    type: Object,
    default: () => ({})
  },
  request: {
    type: Function as PropType<() => Promise<any> | undefined>
  }
}

const ProForm = defineComponent({
  name: 'ProForm',
  props: ProFormProps,
  setup(props, context) {
    const { attrs, slots, emit, expose } = context
    const { defaultData, request } = props
    const DATATYPE = request ? DataType.REQDATA : DataType.DEFAULT
    const model = ref({
      defaultData: defaultData ? defaultData : null,
      reqData: null
    })
    const current = ref<FormInst | null>(null)
    provide('modelData', model)
    provide('DATATYPE', DATATYPE)
    expose({
      current
    })
    onMounted(async () => {
      const getReqData = await request?.()
      model.value.reqData = getReqData
    })
    return () => (
      <NSpin show={!Boolean(model.value[DATATYPE])}>
        {model.value[DATATYPE] && (
          <NForm
            style={{ width: '100%', height: '100%' }}
            {...props}
            ref={current}
            model={model.value[DATATYPE]!}
            onSubmit={(e) => {
              // Prevent the default event from happening
              e.preventDefault()
              emit('onFinish', e, toRaw(model.value[DATATYPE]))
            }}
          >
            {slots.default?.()}
            {slots.footer?.()}
          </NForm>
        )}
      </NSpin>
    )
  }
})

export default ProForm
