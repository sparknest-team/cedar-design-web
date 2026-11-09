import type { MentionEmits, MentionExpose, MentionInstance, MentionProps, MentionSlots } from '@cedar-design/ui'
import type { MentionExpose as SubExpose, MentionSlots as SubSlots } from '@cedar-design/ui/mention'

type Assert<T extends true> = T
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
export type SameSlots = Assert<Equal<MentionSlots, SubSlots>>
export type SameExpose = Assert<Equal<MentionExpose, SubExpose>>
export const slots: MentionSlots = {
  read: ({ value, text }) => (value === null ? text : value),
  option: ({ data }) => String(data.value),
  'clear-icon': ({ clear }) => {
    clear()
    return null
  },
}
export const selection: MentionEmits['select'] = [false]
export const editor: MentionEmits['open-change'] = [true]
export const error: MentionEmits['load-error'] = [new Error()]
export const props: MentionProps = {
  modelValue: null,
  emptyValue: null,
  disabled: undefined,
  data: async (query, { signal }) => (signal.aborted ? [] : [query]),
}
declare const instance: MentionInstance
export const retry: Promise<void> = instance.refresh()
// @ts-expect-error There is no input replacement slot.
export const absent: MentionSlots = { default: () => null }
// @ts-expect-error Search queries are strings; null is a model value only.
export const badSearch: MentionEmits['search'] = [null, '@']
