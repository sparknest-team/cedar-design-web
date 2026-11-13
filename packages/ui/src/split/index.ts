import { withInstall } from '../_utils/global-config'
import _Split from './Split.vue'
import { splitProps } from './props'

const Split: import('../_utils/global-config').ComponentWithInstall<typeof _Split> = withInstall(_Split, Object.assign(_Split, {
}), { components: [_Split] })

export type SplitInstance = InstanceType<typeof _Split>

export const _SplitComponent: typeof Split = Split

export { Split }

export { splitProps }

export default Split
export type { SplitProps } from './types'
