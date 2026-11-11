import { useSize } from '../_hooks/use-size'

export function useButtonDefaultSize() {
  return useSize().mergedSize
}
