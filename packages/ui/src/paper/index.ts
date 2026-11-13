import { withInstall } from '../_utils/global-config'
import _Paper from './Paper.vue'

const Paper: import('../_utils/global-config').ComponentWithInstall<typeof _Paper> = withInstall(_Paper)
export { Paper }
export { paperProps } from './props'
export type { PaperProps } from './props'
export type PaperInstance = InstanceType<typeof _Paper>
export const _PaperComponent: typeof Paper = Paper
export default Paper
