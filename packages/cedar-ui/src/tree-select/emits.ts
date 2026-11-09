import type { TreeSelectValue } from './types'
import type { TreeNodeData } from '../tree/types'

export const treeSelectEmits = {
  change: (_value: TreeSelectValue | undefined) => true,
  'update:modelValue': (_value: TreeSelectValue | undefined) => true,
  'update:inputValue': (_inputValue: string) => true,
  'input-value-change': (_inputValue: string) => true,
  'open-change': (_visible: boolean) => true,
  'update:open': (_visible: boolean) => true,
  'load-error': (_error: unknown, _node?: TreeNodeData) => true,
  search: (_searchKey: string) => true,
  clear: () => true,
}
