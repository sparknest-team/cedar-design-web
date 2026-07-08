import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Tabs from './tabs'
import _TabNav from './tab-nav.vue'
import _TabItem from './tab-item.vue'
import _TabsNavs from './tabs-navs.vue'
import _TabsItems from './tabs-items.vue'

const Tabs = Object.assign(_Tabs, {
  TabNav: _TabNav,
  TabItem: _TabItem,
  TabsNavs: _TabsNavs,
  TabsItems: _TabsItems,
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Tabs.name, _Tabs)
    app.component(componentPrefix + _TabNav.name, _TabNav)
    app.component(componentPrefix + _TabItem.name, _TabItem)
    app.component(componentPrefix + _TabsNavs.name, _TabsNavs)
    app.component(componentPrefix + _TabsItems.name, _TabsItems)
  },
})

export type TabsInstance = InstanceType<typeof _Tabs>
export type TabNavInstance = InstanceType<typeof _TabNav>
export type TabItemInstance = InstanceType<typeof _TabItem>

export { _TabNav as TabNav, _TabItem as TabItem, _TabsNavs as TabsNavs, _TabsItems as TabsItems }

export default Tabs
