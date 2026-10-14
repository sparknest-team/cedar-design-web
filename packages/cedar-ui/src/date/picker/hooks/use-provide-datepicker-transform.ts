import { provide } from 'vue'
import { useI18n } from '../../../locale'
import { PickerInjectionKey, type PickerContext } from '../context'

/** 日期标签与动作都使用全局 Locale/ConfigProvider，不维护第二份组件字典。 */
export default function useDatePickerTransform() {
  const { t } = useI18n()
  provide<PickerContext>(PickerInjectionKey, { datePickerT: t })
  return t
}
