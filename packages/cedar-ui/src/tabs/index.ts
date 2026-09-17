import { withInstall } from '../_utils/global-config'
import _Tabs from './Tabs.vue'
import _TabNav from './TabNav.vue'
import _TabPane from './TabPane.vue'
import _TabsNavs from './TabsNavs.vue'
import _TabItem from './TabItem.vue'
import _TabsItems from './TabsItems.vue'
import { tabsProps, tabNavProps, tabPaneProps, tabsNavsProps, tabItemProps, tabsItemsProps } from './props'
const Tabs = withInstall(_Tabs, Object.assign(_Tabs, { TabPane: _TabPane, TabNav: _TabNav, TabsNavs: _TabsNavs, TabItem: _TabItem, TabsItems: _TabsItems }), { components: [_Tabs, _TabPane, _TabNav, _TabsNavs, _TabItem, _TabsItems] })
export type TabsInstance = InstanceType<typeof _Tabs>
export type TabNavInstance = InstanceType<typeof _TabNav>
export type TabsNavsInstance = InstanceType<typeof _TabsNavs>
export type TabItemInstance = InstanceType<typeof _TabItem>
export type TabPaneInstance = InstanceType<typeof _TabPane>
export type TabsItemsInstance = InstanceType<typeof _TabsItems>
export const _TabsComponent = Tabs
export const _TabNavComponent = _TabNav
export const _TabsNavsComponent = _TabsNavs
export const _TabItemComponent = _TabItem
export const _TabPaneComponent = _TabPane
export const _TabsItemsComponent = _TabsItems
export { Tabs, _TabPane as TabPane, _TabNav as TabNav, _TabsNavs as TabsNavs, _TabItem as TabItem, _TabsItems as TabsItems }
export * from './props'
export default Tabs
