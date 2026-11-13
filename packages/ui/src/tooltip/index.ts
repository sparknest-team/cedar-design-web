import { withInstall } from '../_utils/global-config'
import _Tooltip from './Tooltip.vue'
import { tooltipProps } from './props'
import { vTooltip } from './tooltip.directive'

const Tooltip: import('../_utils/global-config').ComponentWithInstall<typeof _Tooltip & { directive: typeof vTooltip }> = withInstall(_Tooltip, Object.assign(_Tooltip, {
  directive: vTooltip,
}), {
  setup: (app) => {
    app.directive('tooltip', vTooltip)
  },
})

export type TooltipInstance = InstanceType<typeof _Tooltip>
export type { TooltipProps, TooltipSize, TooltipStatus } from './props'
export type { TooltipOptions } from './tooltip.directive'
export { Tooltip, tooltipProps, vTooltip }
export const _TooltipComponent: typeof Tooltip = Tooltip

export default Tooltip
