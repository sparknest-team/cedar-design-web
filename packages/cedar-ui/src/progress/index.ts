import { withInstall } from '../_utils/global-config'
import _Progress from './progress.vue'
import { progressProps } from './props'

const Progress = withInstall(_Progress, Object.assign(_Progress, {
}), { components: [_Progress] })

export type ProgressInstance = InstanceType<typeof _Progress>
export { progressProps }
export type { ProgressColor, ProgressMode, ProgressProps } from './props'
export { Progress }
export const _ProgressComponent = Progress

export default Progress
