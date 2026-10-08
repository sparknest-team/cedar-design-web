import { computed, ref } from 'vue'
import type { Dayjs } from 'dayjs'
import { useRangeFieldIndex } from '../../_components/picker-field/range-field-context'
import { resolveTimeFormat } from '../time-format'
import { parseTimeValue } from '../time-value'
import type { TimePanelOptions, TimePanelValue } from '../use-time-panel'

/** Desktop boundary: Dayjs lists and focused columns never enter the copied controller. */
export function useListPanel(options: TimePanelOptions<TimePanelValue>, draft: { value: TimePanelValue | undefined }, range: () => boolean) {
  const formatConfig = computed(() => resolveTimeFormat(options))
  const activeIndex = range() ? useRangeFieldIndex() : ref(0)
  const panelValue = computed(() => Array.isArray(draft.value)
    ? draft.value.map((part) => parseTimeValue(part, options))
    : parseTimeValue(draft.value, options))
  const panelProps = computed(() => ({
    disabled: Boolean(options.disabled || options.readonly),
    ...(range() ? {
      displayIndex: activeIndex.value,
      onDisplayIndexChange: (index: number) => { activeIndex.value = index },
    } : {}),
  }))
  function fromPanel(value: Dayjs | Array<Dayjs | undefined>) {
    return Array.isArray(value)
      ? Array.from(value, (part) => part?.format(formatConfig.value.format))
      : value.format(formatConfig.value.format)
  }
  return {
    panelValue,
    panelProps,
    fromPanel,
    computedFormat: computed(() => formatConfig.value.format),
    computedUse12Hours: computed(() => formatConfig.value.use12Hours),
  }
}

