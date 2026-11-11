import { withInstall } from '../_utils/global-config'
import _Paper from './Paper.vue'

const Paper = withInstall(_Paper)
export { Paper }
export { paperProps } from './props'
export type { PaperProps } from './props'
export type PaperInstance = InstanceType<typeof _Paper>
export const _PaperComponent = Paper
export default Paper
