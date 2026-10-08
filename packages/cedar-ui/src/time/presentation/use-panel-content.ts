import { computed } from 'vue'
import type { Dayjs } from 'dayjs'
import { getPrefixCls } from '../../_utils/global-config'
import type { TimePanelOptions, TimePanelValue, useTimePanel } from '../use-time-panel'
import { useListPanel } from './use-list-panel'

/** Desktop presentation only; the caller owns the model and transaction. */
export function usePanelContent<T extends TimePanelValue>(
  props: TimePanelOptions<T>,
  panel: ReturnType<typeof useTimePanel<T>>,
  range: () => boolean,
) {
  const presentation = useListPanel(props, panel.draft, range)
  return {
    ...panel,
    ...presentation,
    isRange: computed(range),
    prefixCls: getPrefixCls('timepicker'),
    onPanelSelect(value: Dayjs | Array<Dayjs | undefined>) {
      panel.select(presentation.fromPanel(value) as T)
    },
    onPanelConfirm(value: Dayjs | Dayjs[]) {
      if (panel.blocked.value) return
      // Initial candidates may be confirmed without a preceding user selection.
      panel.draft.value = presentation.fromPanel(value) as T
      panel.confirm()
    },
  }
}
