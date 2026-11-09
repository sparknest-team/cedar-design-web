import type {
  TreeSelectEmits,
  TreeSelectExpose,
  TreeSelectLabelValue,
  TreeSelectProps,
  TreeSelectSlots,
  TreeSelectValue,
} from '@cedar-design/ui'
import type { TreeSelectSlots as SubSlots } from '@cedar-design/ui/tree-select'

export const empty: TreeSelectProps = { modelValue: null, defaultValue: null }
export const person: TreeSelectLabelValue = { value: 0, label: 'Zero' }
export const value: TreeSelectValue = [person]
export const slots: TreeSelectSlots = {
  read: ({ value, text }) => text + String(value),
  'arrow-icon': ({ focus, menuOpen }) => String(focus || menuOpen),
  'tree-slot-label': (node, status) => String(node.label) + String(status.selected),
}
export const sub: SubSlots = slots
export const changed: TreeSelectEmits['change'] = [null]
// @ts-expect-error There is no user default editor-replacement slot.
export const invalid: TreeSelectSlots = { default: () => null }
export function methods(instance: TreeSelectExpose) {
  instance.focus()
  instance.blur()
  const result: Promise<void> = instance.refresh()
  return result
}
