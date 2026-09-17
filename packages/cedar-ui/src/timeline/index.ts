import { withInstall } from '../_utils/global-config'
import _Timeline from './timeline'
import _TimelineItem from './Item.vue'
import { timelineProps } from './props'

const Timeline = withInstall(_Timeline, Object.assign(_Timeline, {
  Item: _TimelineItem,
}), { components: [_Timeline, _TimelineItem] })

export type TimelineInstance = InstanceType<typeof _Timeline>
export type TimelineItemInstance = InstanceType<typeof _TimelineItem>

export { _TimelineItem as TimelineItem }

export const _TimelineComponent = Timeline
export const _TimelineItemComponent = _TimelineItem

export { Timeline }

export { timelineProps }

export default Timeline
export type TimelineProps = import('vue').ExtractPublicPropTypes<typeof import('./props').timelineProps>
