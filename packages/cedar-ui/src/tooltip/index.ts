import { withInstall } from '../_utils/global-config'
import _Tooltip from './tooltip.vue'
import { tooltipProps } from './props'
import { vTooltip } from './tooltip.directive'

const Tooltip = withInstall(_Tooltip, Object.assign(_Tooltip, {
  directive: vTooltip,
}), {
  setup: (app) => {
    app.directive('tooltip', vTooltip)
  },
})

export type TooltipInstance = InstanceType<typeof _Tooltip>
export type { TooltipProps } from './props'
export { Tooltip, tooltipProps, vTooltip }
export const _TooltipComponent = Tooltip

export default Tooltip
export type { TooltipStatus } from './props'
