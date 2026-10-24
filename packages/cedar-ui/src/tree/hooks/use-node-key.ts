import { computed, getCurrentInstance, type Ref } from 'vue'
import { generateKey } from '../utils/tree-data'
import type { TreeNodeValue } from '../types'

export default function useNodeKey(): Ref<TreeNodeValue> {
  const instance = getCurrentInstance()
  const fallback = generateKey()
  return computed(() => (instance?.props.value ?? fallback) as TreeNodeValue)
}
