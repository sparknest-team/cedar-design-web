import type { TriggerWrapperAppearance } from '../trigger/wrapper'
import { computed } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import type { PopoverProps } from './props'

export function useAppearance(props: PopoverProps): TriggerWrapperAppearance {
  const prefix = getPrefixCls('popover')
  return {
    triggerBindings: computed(() => ({
      class: prefix,
      contentClass: [`${prefix}-popup-content`, props.contentClass],
      arrowClass: [`${prefix}-popup-arrow`, props.arrowClass],
    })),
    titleClass: `${prefix}-title`,
    bodyClass: `${prefix}-content`,
  }
}
