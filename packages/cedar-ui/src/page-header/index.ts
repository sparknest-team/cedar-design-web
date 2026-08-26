import { withInstall } from '../_utils/global-config'
import _PageHeader from './page-header.vue'

const PageHeader = withInstall(_PageHeader, Object.assign(_PageHeader, {
}), { components: [_PageHeader] })

export type PageHeaderInstance = InstanceType<typeof _PageHeader>
export type { PageHeaderProps } from './props'
export { pageHeaderProps } from './props'

export const _PageHeaderComponent = PageHeader

export { PageHeader }

export default PageHeader
