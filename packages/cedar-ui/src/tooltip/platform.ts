import type { TriggerWrapperAppearance } from '../trigger/wrapper'
import { computed } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import type { TooltipProps } from './props'

export function useAppearance(props: TooltipProps): TriggerWrapperAppearance {
  const prefix = getPrefixCls('tooltip')
  const background = computed(() => props.backgroundColor || props.color || (props.status === 'default' ? undefined : `var(--c-color-${props.status})`))
  return {
    triggerBindings: computed(() => ({
      class: prefix,
      contentClass: undefined,
      contentStyle: undefined,
      arrowClass: [`${prefix}-popup-arrow`, props.arrowClass],
      arrowStyle: { backgroundColor: background.value, ...props.arrowStyle },
    })),
    contentBindings: computed(() => ({
      class: [`${prefix}-content`, props.contentClass, { [`${prefix}-xs`]: props.xs }],
      style: { backgroundColor: background.value, color: props.textColor || (props.status === 'default' ? undefined : `var(--c-color-on-${props.status}, #fff)`), ...props.contentStyle },
    })),
  }
}
