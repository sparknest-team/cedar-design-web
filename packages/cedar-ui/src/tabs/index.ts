import { withInstall } from '../_utils/global-config'
import _Tabs from './tabs'
import _TabNav from './tab-nav.vue'
import _TabItem from './tab-item.vue'
import _TabsNavs from './tabs-navs.vue'
import _TabsItems from './tabs-items.vue'
import { tabsProps } from './props'

const Tabs = withInstall(_Tabs, Object.assign(_Tabs, {
  TabNav: _TabNav,
  TabItem: _TabItem,
  TabsNavs: _TabsNavs,
  TabsItems: _TabsItems,
}), { components: [_Tabs, _TabNav, _TabItem, _TabsNavs, _TabsItems] })

export type TabsInstance = InstanceType<typeof _Tabs>
export type TabNavInstance = InstanceType<typeof _TabNav>
export type TabItemInstance = InstanceType<typeof _TabItem>

export { _TabNav as TabNav, _TabItem as TabItem, _TabsNavs as TabsNavs, _TabsItems as TabsItems }

export const _TabsComponent = Tabs
export const _TabNavComponent = _TabNav
export const _TabItemComponent = _TabItem
export const _TabsNavsComponent = _TabsNavs
export const _TabsItemsComponent = _TabsItems

export { Tabs }

export { tabsProps }

export default Tabs
