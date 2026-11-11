import { withInstall } from '../_utils/global-config'
import _Progress from './Progress.vue'
import { progressProps } from './props'

const Progress = withInstall(_Progress, Object.assign(_Progress, {
}), { components: [_Progress] })

export type ProgressInstance = InstanceType<typeof _Progress>
export { progressProps }
export type { ProgressColor, ProgressMode, ProgressProps, ProgressStatus } from './props'
export { Progress }
export const _ProgressComponent = Progress

export default Progress
export type { ProgressSize } from './size'
