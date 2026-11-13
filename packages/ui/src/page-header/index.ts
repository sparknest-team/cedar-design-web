import { withInstall } from '../_utils/global-config'
import _PageHeader from './PageHeader.vue'

const PageHeader: import('../_utils/global-config').ComponentWithInstall<typeof _PageHeader> = withInstall(_PageHeader, Object.assign(_PageHeader, {}), { components: [_PageHeader] })

export type PageHeaderInstance = InstanceType<typeof _PageHeader>
export type { PageHeaderProps, PageHeaderSlots } from './props'
export { pageHeaderProps } from './props'

export const _PageHeaderComponent: typeof PageHeader = PageHeader

export { PageHeader }

export default PageHeader
