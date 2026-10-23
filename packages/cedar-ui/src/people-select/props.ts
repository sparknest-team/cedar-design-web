import type { ExtractPropTypes, PropType } from 'vue'
import { fieldPresentationProps } from '../_components/field-presentation/props'

export const peopleSelectProps = {
  ...fieldPresentationProps,
  /** 禁用；未设置时继承 Form / FormItem。 */
  disabled: { type: Boolean, default: undefined },
  /** 只读；允许回显，不允许打开编辑、选择或清空。 */
  readonly: { type: Boolean, default: undefined },
  /**
   *
   */
  fetch: Object as PropType<{ get: any; post: any }>,
  name: {
    type: String,
  },
  defaultText: {
    type: String,
    default: '-',
  },
  modelValue: {
    type: String,
    default: '',
  },
  isLabel: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  // showMessage: {
  //   type: Boolean,
  //   default: true,
  // },
  // showPhone: {
  //   type: Boolean,
  //   default: true,
  // },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
  },
  urlType: {
    type: String,
    default: 'ares',
  },
}

export type PeopleSelectProps = import('vue').ExtractPublicPropTypes<typeof peopleSelectProps>
