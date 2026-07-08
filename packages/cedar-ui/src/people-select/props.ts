import type { ExtractPropTypes, PropType } from 'vue'

export const peopleSelectProps = {
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

export type PeopleSelectProps = ExtractPropTypes<typeof peopleSelectProps>
