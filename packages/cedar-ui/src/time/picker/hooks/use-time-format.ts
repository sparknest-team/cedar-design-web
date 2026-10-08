import { computed } from 'vue'
import { resolveTimeFormat, type TimeFormatOptions } from '../../time-format'

export default function useTimeFormat(props: TimeFormatOptions) {
  const resolved = computed(() => resolveTimeFormat(props))
  return {
    columns: computed(() => resolved.value.columns),
    use12Hours: computed(() => resolved.value.use12Hours),
    format: computed(() => resolved.value.format),
  }
}
