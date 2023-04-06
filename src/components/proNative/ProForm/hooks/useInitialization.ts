import { Ref } from 'vue'
import { DataType } from '../enum'

const useInitialization = () => {
  const path = inject('path', '') as string
  const modelData = inject(
    'modelData',
    ref({ defaultData: null, reqData: null })
  ) as Ref<{
    defaultData: Record<string, any> | null
    reqData: Record<string, any> | null
  }>
  const DATATYPE = inject('DATATYPE', DataType.DEFAULT) as DataType
  const value = modelData.value[DATATYPE]![path]
  return {
    path,
    modelData,
    DATATYPE,
    value
  }
}

export default useInitialization
